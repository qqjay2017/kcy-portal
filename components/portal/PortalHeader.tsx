import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Dropdown } from "antd";
const Header1L = styled.div`
  height: 42px;
  position: relative;
  z-index: 10;
  max-width: 100%;
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03),
    0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
`;

const Header2L = styled.div`
  height: 114px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header3L = styled.div`
  height: 58px;
  background: #00b4db; /* fallback for old browsers */

  background: linear-gradient(to left, #9cecfb, #65c7f7, #0052d4);
`;

export const PortalHeader = () => {
  return (
    <header className=" h-[212px]">
      <Header1L></Header1L>
      <Header2L>
        <div>logo</div>
        <div>电话</div>
      </Header2L>
      <Header3L>
        <Dropdown menu={{ items: [] }}>
          <Link href={"/"}>网站首页</Link>
        </Dropdown>
        <Dropdown menu={{ items: [] }}>
          <Link href={"/"}>关于我们</Link>
        </Dropdown>
      </Header3L>
    </header>
  );
};
