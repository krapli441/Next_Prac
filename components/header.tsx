// components/Header.js
import Link from "next/link";

function Header() {
  return (
    <header>
      <div
        className="headerContainer"
        style={{
          display: "flex",
          alignItems: "center",
          width: "100vw",
          height: "10vh",
          backgroundColor: "gray",
        }}
      >
        <div className="title">
          <p>PREVIEWPAGE</p>
        </div>
        <div className="menus">
          <nav className="navigation-link">
            <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
              <li>
                <Link href="/">ABOUT</Link>
              </li>
              <li>
                <Link href="/">SERVICES</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
