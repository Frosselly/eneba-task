import { HeartIcon } from '@heroicons/react/24/outline';
import placeholderImg from '/temp/rdr2.jpg';

function GameCard() {
  return (
    <div className="w-[280px] flex flex-col text-left border-blue-400 border-1 text-sm">
      <div className="relative h-[360px]">
        <img
          src={placeholderImg}
          alt=""
          className="h-full w-full object-fill"
        />

        <div className="absolute bottom-9 bg-[#63E3C2] text-black font-bold p-1">
          # <span>CASHBACK</span>
        </div>
        <div className="absolute bottom-0 w-full backdrop-blur-sm text-center text-xs font-bold p-1">
          # <span>EA App</span>
        </div>
      </div>
      <div className="p-4 bg-[#1F0A4D] flex flex-col gap-4">
        <div className="font-bold">
          <div className="mb-1">Split FIction EA App Key (PC) GLOBAL</div>
          <div className="text-teal-600">GLOBAL</div>
        </div>
        <div className="font-bold">
          <div className="text-gray-500">
            From <span className="line-through">€ 49.99</span>{' '}
            <span className="text-green-400">-18%</span>
          </div>
          <div className="text-xl">
            <span>€ 49.98</span> -key-logo-
          </div>
          <div className="text-green-400 mb-1">Cashback: € 4.50</div>
          <div className="flex items-center text-gray-500 -ml-1 gap-1">
            <HeartIcon />
            <span>5999</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
