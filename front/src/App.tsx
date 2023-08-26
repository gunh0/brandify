import {css} from '../styled-system/css';
import './index.css';

const App = () => {
  return (
    <>
      <div>hi!</div>
      <div className={titleStyle}>Hello 🐼!</div>
    </>
  );
};

export default App;

const titleStyle = css({fontSize: '3xl', fontWeight: 'bold', color: 'primary'});
