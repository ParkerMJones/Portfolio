import styled from "styled-components";
import astronaut from "../assets/images/astronaut.png";

export default function Nav() {
  return (
    <Navbar>
      <Logo src={astronaut} alt="Parker Jones" />
      <p>Parker Jones</p>
      <p>Front-End Developer</p>
    </Navbar>
  );
}

const Navbar = styled.nav`
  background-color: black;
  color: white;
  height: 40px;
  text-align: center;
  vertical-align: baseline;
  display: flex;
  gap: 48px;
  align-items: center;
  justify-content: flex-start;
  padding-left: 48px;
  padding: 16px;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
