import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import KeyIcon from '../assets/key.svg?react';
import CashbackIcon from '../assets/cashback.svg?react';
import type { GameMetadataType } from '../types/types';
import { useState } from 'react';
import InfoBox from './InfoBox';
import { useUserStore } from '../stores/userStore';

function GameCard(gameMetadata: GameMetadataType) {
  const [displayKeyTooltip, setDisplayKeyTooltip] = useState(false);

  const addToCart = useUserStore((state) => state.addToCart);
  const toggleWishlist = useUserStore((state) => state.toggleWishlist);
  const wishlist = useUserStore((state) => state.wishlist);
  const isInWishlist = wishlist.includes(gameMetadata.id);

  return (
    <div
      title={gameMetadata.name}
      className="
    group relative
    flex flex-col
    text-left text-[12px]
    overflow-hidden
    h-[520px]         
    bg-primary-dark
  "
    >
      {/* IMAGE */}
      <div className="relative h-[360px]  shrink-0">
        <div
          onClick={() => toggleWishlist(gameMetadata.id)}
          className="
            z-10
            absolute right-3 top-0.5
            flex flex-col items-center
            cursor-pointer
            group/wishlist
          "
        >
          <svg
            width="60"
            height="90"
            viewBox="0 0 60 90"
            xmlns="http://www.w3.org/2000/svg"
            className={`
            transition-colors duration-200
            ${isInWishlist ? 'fill-green-600' : 'fill-transparent'}
            group-hover/wishlist:fill-black/60
          `}
          >
            <path
              d="M59.5 0.5V88.6016L30.3867 53.1123L30 52.6406L29.6133 53.1123L0.5 88.6016V0.5H59.5Z"
              className="
                stroke-gray-400
                transition-colors duration-200
                group-hover/wishlist:stroke-white
              "
              strokeWidth="1"
            />
          </svg>

          <div
            className={`
              absolute top-3 w-8 transition-colors
              ${isInWishlist ? 'text-white' : 'text-gray-400'}
              group-hover/wishlist:text-white
            `}
          >
            {isInWishlist ? <HeartIconSolid /> : <HeartIcon />}
          </div>
        </div>

        <div
          className=" absolute h-full w-full 
        group-hover:backdrop-brightness-50
        transition-all duration-300
        "
        ></div>
        <img
          src={gameMetadata.cover}
          alt=""
          className="h-full w-full object-fill "
        />
      </div>

      {/* DETAILS - Moves up on hover */}
      <div
        className="
       
    absolute bottom-0 left-0 right-0
    bg-primary-dark
    transition-transform duration-300 ease-in-out
    translate-y-[120px]
    group-hover:translate-y-0
  "
      >
        <div className="absolute -top-16 bg-teal text-black font-bold p-1 flex items-center gap-2">
          <span>
            <CashbackIcon />
          </span>
          CASHBACK
        </div>
        <div className="absolute -top-5 w-full backdrop-blur-sm text-center text-xs font-bold p-1">
          # <span>{gameMetadata.app}</span>
        </div>
        <div className="font-extrabold px-4 pt-4">
          <div
            className="
      flex flex-col gap-1
      h-[4.6em]
    "
          >
            <div className="line-clamp-2 leading-tight">
              {gameMetadata.name}
            </div>

            <div className="text-[#23C296] leading-tight">
              {gameMetadata.region}
            </div>
          </div>
        </div>
        <div className="flex flex-col  px-4 pb-4">
          <div className="font-bold">
            <div className="text-dark-gray font-extrabold">
              From <span className="line-through">€ {gameMetadata.price}</span>{' '}
              <span className="text-green">
                -{(Number(gameMetadata.discount) * 100).toFixed(0)}%
              </span>
            </div>
            <div className="text-[22px] flex items-center gap-2 relative">
              €{' '}
              {(
                Number(gameMetadata.price) -
                Number(gameMetadata.price) * Number(gameMetadata.discount)
              ).toFixed(2)}
              <div className="relative inline-flex">
                <span
                  onMouseEnter={() => setDisplayKeyTooltip(true)}
                  onMouseLeave={() => setDisplayKeyTooltip(false)}
                  className="relative"
                >
                  <KeyIcon />
                </span>

                {displayKeyTooltip && (
                  <InfoBox>Digital key delivered instantly</InfoBox>
                )}
              </div>
            </div>
            <div className="text-green mb-1 font-extrabold">
              Cashback: €{' '}
              {(
                Number(gameMetadata.price) * Number(gameMetadata.discount)
              ).toFixed(2)}
            </div>
            <div className="flex items-center text-dark-gray -ml-0.5 gap-1">
              <span className="w-[16px]">
                <HeartIcon />
              </span>
              <span>{gameMetadata.whishlisted}</span>
            </div>
          </div>
          {/* BUTTONS - Part of details */}
          <div className="pb-4 pt-2 flex flex-col gap-2">
            <button
              onClick={() => addToCart(gameMetadata.id)}
              className="w-full bg-yellow text-black py-2 mt-2 font-bold hover:bg-[#F0A613] cursor-pointer"
            >
              Add to cart
            </button>
            <button
              onClick={() => {}}
              className="w-full border-2 border-white text-white py-2 mt-2 font-bold hover:border-yellow hover:bg-[#160736] cursor-pointer"
            >
              Explore options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
