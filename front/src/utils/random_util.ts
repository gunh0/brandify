import {Rect} from './rect_util.ts';

const colScatterDegree = 80;
const rowScatterDegree = 40;

export const random = (arr: Rect[], vw: number, vh: number) => {
  const totalCol = Math.ceil(Math.sqrt(arr.length));
  const totalRow = Math.ceil(arr.length / totalCol);
  const rowHeight = vh / totalRow,
    colWidth = vw / totalCol;
  arr.forEach((rect, idx) => {
    const col = idx % totalCol,
      row = Math.floor(idx / totalCol);
    rect.top = Math.min(
      Math.max(rowHeight / 5, row * rowHeight + rowScatterDegree * 2 * Math.random() - rowScatterDegree),
      vh - rowHeight / 5,
    );
    rect.left = Math.max(colWidth / 5, col * colWidth + colScatterDegree * 2 * Math.random() - colScatterDegree);
  });
};
