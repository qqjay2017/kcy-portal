import { type NextPage } from "next";
import Head from "next/head";

const Contract: NextPage = () => {
  return (
    <>
      <Head>
        <title>关于我们陕西八闽达电力设备有限公司</title>
        <meta
          name="description"
          content="陕西八闽达电力设备有限公司 八闽达电缆桥架"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-w-screen  min-h-screen flex-col items-center justify-center bg-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            联系我们
          </h1>
          <h1> 陕西八闽达电力设备有限公司</h1>
        </div>
      </main>
    </>
  );
};

export default Contract;
