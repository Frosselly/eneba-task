import GameCard from './Components/GameCard';
import Header from './Components/Header';
import PromotionalHeader from './Components/PromotionalHeader';
import type { GameMetadataType } from './types/types';

const games: GameMetadataType[] = [
  {
    name: 'Split Fiction EA App Key (PC) GLOBAL',
    price: 49.99,
    discount: 0.18,
    whishlisted: 5999,
    app: 'EA App',
    region: 'GLOBAL',
  },
  {
    name: 'Dragon Age: Dreadwolf EA App Key (PC) GLOBAL',
    price: 69.99,
    discount: 0.22,
    whishlisted: 8421,
    app: 'EA App',
    region: 'GLOBAL',
  },
  {
    name: 'FIFA 25 EA App Key (PC) GLOBAL',
    price: 79.99,
    discount: 0.15,
    whishlisted: 15432,
    app: 'EA App',
    region: 'GLOBAL',
  },
  {
    name: 'Need for Speed: Unbound EA App Key (PC) GLOBAL',
    price: 59.99,
    discount: 0.35,
    whishlisted: 11204,
    app: 'EA App',
    region: 'GLOBAL',
  },
  {
    name: 'Star Wars Jedi: Survivor EA App Key (PC) GLOBAL',
    price: 69.99,
    discount: 0.4,
    whishlisted: 18976,
    app: 'EA App',
    region: 'GLOBAL',
  },
];

function App() {
  return (
    <>
      <PromotionalHeader />
      <Header />
      <article>
        <section>
          <div className="text-left my-4">
            Resutls found: <span className="font-bold">1</span>
          </div>
          <div className="flex gap-5 flex-wrap">
            {games.map((game) => {
              return (
                <GameCard
                  name={game.name}
                  price={game.price}
                  discount={game.discount}
                  whishlisted={game.whishlisted}
                  app={game.app}
                  region={game.region}
                />
              );
            })}
          </div>
        </section>
      </article>
    </>
  );
}

export default App;
