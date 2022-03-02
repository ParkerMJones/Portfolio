import styled from "styled-components";

export const Container = styled.div`
  margin: 0 10%;
  padding: 2% 0;
`;

export const Header = styled.h1`
  font-size: 2.5rem;
  padding-bottom: 3%;
`;

export const SubHeader = styled.h3`
  font-size: 1.5rem;
`;

export const Description = styled.p`
  color: dimgray;
  max-width: 80ch;
  line-height: 2;
  font-family: "Roboto", sans-serif;
`;

export const AboutDescription = styled.p`
  color: dimgray;
  max-width: 80ch;
  line-height: 2;
  font-family: "Roboto", sans-serif;
  text-align: justify;
  text-indent: 2em;
`;

export const FlexDescription = styled.p`
  color: dimgray;
  width: 40%;
  min-width: 300px;
  line-height: 2;
  font-family: "Roboto", sans-serif;
`;

export const Image = styled.img`
  width: 40%;
  height: auto;
  border-radius: 10px;
`;

export const VerticalImage = styled.img`
  width: 40%;
  height: auto;
  border-radius: 10px;
`;

export const GIF = styled.video`
  padding: 1% 0;
  width: 80%;
  border-radius: 10px;
`;

export const FlexGIF = styled.video`
  padding: 1% 0;
  width: 40%;
  min-width: 250px;
  height: auto;
  border-radius: 10px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: flex-start;
  align-items: center;
  padding: 2% 0;
`;

export const SiteLink = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
      text-decoration: underline;
`;
