import AaronHome from "../../../../assets/images/AaronHome.jpg";
import AaronCurated from "../../../../assets/images/AaronCurated.jpg";
import AaronDemo from "../../../../assets/videos/AaronDemo.mp4";
import * as S from "../ProjectsStyles";
import { Link } from "react-router-dom";
import backArrow from "../../../../assets/chevronLeftDark.svg";

export default function AaronGlasserHome() {
  return (
    <>
      <BackArrow />
      <S.Container>
        <S.Header style={{ paddingBottom: 0 }}>
          Portfolio for Aaron Glasser
        </S.Header>
        <S.FlexContainer style={{ padding: 0 }}>
          <S.Description>
            Site:{" "}
            <S.SiteLink href="https://www.aaronglasser.com/" target="_blank">
              aaronglasser.com
            </S.SiteLink>
          </S.Description>
          <S.SiteLink
            href="https://github.com/ParkerMJones/AaronGlasser"
            target="_blank"
          >
            Github
          </S.SiteLink>
        </S.FlexContainer>
        <S.SubHeader>About the Project</S.SubHeader>
        <S.Description>
          Aaron Glasser is a published philospher and experimental filmmaker at
          the University of Michigan. He needed a website to share his work, in
          both academic and creative domains, and he came to me for help. Using
          React and styled-components, I built him a site where he can share his
          acheivements.
        </S.Description>
        <S.SubHeader>Building a Film Library</S.SubHeader>

        <S.Image
          src={AaronCurated}
          alt="An example flyer from one of Aaron Glasser's curated programs"
          style={{ width: "55ch" }}
        />
        <S.Description>
          Aaron's films were previously hosted only on Vimeo, so I built him a
          library by fetching his videos from Vimeo and wrapping them each in a
          React Player object. This allowed me to load only the thumbnails on
          page load, and the selected video on a user's click, leading to faster
          load times and less unnecesary data. A flexible layout is used to
          ensure responsiveness on any device, and video controls are provided
          by Vimeo.
          <br />
          He's curated a number of events, flyers for which were archived on the
          hosting theater's website. I used the information to create a
          historical catalog of his programs, enabling him to share with
          prospective employers and friends.
        </S.Description>

        <S.SubHeader>In Philosophy</S.SubHeader>
        <S.Description>
          Aaron is a published philospher who writes on subjects centered around
          mind-wandering and mental illness. To make his essays available here,
          I translated text from PDF to JSX, paying careful attention to
          emphasis and structure. An added benefit was the addition of
          hyperlinks to works cited where applicable, making access to further
          reading more convenient.
        </S.Description>
        <S.Image
          src={AaronHome}
          alt="An excerpt from Aaron Glasser's published philosophy"
          style={{ width: "80%" }}
        />
        <S.SubHeader>Experiments and the Future</S.SubHeader>
        <S.Description>
          His recent experiments involve live visual performance using colors
          and images played via a midi controller. The "Image Instrument Demo"
          is a simplified demonstration of his idea. This demo was built using
          P5.js, and it functions by responding to user input on a keyboard.
          Although simple, the demo version can be surprisingly fun to use.
          Images and video may be integrated in the future, although this
          element is meant only as a demo. Aaron is currently pursuing his PhD
          in Philosophy at the University of Michigan and has several papers
          currently undergoing peer review. Watch his films{" "}
          <S.SiteLink
            href="https://www.aaronglasser.com/movies/library"
            target="_blank"
          >
            here.
          </S.SiteLink>
        </S.Description>
        <S.GIF src={AaronDemo} autoPlay type="video/mp4" loop></S.GIF>
      </S.Container>
      );
    </>
  );
}

const BackArrow = () => {
  return (
    <div style={{ padding: "5% 0 0 5%", maxWidth: "fit-content" }}>
      <Link to="/projects">
        <img src={backArrow} alt="back arrow" />
      </Link>
    </div>
  );
};
