import axios from 'axios';
import {Keyword} from '../types/Keyword';
import {USE_DUMMY} from '../constants/env.ts';

type ReportResponse = {
  images: string[];
  description: string[];
  keywords: string[];
};
export const postReport = async (param: {
  moods: Keyword[];
  purposes: Keyword[];
  colors: Keyword[];
  additional: Keyword[];
  vision: Keyword[];
  user: Keyword[];
}): Promise<ReportResponse> => {
  if (USE_DUMMY) {
    console.log(param);
    return {images: [], description: [], keywords: []};
  }

  try {
    const {data} = await axios.post<ReportResponse>('/vision', param);
    return data;
  } catch (e) {
    console.error(e);
    return {images: [], description: [], keywords: []};
  }
};
