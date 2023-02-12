import { useEffect, useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import { initializeTheme } from './Util/setTheme';
import { setLocalStorageFont } from './Util/setFont';

interface Font {
  title: string;
  fontClass: string;
}

const defaultFont = {
  title: 'Sans Serif',
  fontClass: 'font-inter',
};
function App() {
  const [currentFont, setCurrentFont] = useState<Font>(defaultFont);

  useEffect(() => {
    initializeTheme();
    const preferredFont = JSON.parse(localStorage.getItem('font') || '{}');
    if (localStorage.font) {
      setCurrentFont(preferredFont);
    } else {
      setLocalStorageFont(defaultFont);
    }
  }, []);

  return (
    <div
      className={`h-screen px-6 transition-all duration-300 ease-in-out dark:bg-custom-050505 ${currentFont.fontClass}`}
    >
      <Navigation
        displayCurrentFont={currentFont}
        setCurrentFont={setCurrentFont}
      />
      <main></main>
    </div>
  );
}

export default App;
