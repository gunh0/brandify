import {TitleSection} from '../../components/common/TitleSection.tsx';
import {css} from '../../../styled-system/css';
import {useReportMutation} from '../../hooks/states/useReportMutation.ts';

export const ResultPage = () => {
  const {
    reportResult: {data: report},
  } = useReportMutation();
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'space-between',
        height: '100%',
        pb: '40px',
      })}
    >
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
          <div className={css({display: 'flex', gap: '10px', justifyContent: 'center'})}>
            {report.images.map((_, idx) => (
              <img
                key={idx}
                className={imageStyle}
                src={
                  'https://www.shinsegaegroupnewsroom.com/wp-content/uploads/2020/07/%EC%9D%B4%EB%A7%88%ED%8A%B813_%EB%B3%B8%EB%AC%B801.png'
                }
                alt={'result'}
              />
            ))}
          </div>

          <div className={css({display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px'})}>
            <button className={buttonStyle}>SAVE</button>
            <button className={buttonStyle}>SELL IT</button>
          </div>
        </>
      )}
    </div>
  );
};

const imageStyle = css({
  width: '416px',
  height: '416px',
  borderRadius: '10px',
});

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
