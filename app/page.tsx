import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1>hello next.js</h1>
        <Link href="/first">move to first page</Link>
        <Link href="/second">move to second page</Link>
        <Link href="/third">move to third page</Link>
      </div>
    </main>
  );
}
