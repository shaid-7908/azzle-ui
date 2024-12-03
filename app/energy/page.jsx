"use client";
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import useAccordion from "@/components/hooks/useAccordion";
import useTabs from "@/components/hooks/useTabs";
import data from "../blogData.json";

function Logistics() {
  const [activeIndex, handleAccordion] = useAccordion(0);

  const [activeTab, handleTab] = useTabs();
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  useEffect(() => {
    const filteredData = () => {
      const filtered = data.filter((item) =>
        item.catagory.includes("energy")
      );
      setFilteredBlogs(filtered);
    };
    filteredData();
  }, []);

  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::Breadcrum section::..... */}
        <section id="section-breadcrumb">
          {/* Section Spacer */}
          <div className="breadcrumb-wrapper">
            {/* Section Container */}
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title">Energy & Renewables</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Energy & Renewables</li>
                </ul>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::Breadcrum section::..... */}
        <section id="logistics-hero">
          <div className="relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px]  pb-20  lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24  xxl:pb-[133px] ">
            <div className="global-container ">
              <div className="my-20">
                <h1 className=" text-5xl text-center">
                  Harnessing AI for a
                  <span className="text-colorOrangyRed mx-1">Sustainable</span>
                  Energy Future
                </h1>
                <p className="text-center my-4">
                  Workmate powers the energy sector with AI-driven solutions,
                  optimizing renewable energy production, enhancing efficiency,
                  and driving smarter, sustainable decisions.
                </p>
                <div>
                  <h1 className="text-center my-8">Use Case</h1>
                  <div>
                    {/*Blog section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {filteredBlogs?.slice(0, 3).map((el, index) => {
                        return (
                          <div
                            key={index}
                            className="jos group overflow-hidden rounded-[10px] bg-white shadow-[0_4px_80px_rgba(0,0,0,0.08)]"
                          >
                            <Link
                              href={`/blog/${el.filename}`}
                              className="block overflow-hidden"
                            >
                              <Image
                                src={el.image}
                                style={{ objectFit: "contain" }}
                                alt="blog-main-1"
                                width={856}
                                height={540}
                                className="h-auto w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                              />
                            </Link>
                            <div className="border border-[#EAEDF0] p-[30px]">
                              <h5 className="mb-3 mt-7 text-xl tracking-wide hover:text-colorOrangyRed">
                                <Link href={`/blog/${el.filename}`}>
                                  {el.title}
                                </Link>
                              </h5>
                              <p className="mb-7 line-clamp-2 last:mb-0">
                                {el.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/*Blog section */}
                    <div className="flex justify-center items-center my-4">
                      <Link
                        href="/blog"
                        className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
      </main>
      <Footer_01 />
    </>
  );
}

export default Logistics;
