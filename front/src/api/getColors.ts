import axios from 'axios';
import {Keyword} from '../types/Keyword';
import {USE_DUMMY} from '../constants/env.ts';
import {dummyColorKeywordList} from './dummy/keyword.ts';

export const getColors = async (): Promise<Keyword[]> => {
  if (USE_DUMMY) {
    return dummyColorKeywordList;
  }

  try {
    const {data} = await axios.get<{colors: Keyword[]}>('/colors');
    return data.colors.map(color => ({...color, type: 'color'}));
  } catch (e) {
    console.error(e);
    return [];
  }
};
