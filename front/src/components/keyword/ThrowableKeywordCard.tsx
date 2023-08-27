import {useEffect} from 'react';
import {Keyword} from '../../types/Keyword';
import {KeywordCard, KeywordCardSize} from './KeywordCard';
import {useDragAndThrow} from '../../hooks/useDragAndThrow';
import {useWindowSize} from '../../hooks/useWindowSize';

type Props = {
  keyword: Keyword;
  initialPosition: {x: number; y: number};
};

export const ThrowableKeywordCard = ({keyword, initialPosition}: Props) => {
  const {width: windowWidth, height: windowHeight} = useWindowSize();

  const {elementRef} = useDragAndThrow({
    canvasWidth: windowWidth,
    canvasHeight: windowHeight,
    elementWidth: KeywordCardSize,
    elementHeight: KeywordCardSize,
  });

  useEffect(() => {
    if (!elementRef.current) return;

    elementRef.current.style.transform = `translate(${initialPosition.x}px, ${initialPosition.y}px)`;
  }, []);

  return <KeywordCard ref={elementRef} keyword={keyword} />;
};
