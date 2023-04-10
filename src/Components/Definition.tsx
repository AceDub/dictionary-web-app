import playButton from '../assets/images/icon-play.svg';
import sourceImg from '../assets/images/icon-new-window.svg';
import Loader from '../Util/Loader';
import Error from './Error';

interface Props {
  data:
    | {
        word: string;
        meanings: {
          partOfSpeech: string;
          definitions: { definition: string; example?: string }[];
          synonyms?: string[];
          antonyms?: string[];
        }[];
        phonetic: string;
        phonetics: { audio: string };
        sourceUrls: string;
      }[]
    | null;
  setWord: (word: string) => void;
  loading: boolean;
  error: {
    title: string;
    message: string;
    resolution: string;
  } | null;
}

const Definition = ({ data, setWord, loading, error }: Props) => {
  return (
    <section>
      {loading && <Loader />}
      {error !== null && <Error error={error} />}
      {data !== null && !loading && !error && (
        <div className="mx-auto mt-6 max-w-3xl md:mt-10">
          <div className="mb-8 flex items-center justify-between md:mb-10">
            <div className="flex flex-col">
              <h1 className="text-[2rem] font-bold md:text-[4rem]">
                {data[0].word}
              </h1>
              <p className="font-inter text-lg text-custom-A445ED md:text-2xl">
                {data[0].phonetic}
              </p>
            </div>
            <button>
              <img
                src={playButton}
                alt="Play button"
                className="max-w-[3rem] md:max-w-full"
              />
              <p className="text-sm">{data[0].phonetics.audio}</p>
            </button>
          </div>
          {data.map((word, index) => (
            <div key={index}>
              {word.meanings.map((meaning, index) => (
                // Part of speech
                <div key={index}>
                  <div className="flex items-center gap-8">
                    <h2 className="text-lg font-bold md:text-2xl">
                      {meaning.partOfSpeech}
                    </h2>
                    <div className="h-[1px] w-full bg-custom-E9E9E9 transition-colors duration-300 dark:bg-custom-3A3A3A"></div>
                  </div>

                  <div className="my-8 md:my-10">
                    <p className="mb-4 text-custom-838383 md:mb-6 md:text-xl">
                      Meaning
                    </p>
                    {/* Definition */}
                    <ul className="mb-6 flex flex-col gap-3 md:mb-10">
                      {meaning.definitions.map((definition, index) => (
                        <li
                          key={index}
                          className="ml-[1.125rem] list-disc text-[0.938rem] marker:text-custom-A445ED md:text-lg"
                        >
                          {definition.definition}
                          {/* Example */}
                          {definition.example && (
                            <p className="my-3 text-custom-838383">
                              "{definition.example}"
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                    {/* Synonyms */}
                    {meaning.synonyms && meaning.synonyms.length > 0 && (
                      <div className="mb-8 flex items-center md:mb-10 md:text-xl">
                        <p className="mr-6 text-custom-838383 ">Synonyms</p>
                        <div>
                          {meaning.synonyms.map((synonym, index) => (
                            <a
                              key={index}
                              className="ml-3 inline-block cursor-pointer font-bold text-custom-A445ED [&:not(:last-child)]:after:content-[',']"
                              onClick={() => {
                                setWord(synonym);
                              }}
                            >
                              {synonym}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                    {/* Antonyms */}
                    {meaning.antonyms && meaning.antonyms.length > 0 && (
                      <div className="mb-8 flex items-center md:mb-10 md:text-xl">
                        <p className="mr-6 text-custom-838383">Antonyms</p>
                        <div>
                          {meaning.antonyms.map((antonym, index) => (
                            <p
                              key={index}
                              className="ml-3 inline-block font-bold text-custom-A445ED [&:not(:last-child)]:after:content-[',']"
                            >
                              {antonym}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
          {/* Source */}
          <div className="flex flex-col gap-1 border-t-[1px] border-custom-E9E9E9 pt-6 pb-20 text-sm transition-[border-color] duration-300 dark:border-custom-3A3A3A md:flex-row md:items-center md:gap-6">
            <p className="text-custom-838383 underline underline-offset-2">
              Source
            </p>
            <a
              target={'_blank'}
              rel="noopener noreferrer"
              href={data[0].sourceUrls}
              className="flex gap-2 break-words underline underline-offset-2"
            >
              {data[0].sourceUrls}
              <img src={sourceImg} alt="Link to source" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Definition;
