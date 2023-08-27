import {useRef, useCallback, useEffect} from 'react';
import {clamp} from '../utils/math_util';

const step = (x: number, y: number, v: number, d: number) => ({
  x: x + v * Math.cos(d),
  y: y + v * Math.sin(d),
});

const tickDelay = 16;
const velocityOnCollision = 3;

export const useDragAndThrow = ({
  canvasHeight,
  canvasWidth,
  elementHeight,
  elementWidth,
}: {
  canvasWidth: number;
  canvasHeight: number;
  elementWidth: number;
  elementHeight: number;
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const direction = useRef(0);
  const velocity = useRef(0);
  const friction = useRef(0.045);
  const x = useRef(0);
  const y = useRef(0);
  const initialTime = useRef(0);

  const displayElement = useCallback(
    (newX: number, newY: number) => {
      if (!elementRef.current) return;
      const xx = clamp(newX - elementWidth / 2, 0, canvasWidth - elementWidth),
        yy = clamp(newY - elementHeight / 2, 0, canvasHeight - elementHeight);
      elementRef.current.style.transform = `translate(${xx}px, ${yy}px)`;
      x.current = newX;
      y.current = newY;
    },
    [canvasHeight, canvasWidth, elementHeight, elementWidth],
  );

  const tick = useCallback(() => {
    if (!elementRef.current) return;

    velocity.current = velocity.current * (1 - friction.current);
    const loc = step(x.current, y.current, velocity.current, direction.current);
    if (loc.x < elementWidth / 2 || loc.x + elementWidth / 2 > canvasWidth) {
      direction.current = Math.PI - direction.current;
      velocity.current = velocityOnCollision;
    }
    if (loc.y < elementHeight / 2 || loc.y + elementHeight / 2 > canvasHeight) {
      direction.current = -direction.current;
      velocity.current = velocityOnCollision;
    }
    const newLoc = step(x.current, y.current, velocity.current, direction.current);
    displayElement(newLoc.x, newLoc.y);
    x.current = newLoc.x;
    y.current = newLoc.y;

    if (velocity.current > 1) {
      setTimeout(tick, tickDelay);
    }
  }, [canvasHeight, canvasWidth, displayElement, elementHeight, elementWidth]);

  useEffect(() => {
    if (!elementRef.current) return;

    const mouse = {x: 0, y: 0};

    const mouseDownListener = (e: MouseEvent) => {
      mouse.x = e.pageX;
      mouse.y = e.pageY;
      initialTime.current = new Date().getTime();
      document.addEventListener('mouseup', mouseUpListener);
      document.addEventListener('mousemove', mouseMoveListener);
    };
    const mouseMoveListener = (e: MouseEvent) => {
      displayElement(e.pageX, e.pageY);
    };
    const mouseUpListener = (e: MouseEvent) => {
      const timeDiff = (new Date().getTime() - initialTime.current) / 60;
      velocity.current = (2 * Math.sqrt((e.pageX - mouse.x) ** 2 + (e.pageY - mouse.y) ** 2)) / timeDiff ** 2.8;
      direction.current = Math.atan2(e.pageY - mouse.y, e.pageX - mouse.x);

      setTimeout(tick, tickDelay);
      document.removeEventListener('mouseup', mouseUpListener);
      document.removeEventListener('mousemove', mouseMoveListener);
    };

    elementRef.current.addEventListener('mousedown', mouseDownListener);

    return () => {
      elementRef.current?.removeEventListener('mousedown', mouseDownListener);
      document.removeEventListener('mouseup', mouseUpListener);
      document.removeEventListener('mousemove', mouseMoveListener);
    };
  }, [displayElement, tick]);

  return {elementRef};
};
