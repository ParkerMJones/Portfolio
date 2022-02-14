import dumbbell from "../../../assets/images/DumbbellStatic.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Dumbbell() {
  return (
    <>
      <div>
        <Link to="/projects/solin">
          <Image src={dumbbell} alt="Solin Fitness" />
        </Link>
      </div>
    </>
  );
}

const Image = styled.img`
  width: 150px;
  height: 150px;
`;
