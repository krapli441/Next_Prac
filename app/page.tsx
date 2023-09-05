import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1>hello next.js</h1>
        <Link href="/first" prefetch>
          move to first page
        </Link>
        <Link href="/second" prefetch>
          move to second page
        </Link>
        <Link href="/third" prefetch>
          move to third page
        </Link>
      </div>
    </main>
  );
}
