import { PortalHeader } from "components/portal/PortalHeader";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Home: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>公司简介-啊柯公司</title>
        <meta name="description" content="huang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-w-screen  min-h-screen flex-col items-center justify-center bg-white">
        <Swiper
          height={443}
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="Image-Wrap">
              <Image fill src={"/images/1.jpg"} alt="1"></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Image-Wrap">
              <Image fill src={"/images/2.jpg"} alt="1"></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Image-Wrap">
              <Image fill src={"/images/3.jpg"} alt="1"></Image>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  );
};

export default Home;
