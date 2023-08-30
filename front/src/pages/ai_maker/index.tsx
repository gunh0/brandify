import {match} from 'ts-pattern';
import {SystemStyleObject} from '@pandacss/dev';
import {css} from '../../../styled-system/css';
import {Header} from '../../components/common/Header';
import {MoodKeywordPickPage} from './MoodKeywordPickPage.tsx';
import {useStep} from '../../hooks/useStep.ts';
import {PurposeKeywordPickPage} from './PurposeKeywordPickPage.tsx';
import {Arrow} from '../../components/icon/Arrow.tsx';
import {ColorKeywordPickPage} from './ColorKeywordPickPage.tsx';
import {RelatedKeywordPickPage} from './RelatedKeywordPickPage.tsx';
import {UploadReferenceImagePage} from './UploadReferenceImagePage.tsx';
import {ReferenceKeywordPickPage} from './ReferenceKeywordPickPage.tsx';
import {ResultPage} from './ResultPage.tsx';

export const AiMakerPage = () => {
  const [currentStep, {goToNextStep, goToPrevStep, canGoToNextStep, canGoToPrevStep}] = useStep(7);
  return (
    <div className={containerStyle}>
      <Header />
      <div className={css({flex: '1'})}>
        {match(currentStep)
          .with(1, () => <MoodKeywordPickPage />)
          .with(2, () => <PurposeKeywordPickPage />)
          .with(3, () => <ColorKeywordPickPage />)
          .with(4, () => <RelatedKeywordPickPage />)
          .with(5, () => <UploadReferenceImagePage />)
          .with(6, () => <ReferenceKeywordPickPage />)
          .with(7, () => <ResultPage />)
          .otherwise(() => (
            <></>
          ))}
      </div>
      {canGoToPrevStep && (
        <button
          className={css(buttonStyle, {transform: 'rotate(180deg)', bottom: '40px', left: '44px'})}
          onClick={goToPrevStep}
        >
          <Arrow />
        </button>
      )}
      {canGoToNextStep && (
        <button
          className={css(buttonStyle, {
            ml: 'auto',
            bottom: '40px',
            right: '44px',
            fontSize: '36px',
            color: 'white',
            width: 'auto',
            height: 'auto',
            p: '30px 30px 30px 44px',
            gap: '12px',
          })}
          onClick={goToNextStep}
        >
          NEXT <Arrow />
        </button>
      )}
    </div>
  );
};

const containerStyle = css({
  bgColor: 'background',
  color: 'white',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
  display: 'flex',
  flexDir: 'column',
});

const buttonStyle: SystemStyleObject = {
  position: 'absolute',
  width: '120px',
  height: '120px',
  borderRadius: '120px',
  border: '1px solid white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  zIndex: 11,
};
