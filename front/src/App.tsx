import {css} from '../styled-system/css';
import {useDragAndThrow} from './hooks/useDragAndThrow';
import './index.css';

const canvasWidth = 1200;
const canvasHeight = 800;
const circleWidth = 100;
const circleHeight = 80;

const App = () => {
  const {elementRef} = useDragAndThrow({
    canvasHeight,
    canvasWidth,
    elementWidth: circleWidth,
    elementHeight: circleHeight,
  });

  return (
    <>
      <div className={css({width: canvasWidth, height: canvasHeight, bgColor: 'lightgray', position: 'relative'})}>
        <div
          className={css({
            width: circleWidth,
            height: circleHeight,
            bgColor: 'green',
            borderRadius: '10px',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            userSelect: 'none',
          })}
          ref={elementRef}
        >
          키워드
        </div>
      </div>
      <div className={titleStyle}>Hello 🐼!</div>
    </>
  );
};

export default App;

const titleStyle = css({fontSize: '3xl', fontWeight: 'bold', color: 'primary'});
