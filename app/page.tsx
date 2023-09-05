import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1>hello next.js</h1>
        <Link href="/about">move to about page</Link>
      </div>
    </main>
  );
}
