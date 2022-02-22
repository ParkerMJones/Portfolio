import styled from "styled-components";
import { Suspense, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Earth } from "./Earth";
import Astra from "./Astra";
import Tower from "./Tower";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Navigation]);

export default function Links({ onWarp }) {
  const [dance, setDance] = useState(3);

  const [activate, setActivate] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setActivate(!activate), 2000);
    return () => clearTimeout(timeout);
  }, [activate]);

  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        left: 0,
        width: "100%",
        height: "calc(100vh - 10%)",
        zIndex: "99",
      }}
    >
      <Swiper
        style={{ width: "95%", height: "100%", margin: "auto" }}
        spaceBetween={0}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <LinkBox>
              <LinkText>Projects</LinkText>
              <Canvas>
                <Suspense fallback={null}>
                  <Earth />
                </Suspense>
              </Canvas>
            </LinkBox>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <LinkBoxNoHover>
            <LinkBox>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <LinkText>About Me</LinkText>
                <Canvas>
                  <Suspense fallback={null}>
                    <Astra dance={dance} />
                  </Suspense>
                </Canvas>
              </Link>
            </LinkBox>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <button
                onClick={() => {
                  dance === 3 ? setDance(0) : setDance(dance + 1);
                }}
              >
                {" "}
                Next Move
              </button>
            </div>
          </LinkBoxNoHover>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <LinkBox>
              <LinkText>Contact</LinkText>
              <Canvas>
                <Suspense fallback={null}>
                  <Tower />
                </Suspense>
              </Canvas>
            </LinkBox>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <LinkText>Credits</LinkText>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

const LinkBox = styled.div`
  margin: auto;
  padding: 16px;
  height: 80%;
  width: 80%;

  &:hover {
    background-color: rgba(50, 50, 50, 0.1);
    box-shadow: inset 0px 0px 4px 4px rgba(50, 50, 50, 0.5);
  }
`;

const LinkBoxNoHover = styled.div`
  margin: auto;
  padding: 16px;
  height: 100%;
  width: 100%;
`;

const LinkText = styled.h2`
  color: white;
  font-size: 2em;
  text-align: center;
  margin: 0 auto;
`;
