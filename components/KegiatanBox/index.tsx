import ImageBox from '../ImageBox';import { KegiatanData, MasjidData, TalimData, Dummy } from '../../misc/Datas';
export const KegiatanBox = ({ title, children, dummy }) => {
  const datas = Dummy;
  return (
    <div className=" mb-[130px] relative">
      <div className=" w-[50%]">
        <h1 className="text-white relative z-[2] font-bold text-[24px] mb-[14px]">
          {title}
        </h1>
        <p className="text-white font-medium text-[13px] mb-[28px]">
          {children}
        </p>
      </div>
      <div className="flex flex-wrap gap-[18px]">
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
