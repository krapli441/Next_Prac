import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  return (
    <main>
      {/* <input value={name} onChange={(e) => setName(e.target.value)} /> */}
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <p>{username} 검색하기</p>
      <Link href={`/subpages/${username}`}>검색하기</Link>
      {/* <button type="button" onClick={() => router.push(`/subpages/${name}`)}>
        {name}으로 이동하기
      </button> */}
      <div>
        <h1>hello next.js</h1>
        <Link href="/about">move to index page</Link>
        <Link href="/projects">move to about page</Link>
        <Link href="/subpages/blahblah">move to info page</Link>
      </div>
      <div></div>
    </main>
  );
}
