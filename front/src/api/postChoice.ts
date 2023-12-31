import axios from 'axios';
import {Keyword} from '../types/Keyword';
import {USE_DUMMY} from '../constants/env.ts';
import {dummyTextKeywords} from './dummy/keyword.ts';
import {wait} from '../utils/time_util.ts';

export const postChoice = async (param: {moods: string[]; purposes: string[]}): Promise<Keyword[]> => {
  if (USE_DUMMY) {
    await wait(1500);
    return dummyTextKeywords;
  }

  try {
    const {data} = await axios.post<{additional: Keyword[]}>('/choice', param);
    return data.additional;
  } catch (e) {
    console.error(e);
    return [];
  }
};
