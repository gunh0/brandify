import {SystemStyleObject} from '@pandacss/dev';
import {css} from '../../../styled-system/css';

export const Header = () => (
  <section className={css({position: 'relative', width: '100%', padding: '12px 24px'})}>
    <div className={logoStyle}>
      <span>Brandify</span>
    </div>
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

const logoStyle = css({
  fontFamily: 'neue-montreal',
  bgColor: '#d9d9d9',
  color: 'black',
  width: '178px',
  height: '43px',
  fontSize: '44px',
  userSelect: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const buttonStyle = {
  padding: '16px 40px',
  fontSize: '16px',
  borderRadius: '120px',
  cursor: 'pointer',
} as SystemStyleObject;
