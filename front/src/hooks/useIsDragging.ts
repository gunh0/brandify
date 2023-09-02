import {useCallback, useEffect, useState} from 'react';

export const useDragging = () => {
  const [dragging, setDragging] = useState(false);

  const onStart = useCallback(() => {
    setDragging(true);
    window.getSelection()?.removeAllRanges();

    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchend', onEnd);
  }, []);

  const onEnd = useCallback(() => {
    setDragging(false);

    document.removeEventListener('mouseup', onEnd);
    document.removeEventListener('touchend', onEnd);
  }, []);

  useEffect(() => {
    window.addEventListener('mousedown', onStart);
    window.addEventListener('touchstart', onStart);

    return () => {
      window.removeEventListener('mousedown', onStart);
      window.removeEventListener('touchstart', onStart);
    };
  }, []);

  return dragging;
};
