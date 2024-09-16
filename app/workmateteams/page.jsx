'use client';
import React, { useState, useRef, useEffect } from 'react';
import Header_01 from '@/components/header/Header_01';
import { MdArrowOutward } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { TbSettingsAutomation } from "react-icons/tb";
import Footer_01 from '@/components/footer/Footer_01';
const sections = [
  {
    id: 1,
    title: "STEP 1",
    header: "Pick your apps and websites",
    content: "Use data and events in one app to automate another. Bardeen supports an increasing library of powerful integrations.",
    image: "https://cdn.prod.website-files.com/65783c6f78101d143ba11f08/659fed78467d25d340720bc1_Frame%20427322001.svg",
  },
  {
    id: 2,
    title: "STEP 2",
    header: "Perform tasks and actions",
    content: "Bardeen completes tasks in apps and websites you use for work, so you don't have to - filling forms, sending messages, or even crafting detailed reports.",
    image: "https://cdn.prod.website-files.com/65783c6f78101d143ba11f08/659fed780247e517443c666f_Frame%20427322002.svg",
  },
  {
    id: 3,
    title: "STEP 3",
    header: "Combine it all to create workflows",
    content: "Workflows are a series of actions triggered by you or a change in a connected app. They automate repetitive tasks you normally perform manually - saving you time.",
    image: "https://cdn.prod.website-files.com/65783c6f78101d143ba11f08/659fed78b563f3f915c236f8_Frame%20427322003.svg",
  },
];

