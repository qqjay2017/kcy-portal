import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Autoplay } from "swiper";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>陕西八闽达电力设备有限公司</title>
        <meta
          name="description"
          content="陕西八闽达电力设备有限公司 八闽达电缆桥架"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-w-screen  min-h-screen flex-col items-center justify-center bg-white">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          height={443}
          spaceBetween={0}
          autoplay={{
            delay: 2500,
          }}
          navigation
          pagination={{ clickable: true }}
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
