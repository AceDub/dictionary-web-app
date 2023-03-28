import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../assets/images/icon-search.svg';

interface Props {
  onSearch: (searchWord: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const [word, setWord] = useState<string>('');

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(word.trim());
    setWord((prevState) => prevState.trim());
  };

  return (
    <section className="relative mx-auto max-w-3xl">
      <form onSubmit={submitHandler}>
        <input
          placeholder="Search for any word..."
          type="text"
          value={word}
          onChange={(event) => {
            setWord(event.target.value);
          }}
          className="h-12 w-full rounded-2xl bg-custom-F4F4F4 pl-6 pr-12 font-bold outline-none transition-[background-color] duration-300 dark:bg-custom-1F1F1F md:h-16 md:text-xl"
        />
        <SearchIcon
          className="absolute top-2/4 right-6 -translate-y-2/4 cursor-pointer"
          onClick={(event) => {
            (
              event.currentTarget.previousElementSibling as HTMLElement
            )?.focus();
          }}
        />
      </form>
    </section>
  );
};

export default SearchBar;
