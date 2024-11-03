"use client";
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";
import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import useAccordion from "@/components/hooks/useAccordion";
import useTabs from "@/components/hooks/useTabs";

function Finance(){
      const [activeIndex, handleAccordion] = useAccordion(0);

      const [activeTab, handleTab] = useTabs();
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
                  <h1 className="breadcrumb-title">Finance</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>Workmate</li>
                  </ul>
                </div>
              </div>
              {/* Section Container */}
            </div>
            {/* Section Spacer */}
          </section>

          {/*....::Financial Hero section::.... */}
          <section id="finance-hero">
            <div className="relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px]  pb-20  lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24  xxl:pb-[133px] ">
              <div className="global-container ">
                <div className="my-20">
                  <h1 className=" text-5xl text-center">
                    Make <span className="text-colorOrangyRed">Financial</span>{" "}
                    data analysis self-service
                  </h1>
                  <p className="text-center my-4">
                    Using Large Language Models (LLMs) or Fine tuned Small
                    Language Models (SLMs),
                    <br /> hosted either publicly or on-premises.
                  </p>
                </div>

                <div className="my-10">
                  <div className="flex">
                    <div className="flex-1 flex justify-center items-center">
                      <div>
                        <h2 className="text-3xl my-2">
                          Connect to your databases or data warehouses
                        </h2>
                        <p className="my-6">
                          Integrate with your databases and data warehouses
                          all-in-one place (Postgres, MySQL, Snowflake,
                          BigQuery, and more).
                        </p>
                        <div className="bg-black rounded-lg text-center p-2 my-2 font-semibold text-colorOrangyRed w-[30%]">
                          All intigration
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <Image
                        src="https://framerusercontent.com/images/26BDtwtdCeO9MM8n8QanpuYQJPk.png"
                        height={600}
                        width={600}
                        alt="na"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-40">
                  <div className="flex">
                    <div className="flex-1 flex justify-center items-center">
                      <div>
                        <h2 className="text-3xl">
                          Chat with your database, visualize insights, & perform
                          analysis
                        </h2>
                        <p className="my-4 mr-4">
                          Workmate can write SQL queries and create recommended
                          charts based on your data questions. It also helps
                          your drill down on the analysis.
                        </p>
                        <div className="bg-black rounded-lg text-center p-2 my-2 font-semibold text-colorOrangyRed w-[30%]">
                          Get Started
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <Image
                        src="https://framerusercontent.com/images/FSExARtEM1GuC9QzUxCWsCjviQ.gif"
                        alt="na"
                        height={600}
                        width={600}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-40">
                  <div className="flex">
                    <div className="flex-1 flex justify-center items-center">
                      <div>
                        <h2 className="text-3xl">
                          Ensure answer accuracy and consistency with built-in
                          data catalog
                        </h2>
                        <p className="my-4 mr-4">
                          An automated semantic layer that ensures Brewit
                          answers with correct business logic. Easily manage
                          your data catalog & data dictionary.
                        </p>
                        <div className="bg-black rounded-lg text-center p-2 my-2 font-semibold text-colorOrangyRed w-[30%]">
                          Get Started
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <Image
                        src="https://framerusercontent.com/images/C8m4PfsS3ajGq554AkEXBXfzYZE.gif"
                        alt="na"
                        height={600}
                        width={600}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-40">
                  <div className="flex">
                    <div className="flex-1 flex justify-center items-center">
                      <div>
                        <h2 className="text-3xl">
                          Building a beautiful report is as easy as writing a
                          doc
                        </h2>
                        <p className="my-4 mr-4">
                          Data without story is useless. Our Notion-style
                          notebook editor allows you to create reports &
                          dashboards easily, turning raw data into actionable
                          insights.
                        </p>
                        <div className="bg-black rounded-lg text-center p-2 my-2 font-semibold text-colorOrangyRed w-[30%]">
                          Get Started
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <Image
                        src="https://framerusercontent.com/images/WeF78UARbO5VD4LQOz9cbsnaQUQ.gif"
                        alt="na"
                        height={600}
                        width={600}
                      />
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
                            Intelligent automation combines advanced
                            technologies, such as AI and machine learning, with
                            automation to streamline processes, enhance
                            decision-making, and improve overall efficiency
                            within organizations.
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
                          <p>
                            How can your solution help improve collaboration?
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
                            Our solution enhances collaboration by providing
                            AI-driven insights that keep teams aligned and
                            focused on common goals, facilitating real-time
                            communication and information sharing.
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
                            Can I integrate your analytics solution with
                            existing systems?
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
                            Yes, our solution is designed to seamlessly
                            integrate with your existing tools and systems,
                            enabling intelligent automation and ensuring a
                            smooth workflow across your organization.
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
        </main>
        <Footer_01 />
      </>
    );
}

export default Finance