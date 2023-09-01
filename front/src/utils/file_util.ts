export const convertToDataUrl = (file: File) => {
  return URL.createObjectURL(file);
};

export const downloadWithImageSrc = async (src: string) => {
  const image = await fetch(src);
  const blob = await image.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('download', 'brandify-logo.png');
  a.click();
  URL.revokeObjectURL(url);
};
