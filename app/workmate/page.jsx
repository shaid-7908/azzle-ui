'use client'
import Header_01 from '@/components/header/Header_01'
import Link from 'next/link'
import React,{useRef} from 'react'
import Image from 'next/image'
import useAccordion from '@/components/hooks/useAccordion'
import Footer_01 from '@/components/footer/Footer_01'

function Workmate() {
    const videoRef = useRef(null);
   const [activeIndex, handleAccordion] = useAccordion(0);
    const handleLoadedMetadata = () => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 2.5; // Increase speed to 1.5x
      }
    };
  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section id="section-breadcrumb">
          {/* Section Spacer */}
          <div className="breadcrumb-wrapper">
            {/* Section Container */}
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title">Workmate</h1>
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
        {/*....:::First hero section :::... */}
        <section id="section-hero ">
          <div className="relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px]  pb-20  lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24  xxl:pb-[133px] ">
            <div className="global-container ">
              <div className="pb-10">
                <p className="text-center text-base md:text-xl font-medium">
                  Workmate is a privacy-first, on-premise conversational data
                  analytics platform, powered by a small language model tailored
                  for specific use cases. It enables secure data integration,
                  insights, dynamic visualizations, and team collaboration to
                  maximize enterprise data value.
                </p>
              </div>
              <div
                className="jos hero-img overflow-hidden rounded-2xl bg-black"
                data-jos_animation="zoom"
              >
                <video
                  ref={videoRef}
                  src="https://res.cloudinary.com/dycvkezau/video/upload/v1728802091/WhatsApp_Video_2024-10-13_at_12.15.51_2219e755_olhcml.mp4"
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px]  pb-20  lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24  xxl:pb-[133px] ">
            <div className="global-container ">
              <div className="pb-20">
                <h2 className="text-center">Workmate Solutions Offerings</h2>
              </div>
              <div>
                {/*..::Diagram 1 ::..*/}
                <div className="flex flex-col-reverse md:flex-row mb-[80px]">
                  <div className="flex-1 flex justify-center items-start p-4">
                    <div>
                      <h3 className="tracking-wide my-2 md:text-4xl">
                        Conversational data analytics with public LLM model.
                      </h3>
                      <p className=" text-base md:text-xl md:w-[80%] my-8 ">
                        In this solution, Workmate offers a public generative AI
                        model option, ideal for non-sensitive data and for
                        helping new users get familiar with the system. During
                        onboarding, user data is securely processed in a
                        centralized cloud, providing an easy starting point with
                        personalized insights.
                      </p>
                      <Link
                        href="#"
                        className="button  text-center rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1">
                    <Image
                      src="/digram1.png"
                      alt="content-image-2"
                      width="400"
                      height="300"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
                {/*..::Diagram2 ::.. */}
                <div className="flex flex-col-reverse  md:flex-row-reverse mb-[80px]">
                  <div className="flex-1 flex justify-center items-start p-4">
                    <div>
                      <h3 className="tracking-wide my-2 md:text-4xl">
                        Conversational data analytics private fine tuned LLM
                        model.
                      </h3>
                      <p className="text-base md:text-xl md:w-[80%] my-8 ">
                        Workmate offers enhanced security and personalization by
                        utilizing private, fine-tuned LLM models hosted on
                        Workmate&rsquo;s central server. This setup ensures data
                        isolation, compliance with privacy standards, and
                        tailored insights for users with moderate to high
                        privacy requirements, making it a trusted choice for
                        sensitive data.
                      </p>
                      <Link
                        href="#"
                        className="button  text-center rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1">
                    <Image
                      src="/digram2.png"
                      alt="content-image-2"
                      width="400"
                      height="300"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
                {/*..::Diagram3::.. */}
                <div className="flex flex-col-reverse md:flex-row mb-[80px]">
                  <div className="flex-1 flex justify-center items-start p-4">
                    <div>
                      <h3 className="tracking-wide my-2 md:text-4xl">
                        Conversational data analytics with on-premise private
                        fine tuned LLM model.
                      </h3>
                      <p className="text-base md:text-xl md:w-[80%] my-8 ">
                        Our dynamic AI data analytics solution features
                        on-premise private fine-tuned LLM models, making it the
                        most secure system for enterprises with high security
                        and data localization requirements. By hosting models
                        within the organization’s infrastructure, we ensure
                        complete control over sensitive data, enhancing privacy
                        and compliance. This setup delivers a highly
                        personalized experience, allowing enterprises to gain
                        tailored insights while meeting stringent security
                        standards and localization needs.
                      </p>
                      <Link
                        href="#"
                        className="button  text-center rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1">
                    <Image
                      src="/digram3.png"
                      alt="content-image-2"
                      width="400"
                      height="300"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*......:: Feature section ::..... */}
        <section id="feature-section">
          <div className="relative z-[1] overflow-hidden   bg-colorOrangyRed pb-20   lg:pb-24  xxl:pb-[0px] ">
            <div className="global-container ">
              <h1 className="text-center text-7xl text-white">Features</h1>
              <div className="py-20">
                {/*....:::Feature one:::.... */}
                <div className="flex flex-col-reverse md:flex-row">
                  <div className="flex-1 md:px-10 ">
                    <div className="text-white">
                      <h4 className="text-4xl mt-8 md:mt-0 text-center md:text-left md:text-5xl text-[#00b4d8]">
                        Conversational data analytics
                      </h4>
                      <p className="text-base text-center md:text-left md:text-lg md:w-[80%] my-4">
                        Engage with your data like never before through our
                        conversational data analytics platform. Effortlessly
                        extract insights from structured and unstructured data,
                        unlocking deeper, personalized, privacy-first
                        intelligence tailored to your business needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 rounded-lg overflow-hidden">
                    <video src="/chat_list.mp4" autoPlay loop muted />
                  </div>
                </div>
                {/*....::Feature two:::... */}
                <div className="flex flex-col-reverse md:flex-row   my-20">
                  <div className="flex-1 md:px-10">
                    <div className="text-white">
                      <h4 className="text-4xl mt-8 md:mt-0 text-center md:text-left md:text-5xl text-[#00b4d8]">
                        Dynamic Data visualization
                      </h4>
                      <p className="text-base text-center md:text-left md:text-lg md:w-[80%] my-4">
                        Unlock your data insights with our generative AI-based
                        analytics solution. Easily extract valuable insights
                        from structured and unstructured data, empowering
                        informed decisions through intuitive, dynamic
                        visualizations tailored to your needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 rounded-lg overflow-hidden">
                    <video src="/chart.mp4" autoPlay loop muted />
                  </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row   my-20">
                  <div className="flex-1 md:px-10">
                    <div className="text-white">
                      <h4 className="text-4xl mt-8 md:mt-0 text-center md:text-left md:text-5xl text-[#00b4d8]">
                        Secure, Scalable, In-House AI Hosting
                      </h4>
                      <p className="text-base text-center md:text-left md:text-lg md:w-[80%] my-4">
                        Bring AI capabilities directly to your infrastructure,
                        ensuring data privacy, enhanced performance, and
                        seamless integration with your existing systems. Our
                        on-premise AI hosting solution offers full control and
                        customization, empowering your organization to scale and
                        innovate without compromising security or compliance.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 rounded-lg overflow-hidden bg-white">
                    <Image
                      src="/assets/j.png"
                      width={700}
                      height={400}
                      alt="hosting"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*...::: FAQ Section Start :::... */}
        <section className="faq-section mt-[60px]">
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
        {/*...::: FAQ Section End :::... */}
      </main>
      <Footer_01 />
    </>
  );
}

export default Workmate