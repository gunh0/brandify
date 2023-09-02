import {ReactNode, useEffect, useMemo, useRef, useState} from 'react';
import {motion} from 'framer-motion';
import {css} from '../../../styled-system/css';
import {Keyword} from '../../types/Keyword';
import {KeywordCard, KeywordFontColor} from '../keyword/KeywordCard.tsx';
import {TitleSection} from '../common/TitleSection.tsx';
import {Diamond} from '../keyword/Diamond.tsx';
import {Circle} from '../keyword/Circle.tsx';
import {Rectangle} from '../keyword/Rectangle.tsx';
import {random} from '../../utils/random_util.ts';
import {createRect, getOverlapPercentage, Rect} from '../../utils/rect_util.ts';
import {useDragging} from '../../hooks/useIsDragging.ts';

type Props = {
  title: ReactNode;
  subtitle: ReactNode;
  backgroundText: string;
  keywords?: Keyword[];
  selected?: Keyword[];
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
  selected = [],
  backgroundFontSize,
  onDragToArea,
  keywordFontColor,
}: Props) => {
  const isDragging = useDragging();
  const [constraintSize, setConstraintSize] = useState<DOMRect>();
  const dragConstraintRef = useRef<HTMLDivElement>(null);
  const dragAreaRef = useRef<HTMLDivElement>(null);

  const [isOverwrappedDragArea, setOverwrappedDragArea] = useState(false);

  useEffect(() => {
    if (!isDragging) setOverwrappedDragArea(false);
  }, [isDragging]);

  useEffect(() => {
    if (!dragConstraintRef.current) return;
    setConstraintSize(dragConstraintRef.current.getBoundingClientRect());
  }, [dragConstraintRef.current]);

  const onKeywordAnimationUpdated = (keyword: Keyword, rect?: DOMRect) => {
    if (!rect) return;
    const areaRect = dragAreaRef.current?.getBoundingClientRect();
    if (!areaRect) return;

    const overlapPercentage = getOverlapPercentage(rect, areaRect);

    setOverwrappedDragArea(isDragging && overlapPercentage > 0);

    if (overlapPercentage > 0.3 && !isDragging) {
      onDragToArea(keyword);
      setOverwrappedDragArea(false);
    }
  };

  const keywordsWithRect = useMemo(() => {
    if (!constraintSize) return [];
    const {width, height} = constraintSize;
    const rects: Rect[] = Array.from({length: keywords.length}).map(createRect);
    random(rects, width - 200, height);
    return keywords.map((keyword, i) => ({keyword, rect: rects[i]}));
  }, [constraintSize, keywords]);

  const keywordData = useMemo(() => {
    return keywordsWithRect.map(elem => ({
      ...elem,
      selected: selected.includes(elem.keyword),
    }));
  }, [keywordsWithRect, selected]);

  return keywords.length > 0 ? (
    <div className={containerStyle}>
      <TitleSection title={title} subtitle={subtitle} />
      <div className={uiContainerStyle}>
        <span className={backgroundTextStyle} style={{fontSize: `${backgroundFontSize}px`}}>
          {backgroundText}
        </span>
      </div>
      <div className={keywordContainerStyle} ref={dragConstraintRef}>
        <div className={dragAreaContainerStyle} ref={dragAreaRef}>
          <motion.div
            className={dragAreaBackgroundStyle}
            animate={isOverwrappedDragArea ? {scale: 1.4} : {scale: 1}}
            transition={{type: 'spring', duration: 0.5}}
          />
          <span className={dragTextStyle}>Drag In Here!</span>
          <br />
          <span className={dragDescriptionStyle}>여기로 끌어주세요!</span>
        </div>
        {keywordData.map(({keyword, rect, selected}) => (
          <KeywordCard
            key={keyword.name}
            keyword={keyword}
            selected={selected}
            dragConstraint={dragConstraintRef}
            fontColor={keywordFontColor}
            initialPosition={rect}
            onAnimationUpdate={(rect?: DOMRect) => onKeywordAnimationUpdated(keyword, rect)}
          />
        ))}
      </div>
      <div className={css({position: 'fixed', pointerEvents: 'none'})}>
        <Diamond />
        <Circle />
        <Rectangle />
      </div>
    </div>
  ) : (
    <></>
  );
};

const containerStyle = css({position: 'relative', width: '100%', height: '100%', display: 'flex', flexDir: 'column'});

const keywordContainerStyle = css({flex: '1', position: 'relative'});

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
  color: 'black',
  textAlign: 'center',
  position: 'absolute',
  userSelect: 'none',
  transform: 'translate(50%,-75%) rotate(270deg)',
  top: '50%',
  right: 0,
  zIndex: 0,
  pt: '60px',
});

const dragAreaBackgroundStyle = css({
  position: 'absolute',
  width: '366px',
  height: '328px',
  borderRadius: '100%',
  bgColor: '#cfc',
  top: 0,
});

const dragTextStyle = css({
  fontSize: '40px',
  fontWeight: '300',
  textTransform: 'capitalize',
  mb: '12px',
  mt: '60px',
  zIndex: 1,
  position: 'relative',
});

const dragDescriptionStyle = css({
  fontSize: '20px',
  fontWeight: '400',
  fontFamily: 'Pretendard',
  zIndex: 1,
  position: 'relative',
});
