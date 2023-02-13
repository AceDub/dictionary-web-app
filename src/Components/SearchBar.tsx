import { ReactComponent as SearchIcon } from '../assets/images/icon-search.svg';

const SearchBar = () => {
  return (
    <div className="relative mx-auto max-w-3xl">
      <input
        type="text"
        className="h-12 w-full rounded-2xl bg-custom-F4F4F4 pl-6 pr-12 font-bold outline-none dark:bg-custom-1F1F1F md:h-16"
      />
      <SearchIcon
        className="absolute top-2/4 right-6 -translate-y-2/4 cursor-pointer"
        onClick={(e) => {
          (e.currentTarget.previousElementSibling as HTMLElement)?.focus();
        }}
      />
    </div>
  );
};

export default SearchBar;
