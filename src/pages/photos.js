import Image from "next/image";

export async function getServerSideProps() {
  const respon = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const photos = await respon.json();
  return { props: { photos } };
}
export default function HomePage({ photos }) {
  return (
    <>
      <div className=" bg-[#6B8E23] z-50 w-[100%] v-[100vw] backdrop-blur p-0 m-0 h-screen">
        <h1 className="text-center py-12 font-bold text-[#FAEBD7] text-3xl">
          List of Photos
        </h1>

        <div className="grid grid-cols-2 gap-1">
          {photos.map((photos) => (
            <div
              key={photos.id}
            
              className="pl-40 pr-55 ml-28 mb-5 text-[#FAEBD7] font-bold rounded-md"
            >
              <Image className="rounded-[20px] " src={photos.thumbnailUrl} 
              width={170}
              height={170}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
