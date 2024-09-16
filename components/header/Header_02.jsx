"use client";
import { useState, useEffect, useRef } from "react";

const Header_02 = () => {
  const scrollRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDiv = scrollRef.current;
      const isFullyScrolled =
        scrollDiv.scrollHeight - scrollDiv.scrollTop === scrollDiv.clientHeight;

      if (isFullyScrolled) {
        setIsScrollable(false); // Allow the main div to scroll
      } else {
        setIsScrollable(true); // Prevent main div from scrolling
      }
    };

    const syncScroll = (source, target) => {
      target.scrollTop = source.scrollTop;
    };

    const scrollDiv = scrollRef.current;
    const leftDiv = leftRef.current;
    const rightDiv = rightRef.current;

    scrollDiv.addEventListener("scroll", handleScroll);
    leftDiv.addEventListener("scroll", () => syncScroll(leftDiv, rightDiv));
    rightDiv.addEventListener("scroll", () => syncScroll(rightDiv, leftDiv));

    return () => {
      scrollDiv.removeEventListener("scroll", handleScroll);
      leftDiv.removeEventListener("scroll", () =>
        syncScroll(leftDiv, rightDiv)
      );
      rightDiv.removeEventListener("scroll", () =>
        syncScroll(rightDiv, leftDiv)
      );
    };
  }, []);

  return (
    <div id="main34">
      <div id="no-scroll" className="w-[100vw] h-[100vh]">
        {" "}
        content
      </div>
      <div
        id="scroll"
        className={`w-[100vw] h-[100vh] overflow-hidden z-10 flex ${
          isScrollable ? "scrollable" : ""
        }`}
        ref={scrollRef}
      >
        <div  className="flex-[50%] max-h-[100vh] overflow-hidden " ref={leftRef}>
          <div className="h-[100vh] bg-red-500">Step 1</div>
          <div className="h-[100vh] bg-blue-500">Step 2</div>
          <div className="h-[100vh] bg-green-500">Step 2</div>
        </div>
        <div  className="flex-[50%] max-h-[100vh] overflow-hidden" ref={rightRef}>
          <img
            src="https://cdn.prod.website-files.com/65783c6f78101d143ba11f08/659fed78b563f3f915c236f8_Frame%20427322003.svg"
            alt="na"
          />
          <img
            src="https://cdn.prod.website-files.com/65783c6f78101d143ba11f08/659fed78b563f3f915c236f8_Frame%20427322003.svg"
            alt="na"
          />
          <img
            src="https://cdn.prod.website-files.com/65783c6f78101d143ba11f08/659fed78b563f3f915c236f8_Frame%20427322003.svg"
            alt="na"
          />
        </div>
      </div>

      <div id="next" className="w-[100vw] h-[100vh] bg-orange-500 z-30">
        next
      </div>
    </div>
  );
};

export default Header_02;
