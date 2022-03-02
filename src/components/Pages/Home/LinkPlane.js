import styled from "styled-components";
import { Suspense } from "react";
import { Link, withRouter } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Earth } from "./Earth";
import Tower from "./Tower";
import Astronaut from "./Astronaut";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Navigation]);

function Links({ onWarp }) {
  return (
    <main
      style={{
        position: "absolute",
        top: "calc(10% + 40px)",
        left: 0,
        width: "100%",
        height: "calc(100vh - 15% - 40px)",
        zIndex: "99",
        paddingTop: "32px",
      }}
    >
      <Swiper
        style={{ width: "95%", height: "90%", margin: "auto" }}
        spaceBetween={0}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <LinkBox>
            <Link to="/projects" style={{ textDecoration: "none" }}>
              <LinkText>Projects</LinkText>
              <Canvas>
                <Suspense fallback={null}>
                  <Earth />
                </Suspense>
              </Canvas>
            </Link>
          </LinkBox>
        </SwiperSlide>
        <SwiperSlide>
          <LinkBox>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <LinkText>About Me</LinkText>
              <Canvas>
                <Suspense fallback={null}>
                  <Astronaut />
                </Suspense>
              </Canvas>
            </Link>
          </LinkBox>
        </SwiperSlide>
        <SwiperSlide>
          <LinkBox>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <LinkText>Contact</LinkText>
              <Canvas>
                <Suspense fallback={null}>
                  <Tower />
                </Suspense>
              </Canvas>
            </Link>
          </LinkBox>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}

export default withRouter(Links);

const LinkBox = styled.div`
  margin: auto;
  padding: 16px;
  height: 90%;
  width: 80%;

  &:hover {
    background-color: rgba(50, 50, 50, 0.1);
    box-shadow: inset 0px 0px 4px 4px rgba(50, 50, 50, 0.5);
  }
`;

const LinkText = styled.h2`
  color: white;
  font-size: 2em;
  text-align: center;
  margin: 0 auto;
`;
