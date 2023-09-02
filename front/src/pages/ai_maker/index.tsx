import {match} from 'ts-pattern';
import {SystemStyleObject} from '@pandacss/dev';
import {Suspense, useCallback} from 'react';
import {useAtomValue} from 'jotai';
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
import {referenceImageAtom} from '../../hooks/states/useSelectedStore.ts';

enum PAGE {
  MOOD = 1,
  PURPOSE,
  COLOR,
  RELATED,
  UPLOAD_REFERENCE,
  REFERENCE_KEYWORD,
  RESULT,
}

export const AiMakerPage = () => {
  const [currentStep, {canGoToNextStep, canGoToPrevStep, setStep}] = useStep(PAGE.RESULT);

  const file = useAtomValue(referenceImageAtom);

  const checkStep = useCallback(
    (now: number, next: number) => {
      if (now === PAGE.UPLOAD_REFERENCE && !file && next > now) {
        return next + 1;
      }
      if (now === PAGE.UPLOAD_REFERENCE + 2 && !file) {
        return PAGE.UPLOAD_REFERENCE;
      }
      return next;
    },
    [file],
  );

  const onClickNext = () => {
    setStep(checkStep(currentStep, currentStep + 1));
  };

  const onClickPrev = () => {
    setStep(checkStep(currentStep, currentStep - 1));
  };

  return (
    <div className={containerStyle}>
      <Header />
      <Suspense fallback={'loading'}>
        <div className={css({flex: '1'})}>
          {match(currentStep)
            .with(PAGE.MOOD, () => <MoodKeywordPickPage />)
            .with(PAGE.PURPOSE, () => <PurposeKeywordPickPage />)
            .with(PAGE.COLOR, () => <ColorKeywordPickPage />)
            .with(PAGE.RELATED, () => <RelatedKeywordPickPage />)
            .with(PAGE.UPLOAD_REFERENCE, () => <UploadReferenceImagePage />)
            .with(PAGE.REFERENCE_KEYWORD, () => <ReferenceKeywordPickPage />)
            .with(PAGE.RESULT, () => <ResultPage />)
            .otherwise(() => (
              <></>
            ))}
        </div>
      </Suspense>
      {match(currentStep)
        .with(1, 2, 3, 4, 5, 6, () => (
          <>
            {canGoToPrevStep && (
              <button className={prevButtonStyle} onClick={onClickPrev}>
                <Arrow />
              </button>
            )}
            {canGoToNextStep && (
              <button className={nextButtonStyle} onClick={onClickNext}>
                NEXT <Arrow />
              </button>
            )}
          </>
        ))
        .otherwise(() => (
          <></>
        ))}
      <div className={css({visibility: 'none', position: 'fixed'})}>
        <span className={css({color: 'skyblue'})}> </span>
        <span className={css({color: 'orange'})}> </span>
      </div>
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

const prevButtonStyle = css(buttonStyle, {
  transform: 'rotate(180deg)',
  bottom: '40px',
  left: '44px',
});

const nextButtonStyle = css(buttonStyle, {
  ml: 'auto',
  bottom: '40px',
  right: '44px',
  fontSize: '36px',
  color: 'white',
  width: 'auto',
  height: 'auto',
  p: '30px 30px 30px 44px',
  gap: '12px',
});
