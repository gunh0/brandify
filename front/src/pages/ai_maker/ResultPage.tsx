import {useAtomValue} from 'jotai';
import {useEffect} from 'react';
import {TitleSection} from '../../components/common/TitleSection.tsx';
import {css} from '../../../styled-system/css';
import {useReportMutation} from '../../hooks/states/useReportMutation.ts';
import {selectedAllKeywordsAtom} from '../../hooks/states/useSelectedStore.ts';

export const ResultPage = () => {
  const param = useAtomValue(selectedAllKeywordsAtom);
  const {
    reportResult: {data: report},
    mutate,
  } = useReportMutation();
  useEffect(() => {
    mutate([param]);
  }, []);

  return (
    <div className={containerStyle}>
      <TitleSection
        title={
          <>
            here comes branding
            <br />
            for you!
          </>
        }
        subtitle={'짠'}
      />
      {report && (
        <>
          <div className={imageContainerStyle}>
            {report.images.map((src, idx) => (
              <img key={idx} className={imageStyle} src={src} alt={'result'} />
            ))}
          </div>
          <div className={buttonContainerStyle}>
            <button className={buttonStyle}>SAVE</button>
            <button className={buttonStyle}>SELL IT</button>
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

const imageContainerStyle = css({display: 'flex', gap: '10px', justifyContent: 'center'});

const imageStyle = css({
  width: '416px',
  height: '416px',
  borderRadius: '10px',
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
});
