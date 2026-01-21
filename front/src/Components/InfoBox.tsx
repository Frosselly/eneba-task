import type React from 'react';

type InfoBoxProps = {
  children: React.ReactNode;
};

function InfoBox(props: InfoBoxProps) {
  return (
    <div className="absolute left-1/2 -top-11 -translate-x-1/2 bg-black text-white p-2 rounded text-xs whitespace-nowrap">
      {props.children}
      <div
        className="
                    absolute
                    left-1/2 top-full
                    -translate-x-1/2
                    block
                    border-x-[10px] border-t-[10px] border-b-0
                    border-solid
                    border-x-transparent border-b-transparent
                    border-t-black
                  "
      />
    </div>
  );
}

export default InfoBox;
