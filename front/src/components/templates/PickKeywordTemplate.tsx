import {ReactNode} from 'react';
import {css} from '../../../styled-system/css';
import {Keyword} from '../../types/Keyword';

type Props = {
  title: ReactNode;
  subtitle: string;
  backgroundText: string;
  keywords: Keyword[];
  onIntersectedArea: (keyword: Keyword) => void;
};

export const PickKeywordTemplate = ({title, subtitle, backgroundText, keywords}: Props) => {
  return (
    <div className={containerStyle}>
      <section className={titleSectionStyle}>
        <h1 className={titleStyle}>{title}</h1>
        <p className={subtitleStyle}>{subtitle}</p>
      </section>
      <div className={keywordContainerStyle}>
        {keywords.map(keyword => (
          <div>{keyword.name}</div>
        ))}
      </div>
      <div className={uiContainerStyle}>
        <span className={backgroundTextStyle}>{backgroundText}</span>
        <div className={dragAreaContainerStyle}>
          <span className={dragTextStyle}>Drag In Here!</span>
          <br />
          <span className={dragDescriptionStyle}>여기로 끌어주세요!</span>
        </div>
      </div>
    </div>
  );
};

const containerStyle = css({position: 'relative', width: '100%', height: '100%', display: 'flex', flexDir: 'column'});

const titleSectionStyle = css({width: '100%', textAlign: 'center', mt: '70px'});

const subtitleStyle = css({fontSize: '20px', userSelect: 'none'});

const keywordContainerStyle = css({flex: '1', position: 'relative'});

const uiContainerStyle = css({position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'});

const backgroundTextStyle = css({
  fontSize: '358px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  userSelect: 'none',
  textTransform: 'uppercase',
});

const dragAreaContainerStyle = css({
  width: '366px',
  height: '328px',
  borderRadius: '100%',
  bgColor: '#cfc',
  color: 'black',
  textAlign: 'center',
  pt: '60px',
  transform: 'rotate(270deg) translate(50%, 50%)',
  position: 'absolute',
  right: '0',
  top: '50%',
});

const dragTextStyle = css({
  fontSize: '40px',
  fontWeight: '300',
  textTransform: 'capitalize',
  mb: '12px',
  mt: '60px',
});

const dragDescriptionStyle = css({fontSize: '20px', fontWeight: '400'});

const titleStyle = css({
  fontSize: '36px',
  lineHeight: '120%',
  textTransform: 'uppercase',
  mb: '12px',
  userSelect: 'none',
});
