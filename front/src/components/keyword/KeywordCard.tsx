import {motion} from 'framer-motion';
import {RefObject, useRef} from 'react';
import {Keyword} from '../../types/Keyword.ts';
import {css} from '../../../styled-system/css';

type Props = {
  keyword: Keyword;
  dragConstraint: RefObject<HTMLDivElement>;
  onAnimationUpdate?: (rect?: DOMRect) => void;
};

export const KeywordCard = ({keyword, dragConstraint, onAnimationUpdate}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      drag
      ref={ref}
      className={containerStyle}
      dragConstraints={dragConstraint}
      onUpdate={() => onAnimationUpdate?.(ref.current?.getBoundingClientRect())}
    >
      {keyword.name}
    </motion.div>
  );
};

const containerStyle = css({
  bgColor: '#ffffff10',
  backdropFilter: 'blur(25px)',
  width: '200px',
  height: '160px',
  color: '#f8bbed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '28px',
  borderRadius: '30px',
  textTransform: 'uppercase',
});
