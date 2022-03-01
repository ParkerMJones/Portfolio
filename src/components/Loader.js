import { motion } from "framer-motion";
import styled from "styled-components";

import asteroid1 from "../assets/images/asteroid1.png";
import asteroid2 from "../assets/images/asteroid2.png";
import asteroid3 from "../assets/images/asteroid3.png";
import asteroid4 from "../assets/images/asteroid4.png";
import LoaderShip from "../assets/images/LoaderShip.png";

const Loader = () => {
  const duration = 1.25;
  return (
    <>
      <LoaderBackground>
        <motion.img
          src={LoaderShip}
          alt="loader"
          style={{ width: 100 }}
          animate={{
            translateY: [-60, 60],
            transition: {
              duration: duration,
              type: "spring",
              damping: 10,
              yoyo: Infinity,
            },
          }}
        />
        <div>
          <motion.img
            src={asteroid1}
            alt="asteroid"
            style={{ width: 35 }}
            // initial={{ x: "100vw" }}
            animate={{
              x: ["35vw", "-30vw"],
              opacity: [0, 0, 1, 0, 0, 0],
              transition: { duration: duration * 4, loop: Infinity },
            }}
          />
          <motion.img
            src={asteroid3}
            alt="asteroid"
            style={{ width: 45 }}
            animate={{
              x: ["35vw", "-30vw"],
              opacity: [0, 0, 1, 0, 0, 0],
              transition: {
                duration: duration * 4,
                delay: duration * 2,
                loop: Infinity,
              },
            }}
          />
        </div>
        <div>
          <motion.img
            src={asteroid2}
            alt="asteroid"
            style={{ width: 50 }}
            animate={{
              x: ["25vw", "-40vw"],
              opacity: [0, 0, 1, 0, 0, 0],
              transition: {
                duration: duration * 4,
                delay: duration,
                loop: Infinity,
              },
            }}
          />
          <motion.img
            src={asteroid4}
            alt="asteroid"
            style={{ width: 45 }}
            animate={{
              x: ["25vw", "-40vw"],
              opacity: [0, 0, 1, 0, 0, 0],
              transition: {
                duration: duration * 4,
                delay: duration * 3,
                loop: Infinity,
              },
            }}
          />
        </div>
        <h3 style={{ color: "white" }}>
          Traveling
          <motion.span
            animate={{
              opacity: [0, 1],
              transition: {
                duration: 1,
                loop: Infinity,
              },
            }}
          >
            ...
          </motion.span>
        </h3>
      </LoaderBackground>
    </>
  );
};

export default Loader;

const LoaderBackground = styled.div`
  display: grid;
  place-content: center;
  grid-auto-flow: column;
  grid-template-rows: 50px 50px;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;
