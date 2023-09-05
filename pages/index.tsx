import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1>hello next.js</h1>
        <Link href="/about">move to index page</Link>
        <Link href="/projects">move to about page</Link>
        <Link href="/subpages/blahblah">move to info page</Link>
      </div>
    </main>
  );
}
