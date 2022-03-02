import styled from "styled-components";
import astronaut from "../assets/images/astronaut.png";

export default function Nav() {
  return (
    <Navbar>
      <InnerWrapper>
        <Logo src={astronaut} alt="Parker Jones" />
        <p>Parker Jones</p>
        <p>|</p>
        <p>Front-End Developer</p>
      </InnerWrapper>
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
  gap: 16px;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 26px;
  gap: 16px;
  height: 100%;
  width: 95%;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  margin: 5px 8px;
`;
