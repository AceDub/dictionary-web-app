import { setLocalStorageFont } from '../../Util/setFont';
import { fonts } from '../../Data/fonts';

interface Props {
  setDropMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentFont: React.Dispatch<
    React.SetStateAction<{ title: string; fontClass: string }>
  >;
}

interface Font {
  title: string;
  fontClass: string;
}

const DropDown = ({ setDropMenu, setCurrentFont }: Props) => {
  const fontHandler = (font: Font) => {
    setDropMenu(false);
    setCurrentFont(font);
    setLocalStorageFont(font);
  };

  return (
    <div className="absolute top-[2.375rem] right-0 z-50 min-h-[9.5rem] w-36 origin-top animate-dropdown cursor-default select-none rounded-2xl border-[1px] bg-custom-FAFAFA shadow-[0px_5px_30px_rgba(0,0,0,0.1)] dark:border-custom-1F1F1F dark:bg-custom-1F1F1F dark:shadow-[0px_5px_30px_#A445ED] xs:w-[11.5rem]">
      <ul className="m-6 inline-flex flex-col items-start gap-4 text-base font-bold text-custom-2D2D2D dark:text-[#FAFAFA] md:text-lg md:leading-[1.5rem]">
        {fonts.map((font, index) => {
          return (
            <li
              className={`cursor-pointer hover:text-custom-A445ED hover:transition-colors hover:duration-300 ${font.fontClass}`}
              key={index}
              onClick={() => {
                fontHandler(font);
              }}
            >
              {font.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDown;
