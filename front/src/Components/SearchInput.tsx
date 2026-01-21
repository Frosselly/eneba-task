import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useSearchParams } from 'react-router';

function SearchInput() {
  const [text, setText] = useState('');
  const [_searchParams, setSearchParams] = useSearchParams();

  const onSearchCall = (text: string) => {
    setSearchParams({ search: text });
  };

  return (
    <div
      className="flex items-center gap-2
                    py-[0.5em] px-[0.8em]
                    border-2 border-white
                    w-full"
    >
      <div className="w-6 flex items-center justify-center">
        <MagnifyingGlassIcon className="w-full h-full text-white" />
      </div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearchCall(text);
          }
        }}
        className="flex-1 bg-transparent
                   outline-none border-none
                   caret-white text-[1.3em] text-white"
      />

      {text && (
        <button
          onClick={() => {
            setText('');
            onSearchCall('');
          }}
          className="w-6 flex items-center justify-center
                      "
        >
          <XMarkIcon className="w-full h-full text-gray-300 hover:text-white transition-all transition-duration-[200ms] hover:cursor-pointer" />
        </button>
      )}
    </div>
  );
}

export default SearchInput;
