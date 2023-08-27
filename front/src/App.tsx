import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider} from 'jotai/react';
import {useHydrateAtoms} from 'jotai/react/utils';
import {queryClientAtom} from 'jotai-tanstack-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {PropsWithChildren, Suspense} from 'react';
import {match} from 'ts-pattern';
import {PurposeKeywordPickPage} from './pages/PurposeKeywordPickPage';
import './index.css';
import {useStep} from './hooks/useStep';
import {CircleButton} from './components/button/CircleButton';
import {MoodKeywordPickPage} from './pages/MoodKeywordPickPage';
import {css} from '../styled-system/css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const HydrateAtoms = ({children}: PropsWithChildren) => {
  useHydrateAtoms([[queryClientAtom, queryClient]]);
  return children;
};

const App = () => {
  const [step, {goToNextStep, goToPrevStep, canGoToNextStep, canGoToPrevStep}] = useStep(2);
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <HydrateAtoms>
          <Suspense fallback={'...loading'}>
            {match(step)
              .with(1, () => <PurposeKeywordPickPage />)
              .with(2, () => <MoodKeywordPickPage />)
              .otherwise(() => '??')}
            {canGoToPrevStep && (
              <div className={css({position: 'fixed', left: '10px', top: '50%'})}>
                <CircleButton text="<-" onClick={goToPrevStep} />
              </div>
            )}
            {canGoToNextStep && (
              <div className={css({position: 'fixed', right: '10px', top: '50%'})}>
                <CircleButton text="->" onClick={goToNextStep} />
              </div>
            )}
          </Suspense>
        </HydrateAtoms>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
