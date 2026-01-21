import { useEffect } from 'react';
import GameCard from '../Components/GameCard';
import { Link, useSearchParams } from 'react-router';
import { useGamesApi } from '../api/games';
import GhostIcon from '../assets/ghost.svg?react';

function GamePage() {
  // const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('search') || '';
  const page = Number(searchParams.get('page') ?? 1);
  const limit = 6;

  const { data: gamesData, isLoading } = useGamesApi(page, limit, searchQuery);

  useEffect(() => {
    console.log('Fetched games:', gamesData);
  }, [gamesData, isLoading]);

  if (isLoading) {
    return <div className="loader mx-auto my-8"></div>;
  }

  if (
    (gamesData === undefined || gamesData.data.length === 0) &&
    searchQuery.length > 0
  ) {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-2 my-20">
        <div>
          <GhostIcon />
        </div>
        <div> Sorry, we could not find any match to:</div>
        <div className="font-extrabold">{searchQuery}</div>
        <div>
          Please check your spelling, try different keywords, or browse our
          product catalog.
        </div>
        <Link
          to="/"
          className="bg-yellow hover:bg-amber-600 text-black font-bold py-2 px-4  inline-block mt-4"
        >
          Go to Home Page
        </Link>
      </div>
    );
  } else if (gamesData === undefined || gamesData.data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-2 my-20">
        <div>
          <GhostIcon />
        </div>
        <div> Sorry, we could not find any games available at the moment.</div>
        <div>Please check back later.</div>
        <Link
          to="/"
          className="bg-yellow hover:bg-amber-600 text-black font-bold py-2 px-4  inline-block mt-4"
        >
          Go to Home Page
        </Link>
      </div>
    );
  }

  return (
    <>
      <article>
        <section>
          <div className="text-left my-4">
            Resutls found:{' '}
            <span className="font-bold">{gamesData?.recordCount}</span>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-5">
            {gamesData?.data.map((game) => {
              return (
                <GameCard
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  price={game.price}
                  discount={game.discount}
                  whishlisted={game.whishlisted}
                  app={game.app}
                  region={game.region}
                  cover={
                    game.name.toLowerCase().includes('split fiction')
                      ? '/temp/rdr2.jpg'
                      : '/temp/sf.jpg'
                  }
                />
              );
            })}
          </div>
          <div className="w-full">
            <div className="my-8 flex justify-center font-bold">
              <button
                title="Previous Page"
                className={
                  ' border border-white text-white px-2 hover:bg-primary-dark hover:border-yellow-500 transition-colors' +
                  (page === 1
                    ? ' opacity-50 cursor-not-allowed'
                    : 'cursor-pointer')
                }
                disabled={page === 1}
                onClick={() => setSearchParams({ page: String(page - 1) })}
              >
                {'<'}
              </button>
              <div className="mx-4 flex items-center gap-2">
                {(() => {
                  const totalPages = gamesData
                    ? Math.ceil(gamesData.recordCount / limit)
                    : 1;
                  const nodes: React.ReactElement[] = [];
                  const pageBtn = (n: number) => (
                    <button
                      key={'page-btn-' + n}
                      className={
                        'px-3 py-1 rounded-md ' +
                        (page === n
                          ? 'text-yellow-500 font-bold cursor-default'
                          : 'cursor-pointer hover:text-yellow-500')
                      }
                      onClick={() => setSearchParams({ page: String(n) })}
                    >
                      {n}
                    </button>
                  );

                  const dots = (key: string, target: number) => (
                    <button
                      key={'page-dots-' + key}
                      className="px-2 select-none cursor-pointer hover:text-yellow-500"
                      onClick={() =>
                        setSearchParams({
                          page: String(
                            Math.max(1, Math.min(totalPages, target))
                          ),
                        })
                      }
                    >
                      ...
                    </button>
                  );
                  if (totalPages <= 5) {
                    for (let i = 1; i <= totalPages; i++)
                      nodes.push(pageBtn(i));
                    return nodes;
                  }
                  //start
                  else if (page <= 2) {
                    for (let i = 1; i <= 3; i++) nodes.push(pageBtn(i));
                    nodes.push(dots('end-dots', 4));
                    nodes.push(pageBtn(totalPages));
                  }
                  // start + 2
                  else if (page === 3) {
                    for (let i = 1; i <= 4; i++) nodes.push(pageBtn(i));
                    nodes.push(dots('end-dots', 5));
                    nodes.push(pageBtn(totalPages));
                  }
                  //end
                  else if (page >= totalPages - 1) {
                    nodes.push(pageBtn(1));
                    nodes.push(dots('start-dots', totalPages - 3));
                    for (let i = totalPages - 2; i <= totalPages; i++)
                      nodes.push(pageBtn(i));
                  }
                  // end -2
                  else if (page == totalPages - 2) {
                    nodes.push(pageBtn(1));
                    nodes.push(dots('start-dots', totalPages - 4));
                    for (let i = totalPages - 3; i <= totalPages; i++)
                      nodes.push(pageBtn(i));
                  }
                  // middle
                  else {
                    nodes.push(pageBtn(1));
                    nodes.push(dots('left-dots', page - 2));
                    for (let i = page - 1; i <= page + 1; i++)
                      nodes.push(pageBtn(i));
                    nodes.push(dots('right-dots', page + 2));
                    nodes.push(pageBtn(totalPages));
                  }

                  return nodes;
                })()}
              </div>
              <button
                disabled={
                  gamesData && page >= Math.ceil(gamesData.recordCount / limit)
                }
                onClick={() => setSearchParams({ page: String(page + 1) })}
                title="Next Page"
                className={
                  ' border border-white text-white px-2 hover:bg-primary-dark hover:border-yellow-500 transition-colors' +
                  (page === Math.ceil(gamesData.recordCount / limit)
                    ? ' opacity-50 cursor-not-allowed'
                    : 'cursor-pointer')
                }
              >
                {'>'}
              </button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export default GamePage;
