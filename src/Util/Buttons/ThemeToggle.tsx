import { toggleTheme } from '../setTheme';

const ThemeToggle = () => {
  return (
    <label
      htmlFor="themeToggle"
      className="relative inline-block h-5 w-10 cursor-pointer rounded-[10px] bg-custom-838383 dark:bg-custom-A445ED"
    >
      <input
        type="checkbox"
        className="hidden"
        defaultChecked={
          document.body.classList.contains('dark') ? true : undefined
        }
        id="themeToggle"
        onClick={toggleTheme}
      />
      <div className="absolute top-[3px] left-[3px] h-[14px] w-[14px] rounded-full bg-custom-FAFAFA transition-all duration-300 dark:left-[23px]"></div>
    </label>
  );
};

export default ThemeToggle;
