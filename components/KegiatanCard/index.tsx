import { ImageCard } from 'components/ImageCard';
export const KegiatanCard = () => {
  return (
    <>
      <div className="flex flex-col gap-7">
        <h1 className="text-[48px] sm:text-3xl font-bold">
          Kegiatan <br /> Masjid Nurussalam
        </h1>
        <div className="w-[95px] h-[4px] bg-white"></div>
        <p className="text-[10px] sm:text-[14px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
          voluptatem tempore recusandae totam, fugiat vero, veritatis facilis
          consectetur animi incidunt nobis sequi iusto? Minus magni quia fugiat,
          architecto repellat voluptate.
        </p>
      </div>
      <ImageCard />
      <div className="mt-[100px] w-10 h-10 bg-red-300"></div>
    </>
  );
};
