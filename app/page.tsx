import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <p>imnotkrapli</p>
        <Link href={"/about"}>About me</Link>
      </div>
    </>
  );
}
