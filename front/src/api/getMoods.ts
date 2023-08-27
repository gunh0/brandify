import axios from 'axios';
import {Keyword} from '../types/Keyword';

export const getMoods = async (): Promise<Keyword[]> => {
  try {
    const {data} = await axios.get<{moods: Keyword[]}>('/moods');
    return data.moods;
  } catch (e) {
    console.error(e);
    return [];
  }
};
