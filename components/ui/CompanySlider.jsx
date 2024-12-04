import React from 'react'
import Link from 'next/link';
import styled, { keyframes, css } from "styled-components";

function CompanySlider() {
    const row1 = [
      "/slider/openai2.png",
      "/slider/zoom.png",
      "/slider/hubspot.png",
      "/slider/apollo.png",
      "/slider/pipedrive.png",
      "/slider/producthunt.png",
      
    ];

    const row2 = [
      "/slider/crunchbase.png",
      "/slider/deepl.png",
      "/slider/miro.png",
      "/slider/reddit.png",
      "/slider/realtor.png",
      "/slider/drive.png",
    ];
    const row3 = [
      "/slider/tiktok.png",
      "/slider/clearbit.png",
      "/slider/ebay.png",
      "/slider/gmail.png",
      "/slider/jira.png",
      "/slider/Trello.png",
    ];
  return (
    <AppContainer className='mb-20 bg-colorLinenRuffle'>
      <Wrapper>
        <h2 className="text-center md:text-5xl my-10">
          WorkTeams works with your favorite <br /> apps and websites
        </h2>
        <Link
          href="/faq-1"
          className="button mt-5 my-10 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
        >
          Integrate your Apps
        </Link>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
        <Marquee>
          <MarqueeGroup3>
            {row3.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup3>
          <MarqueeGroup3>
            {row3.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup3>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default CompanySlider
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  overflow:hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
  @media (max-width: 768px) {
width: 1200px;
  }
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup3 = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  background-color:white;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  /*aspect-ratio: 16/9;*/
  padding: 10px 13px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
