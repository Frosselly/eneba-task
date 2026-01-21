import { useState } from 'react';
import SearchInput from './SearchInput';
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import LogoFullSvg from '../assets/logoFull.svg?react';
import { useUserStore } from '../stores/userStore';
import { Link } from 'react-router';

// type Regions = 'United Kingdom' | 'Lithuania';
type Languages = 'English EU' | 'Lithuanian' | 'English PH';
type Currencies = 'EUR' | 'PLN';

function Header() {
  // const [selectedRegion, setRegion] = useState<Regions>('Lithuania');
  const [selectedLanguage, _setLanguage] = useState<Languages>('English EU');
  const [selectedCurrency, _setCurrency] = useState<Currencies>('EUR');

  const shoppingCart = useUserStore((state) => state.shoppingCart);

  return (
    <header className="my-6 flex items-center gap-4 w-full ">
      <div className="flex flex-1 items-center gap-4 ">
        <Link to="/" title="Eneba" className="w-40 max-[900px]:w-28">
          <LogoFullSvg />
        </Link>
        <div className="flex-1 max-w-[30em] max-[900px]:hidden">
          <SearchInput />
        </div>
        <div
          className="text-[14px] flex gap-1 max-[900px]:hidden hover:text-yellow cursor-pointer items-center"
          title="Region settings"
          onClick={() => {}}
        >
          <div className="w-5">
            <img src="/flags/lithuania.svg" alt="" />
          </div>
          <span>{selectedLanguage}</span>|<span>{selectedCurrency}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 ">
        {/* Hidden search */}
        <div
          className="hidden max-[900px]:block w-6 hover:text-yellow"
          title="Search"
        >
          <MagnifyingGlassIcon />
        </div>
        <div className="w-6 hover:text-yellow" title="Wishlist">
          <HeartIcon />
        </div>
        <div className="relative">
          {shoppingCart.length > 0 && (
            <div
              className="
          absolute -top-2 -right-2
          bg-dark-red text-white
          rounded-full w-5 h-5 
          flex items-center justify-center text-xs"
            >
              {shoppingCart.length}
            </div>
          )}
          <div className="w-6 hover:text-yellow" title="Shopping Cart">
            <ShoppingCartIcon />
          </div>
        </div>
        <div className="w-6 hover:text-yellow" title="Account">
          <UserIcon />
        </div>
      </div>
    </header>
  );
}

export default Header;
