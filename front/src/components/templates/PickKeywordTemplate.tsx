import {ReactNode, useEffect, useRef, useState} from 'react';
import {css} from '../../../styled-system/css';
import {Keyword} from '../../types/Keyword';
import {KeywordCard, KeywordFontColor} from '../keyword/KeywordCard.tsx';
import {isIntersect} from '../../utils/dom_util.ts';
import {TitleSection} from '../common/TitleSection.tsx';
import {Diamond} from '../keyword/Diamond.tsx';
import {Circle} from '../keyword/Circle.tsx';
import {Rectangle} from '../keyword/Rectangle.tsx';
import {createRect, placeBubble, Rect} from '../../utils/random_util.ts';
import {useWindowSize} from '../../hooks/useWindowSize.ts';

type Props = {
  title: ReactNode;
  subtitle: ReactNode;
  backgroundText: string;
  keywords?: Keyword[];
  onIntersectedArea: (keyword: Keyword) => void;
  backgroundFontSize: number;
  onDragToArea: (keyword: Keyword) => void;
  keywordFontColor?: KeywordFontColor;
};

export const PickKeywordTemplate = ({
  title,
  subtitle,
  backgroundText,
  keywords = [],
  backgroundFontSize,
  onDragToArea,
  keywordFontColor,
}: Props) => {
  const [, setUpdated] = useState(false);
  const {width: vw, height: vh} = useWindowSize();

  const dragConstraintRef = useRef<HTMLDivElement>(null);
  const dragAreaRef = useRef<HTMLDivElement>(null);

  // TODO: throttle & 50% 닿았을 시 호출하게 변경
  const onKeywordAnimationUpdated = (keyword: Keyword, rect?: DOMRect) => {
    if (!rect) return;
    const areaRect = dragAreaRef.current?.getBoundingClientRect();
    if (!areaRect) return;
    if (isIntersect(rect, areaRect)) {
      onDragToArea(keyword);
    }
  };

  useEffect(() => {
    if (!vw || !vh) return;
    const rects: Rect[] = [];
    keywords.forEach(keyword => {
      const rect = createRect();
      rects.push(rect);
      placeBubble(rects, rect, 50, vw - 200, vh - 130);
      keyword.rect = rect;
    });
    setUpdated(prev => !prev);
  }, [vw, vh, keywords]);

  return (
    <div className={containerStyle}>
      <TitleSection title={title} subtitle={subtitle} />
      <div className={uiContainerStyle}>
        <span className={backgroundTextStyle} style={{fontSize: `${backgroundFontSize}px`}}>
          {backgroundText}
        </span>
        <div className={dragAreaContainerStyle} ref={dragAreaRef}>
          <span className={dragTextStyle}>Drag In Here!</span>
          <br />
          <span className={dragDescriptionStyle}>여기로 끌어주세요!</span>
        </div>
      </div>
      <div className={keywordContainerStyle} ref={dragConstraintRef}>
        {keywords.map(
          (keyword, idx) =>
            keyword.rect && (
              <KeywordCard
                key={keyword.name + idx}
                keyword={keyword}
                dragConstraint={dragConstraintRef}
                fontColor={keywordFontColor}
                initialPosition={keyword.rect}
                onAnimationUpdate={(rect?: DOMRect) => onKeywordAnimationUpdated(keyword, rect)}
              />
            ),
        )}
      </div>
      <div className={css({position: 'fixed'})}>
        <Diamond />
        <Circle />
        <Rectangle />
      </div>
    </div>
  );
};

const containerStyle = css({position: 'relative', width: '100%', height: '100%', display: 'flex', flexDir: 'column'});

const keywordContainerStyle = css({flex: '1', position: 'relative', zIndex: '10'});

const uiContainerStyle = css({position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'});

const backgroundTextStyle = css({
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
