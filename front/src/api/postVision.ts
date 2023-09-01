import axios from 'axios';
import {Keyword} from '../types/Keyword';
import {USE_DUMMY} from '../constants/env.ts';
import {dummyTextKeywords} from './dummy/keyword.ts';

export const postVision = async (file: File): Promise<Keyword[]> => {
  if (USE_DUMMY) {
    return dummyTextKeywords;
  }

  try {
    const form = new FormData();
    form.append('file', file);
    const {data} = await axios.post<{reference: Keyword[]}>('/vision', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data.reference;
  } catch (e) {
    console.error(e);
    return [];
  }
};
