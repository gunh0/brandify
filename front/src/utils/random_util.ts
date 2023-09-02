import {Rect} from './rect_util.ts';

export const random = (arr: Rect[], vw: number, vh: number) => {
  const totalCol = Math.ceil(Math.sqrt(arr.length));
  const totalRow = Math.ceil(arr.length / totalCol);
  const rowHeight = vh / totalRow,
    colWidth = vw / totalCol;
  arr.forEach((rect, idx) => {
    const col = idx % totalCol,
      row = Math.floor(idx / totalCol);
    rect.top = row * rowHeight;
    rect.left = col * colWidth;
  });
};
