import {css} from '../../../styled-system/css';
import {Loading} from '../icon/Loading.tsx';

export const LoadingView = () => (
  <div className={css({height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'})}>
    <Loading />
  </div>
);
