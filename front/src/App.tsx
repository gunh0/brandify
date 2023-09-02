import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider} from 'jotai/react';
import {useHydrateAtoms} from 'jotai/react/utils';
import {queryClientAtom} from 'jotai-tanstack-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {PropsWithChildren, Suspense} from 'react';
import './index.css';
import {AiMakerPage} from './pages/ai_maker';

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
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <HydrateAtoms>
          <Suspense fallback={'...loading'}>
            <AiMakerPage />
          </Suspense>
        </HydrateAtoms>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
