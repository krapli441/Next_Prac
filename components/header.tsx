// components/Header.js
import Link from "next/link";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">홈</Link>
          </li>
          <li>
            <Link href="/about">소개</Link>
          </li>
          <li>
            <Link href="/search">검색</Link>
          </li>
          <li>
            <Link href="/services">서비스</Link>
          </li>
          {/* 다른 페이지로의 링크 추가 */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
