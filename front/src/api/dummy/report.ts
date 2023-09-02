import {ReportResponse} from '../postReport.ts';

export const getRandomReport: () => ReportResponse = () => {
  const idx = Math.floor(Math.random() * 13);
  return {
    description: [],
    keywords: [],
    images: Array.from({length: 4}).map(
      (_, imageIdx) => `/public/images/result_${idx + 1}/image${idx + 1}-${imageIdx + 1}.png`,
    ),
  };
};
