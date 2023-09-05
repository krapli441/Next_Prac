import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1>hello next.js</h1>
        <Link href="/first">move to index page</Link>
        <Link href="/about">move to about page</Link>
      </div>
    </main>
  );
}
