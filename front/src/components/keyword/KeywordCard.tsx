import {ForwardedRef, forwardRef} from 'react';
import {Keyword} from '../../types/Keyword';
import {css} from '../../../styled-system/css';

type Props = {
  keyword: Keyword;
};

export const KeywordCard = forwardRef(({keyword}: Props, ref: ForwardedRef<HTMLDivElement>) => (
  <div ref={ref} className={containerStyle}>
    {keyword.name}
  </div>
));

export const KeywordCardSize = 100;

const containerStyle = css({
  position: 'absolute',
  top: '0',
  left: '0',
  width: `${KeywordCardSize}px`,
  height: `${KeywordCardSize}px`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid black',
  userSelect: 'none',
});
