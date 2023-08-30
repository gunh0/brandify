import {motion} from 'framer-motion';
import {memo, RefObject, useRef} from 'react';
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

const getRandomShape = () => 'rectangle'; //shapes[Math.floor((Math.random() * 100) % 3)];

export const KeywordCard = memo(
  ({keyword, dragConstraint, onAnimationUpdate, fontColor = 'pink', initialPosition}: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const shape = keyword.type === 'color' ? 'rectangle' : getRandomShape();
    return (
      <>
        <motion.div
          drag
          ref={ref}
          className={css(containerStyle, {
            color: fontColor,
          })}
          dragConstraints={dragConstraint}
          onUpdate={() => onAnimationUpdate?.(ref.current?.getBoundingClientRect())}
          data-shape={shape}
          style={{backgroundColor: keyword.name}}
          initial={{
            ...(shape === 'rectangle' && {rotate: Math.floor(Math.random() * 90) - 45}),
            // transform: `translate(${initialPosition?.top}px, ${initialPosition?.left}px)`,
            top: initialPosition?.top,
            left: initialPosition?.left,
          }}
        >
          <span className={nameStyle}>{keyword.type !== 'color' && keyword.name}</span>
          <span className={korStyle}>{keyword.type !== 'color' && keyword.kor}</span>
        </motion.div>
      </>
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
