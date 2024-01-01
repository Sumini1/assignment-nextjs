import Image from "next/image";

export async function getStaticPaths() {
  const respon = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const albums = await respon.json();
  const albumIds = albums.map((album) => ({
    params: { albumId: String(album.id) },
  }));
  return { paths: albumIds, fallback: false };
}
export async function getStaticProps(router) {
  const respon = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${router.params.albumId}`
  );
  const albumSatu = await respon.json();
  return { props: { albumSatu } };
}

export default function albumDetail({ albumSatu }) {
  return (
    <div className="bg-[#6B8E23] z-50 w-[100%] h-[100vh] backdrop-blur p-0 m-0 ">
      <h1 className="text-center py-10 text-[#FAEBD7] font-bold text-3xl">
        Photo Album Detail
      </h1>
      <div className="text-balance pl-64 text-[#FAEBD7] font-bold">
        <div className="flex items-center ">
          <Image
            className="items-center rounded-full"
            src={albumSatu.thumbnailUrl}
            width={200}
            height={200}
          />
          <div className="mr-51 gap-5 pl-16 py-13 items-center">
            <p>ID: {albumSatu.id}</p>
            <p>Title: {albumSatu.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
