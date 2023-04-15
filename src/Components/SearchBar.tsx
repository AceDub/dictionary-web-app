import { useEffect, useState } from 'react';
import { ReactComponent as SearchIcon } from '../assets/images/icon-search.svg';
import { useSearchParams } from 'react-router-dom';

interface Props {
  handleSearch: (searchWord: string) => void;
}

const SearchBar = ({ handleSearch }: Props) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('word')) {
      setInputValue(searchParams.get('word') as string);
      handleSearch(searchParams.get('word') as string);
    }
  }, [searchParams]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch(inputValue.trim());
    setInputValue((prevState) => prevState.trim());
    setSearchParams({ word: inputValue.trim() });
  };

  return (
    <section className="relative mx-auto max-w-3xl">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search for any word..."
          type="text"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
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
