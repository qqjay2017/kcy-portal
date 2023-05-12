import React, { useEffect, useState } from "react";

import Link from "next/link";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import Image from "next/image";
import dayjs from "dayjs";

export const PortalHeader = () => {
  const [curTime, setCurTime] = useState(new Date().valueOf());
  const aboutItem: MenuProps["items"] = [
    {
      label: <Link href={"/about"}>公司简介</Link>,
      key: "0",
    },
  ];
  const supplyItem: MenuProps["items"] = [
    {
      label: <Link href={"/supply"}>产品中心11111</Link>,
      key: "0",
    },
  ];
  const updateCurTime = () => {
    setCurTime(new Date().valueOf());
    setTimeout(() => {
      updateCurTime();
    }, 1000);
  };
  useEffect(() => {
    updateCurTime();
    return () => {
      console.log(123);
    };
  }, []);
  return (
    <header className=" h-[212px]">
      <div className="Header1L ">
        <div className="flex-1">
          {dayjs(curTime).format("YYYY-MM-DD HH:mm:ss")}
        </div>
      </div>
      <div className="Header2L">
        <div>
          <Image src={"/images/logo.png"} width={120} height={120} alt="" />
        </div>
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
