// @react/client
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <p>imnotkrapli</p>
      </div>
      <div>
        <Link href="/search">
          <button>검색 이동</button>
        </Link>
        <Link href="/about">
          <button>about imnotkrapli</button>
        </Link>{" "}
        <Link href="/services">
          <button>제작된 서비스들</button>
        </Link>
      </div>
    </>
  );
}
