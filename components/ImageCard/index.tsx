import Image from 'next/image';import { KegiatanData, MasjidData, TalimData, Dummy } from '../../misc/Datas';

export const ImageCard = () => {
  const dummyDatas = Dummy;
  const keg = KegiatanData;
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="grid grid-cols-3 lg:grid-cols-4 md:gap-5 gap-2">
        {dummyDatas.map((data, index) => {
          // console.log(data.Dummy[index].imgUrl);
          return (
            <div
              className="relative w-[100px] h-[100px] md:w-[224px] md:h-[224px] sm:w-[150px] sm:h-[150px]"
              key={index}
            >
              <Image
                src={data.imgUrl}
                // src={data.imgPath}
                alt={`image index: ${index}`}
                layout={'fill'}
                objectFit={'cover'}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
{
}
