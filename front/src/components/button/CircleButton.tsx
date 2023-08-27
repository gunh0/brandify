import {SystemStyleObject} from '@pandacss/dev';
import {css} from '../../../styled-system/css';

type Props = {
  styleObject?: SystemStyleObject;
  text: string;
  onClick: () => void;
};

export const CircleButton = ({text, onClick, styleObject}: Props) => (
  <button
    className={css(
      {
        width: 36,
        height: 36,
        bgColor: 'black',
        borderRadius: '999px',
        color: 'white',
      },
      styleObject ?? {},
    )}
    onClick={onClick}
  >
    {text}
  </button>
);
