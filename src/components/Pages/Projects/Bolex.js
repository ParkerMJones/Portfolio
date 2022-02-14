import { Link } from "react-router-dom";
import bolexStatic from "../../../assets/images/BolexStatic.png";
import styled from "styled-components";

export default function Bolex() {
  return (
    <div>
      <Link to="/projects/aaronglasser">
        <Image src={bolexStatic} alt="aaron glasser's website" />
      </Link>
    </div>
  );
}

const Image = styled.img`
  width: 150px;
  height: 150px;
`;