function WorkmateTeams() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const scrollFRef = useRef(null);

  const handleInViewChange = (inView, id) => {
    if (inView) {
      setActiveSection(id);
    }
  };

  const handleScroll = () => {
    const scrollF = scrollFRef.current;
    if (scrollF.scrollTop + scrollF.clientHeight >= scrollF.scrollHeight) {
      // Content fully scrolled, scroll out the entire div.
      scrollF.style.overflowY = 'visible';
    } else {
      scrollF.style.overflowY = 'hidden';
    }
  };

  useEffect(() => {
    const scrollF = scrollFRef.current;
    scrollF.addEventListener('scroll', handleScroll);

    return () => {
      scrollF.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header_01 />
      <main className='mb-[100px]'>
        <section className="w-screen h-screen flex justify-center items-center">
          <div className="text-center">
            <span className="uppercase tracking-[4px] font-outfit font-[700] text-[13px] leading-[26px]">
              How does Bardeen work?
            </span>
            <h1 className="font-outfit text-[64px] leading-[74px] font-[500] text-[#3b3c41]">
              Workflow automation <br />
              made simple
            </h1>
            <p className="font-outfit text-[20px] leading-[30px] font-[400] mt-[50px]">
              Bardeen&apos;s proactive automation platform empowers you to
              discover,
              <br /> set up, and run workflows that put your work on autopilot.
            </p>
            <div className="p-2 flex justify-center items-center mt-4">
              <div className="rounded-2xl bg-[#6f60cc] flex py-2 px-4 font-body font-[400] text-[18px] leading-[26px] justify-center items-center text-white">
                Get Started for free <MdArrowOutward />
              </div>
            </div>
            <span className="font-body text-[14px] leading-[22px] font-[400] text-[#6f60cc]">
              The #1 AI Automation extension for Chrome
            </span>
          </div>
        </section>

        <div
          id="scroll-f"
          ref={scrollFRef}
          style={{
            display: "flex",
            height: "100vh",
            overflowY: "hidden", // Hide overflow initially
          }}
        >
          {/* Left Side */}
          <div
            style={{
              flex: "50%",
              overflowY: "scroll",
              height: "100vh",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {sections.map((section) => (
              <Section
                key={section.id}
                id={section.id}
                onInViewChange={handleInViewChange}
                title={section.title}
                header={section.header}
                content={section.content}
              />
            ))}
          </div>

          {/* Right Side */}
          <div
            style={{
              flex: "50%",
              height: "100vh",
              overflowY: "scroll",
              scrollbarWidth: "none", // Optional: Hide scrollbar (for Firefox)
              msOverflowStyle: "none", // Optional: Hide scrollbar (for IE/Edge)
            }}
          >
            <div
              style={{
                position: "sticky",
                top: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100vh",
              }}
            >
              {sections.map((section) => (
                <div
                  key={section.id}
                  style={{
                    opacity: section.id === activeSection ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                    position: "absolute",
                    width: "100%",
                  }}
                >
                  <Image
                    src={section.image}
                    alt={section.id}
                    width={529}
                    height={529}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="flex justify-center mt-[40px] h-[20vh]">
          <div className="w-[85%]">
            <h2 className="text-[32px] leading-[38px] font-[500] font-outfit my-2">
              How do I build workflows?
            </h2>
            <p className="font-[400] text-[#3b3c41] text-[20px] leading-[30px] font-outfit my-2">
              There are multiple ways to set up Bardeen. Start with our library
              of pre-built workflows, build your own, or let our AI suggest
              <br /> ways to save time.
            </p>
          </div>
        </section>
        <section className="flex justify-center h-[40vh]">
          <div className="w-[85%] flex justify-between">
            <div className="flex-1 bg-gradient-to-r hover:text-[#ff807b] hover:bg-white from-blue-50 to-white flex flex-col items-start justify-center text-[#6f60cc] p-2 mr-4 my-4 rounded-md border-[1px] border-[#e8eaed]">
              <div className="text-4xl my-2">
                <GoArrowUpRight />
              </div>
              <div className="text-[26px] leading-[26px] font-[700] font-outfit">
                Pre-built workflows
              </div>
              <div className="text-[16px] leading-[26px] font-[500] font-outfit">
                Hundreds of pre-built automations created by experts. Find
                workflows for sales, recruiting, productivity, and more.
              </div>
            </div>
            <div className="flex-1 hover:text-[#ff807b] hover:bg-white bg-gradient-to-r from-blue-50 to-white flex flex-col items-start justify-center text-[#6f60cc] p-2 m-4 rounded-md border-[1px] border-[#e8eaed]">
              <div className="text-3xl my-2">
                <FaWandMagicSparkles />
              </div>
              <div className="text-[26px] leading-[26px] font-[700] font-outfit">
                Magic box
              </div>
              <div className="text-[16px] leading-[26px] font-[500] font-outfit">
                Use natural language to create automations - just type it in to
                the Magic Box and watch Bardeen build the automation for you.
              </div>
            </div>
            <div className="flex-1 hover:text-[#ff807b] hover:bg-white flex flex-col items-start justify-center p-2 m-4 text-[#6f60cc] bg-gradient-to-r from-blue-50 to-white rounded-md border-[1px] border-[#e8eaed]">
              <div className="text-4xl">
                <TbSettingsAutomation />
              </div>
              <div className="text-[26px] leading-[26px] font-[700] font-outfit">
                Proactive Automation Assistance
              </div>
              <div className="text-[16px] leading-[26px] font-[500] font-outfit">
                Bardeen learns from your actions to proactively create
                automations that match your exact work process.
              </div>
            </div>
          </div>
        </section>
        <section className="h-[60vh] flex justify-center mt-[30vh]">
          <div className="flex w-[85%]">
            <div className="flex-1 ">
              <div>
                <h3 className="font-[500] text-[32px] leading-[37px] font-outfit text-[#3b3c41] my-4">
                  What is Proactive Automation?
                </h3>
                <p className="font-[400] text-[18px] leading-[29px] w-[70%] font-outfit text-[#3b3c41] my-4">
                  Automation tools of the past promise to save you time by
                  automating repetitive work, but using them often takes longer
                  than the work itself. You have to understand APIs, data
                  structures, and even write code just to set them up.
                </p>
                <p className="font-[400] text-[18px] leading-[29px] w-[70%] font-outfit text-[#3b3c41] my-4">
                  With proactive automation, building these workflows is
                  automatic. Start by telling Bardeen what you want to automate
                  - in everyday language. Over time Bardeen learns from the way
                  you work to suggest ways to improve your productivity and
                  impact.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/assets/img_placeholder/3714960.jpg"
                alt={"na"}
                width={529}
                height={529}
              />
            </div>
          </div>
        </section>
        <section className="h-[30vh] mt-[30vh] flex justify-center">
          <div className="w-[85%] flex justify-between items-center">
            <div className="font-[500] text-[32px] leading-[37px] font-outfit text-[#3b3c41]">
              How do I install Bardeen?
            </div>
            <div className="flex justify-center items-center border-[1px] hover:border-[#ff807b] hover:text-[#ff807b] border-[#a2a2a2] text-[#3b3c41] rounded-3xl p-4">
              <span>Try Bardeen for Chrome</span>{" "}
              <span>
                <MdArrowOutward />
              </span>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center">
          <div className="w-[85%] flex">
            <div className="flex-1">
              <Image
                src="https://cdn.prod.website-files.com/662fbf69a72889ec66f07685/662fbf69a72889ec66f07ef3_Frame%20427321894.svg"
                alt="na"
                width={529}
                height={529}
              />
            </div>
            <div className="flex-1">
              <div className="p-4 border-l-[1px] border-blue-400 mt-[60px] hover:text-[#ff807b] text-[#3b3c41]">
                <h4 className="font-[600] my-2 text-[26px] leading-[26px] font-outfit">
                  Get the chrome extension
                </h4>
                <p className="font-[400] text-[20px] w-[80%]  leading-[26px] font-outfit">
                  It only takes a minute to install the extension to your
                  browser. Your private information is secure and never leaves
                  your machine.
                </p>
              </div>
              <div className="p-4">
                <h4 className="font-[600] text-[26px] hover:text-[#ff807b] text-[#3b3c41] leading-[26px] font-outfit">
                  Discover your workflow
                </h4>
              </div>
              <div className="p-4">
                <h4 className="font-[600] hover:text-[#ff807b] text-[#3b3c41] text-[26px] leading-[26px] font-outfit">
                  Configure and Customize
                </h4>
              </div>
              <div className="p-4">
                <h4 className="font-[600] text-[26px] hover:text-[#ff807b] text-[#3b3c41] leading-[26px] font-outfit">
                  Run anytime, when you sleep
                </h4>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer_01/>
    </>
  );
}

const Section = ({ id, title,header,content, onInViewChange }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  React.useEffect(() => {
    onInViewChange(inView, id);
  }, [inView, id, onInViewChange]);

  return (
    <div
      ref={ref}
      style={{
        height: "100vh",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="w-[70%]">
        <span className="font-outfit text-[13px] leading-[26px] font-[700] tracking-[4px]">
          {title}
        </span>
        <h3 className="font-outfit text-[42px] leading-[48px] font-[500]">
          {header}
        </h3>
        <p className="font-outfit text-[#3b3c41] text-[18px] leading-[29px] font-[400] my-2">
          {content}
        </p>
      </div>
    </div>
  );
};

export default WorkmateTeams;
