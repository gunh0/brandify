import {css} from '../../../styled-system/css';
import {SystemStyleObject} from '../../../styled-system/types';
import {Keyword} from '../../types/Keyword';
import {clamp} from '../../utils/math_util';
import {KeywordCardSize} from '../keyword/KeywordCard';
import {ThrowableKeywordCard} from '../keyword/ThrowableKeywordCard';

type Props = {
  title: string;
  keywords: Keyword[];
};

const getRandomPosition = () => {
  const {innerWidth, innerHeight} = window;
  return {
    x: clamp((Math.random() * 0.4 + 0.25) * innerWidth, innerWidth * 0.25, innerWidth * 0.75 - KeywordCardSize),
    y: clamp(Math.random() * innerHeight, 0, innerHeight - KeywordCardSize),
  };
};

export const PickKeywordTemplate = ({title, keywords}: Props) => (
  <div className={containerStyle}>
    <h1 className={titleStyle}>
      <span className={titlePrefixStyle}>Q.</span>
      <br />
      {title}
    </h1>
    <div className={css(sideAreaStyle, {left: 0})}>
      <span className={sideAreaTextStyle}>싫어요</span>
    </div>
    <div className={css(sideAreaStyle, {right: 0})}>
      <span className={sideAreaTextStyle}>좋아요</span>
    </div>
    {keywords.map(keyword => (
      <ThrowableKeywordCard key={keyword.name} keyword={keyword} initialPosition={getRandomPosition()} />
    ))}
  </div>
);

const containerStyle = css({
  position: 'relative',
  width: '100vw',
  height: '100vh',
});

const titleStyle = css({
  textAlign: 'center',
});

const titlePrefixStyle = css({fontWeight: 'bold'});

const sideAreaStyle: SystemStyleObject = {
  position: 'absolute',
  height: '100%',
  width: '25vw',
  top: '0',
  userSelect: 'none',
  bgColor: 'lightgray',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const sideAreaTextStyle = css({});
