import { useEffect, useState } from 'react';
import Navigation from './Components/Navigation/Navigation';
import { initializeTheme } from './Util/setTheme';
import { setLocalStorageFont } from './Util/setFont';
import SearchBar from './Components/SearchBar';
import Definition from './Components/Definition';
import { fonts } from './Data/fonts';
import { useFetch } from './Util/useFetch';

interface Font {
  title: string;
  fontClass: string;
}

function App() {
  const [currentFont, setCurrentFont] = useState<Font>(fonts[0]);
  const [word, setWord] = useState<string>('');
  const data = useFetch(word);

  useEffect(() => {
    initializeTheme();
    const preferredFont = JSON.parse(localStorage.getItem('font') || '{}');
    if (localStorage.font) {
      setCurrentFont(preferredFont);
    } else {
      setLocalStorageFont(fonts[0]);
    }
  }, []);

  const searchHandler = (searchWord: string) => {
    setWord(searchWord);
  };

  return (
    <div
      className={`min-h-screen px-6 text-custom-2D2D2D transition-all duration-300 dark:bg-custom-050505 dark:text-custom-FAFAFA ${currentFont.fontClass}`}
    >
      <Navigation currentFont={currentFont} setCurrentFont={setCurrentFont} />
      <main>
        <SearchBar onSearch={searchHandler} />
        <Definition data={data} word={word} setWord={setWord} />
      </main>
    </div>
  );
}

export default App;
