import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2% 5% 2% 5%;
  max-width: 120ch;
  margin: 0 auto;
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
  line-height: 2;
  font-family: "Roboto", sans-serif;
`;

export const AboutDescription = styled.p`
  color: dimgray;
  line-height: 2;
  font-family: "Roboto", sans-serif;
  text-align: justify;
  text-indent: 2em;
`;

export const Image = styled.img`
  height: auto;
  border-radius: 10px;
  max-width: 100%;
`;

export const VerticalImage = styled.img`
  max-height: 500px;
  aspect-ratio: preserve;
  border-radius: 10px;
  padding: 0 16px;
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
  justify-content: space-between;
  align-items: center;
  padding: 2% 0;
`;

export const SiteLink = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
      text-decoration: underline;
`;
