import EnebaIcon from './EnebaIcon';

function PromotionalHeader() {
  return (
    <>
      <header className="bg-purple-400 inset-0 w-dvw absolute h-min flex items-center justify-center py-2 gap-2">
        <div>
          <EnebaIcon />
        </div>
        <span>Games, Gift Cards, Top-Ups & More | Best Deals</span>
      </header>
      <div className="h-4" />
    </>
  );
}

export default PromotionalHeader;
