import {css} from '../../../styled-system/css';
import {Loading} from '../icon/Loading.tsx';

type Props = {
  text?: string;
};

export const LoadingView = ({text}: Props) => (
  <div
    className={css({
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDir: 'column',
      gap: '32px',
    })}
  >
    <Loading />
    {text && <span>{text}</span>}
  </div>
);
