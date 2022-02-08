import AaronHome from "../../../../assets/images/AaronHome.jpg";
import AaronCurated from "../../../../assets/images/AaronCurated.jpg";
import AaronDemo from "../../../../assets/video/AaronDemo.webm";
import * as S from "../ProjectsStyles";

export default function AaronGlasserHome() {
  return (
    <S.Container>
      <S.Header style={{ paddingBottom: 0 }}>AaronGlasser.com</S.Header>
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
        both the academic and creative domains, and he came to me for help. With
        his input, I created a website that serves as a hub for his work thus
        far.
      </S.Description>
      <S.SubHeader>His Work in Film</S.SubHeader>
      <S.FlexContainer>
        <S.Image
          src={AaronCurated}
          alt="An example flyer from one of Aaron Glasser's curated programs"
        />
        <S.FlexDescription>
          Aaron is involved in the experimental film community, both as creator
          and curator. His deep library of films, previously only on Vimeo, is
          now available to those who visit his site. A flexible layout is used
          to ensure responsiveness on any device, and video controls are
          provided by the Vimeo player. He has curated several events to share
          intriguing and often obsure films to those who are interested.
        </S.FlexDescription>
      </S.FlexContainer>

      <S.FlexContainer>
        <S.FlexDescription>
          <S.SubHeader style={{ color: "black" }}>In Philosophy</S.SubHeader>
          Aaron is a published philospher who writes on subjects centered around
          mind-wandering and mental illness. His essays are available to read
          directly from his website, and a PDF is available for those who want
          to download.
        </S.FlexDescription>
        <S.Image
          src={AaronHome}
          alt="An excerpt from Aaron Glasser's published philosophy"
        />
      </S.FlexContainer>
      <S.SubHeader>Experiments and the Future</S.SubHeader>
      <S.Description>
        His recent experiments involve live video performance using colors and
        images played via a midi controller. The "Image Instrument Demo" is a
        simplified demonstration of his idea. This demo was built using P5.js,
        and it functions by responding to user input on a keyboard. Although
        simple, the demo version can be surprisingly fun to use. Aaron is
        currently pursuing his PhD in Philosophy at the University of Michigan
        and has several papers currently undergoing peer review.
      </S.Description>
      <S.FlexGIF src={AaronDemo} autoPlay type="video/webm" loop></S.FlexGIF>
    </S.Container>
  );
}
