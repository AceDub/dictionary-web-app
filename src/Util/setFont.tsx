interface Font {
  title: string;
  fontClass: string;
}

export const setLocalStorageFont = (font: Font) => {
  localStorage.setItem('font', JSON.stringify(font));
};
