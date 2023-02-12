import { setLocalStorageFont } from '../../Util/setFont';

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

const fonts = [
  { title: 'Sans Serif', fontClass: 'font-inter' },
  { title: 'Serif', fontClass: 'font-lora' },
  { title: 'Mono', fontClass: 'font-inconsolata' },
];

const DropDown = ({ setDropMenu, setCurrentFont }: Props) => {
  const fontHandler = (font: Font) => {
    setDropMenu(false);
    setCurrentFont(font);
    setLocalStorageFont(font);
  };

  return (
    <div className="absolute top-[2.375rem] right-0 min-h-[9.5rem] w-36 origin-top animate-dropdown cursor-default select-none rounded-2xl border-[1px] bg-white shadow-lg transition-all duration-300 dark:border-custom-1F1F1F dark:bg-custom-1F1F1F xs:w-[11.5rem]">
      <ul className="m-6 inline-flex flex-col items-start gap-4 text-base font-bold text-custom-2D2D2D dark:text-white md:text-lg md:leading-[1.5rem]">
        {fonts.map((font, index) => {
          return (
            <li
              className={`cursor-pointer transition-colors duration-300 hover:text-custom-a445ed ${font.fontClass}`}
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
