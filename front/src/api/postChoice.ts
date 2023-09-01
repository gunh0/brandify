import axios from 'axios';
import {Keyword} from '../types/Keyword';
import {USE_DUMMY} from '../constants/env.ts';
import {dummyTextKeywords} from './dummy/keyword.ts';

export const postChoice = async (param: {moods: Keyword[]; purposes: Keyword[]}): Promise<Keyword[]> => {
  if (USE_DUMMY) {
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
