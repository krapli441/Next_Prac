import Link from "next/link";
import { useRouter } from "next/router";

export default function Info() {
  const { query } = useRouter();
  return (
    <div>
      <h1>{query.title}</h1>
      <h2>as you know, this page's title is {query.title}</h2>
      <Link href="/">move to main page</Link>
    </div>
  );
}
