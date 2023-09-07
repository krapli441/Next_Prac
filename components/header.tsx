// components/Header.js
import Link from "next/link";
import "../style.css";

function Header() {
  return (
    <header className="flex w-full h-32 text-center items-center header-text">
      <div className="w-2/6">
        <p className="text-5xl font-mono">SOMETHING SHIT</p>
      </div>
      <div className="w-4/6">
        <ul className="list-none flex gap-20 items-center mt-4 text-2xl">
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/services">SERVICE</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
