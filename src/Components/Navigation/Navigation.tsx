import { useRef, useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as ArrowIcon } from '../../assets/images/icon-arrow-down.svg';
import { ReactComponent as MoonIcon } from '../../assets/images/icon-moon.svg';
import DropDown from './DropDown';
import ThemeToggle from '../../Util/Buttons/ThemeToggle';

interface Props {
  currentFont: { title: string; fontClass: string };
  setCurrentFont: React.Dispatch<
    React.SetStateAction<{ title: string; fontClass: string }>
  >;
}

const Navigation = ({ currentFont, setCurrentFont }: Props) => {
  const [dropMenu, setDropMenu] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleClickOutsideMenu = (event: MouseEvent) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(event.target as Node)
    ) {
      setDropMenu(false);
    }
  };

  const toggleFontMenu = () => {
    setDropMenu((prevState) => !prevState);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideMenu);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
    };
  }, []);

  return (
    <nav className="mx-auto max-w-3xl font-inter">
      <div className="flex justify-between py-6 md:py-14">
        <Logo className="max-h-8 md:max-h-9" />
        <div className="flex items-center gap-4 md:gap-6">
          <div className="relative" ref={dropDownRef}>
            <div
              className="flex cursor-pointer select-none items-center"
              onClick={toggleFontMenu}
            >
              <button
                className={`pr-4 text-sm font-bold text-custom-2D2D2D duration-300 dark:text-custom-FAFAFA md:text-lg ${currentFont.fontClass}`}
              >
                {currentFont.title}
              </button>
              <ArrowIcon
                className={`transition-all duration-300
                  ${dropMenu ? '-scale-y-100' : ''}`}
              />
            </div>
            {dropMenu && (
              <DropDown
                setDropMenu={setDropMenu}
                setCurrentFont={setCurrentFont}
              />
            )}
          </div>
          <span className="h-8 w-[1px] bg-custom-E9E9E9"></span>
          <div className="flex items-center gap-3 md:gap-5">
            <ThemeToggle />
            <MoonIcon className="stroke-custom-838383 dark:stroke-custom-A445ED" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
