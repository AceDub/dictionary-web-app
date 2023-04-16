import { useEffect, useRef, useState } from 'react';
import { ReactComponent as SearchIcon } from '../assets/images/icon-search.svg';
import { useSearchParams } from 'react-router-dom';

interface Props {
  handleSearch: (searchWord: string) => void;
}

const SearchBar = ({ handleSearch }: Props) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputIsEmpty, setInputIsEmpty] = useState<boolean>(false);
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchParams.get('word')) {
      setInputValue(searchParams.get('word') as string);
      handleSearch(searchParams.get('word') as string);
    }
  }, [searchParams]);

  const resetErrorOnChange = () => {
    if (searchInput.current && searchInput.current.value.length > 0) {
      setInputIsEmpty(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      setInputIsEmpty(true);
    }

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
          ref={searchInput}
          onChange={(event) => {
            setInputValue(event.target.value);
            resetErrorOnChange();
          }}
          className={`h-12 w-full rounded-2xl bg-custom-F4F4F4 pl-6 pr-12 font-bold outline-none transition-[background-color] duration-300 dark:bg-custom-1F1F1F md:h-16 md:text-xl ${
            inputIsEmpty ? 'border-2 border-red-500' : ''
          }`}
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
      {inputIsEmpty && (
        <span className="absolute ml-6 mt-1 text-sm text-red-500 md:text-lg">
          Please enter a word
        </span>
      )}
    </section>
  );
};

export default SearchBar;
