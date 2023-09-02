import {motion} from 'framer-motion';
import {css} from '../../../styled-system/css';

export const Loading = () => (
  <div className={container}>
    <motion.div
      className={spinner}
      animate={{rotate: 360}}
      transition={{repeat: Infinity, duration: 0.7, ease: 'easeInOut', delay: 0}}
    />
  </div>
);

const container = css({
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  height: '350px',
});

const spinner = css({
  width: '50px',
  height: '50px',
  border: '8px solid #f3f3f3',
  borderTop: '8px solid #383636',
  borderRadius: '50%',
});
