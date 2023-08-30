import {Rect} from '../utils/random_util.ts';

export type Keyword = {
  name: string;
  kor?: string;
  type?: 'text' | 'color';
  rect?: Rect;
};
