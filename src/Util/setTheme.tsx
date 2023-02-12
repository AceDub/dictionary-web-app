export const initializeTheme = () => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.body.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
};

export const toggleTheme = () => {
  document.body.classList.toggle('dark');
  localStorage.theme === 'light'
    ? (localStorage.theme = 'dark')
    : (localStorage.theme = 'light');
};
