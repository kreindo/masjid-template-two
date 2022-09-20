import ImageBox from '../ImageBox';
import { KegiatanData, MasjidData, TalimData, Dummy } from '../../misc/Datas';
export const KegiatanBox = ({ title, children, dummy }) => {
  const datas = Dummy;
  return (
    <div className=" mb-[130px] relative  mx-8 sm:mx-0">
      <div className=" w-[50%]">
        <h1 className="text-white relative z-[2] font-bold text-[24px]">
          {title}
        </h1>
        <div className="w-10 h-1 bg-white my-[18px] "></div>
        <p className="text-white mb-[28px] text-[10px] sm:text-[14px]">
          {children}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[18px]">
        {datas.map((data, index) => {
          return (
            <ImageBox
              src={data.imgUrl}
              alt={`image ${index}`}
              key={index}
              dummy={dummy}
            />
          );
        })}
      </div>
      {/* <div className="w-[200px] h-[200px] relative">
        <Image
          src={`${
            dummy == false
              ? `${src}`
              : `${`https://picsum.photos/seed/${seed}/200/200`}`
          }`}
          alt={'image1'}
          layout={'fill'}
          objectFit={'cover'}
          onMouseEnter={detectMouseHover}
          onMouseLeave={detectMouseLeave}
        />
      </div> */}
    </div>
  );
};
