import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

function SearchInput() {
  return (
    <div className="flex items-center py-[0.5em] px-[0.8em] border-2 border-white w-max gap-2">
      <div className="w-6 flex items-center justify-center">
        <MagnifyingGlassIcon className="w-full h-full text-white" />
      </div>

      <input
        type="text"
        name="search"
        id="search"
        className="bg-transparent outline-none border-none caret-white text-[1.3em] text-white"
      />

      <button className="w-6 flex items-center justify-center">
        <XMarkIcon className="w-full h-full text-white" />
      </button>
    </div>
  );
}

export default SearchInput;
