import MPC from "../../../assets/images/MPCStatic.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import freesound from "../../../assets/videos/FreesoundTooltip.mp4";
import Tooltip from "../../Tooltip";

export default function BeatPad() {
  return (
    <>
      <Tooltip
        content={
          <>
            <GIF src={freesound} autoPlay type="video/mp4" loop></GIF>
            <p>
              Freesound Notepad. A sample discovery tool for music producers.
            </p>
          </>
        }
      >
        <Link to="/projects/freesound">
          <motion.div
            animate={{
              translateY: [-20, 20],
              transition: {
                duration: 2,
                type: "spring",
                yoyo: Infinity,
              },
            }}
          >
            <Image src={MPC} alt="Freesound Notepad" />
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
