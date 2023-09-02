import {motion} from 'framer-motion';
import {memo, RefObject, useMemo, useRef} from 'react';
import throttle from 'lodash/throttle';
import {Keyword} from '../../types/Keyword.ts';
import {SystemStyleObject} from '../../../styled-system/types';
import {css} from '../../../styled-system/css';
import {Rect} from '../../utils/random_util.ts';

type Props = {
  keyword: Keyword;
  dragConstraint: RefObject<HTMLDivElement>;
  onAnimationUpdate?: (rect?: DOMRect) => void;
  fontColor?: KeywordFontColor;
  initialPosition?: Rect;
};

export type KeywordFontColor = 'pink' | 'skyblue' | 'orange' | 'deeppink' | 'random';

export const KeywordCard = memo(
  ({keyword, dragConstraint, onAnimationUpdate, fontColor = 'pink', initialPosition}: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    const throttledAnimationUpdate = useMemo(
      () => throttle(() => onAnimationUpdate?.(ref.current?.getBoundingClientRect()), 200),
      [onAnimationUpdate],
    );

    return (
      <motion.div
        drag
        ref={ref}
        className={css(containerStyle, {
          color: fontColor,
        })}
        dragConstraints={dragConstraint}
        onUpdate={throttledAnimationUpdate}
        data-shape={'rectangle'}
        style={{backgroundColor: keyword.name}}
        initial={{
          rotate: Math.floor(Math.random() * 90) - 45,
          top: initialPosition?.top,
          left: initialPosition?.left,
        }}
      >
        <span className={nameStyle}>{keyword.type !== 'color' && keyword.name}</span>
        <span className={korStyle}>{keyword.type !== 'color' && keyword.kor}</span>
      </motion.div>
    );
  },
);

const rectangle: SystemStyleObject = {
  width: '200px',
  height: '160px',
  clipPath: 'url(#rectangle)',
};
const circle: SystemStyleObject = {
  width: '180px',
  height: '180px',
  clipPath: 'url(#circle)',
};
const diamond: SystemStyleObject = {
  width: '192px',
  height: '192px',
  clipPath: 'url(#diamond)',
};

const nameStyle = css({
  fontSize: '28px',
});

const korStyle = css({
  color: 'white',
  fontSize: '16px',
  fontFamily: 'Pretendard',
});

const containerStyle: SystemStyleObject = {
  bgColor: '#ffffff10',
  backdropFilter: 'blur(25px)',
  p: '44px 20px 32px 20px',
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'uppercase',
  position: 'absolute',
  '&[data-shape=diamond]': diamond,
  '&[data-shape=rectangle]': rectangle,
  '&[data-shape=circle]': circle,
};
