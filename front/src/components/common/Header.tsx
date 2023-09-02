import {SystemStyleObject} from '@pandacss/dev';
import {css} from '../../../styled-system/css';
import {Logo} from '../icon/Logo.tsx';
import {LogoTypo} from '../icon/LogoTypo.tsx';
import {BRANDIFY_HOME_URL} from '../../constants/env.ts';

export const Header = () => (
  <section className={css({position: 'relative', width: '100%', padding: '12px 24px', margin: '16px'})}>
    <a href={BRANDIFY_HOME_URL} className={logoStyle}>
      <Logo />
      <LogoTypo />
    </a>
    <div className={css({position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)'})}>
      <button className={css(buttonStyle, {bgColor: 'white', color: 'background', marginRight: '12px'})}>
        AI MAKER
      </button>
      <button className={css(buttonStyle, {bgColor: 'background', color: 'white', cursor: 'default'})} disabled>
        SHOP
      </button>
      <button className={css(buttonStyle, {bgColor: 'background', color: 'white', cursor: 'default'})} disabled>
        COMMUNITY
      </button>
    </div>
  </section>
);

const logoStyle = css({
  gap: '8px',
  userSelect: 'none',
  display: 'flex',
  alignItems: 'center',
});

const buttonStyle = {
  padding: '16px 40px',
  fontSize: '16px',
  borderRadius: '120px',
  cursor: 'pointer',
  userSelect: 'none',
} as SystemStyleObject;
