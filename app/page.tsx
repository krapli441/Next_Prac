import Link from "next/link";
import "../components/layout";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        <p className="text-2xl">imnotkrapli</p>
      </div>
      <div className="flex gap-3">
        <Link href="/search">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            github 검색
          </button>
        </Link>
        <Link href="/about">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            about imnotkrapli
          </button>
        </Link>{" "}
        <Link href="/services">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            제작된 서비스들
          </button>
        </Link>
      </div>
    </div>
  );
}
