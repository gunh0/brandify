import {motion} from 'framer-motion';
import {RefObject, useRef} from 'react';
import {Keyword} from '../../types/Keyword.ts';
import {SystemStyleObject} from '../../../styled-system/types';
import {css} from '../../../styled-system/css';

type Props = {
  keyword: Keyword;
  dragConstraint: RefObject<HTMLDivElement>;
  onAnimationUpdate?: (rect?: DOMRect) => void;
  fontColor?: KeywordFontColor;
};

export type KeywordFontColor = 'pink' | 'skyblue' | 'orange' | 'deeppink' | 'random';

const getRandomShape = () => 'rectangle'; //shapes[Math.floor((Math.random() * 100) % 3)];

export const KeywordCard = ({keyword, dragConstraint, onAnimationUpdate, fontColor = 'pink'}: Props) => {
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
        }}
      >
        <span className={nameStyle}>{keyword.type !== 'color' && keyword.name}</span>
        <span className={korStyle}>{keyword.type !== 'color' && keyword.kor}</span>
      </motion.div>
    </>
  );
};

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
  '&[data-shape=diamond]': diamond,
  '&[data-shape=rectangle]': rectangle,
  '&[data-shape=circle]': circle,
};
