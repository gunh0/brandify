import axios from 'axios';
import {Keyword} from '../types/Keyword';

export const getPurposes = async (): Promise<Keyword[]> => {
  try {
    const {data} = await axios.get<{purposes: Keyword[]}>('/purposes');
    return data.purposes;
  } catch (e) {
    console.error(e);
    return [];
  }
};
