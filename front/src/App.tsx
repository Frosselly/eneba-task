import GameCard from './Components/GameCard';
import Header from './Components/Header';
import PromotionalHeader from './Components/PromotionalHeader';

function App() {
  return (
    <>
      <PromotionalHeader />
      <Header />
      <article>
        <GameCard />
      </article>
    </>
  );
}

export default App;
