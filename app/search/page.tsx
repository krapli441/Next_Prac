import React, { useState } from "react";
import Link from "next/link";

const Search = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <label>
        username:
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <p>{username} 검색하기</p>
      <Link href={`/users/${username}`}>
        <button>검색</button>
      </Link>
    </div>
  );
};

export default Search;
