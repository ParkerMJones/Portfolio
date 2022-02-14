import MPC from "../../../assets/images/MPCStatic.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function BeatPad() {
  return (
    <>
      <div>
        <Link to="/projects/freesound">
          <Image src={MPC} alt="Freesound Notepad" />
        </Link>
      </div>
    </>
  );
}

const Image = styled.img`
  width: 150px;
  height: 150px;
`;
