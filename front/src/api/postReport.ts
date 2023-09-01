import axios from 'axios';
import {USE_DUMMY} from '../constants/env.ts';

type ReportResponse = {
  images: string[];
  description: string[];
  keywords: string[];
};

const image =
  'https://www.shinsegaegroupnewsroom.com/wp-content/uploads/2020/07/%EC%9D%B4%EB%A7%88%ED%8A%B813_%EB%B3%B8%EB%AC%B801.png';
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
