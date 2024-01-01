export async function getServerSideProps() {
    const respon = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albumSatu = await respon.json();
    return {props: {albumSatu}}
}
export default function AlbumDetail({albumSatu}) {
    return (
      <div className="bg-[#6B8E23] z-50 w-[100%] v-[100vw] backdrop-blur p-0 m-0">
        <h1 className="text-[#FAEBD7] text-center text-3xl pt-10 font-bold">
          Page Detail All of Albums
        </h1>
        <p className="text-[#FAEBD7] py-10 text-left justify-start px-16">{JSON.stringify(albumSatu)}</p>
      </div>
    );
}
