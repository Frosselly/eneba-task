import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

function SearchInput() {
  return (
    <div className="search-input">
      <div>
        <MagnifyingGlassIcon />
      </div>
      <input type="text" name="search" id="search" />
      <button>
        <XMarkIcon />
      </button>
    </div>
  );
}

export default SearchInput;
