import { useState } from 'react';
import SearchInput from './SearchInput';
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import logoFullSvg from '../assets/logoFull.svg';

type Regions = 'United Kingdom' | 'Lithuania';
type Languages = 'English EU' | 'Lithuanian' | 'English PH';
type Currencies = 'EUR' | 'PLN';

function Header() {
  const [selectedRegion, setRegion] = useState<Regions>('Lithuania');
  const [selectedLanguage, setLanguage] = useState<Languages>('English EU');
  const [selectedCurrency, setCurrency] = useState<Currencies>('EUR');

  return (
    <header>
      <div>
        <img src={logoFullSvg} alt="eneba" />
      </div>
      <div>
        <SearchInput />
      </div>
      <div>
        <div className="circle flag"></div>
        <div>{selectedLanguage}</div>
        <div>{selectedCurrency}</div>
      </div>
      <div>
        <div>
          <HeartIcon />
        </div>
        <div>
          <ShoppingCartIcon />
        </div>
        <div>
          <UserIcon />
        </div>
      </div>
    </header>
  );
}

export default Header;
