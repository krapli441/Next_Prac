// components/Header.js
import Link from "next/link";

function Header() {
  return (
    <header>
      <div
        className="title"
        style={{
          display: "flex",
          alignItems: "center",
          width: "100vw",
          height: "10vh",
          backgroundColor: "gray",
        }}
      >
        <p>PREVIEWPAGE</p>
      </div>
    </header>
  );
}

export default Header;
