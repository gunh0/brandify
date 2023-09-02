import {useAtomValue} from 'jotai';
import {useEffect, useState} from 'react';
import {TitleSection} from '../../components/common/TitleSection.tsx';
import {css} from '../../../styled-system/css';
import {useReportMutation} from '../../hooks/states/useReportMutation.ts';
import {selectedAllKeywordsAtom} from '../../hooks/states/useSelectedStore.ts';
import {downloadWithImageSrc} from '../../utils/file_util.ts';
import {GreenCheck} from '../../components/icon/GreenCheck.tsx';
import {LoadingView} from '../../components/common/LoadingView.tsx';

export const ResultPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | undefined>(undefined);

  const param = useAtomValue(selectedAllKeywordsAtom);
  const {
    reportResult: {data: report, isLoading = true},
    mutate,
  } = useReportMutation();

  useEffect(() => {
    mutate([param]);
  }, []);

  const onClickDownload = async () => {
    if (selectedImage) {
      downloadWithImageSrc(report?.images[selectedImage] ?? '');
    }
  };

  return isLoading || !report ? (
    <LoadingView text={'당신만의 브랜드 이미지를 생성하고 있어요'} />
  ) : (
    <div className={containerStyle}>
      <TitleSection
        title={
          <>
            here comes branding
            <br />
            for you!
          </>
        }
        subtitle={'4가지 이미지 중 하나를 선택해주세요'}
      />
      {report && (
        <>
          <div className={imageContainerStyle}>
            {report.images.map((src, idx) => (
              <button key={idx} className={imageWrapperStyle} onClick={() => setSelectedImage(idx)}>
                <img className={imageStyle} src={src} alt={'result'} />
                {idx === selectedImage && (
                  <div className={iconWrapperStyle}>
                    <GreenCheck />
                  </div>
                )}
              </button>
            ))}
          </div>
          <div className={buttonContainerStyle}>
            <button className={buttonStyle} onClick={onClickDownload} disabled={!selectedImage}>
              SAVE
            </button>
            <button className={buttonStyle} disabled={true}>
              SELL IT
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const containerStyle = css({
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'space-between',
  height: '100%',
  pb: '40px',
});

const imageContainerStyle = css({display: 'flex', gap: '10px', justifyContent: 'center', p: '0 40px'});

const imageWrapperStyle = css({
  position: 'relative',
  cursor: 'pointer',
  userSelect: 'none',
});

const iconWrapperStyle = css({
  position: 'absolute',
  top: '12px',
  right: '12px',
});

const imageStyle = css({
  borderRadius: '10px',
  objectFit: 'cover',
  aspectRatio: '1',
});

const buttonContainerStyle = css({display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px'});

const buttonStyle = css({
  width: '355px',
  height: '110px',
  textAlign: 'center',
  border: '1px solid white',
  borderRadius: '999px',
  fontSize: '36px',
  color: 'white',
  cursor: 'pointer',
  userSelect: 'none',
  ['&:disabled']: {
    cursor: 'default',
    borderColor: 'gray',
    color: 'gray',
    '& svg': {
      fill: 'gray',
    },
  },
});
