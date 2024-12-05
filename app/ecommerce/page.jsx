import React from 'react'
import Header_01 from '@/components/header/Header_01'
import Footer_01 from '@/components/footer/Footer_01'
import Link from 'next/link';
import Image from 'next/image';
function Ecommerce() {
  return (
    <>
      <Header_01 />
      <main>
        {/*...::Breadcrum section::..... */}
        <section id="section-breadcrumb">
          {/* Section Spacer */}
          <div className="breadcrumb-wrapper">
            {/* Section Container */}
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title">E-Commerce</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>E-Commerce</li>
                </ul>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::Breadcrum section::..... */}
        <section className="">
          {/* <div className="h-[70vh] text-center col-span-4">
            
          </div>
          <div className='col-span-2'>
            <Image src="/assets/c.png" alt="na" width={400} height={400} />
          </div> */}
          <div className="relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px]  pb-20  lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24  xxl:pb-[133px] ">
            <div className="global-container relative text-center h-[100vh] flex justify-center items-center">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/assets/v1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h1 className="text-5xl md:text-8xl md:leading-[2] font-bold animate-text z-50">
                Launching Soon
              </h1>

              {/*g container */}
            </div>
          </div>
        </section>
      </main>
      <Footer_01 />
    </>
  );
}

export default Ecommerce