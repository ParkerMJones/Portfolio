import * as S from "../Projects/ProjectsStyles";
import { Link } from "react-router-dom";
import backArrow from "../../../assets/backArrowDark.svg";
import astronaut from "../../../assets/images/astronaut2.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <BackArrow />
      <S.Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <S.Header>About Me</S.Header>
          <motion.img
            src={astronaut}
            alt="astronaut"
            style={{ width: 100 }}
            animate={{
              translateY: [60, 5],
              translateX: [-60, -10],
              rotateZ: [-50, -5],
              transition: {
                duration: 8,
                type: "spring",
                yoyo: Infinity,
              },
            }}
          />
        </div>
        <S.FlexContainer style={{ padding: 0 }}>
          <S.SiteLink href="https://github.com/ParkerMJones" target="_blank">
            Github
          </S.SiteLink>
        </S.FlexContainer>
        <S.Description style={{ textAlign: "justify" }}>
          Years ago I read a pamphlet called "The Art of Noise" by Luigi
          Russolo. In the early 20th century, machines consumed urban
          landscapes, their humming and puttering took over the frequency
          spectrum. Some hated the noise, but Russolo found inspiration in the
          clamor. He built machines from scratch to emulate these sounds. He
          heard an opportunity for a new type of orchestra. He declared noise an
          instrument.
          <br />
          My fascination with sound led to a fascination with technology, and to
          the places where they meet to make something new. I started coding
          because it was the only way to make the sounds I wanted to make and
          build the systems I wanted to build. My education at Vanderbilt's Web
          Development Bootcamp helped me evolve professionally as well as
          personally, to create amazing things. Added to my time at Icon
          Collective's School of Music Production, I'm now operating as a
          creative technologist. While I continue to grow in software, my skills
          as an artist grow too. That's what excites me most about learning new
          technologies: they lend themselves to new creative potential.
          <br />
          By making my own tools, I'm able to develop a tailored workflow, where
          the system is an extension of myself. For this portfolio, I created my
          own low-poly models in Blender, I wrote hooks for niche cases, and I
          devised solutions to problems that were uniquely my own. Using
          existing tools is great, but when I build my own, I have more control
          and a better understanding of the system I'm constructing. I'm
          building my own machines.
          <br />
          Below are some examples of my music. "Interstice" is a collection of
          music I made by writing algorithms to generate patterns, using
          SuperCollider and Max/MSP. The results are excerpts from longer
          generative explorations. "Be Flea" is an indulgence in carefree EDM
          silliness.
        </S.Description>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          <iframe
            style={{ border: 0, width: 300, height: 400 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=1083503441/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
            title="Interstice by Sudaunt"
          >
            <a href="https://sudaunt.bandcamp.com/album/interstice">
              Interstice by Sudaunt
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: 300, height: 400 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=3330135441/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
            title="Be Flea by Cat $hit"
          >
            <a href="https://catshitmusic.bandcamp.com/album/be-flea">
              Be Flea by Cat $hit
            </a>
          </iframe>
        </div>
      </S.Container>
    </>
  );
}

const BackArrow = () => {
  return (
    <Link exact to="/projects">
      <div style={{ paddingTop: "5%", paddingLeft: "2%" }}>
        <img src={backArrow} alt="back arrow" />
      </div>
    </Link>
  );
};
