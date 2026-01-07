import { HeartIcon } from '@heroicons/react/24/outline';
import placeholderImg from '/temp/rdr2.jpg';
import KeyIcon from '../assets/key.svg?react';
import CashbackIcon from '../assets/cashback.svg?react';
import type { GameMetadataType } from '../types/types';

const gameMetadata = {
  name: 'Split FIction EA App Key (PC) GLOBAL',
  price: '49.99',
  discount: '0.18',
  whishlisted: '5999',
  app: 'EA App',
  region: 'GLOBAL',
};

function GameCard(gameMetadata: GameMetadataType) {
  return (
    <div className="w-[280px] flex flex-col text-left border-blue-400 border-1 text-[12px]">
      {/* IMAGE */}
      <div className="relative h-[390px]">
        <img
          src={placeholderImg}
          alt=""
          className="h-full w-full object-fill"
        />

        <div className="absolute bottom-9 bg-[#63E3C2] text-black font-bold p-1 flex items-center gap-2">
          <span>
            <CashbackIcon />
          </span>
          CASHBACK
        </div>
        <div className="absolute bottom-0 w-full backdrop-blur-sm text-center text-xs font-bold p-1">
          # <span>{gameMetadata.app}</span>
        </div>
      </div>
      {/* DETAILS */}
      <div className="p-4 bg-[#1F0A4D] flex flex-col justify-between h-full">
        <div className="font-extrabold">
          <div className="mb-1">{gameMetadata.name}</div>
          <div className="text-[#23C296]">{gameMetadata.region}</div>
        </div>
        <div className="font-bold">
          <div className="text-gray-500 font-extrabold">
            From <span className="line-through">€ {gameMetadata.price}</span>{' '}
            <span className="text-[#84E51E]">
              -{Number(gameMetadata.discount) * 100}%
            </span>
          </div>
          <div className="text-[22px] flex items-center gap-2">
            €{' '}
            {(
              Number(gameMetadata.price) -
              Number(gameMetadata.price) * Number(gameMetadata.discount)
            ).toFixed(2)}
            <span>
              <KeyIcon />
            </span>
          </div>
          <div className="text-[#84E51E] mb-1 font-extrabold">
            Cashback: €{' '}
            {(
              Number(gameMetadata.price) * Number(gameMetadata.discount)
            ).toFixed(2)}
          </div>
          <div className="flex items-center text-gray-500 -ml-0.5 gap-1">
            <span className="w-[16px]">
              <HeartIcon />
            </span>
            <span>{gameMetadata.whishlisted}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
