import axios from 'axios';
import {USE_DUMMY} from '../constants/env.ts';

type ReportResponse = {
  images: string[];
  description: string[];
  keywords: string[];
};

const image =
  'https://images.unsplash.com/photo-1693140539040-aa567b436278?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80';
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
    return {images: [image, image, image, image], description: [], keywords: []};
  }

  try {
    const {data} = await axios.post<ReportResponse>('/vision', param);
    return data;
  } catch (e) {
    console.error(e);
    return {images: [], description: [], keywords: []};
  }
};
