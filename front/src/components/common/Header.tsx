import {SystemStyleObject} from '@pandacss/dev';
import {css} from '../../../styled-system/css';

export const Header = () => (
  <section className={css({position: 'relative', width: '100%', padding: '12px 0'})}>
    <span className={logoStyle}>Brandify</span>
    <div className={css({position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)'})}>
      <button className={css(buttonStyle, {bgColor: 'white', color: 'background', marginRight: '12px'})}>
        AI MAKER
      </button>
      <button className={css(buttonStyle, {bgColor: 'background', color: 'white', cursor: 'default'})} disabled>
        SHOP
      </button>
    </div>
  </section>
);

const logoStyle = css({bgColor: '#d9d9d9', color: 'black', padding: '6px 12px', fontSize: '44px'});

const buttonStyle = {
  padding: '16px 40px',
  fontSize: '16px',
  borderRadius: '120px',
  cursor: 'pointer',
} as SystemStyleObject;
