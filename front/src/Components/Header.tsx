import { useState } from 'react';
import SearchInput from './SearchInput';
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import LogoFullSvg from '../assets/logoFull.svg?react';

type Regions = 'United Kingdom' | 'Lithuania';
type Languages = 'English EU' | 'Lithuanian' | 'English PH';
type Currencies = 'EUR' | 'PLN';

function Header() {
  const [selectedRegion, setRegion] = useState<Regions>('Lithuania');
  const [selectedLanguage, setLanguage] = useState<Languages>('English EU');
  const [selectedCurrency, setCurrency] = useState<Currencies>('EUR');

  return (
    <header className="my-6 flex justify-between w-full items-center">
      <div className="flex gap-4 items-center">
        <div className="w-40">
          <LogoFullSvg />
        </div>
        <div>
          <SearchInput />
        </div>
        <div className="flex gap-1">
          <div className="circle flag"></div>
          <div>{selectedLanguage}</div>|<div>{selectedCurrency}</div>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="w-6">
          <HeartIcon />
        </div>
        <div className="w-6">
          <ShoppingCartIcon />
        </div>
        <div className="w-6">
          <UserIcon />
        </div>
      </div>
    </header>
  );
}

export default Header;
