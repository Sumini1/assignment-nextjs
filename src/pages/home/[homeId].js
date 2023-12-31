export async function getServerSideProps(router) {
  const respon = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${router.params.homeId}`
  );
  const data = await respon.json();
  return { props: { data } };
}
export default function AlbumDetail({ data }) {
  return (
    <div className="bg-[#6B8E23] z-50 w-[100%] h-[100vh] backdrop-blur p-0 m-0 ">
      <div>
        <h1 className="text-[#FAEBD7] text-center text-3xl pt-10 font-bold">
          Page Detail Albums
        </h1>
        <p className="text-[#FAEBD7] py-10 text-center justify-start px-16">
          {JSON.stringify(data)}
        </p>
      </div>
    </div>
  );
}
