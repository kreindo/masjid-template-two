import { useState } from 'react';import Image from 'next/image';
const Index = ({ src, dummy, alt }) => {
  let [hover, setHover] = useState(false);

  const detectMouseHover = () => {
    console.log('hovered');
    setHover(() => {
      return (hover = true);
    });
  };

  const detectMouseLeave = () => {
    console.log('mouse left :(');
    setHover(() => {
      return (hover = false);
    });
  };
  return (
    <>
      <div className="w-[150px] h-[150px] relative">
        {dummy == false ? (
          <Image
            src={src}
            alt={alt}
            layout={'fill'}
            objectFit={'cover'}
            onMouseEnter={detectMouseHover}
            onMouseLeave={detectMouseLeave}
          />
        ) : (
          <div className="bg-gray-300 w-[150px] h-[150px] flex items-center justify-center text-gray-400">
            <p>no image</p>
          </div>
        )}
      </div>
      {/* {hover === true ? (
        <div className="">
          <h3 className="">{msg}</h3>
        </div>
      ) : (
        <div></div>
      )} */}
    </>
  );
};

export default Index;
