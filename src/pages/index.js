import Link from "next/link";

export async function getServerSideProps() {
  const respon = await fetch(`https://jsonplaceholder.typicode.com/albums`);
  const album = await respon.json();
  return { props: { album } };
}
export default function HomePage({ album }) {
  return (
    <>
      <div className="bg-[#6B8E23] gap-2 p-10 space-x-5 text-[#87CEFA] text-xl font-bold">
        <Link href={"#"}>Home</Link>
        <Link href={"/home"}>Albums</Link>
      </div>
      <div className=" bg-[#6B8E23]">
        <h1 className="text-center py-10 font-bold text-[#FAEBD7] text-3xl">
          List of Albums
        </h1>

        <div className="grid grid-cols-2 gap-2">
          {album.map((album) => (
            <div key={album.id} className="pl-40 mb-4 text-[#FAEBD7] font-bold">
              <p>{album.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
