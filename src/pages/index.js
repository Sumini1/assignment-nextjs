import Link from "next/link";

export async function getServerSideProps() {
  const respon = await fetch(`https://jsonplaceholder.typicode.com/albums`);
  const album = await respon.json();
  return { props: { album } };
}
export default function HomePage({ album }) {
  return (
    <>
      <div className=" bg-[#6B8E23]">
        <h1 className="text-center py-10 font-bold text-[#FAEBD7] text-3xl">
          List of Albums
        </h1>

        <div className="grid grid-cols-2 gap-2">
          {album.map((album) => (
            <Link
              href={`/home/${album.id}`}
              key={album.id}
              className="pl-40 mb-4 text-[#FAEBD7] font-bold"
            >
              <p>{album.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
