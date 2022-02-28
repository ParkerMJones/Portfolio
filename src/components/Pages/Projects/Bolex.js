import { Link } from "react-router-dom";
import bolex from "../../../assets/images/bolex.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import festering from "../../../assets/video/AaronTooltip.webm";
import Tooltip from "../../Tooltip";

export default function Bolex() {
  return (
    <>
      <Tooltip
        content={
          <>
            <GIF src={festering} autoPlay type="video/webm" loop></GIF>
            <p>
              Portfolio Website for Filmmaker and Philosopher Aaron Glasser.
            </p>
          </>
        }
      >
        <Link to="/projects/aaronglasser">
          <motion.div
            animate={{
              translateY: [-20, 20],
              transition: {
                duration: 2,
                type: "spring",
                yoyo: Infinity,
                delay: 0.6,
              },
            }}
          >
            <Image src={bolex} alt="aaron glasser's website" />
          </motion.div>
        </Link>
      </Tooltip>
    </>
  );
}

const Image = styled.img`
  width: 150px;
  height: 150px;
`;

const GIF = styled.video`
  width: 100%;
  height: auto;
`;
