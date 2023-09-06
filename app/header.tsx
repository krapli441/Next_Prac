import React, { useState } from "react";
import Link from "next/link";

import css from "styled-jsx/css";

const HeaderCSS = css`
  .header-wrapper {
    padding: 14px 14px; 
    background-color: #24292e;
    line-height: 0;
    display: flex;
    align-items: center;
  }

  .header-navigations a {
    color:white;
    margin-right: 16px;
    font-size: 14px
  }  }
`;

const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <p>imnotkrapli</p>
        <Link href={"/about"}>about</Link>
        <Link href={"/services"}>services</Link>
      </div>
    </>
  );
};

export default Header;
