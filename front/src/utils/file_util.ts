export const convertToDataUrl = (file: File) => {
  return URL.createObjectURL(file);
};
