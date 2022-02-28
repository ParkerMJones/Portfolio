import dumbbell from "../../../assets/images/DumbbellStatic.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tooltip from "../../Tooltip";
import freesound from "../../../assets/images/FreesoundHover.png";

export default function Dumbbell() {
  return (
    <>
      <Tooltip
        content={
          <>
            <HoverImage src={freesound} alt="Freesound" />
            <p>Solin Fitness. The Home of Social Fitness.</p>
          </>
        }
      >
        <Link to="/projects/solin">
          <motion.div
            animate={{
              translateY: [-20, 20],
              transition: {
                duration: 2,
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

const HoverImage = styled.img`
  width: 100%;
  height: auto;
`;
