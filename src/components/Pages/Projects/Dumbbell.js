import dumbbell from "../../../assets/images/DumbbellStatic.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tooltip from "../../Tooltip";
import Solin from "../../../assets/videos/SolinPromo.mp4";

export default function Dumbbell() {
  return (
    <>
      <Tooltip
        content={
          <>
            <GIF src={Solin} autoPlay type="video/mp4" loop></GIF>
            <p>Solin Fitness. The Home of Social Fitness.</p>
          </>
        }
      >
        <Link to="/projects/solin">
          <motion.div
            animate={{
              translateY: [-20, 20],
              transition: {
                duration: 2.3,
                type: "spring",
                yoyo: Infinity,
                delay: 0.2,
              },
            }}
          >
            <Image src={dumbbell} alt="Solin Fitness" />
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
