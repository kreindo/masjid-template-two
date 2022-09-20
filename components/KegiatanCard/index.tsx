import { ImageCard } from 'components/ImageCard';
export const KegiatanCard = () => {
  return (
    <>
      <div className="flex mx-8 sm:mx-0">
        <div className="mb-[50px] flex justify-center items-center text-center">
          <h1 className="text-white text-3xl font-bold">
            Galeri Masjid Nurussalam
          </h1>
        </div>
      </div>
      <ImageCard />
    </>
  );
};
