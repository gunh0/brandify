export type Rect = {
  top: number;
  left: number;
  right: number;
  bottom: number;
};

export const createRect = (): Rect => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

export const isOverlapping = (rectA: Rect, rectB: Rect) => {
  return rectA.left < rectB.right && rectA.right > rectB.left && rectA.top < rectB.bottom && rectA.bottom > rectB.top;
};

export const overlapArea = (rectA: Rect, rectB: Rect) => {
  if (!isOverlapping(rectA, rectB)) {
    return 0;
  }

  const xOverlap = Math.max(0, Math.min(rectA.right, rectB.right) - Math.max(rectA.left, rectB.left));
  const yOverlap = Math.max(0, Math.min(rectA.bottom, rectB.bottom) - Math.max(rectA.top, rectB.top));

  return xOverlap * yOverlap;
};

export const isPercentageOverlap = (rectA: Rect, rectB: Rect, n: number) => {
  const areaA = (rectA.right - rectA.left) * (rectA.bottom - rectA.top);
  const overlap = overlapArea(rectA, rectB);

  return overlap / areaA >= n / 100;
};

export const getOverlapPercentage = (rectA: Rect, rectB: Rect) => {
  const areaA = (rectA.right - rectA.left) * (rectA.bottom - rectA.top);
  const overlap = overlapArea(rectA, rectB);

  return overlap / areaA;
};
