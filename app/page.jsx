"use client";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useAccordion from "@/components/hooks/useAccordion";
import useTabs from "@/components/hooks/useTabs";
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";
import { motion } from "framer-motion";



function Home() {
  const videoRef = useRef(null);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.5; // Increase speed to 1.5x
    }
  };
  const [activeIndex, handleAccordion] = useAccordion(0);

  const [activeTab, handleTab] = useTabs();

  return (
    <div className="page-wrapper relative z-[1] bg-white">
      {/*...::: Header Start :::... */}
      <Header_01 />
      {/*...::: Header End :::... */}
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Hero Section Start :::... */}
        <section id="section-hero">
          <div className="relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-colorLinenRuffle pb-20 pt-28 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-32 xl:pt-40 xxl:pb-[133px] xxl:pt-[195px]">
            <div className="global-container">
              <div className="mb-14 flex flex-col items-center text-center lg:mb-20">
                <h1 className="jos slide-from-bottom mb-6 max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px]">
                  Democratizing data analytics & automation with AI
                </h1>
                <p className="jos slide-from-bottom mb-11 max-w-[700px]  font-semibold sm:text-xl xl:max-w-[980px]">
                  Unlock the full potential of your business data with AI-driven
                  analytics and automation, delivering fine-tuned, privacy-first
                  solutions to empower personalized, data-informed
                  decision-making.
                </p>
                <div
                  className="jos flex flex-wrap justify-center gap-6"
                  data-jos_animation="fade"
                >
                  <Link
                    href="#"
                    className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                  >
                    Get started for free
                  </Link>
                  <Link
                    href="#"
                    className="button rounded-[50px] border-2 border-black bg-transparent py-4 text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
              <div
                className="jos hero-img overflow-hidden rounded-2xl bg-black"
                data-jos_animation="zoom"
              >
                <video
                  ref={videoRef}
                  src="https://res.cloudinary.com/dycvkezau/video/upload/v1726466036/demo-chat-rec-1_mto9ry.mp4"
                  autoPlay
                  loop
                  muted
                />
              </div>

              {/* <div className="my-10 h-[1px] w-full bg-[#DBD6CF] lg:my-16 xl:my-20"></div> */}
            </div>
            <div className="orange-gradient-1 absolute -right-[150px] top-[370px] -z-[1] h-[500px] w-[500px] animate-spin rounded-[500px]"></div>

            <div className="orange-gradient-2 absolute right-[57px] top-[620px] -z-[1] h-[450px] w-[450px] animate-spin rounded-[450px]"></div>
          </div>
        </section>
        {/*...::: Hero Section End :::... */}

        {/*...::: Service Section Start :::... */}
        <section id="section-service">
          {/* Section Spacer */}
          <div className="pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
            {/* Section Container */}
            <div className="global-container">
              {/* Section Content Block */}
              <div className="jos mb-10 lg:mb-16 xl:mb-20">
                <div className="md:max-w-sm lg:max-w-xl xl:max-w-[746px]">
                  <h2>Core features that make it valuable</h2>
                </div>
              </div>
              {/* Section Content Block */}
              {/* Service List */}
              <ul className="jos grid grid-cols-1 gap-[2px] overflow-hidden rounded-[10px] border-2 border-black bg-black sm:grid-cols-2 lg:grid-cols-4">
                {/* Service Item */}
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-colorOrangyRed">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-black-1.svg"
                      alt=""
                      width="70"
                      height="70"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-orange-1.svg"
                      alt="service-icon-orange-1"
                      width="70"
                      height="70"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link
                      href="/service-details"
                      className="hover:text-[#00b48d]"
                    >
                      Privacy
                    </Link>
                  </h3>

                  <p className="mb-12 duration-300 group-hover:text-white">
                    On-premise, private models keep your data secure within your
                    network.
                  </p>

                  <Link
                    href="/service-details"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-colorOrangyRed">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-black-2.svg"
                      alt="service-icon-black-2"
                      width="70"
                      height="70"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-orange-2.svg"
                      alt="service-icon-orange-1"
                      width="70"
                      height="70"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>

                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link
                      href="/service-details"
                      className="hover:text-[#00b48d]"
                    >
                      Personalization
                    </Link>
                  </h3>

                  <p className="mb-12 duration-300 group-hover:text-white">
                    AI tailored to your business data for a relevant experience.
                  </p>

                  <Link
                    href="/service-details"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                  {/* Features Item */}
                  {/* Features Item */}
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-colorOrangyRed">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-black-3.svg"
                      alt="service-icon-black-3"
                      width="70"
                      height="70"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-orange-3.svg"
                      alt="service-icon-orange-3"
                      width="70"
                      height="70"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link
                      href="/service-details"
                      className="hover:text-[#00b48d]"
                    >
                      Powerful
                    </Link>
                  </h3>

                  <p className="mb-12 duration-300 group-hover:text-white">
                    Optimized LLMs power your business intelligence with
                    precision.
                  </p>

                  <Link
                    href="/service-details"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-colorOrangyRed">
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-black-4.svg"
                      alt="service-icon-black-4"
                      width="70"
                      height="70"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/service-icon-orange-4.svg"
                      alt="service-icon-orange-4"
                      width="70"
                      height="70"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <Link
                      href="/service-details"
                      className="hover:text-[#00b48d]"
                    >
                      Customizable
                    </Link>
                  </h3>

                  <p className="mb-12 duration-300 group-hover:text-white">
                    Agile solutions adapt to your evolving business needs.
                  </p>

                  <Link
                    href="/service-details"
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-black.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                    />
                    <Image
                      src="/assets/img_placeholder/th-1/arrow-right-orange.svg"
                      alt="arrow-right-black"
                      width="30"
                      height="30"
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                </li>
                {/* Service Item */}
              </ul>
              {/* Service List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Service Section End :::... */}

        {/*...::: Content Section Start_1 :::... */}

        {/*...::: Content Section End_1 :::... */}

        {/*...::: Content Section Start_2 :::... */}
        <section id="content-section-2">
          {/* Section Spacer */}
          <div className="pb-20 xl:pb-[150px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28 xxl:gap-32">
                {/* Content Left Block */}
                <div
                  className="jos order-2 overflow-hidden rounded-md"
                  data-jos_animation="fade-left"
                >
                  <Image
                    src="/talk-to-data.png"
                    alt="content-image-2"
                    width="526"
                    height="450"
                    className="h-auto w-full"
                  />
                </div>
                {/* Content Left Block */}
                {/* Content Right Block */}
                <div className="jos order-1" data-jos_animation="fade-right">
                  {/* Section Content Block */}
                  <div className="mb-6">
                    <h2>Talk to your data like never before</h2>
                  </div>
                  {/* Section Content Block */}
                  <div className="text-lg leading-[1.4] lg:text-[21px]">
                    <p className="mb-7 last:mb-0">
                      Unlock insights effortlessly with our generative AI-based
                      analytics. No need for a data engineering background—our
                      AI extracts intelligence from structured and unstructured
                      data, empowering better decision-making and tailored
                      insights for your business needs.
                    </p>
                  </div>
                </div>
                {/* Content Right Block */}
              </div>

              <div className="grid grid-cols-1 items-center gap-12 mt-[40px] md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28 xxl:gap-32">
                {/* Content Left Block */}
                <div
                  className="jos order-2 overflow-hidden rounded-md"
                  data-jos_animation="fade-left"
                >
                  <Image
                    src="/assets/i.png"
                    alt="content-image-2"
                    width="526"
                    height="450"
                    className="h-auto w-full"
                  />
                </div>
                {/* Content Left Block */}
                {/* Content Right Block */}
                <div className="jos order-1" data-jos_animation="fade-right">
                  {/* Section Content Block */}
                  <div className="mb-6">
                    <h2>Discover your data insights in a whole new way</h2>
                  </div>
                  {/* Section Content Block */}
                  <div className="text-lg leading-[1.4] lg:text-[21px]">
                    <p className="mb-7 last:mb-0">
                      See your data insights like never before with our
                      generative AI-based analytics solution. No expertise
                      needed—our AI extracts valuable insights from structured
                      and unstructured data, empowering smarter, tailored
                      business decisions.
                    </p>
                  </div>
                </div>
                {/* Content Right Block */}
              </div>

              <div className="grid grid-cols-1 items-center gap-12 mt-[100px] md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28 xxl:gap-32">
                {/* Content Left Block */}
                <div
                  className="jos order-2 overflow-hidden rounded-md"
                  data-jos_animation="fade-left"
                >
                  <Image
                    src="/assets/sharing.png"
                    alt="content-image-2"
                    width="526"
                    height="450"
                    className="h-auto w-full"
                  />
                </div>
                {/* Content Left Block */}
                {/* Content Right Block */}
                <div className="jos order-1" data-jos_animation="fade-right">
                  {/* Section Content Block */}
                  <div className="mb-6">
                    <h2>Empower Your Team by Sharing Analysis</h2>
                  </div>
                  {/* Section Content Block */}
                  <div className="text-lg leading-[1.4] lg:text-[21px]">
                    <p className="mb-7 last:mb-0">
                      Experience data insights like never before with our
                      generative AI-based analytics solution. Effortlessly
                      extract insights from structured and unstructured data,
                      make informed decisions, and collaborate seamlessly with
                      your team in real-time.
                    </p>
                  </div>
                </div>
                {/* Content Right Block */}
              </div>

              <div className="grid grid-cols-1 items-center gap-12 mt-[100px] md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28 xxl:gap-32">
                {/* Content Left Block */}
                <div
                  className="jos order-2 overflow-hidden rounded-md"
                  data-jos_animation="fade-left"
                >
                  <Image
                    src="/assets/tools2.png"
                    alt="content-image-2"
                    width="526"
                    height="450"
                    className="h-auto w-full"
                  />
                </div>
                {/* Content Left Block */}
                {/* Content Right Block */}
                <div className="jos order-1" data-jos_animation="fade-right">
                  {/* Section Content Block */}
                  <div className="mb-6">
                    <h2 className="text-6xl">
                      Integrate tools across systems to drive intelligent
                      automation.
                    </h2>
                  </div>
                  {/* Section Content Block */}
                  <div className="text-lg leading-[1.4] lg:text-[21px]">
                    <p className="mb-7 last:mb-0">
                      Integrate tools across systems to enable intelligent
                      automation, streamline workflows, and enhance
                      collaboration with AI-driven insights that align your team
                      and drive business success.
                    </p>
                  </div>
                </div>
                {/* Content Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Content Section End :::... */}

        {/*...::: Funfact Section Start :::... */}
        <section id="funfact-section">
          <div className="pb-20">
            {/* Section Container */}
            <div className="global-container">
              <div id="main-div-for-wsc" className="pr-4 pl-4 my-[60px]">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-[60%]">
                    <div className="relative">
                      <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="z-20 relative font-outfit font-[500] "
                      >
                        The Problem we solve
                      </motion.h2>
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="absolute bg-[#0077b6] h-[40px] md:h-[80px] z-10 top-0 text-[#0077b6] w-[100px] md:w-[250px] p-2"
                      ></motion.div>
                    </div>
                    <div className="my-[20px]">
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className=" md:text-2xl w-[80%] font-outfit"
                      >
                        We deliver secure, privacy-first generative AI solutions
                        that enhance data insights with dynamic visualization
                        and optimize collaboration across business verticals,
                        ensuring maximum value from your enterprise data.
                      </motion.p>
                    </div>
                    <hr className="w-[80%]" />
                    <div className="grid grid-col-1 md:grid-cols-3 gap-4 w-[100%] md:w-[80%]">
                      <div>
                        <div className="relative p-4">
                          <motion.h3
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="font-outfit relative text-5xl font-[700] z-20 "
                          >
                            30%
                          </motion.h3>
                          <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-[#0077b6] w-[50px] h-[45px] absolute top-1 left-1 z-10 "
                          ></motion.div>
                        </div>
                        <div>
                          <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="w-[80%] font-outfit text-2xl"
                          >
                            Increase in Efficiency
                          </motion.p>
                        </div>
                      </div>
                      <div>
                        <div className="relative p-4">
                          <motion.h3
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="font-outfit relative text-5xl font-[700] z-20 "
                          >
                            15%
                          </motion.h3>
                          <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-[#0077b6] w-[50px] h-[45px] absolute top-1 left-1 z-10 "
                          ></motion.div>
                        </div>
                        <div>
                          <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="w-[80%] font-outfit text-2xl"
                          >
                            Increase in Revenue
                          </motion.p>
                        </div>
                      </div>
                      <div>
                        <div className="relative p-4">
                          <motion.h3
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="font-outfit relative text-5xl font-[700] z-20 "
                          >
                            80%
                          </motion.h3>
                          <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-[#0077b6] w-[50px] h-[45px] absolute top-1 left-1 z-10 "
                          ></motion.div>
                        </div>
                        <div>
                          <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="w-[80%] font-outfit text-2xl"
                          >
                            Fatser Data Analytics
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[40%] ">
                    <Image
                      src="/ai-block3.png"
                      alt="ai"
                      width={800}
                      height={800}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*...::: Funfact Section End :::... */}

        {/*...::: FAQ Section Start :::... */}
        <section className="faq-section">
          {/* Section Spacer */}
          <div className="pb-20 xl:pb-[150px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2">
                {/* FAQ Left Block */}
                <div
                  className="jos flex flex-col"
                  data-jos_animation="fade-right"
                >
                  {/* Section Content Block */}
                  <div className="mb-6">
                    <div className="mx-auto md:mx-0 md:max-w-none">
                      <h2>Freely ask us for more information</h2>
                    </div>
                  </div>
                  {/* Section Content Block */}
                  <div className="text-lg leading-[1.4] lg:text-[21px]">
                    <p className="mb-7 last:mb-0">
                      Our AI SaaS solutions can be quickly deployed, enabling
                      users to start benefiting from AI capabilities without
                      lengthy setup and development times in fast-paced
                      industries.
                    </p>
                    <Link
                      href="/faq-1"
                      className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                    >
                      Ask you questions
                    </Link>
                  </div>
                </div>
                {/* FAQ Left Block */}

                {/* FAQ Right Block */}
                <div
                  className="jos md:ml-10 lg:ml-20 xl:ml-32"
                  data-jos_animation="fade-left"
                >
                  {/* Accordion*/}
                  <ul className="accordion">
                    {/* Accordion items */}
                    <li
                      className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                        activeIndex === 0 ? "active" : ""
                      }`}
                      onClick={() => handleAccordion(0)}
                    >
                      <div className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]">
                        <p>What is intelligent automation?</p>
                        <div className="accordion-icon">
                          <Image
                            src="/assets/img_placeholder/plus.svg"
                            width={24}
                            height={24}
                            alt="plus"
                          />
                        </div>
                      </div>
                      <div className="accordion-content text-[#2C2C2C]">
                        <p>
                          Intelligent automation combines advanced technologies,
                          such as AI and machine learning, with automation to
                          streamline processes, enhance decision-making, and
                          improve overall efficiency within organizations.
                        </p>
                      </div>
                    </li>
                    {/* Accordion items */}
                    {/* Accordion items */}
                    <li
                      className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                        activeIndex === 1 ? "active" : ""
                      }`}
                      onClick={() => handleAccordion(1)}
                    >
                      <div className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]">
                        <p>How can your solution help improve collaboration?</p>
                        <div className="accordion-icon">
                          <Image
                            src="/assets/img_placeholder/plus.svg"
                            width={24}
                            height={24}
                            alt="plus"
                          />
                        </div>
                      </div>
                      <div className="accordion-content text-[#2C2C2C]">
                        <p>
                          Our solution enhances collaboration by providing
                          AI-driven insights that keep teams aligned and focused
                          on common goals, facilitating real-time communication
                          and information sharing.
                        </p>
                      </div>
                    </li>
                    {/* Accordion items */}
                    {/* Accordion items */}
                    <li
                      className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                        activeIndex === 2 ? "active" : ""
                      }`}
                      onClick={() => handleAccordion(2)}
                    >
                      <div className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]">
                        <p>
                          Can I integrate your analytics solution with existing
                          systems?
                        </p>
                        <div className="accordion-icon">
                          <Image
                            src="/assets/img_placeholder/plus.svg"
                            width={24}
                            height={24}
                            alt="plus"
                          />
                        </div>
                      </div>
                      <div className="accordion-content text-[#2C2C2C]">
                        <p>
                          Yes, our solution is designed to seamlessly integrate
                          with your existing tools and systems, enabling
                          intelligent automation and ensuring a smooth workflow
                          across your organization.
                        </p>
                      </div>
                    </li>
                  </ul>
                  {/* Accordion*/}
                </div>
                {/* FAQ Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: FAQ Section End :::... */}

        {/*...::: Testimonial Section Start :::... */}
        <section className="testimonial-section">
          {/* Section Spacer */}
          <div className="bg-colorOrangyRed pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
            {/* Section Container */}
            <div className="global-container">
              {/* Section Content Block */}
              <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
                <div className="mx-auto max-w-[300px] lg:max-w-[600px] xl:max-w-[680px]">
                  <h2 className="text-white">
                    Positive feedback from our users
                  </h2>
                </div>
              </div>
              {/* Section Content Block */}

              {/* Testimonial List */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Testimonial Item */}
                <div
                  className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                  data-jos_animation="fade-left"
                  data-jos_delay="0.1"
                >
                  <div className="block">
                    <Image
                      src="/assets/img_placeholder/th-1/rating.svg"
                      alt="rating"
                      width="146"
                      height="25"
                    />
                  </div>
                  <p>
                    “This AI SaaS tool has revolutionized the way we process and
                    analyze data. This is a game-changer for our business.”
                  </p>
                  <div className="flex items-center gap-x-4">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <Image
                        src="/assets/img_placeholder/th-1/testimonial-img-1.jpg"
                        alt="testimonial-img"
                        width="60"
                        height="60"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="block text-lg font-semibold leading-[1.6]">
                        Max Weber
                      </span>
                      <span className="block text-sm font-light leading-[1.4]">
                        HR Manager
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                  data-jos_animation="fade-left"
                  data-jos_delay="0.2"
                >
                  <div className="block">
                    <Image
                      src="/assets/img_placeholder/th-1/rating.svg"
                      alt="rating"
                      width="146"
                      height="25"
                    />
                  </div>
                  <p>
                    It answers immediately, and we ve seen a significant
                    reduction in response time. Our customers love it and so do
                    we!
                  </p>
                  <div className="flex items-center gap-x-4">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <Image
                        src="/assets/img_placeholder/th-1/testimonial-img-2.jpg"
                        alt="testimonial-img"
                        width="60"
                        height="60"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="block text-lg font-semibold leading-[1.6]">
                        Douglas Smith
                      </span>
                      <span className="block text-sm font-light leading-[1.4]">
                        Businessman
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                  data-jos_animation="fade-left"
                  data-jos_delay="0.3"
                >
                  <div className="block">
                    <Image
                      src="/assets/img_placeholder/th-1/rating.svg"
                      alt="rating"
                      width="146"
                      height="25"
                    />
                  </div>
                  <p>
                    It is accurate, fast and supports multiple languages
                    support. It is a must for any international business
                    success.
                  </p>
                  <div className="flex items-center gap-x-4">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <Image
                        src="/assets/img_placeholder/th-1/testimonial-img-3.jpg"
                        alt="testimonial-img"
                        width="60"
                        height="60"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="block text-lg font-semibold leading-[1.6]">
                        Abraham Maslo
                      </span>
                      <span className="block text-sm font-light leading-[1.4]">
                        Founder @ Marketing Company
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                  data-jos_animation="fade-right"
                  data-jos_delay="0.1"
                >
                  <div className="block">
                    <Image
                      src="/assets/img_placeholder/th-1/rating.svg"
                      alt="rating"
                      width="146"
                      height="25"
                    />
                  </div>
                  <p>
                    Security is a top concern for us, and AI SaaS takes it
                    seriously. It s a reassuring layer of protection for our
                    organization.
                  </p>
                  <div className="flex items-center gap-x-4">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <Image
                        src="/assets/img_placeholder/th-1/testimonial-img-4.jpg"
                        alt="testimonial-img"
                        width="60"
                        height="60"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="block text-lg font-semibold leading-[1.6]">
                        Jack Fayol
                      </span>
                      <span className="block text-sm font-light leading-[1.4]">
                        HR Manager
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                  data-jos_animation="fade-right"
                  data-jos_delay="0.2"
                >
                  <div className="block">
                    <Image
                      src="/assets/img_placeholder/th-1/rating.svg"
                      alt="rating"
                      width="146"
                      height="25"
                    />
                  </div>
                  <p>
                    We were concerned about integrating their APIs were well
                    documented, and their support team was super cool.
                  </p>
                  <div className="flex items-center gap-x-4">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <Image
                        src="/assets/img_placeholder/th-1/testimonial-img-5.jpg"
                        alt="testimonial-img"
                        width="60"
                        height="60"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="block text-lg font-semibold leading-[1.6]">
                        Karen Lynn
                      </span>
                      <span className="block text-sm font-light leading-[1.4]">
                        Software Engineer
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
                {/* Testimonial Item */}
                <div
                  className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
                  data-jos_animation="fade-right"
                  data-jos_delay="0.3"
                >
                  <div className="block">
                    <Image
                      src="/assets/img_placeholder/th-1/rating.svg"
                      alt="rating"
                      width="146"
                      height="25"
                    />
                  </div>
                  <p>
                    The return on investment has exceeded our expectations. it s
                    an investment in the future of our business.
                  </p>
                  <div className="flex items-center gap-x-4">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <Image
                        src="/assets/img_placeholder/th-1/testimonial-img-6.jpg"
                        alt="testimonial-img"
                        width="60"
                        height="60"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="block text-lg font-semibold leading-[1.6]">
                        Henry Ochi
                      </span>
                      <span className="block text-sm font-light leading-[1.4]">
                        Bank Manager
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}
              </div>
              {/* Testimonial List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Testimonial Section Start :::... */}
      </main>
      {/*...::: Footer Start :::... */}
      <Footer_01 />
      {/*...::: Footer End :::... */}
    </div>
  );
}

export default Home;
