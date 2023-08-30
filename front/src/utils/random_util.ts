export type Rect = {
  width: number;
  height: number;
  placed: boolean;
  top: number;
  left: number;
  right: number;
  bottom: number;
};

export const createRect = (): Rect => ({
  width: 200,
  height: 160,
  placed: false,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

export const placeBubble = (rects: Rect[], rect: Rect, pad = 6, vw: number, vh: number) => {
  rect.placed = true;
  rect.left = randomInt(pad, vw - (rect.width + pad));
  rect.top = randomInt(pad, vh - (rect.height + pad));
  rect.right = rect.left + rect.width;
  rect.bottom = rect.top + rect.height;

  // Loop through all rects
  for (let i = 0; i < rects.length; i++) {
    const b = rects[i];

    // Skip if b is this rect or isn't placed
    if (b === rect || !b.placed) {
      continue;
    }

    // Collision detected, can't place rect
    if (intersects(rect, b, pad)) {
      rect.placed = false;
      break;
    }
  }

  if (!rect.placed) {
    requestAnimationFrame(() => {
      placeBubble(rects, rect, pad, vw, vh);
    });
  }
};

export const intersects = (a: Rect, b: Rect, pad = 6) => {
  return !(b.left > a.right + pad || b.right < a.left - pad || b.top > a.bottom + pad || b.bottom < a.top - pad);
};

export const randomInt = (min: number, max: number) => {
  if (max == null) {
    max = min;
    min = 0;
  }
  if (min > max) {
    const tmp = min;
    min = max;
    max = tmp;
  }
  return Math.floor(min + (max - min + 1) * Math.random());
};
