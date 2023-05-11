import React from "react";

import Link from "next/link";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";

export const PortalHeader = () => {
  const aboutItem: MenuProps["items"] = [
    {
      label: (
        <Link className="NavLink" href={"/about"}>
          公司简介
        </Link>
      ),
      key: "0",
    },
  ];
  const supplyItem: MenuProps["items"] = [
    {
      label: (
        <Link className="NavLink" href={"/supply"}>
          产品中心11111
        </Link>
      ),
      key: "0",
    },
  ];
  return (
    <header className=" h-[212px]">
      <div className="Header1L"></div>
      <div className="Header2L">
        <div>阿柯logo</div>
        <div>阿柯电话</div>
      </div>
      <div className="Header3L">
        <div className="Header3L-Inner">
          <Link className="NavLink" href={"/"}>
            网站首页
          </Link>
          <Dropdown
            menu={{
              items: aboutItem,
            }}
          >
            <Link className="NavLink" href={"/about"}>
              关于我们
            </Link>
          </Dropdown>
          <Dropdown
            menu={{
              items: supplyItem,
            }}
          >
            <Link className="NavLink" href={"/about"}>
              产品中心
            </Link>
          </Dropdown>
          <Link className="NavLink" href={"/about"}>
            工程案例
          </Link>
          <Link className="NavLink" href={"/news"}>
            新闻中心
          </Link>
          <Link className="NavLink" href={"/honor"}>
            企业资质
          </Link>
          <Link className="NavLink" href={"/contact"}>
            联系我们
          </Link>
        </div>
      </div>
    </header>
  );
};
