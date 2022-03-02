import screenRecording from "../../../../assets/video/SamplerNotepad.mp4";
import screenRecordingDemo2 from "../../../../assets/video/SamplerNotepad2.mp4";
import * as S from "../ProjectsStyles";
import { Link } from "react-router-dom";
import backArrow from "../../../../assets/backArrowDark.svg";

export default function FreesoundHome() {
  return (
    <S.Container>
      <BackArrow />
      <S.Header>Freesound Notepad</S.Header>
      <S.SubHeader>A creative tool for music producers</S.SubHeader>
      <S.FlexContainer style={{ padding: 0 }}>
        <S.Description>
          Site:{" "}
          <S.SiteLink
            href="https://parkermjones.github.io/Freesound-Notepad/"
            target="_blank"
          >
            Freesound Notepad
          </S.SiteLink>
        </S.Description>
        <S.SiteLink
          href="https://github.com/ParkerMJones/Freesound-Notepad"
          target="_blank"
        >
          Github
        </S.SiteLink>
      </S.FlexContainer>
      <S.Description>
        As a music producer, I'm frequently looking for new sounds to use in my
        music. It isn't always obvious where to find these sounds, or even what
        I'm looking for. Sometimes, I just want to be surprised (or lazy). Using
        the Freesound.org API, I can find inspiration effortlessly.
      </S.Description>
      <S.GIF src={screenRecording} autoPlay type="video/mp4" loop></S.GIF>
      <S.SubHeader>Functionality</S.SubHeader>
      <S.Description>
        {" "}
        On each page load, sounds are fetched from the API, and mapped to keys
        on the keyboard. Mapping sounds to keys makes them recallable, so that
        the app feels more like an instrument than a random sound player. Using
        the built-in HTML audio controls, users can loop the audios
        simultaneously, giving them a tool for combining sounds on the fly. This
        for me has resulted in hours of fun, and countless interesting sound
        textures. The HTML audio controls provide a ton of functionality to suit
        this application, including volume control, playback speed, play/pause,
        and even the ability to download files. A search bar was added for
        intentional sound foraging, and the entire set of sounds can be saved in
        local storage with a preset name.
      </S.Description>
      <S.GIF src={screenRecordingDemo2} autoPlay type="video/mp4" loop></S.GIF>
      <S.SubHeader>Background Video</S.SubHeader>
      <S.Description>
        {" "}
        For the background, description tags are taken from the audio and used
        to query the "Pexels" API, a site that hosts royalty free images and
        videos by independent visual artists. This feature brings a unique
        feeling to every new batch of sounds. Recently, a user requested that a
        link to the background video be added, so that they could use it in a
        visual production. It feels great to be able to help people find
        creative inspiration, even in domains beyond the application's original
        intention.
      </S.Description>
      <S.SubHeader>Reflection</S.SubHeader>
      <S.Description>
        Together this constitutes a useful tool for music producers and fellow
        creatives in their quest for experimentation and discovery. This
        application was built for a group project in my web development
        bootcamp, and it's still one of my favorites. It's built with vanilla
        Javascript and HTML, and styled with the Skeleton CSS framework. I use
        it consitently for my personal use, and building it was a great
        experience in working with a team, in building an application on
        fundamental principles, and in responding to user interactions.
      </S.Description>
    </S.Container>
  );
}

const BackArrow = () => {
  return (
    <Link exact to="/projects">
      <img
        src={backArrow}
        alt="back arrow"
        style={{
          position: "absolute",
          top: 50,
          left: 20,
        }}
      />
    </Link>
  );
};
