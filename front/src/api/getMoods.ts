import axios from 'axios';
import {Keyword} from '../types/Keyword';
import {USE_DUMMY} from '../constants/env.ts';
import {dummyTextKeywords} from './dummy/keyword.ts';

export const getMoods = async (): Promise<Keyword[]> => {
  if (USE_DUMMY) {
    return dummyTextKeywords;
  }

  try {
    const {data} = await axios.get<{moods: Keyword[]}>('/moods');
    return data.moods;
  } catch (e) {
    console.error(e);
    return [];
  }
};
