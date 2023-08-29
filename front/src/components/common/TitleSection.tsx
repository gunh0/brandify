import {ReactNode} from 'react';
import {css} from '../../../styled-system/css';

type Props = {
  title: ReactNode;
  subtitle: ReactNode;
};

export const TitleSection = ({title, subtitle}: Props) => (
  <section className={titleSectionStyle}>
    <h1 className={titleStyle}>{title}</h1>
    <p className={subtitleStyle}>{subtitle}</p>
  </section>
);

const titleSectionStyle = css({width: '100%', textAlign: 'center', mt: '70px'});

const titleStyle = css({
  fontSize: '36px',
  lineHeight: '120%',
  textTransform: 'uppercase',
  mb: '12px',
  userSelect: 'none',
});

const subtitleStyle = css({fontSize: '20px', userSelect: 'none'});
