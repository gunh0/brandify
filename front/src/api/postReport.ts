import axios from 'axios';
import {USE_DUMMY} from '../constants/env.ts';
import {getRandomReport} from './dummy/report.ts';

export type ReportResponse = {
  images: string[];
  description: string[];
  keywords: string[];
};

export const postReport = async (param: {
  moods: string[];
  purposes: string[];
  colors: string[];
  additional: string[];
  vision: string[];
  user: string[];
}): Promise<ReportResponse> => {
  if (USE_DUMMY) {
    console.log(param);
    return getRandomReport();
  }

  try {
    const {data} = await axios.post<ReportResponse>('/vision', param);
    return data;
  } catch (e) {
    console.error(e);
    return {images: [], description: [], keywords: []};
  }
};
