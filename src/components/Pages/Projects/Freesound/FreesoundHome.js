import screenRecording from "../../../../assets/video/SamplerNotepad.webm";

export default function FreesoundHome() {
  return (
    <div>
      <h1>Freesound Notepad</h1>
      <h3>A tool for music producers</h3>
      <p>
        As a music producer, I'm frequently looking for new sounds to use in my
        music. It isn't always obvious where to find these sounds, or even what
        I'm looking for. Sometimes, I just want to be surprised (and lazy).
        Using the Freesound API to search for sounds, I can have them come to
        me.
      </p>
      <p>
        {" "}
        On each page load, sounds are fetched from the API and mapped to keys on
        the keyboard. Mapping sounds to keys makes them recallable, so that the
        app feels more like an instrument than a random sound player. Using the
        built-in HTML audio controls, users can loop the audios simultaneously,
        giving them a loop station for combining sounds on the fly. This for me
        has resulted in hours of fun, and countless interesting sound textures.
        The HTML audio controls provide a ton of functionality to suit this
        application, including volume control, playback speed, play/pause, and
        even the ability to download files.
      </p>
      <p>
        {" "}
        For the background, description tags are taken from the audio and used
        to query the "Pexels" API, a site that hosts royalty free images and
        videos by independent visual artists. The added stimulation may immerse
        the user in a creative mood, or it may just give them something to watch
        while the sounds play out. Recently, a user requested that a link to the
        background video be added, so that they could use it in a visual
        production. It feels great to be able to help people find creative
        inspiration, even in domains beyond the application's original
        intention.
      </p>
      <p>
        All of this together constitutes a useful tool for music producers and
        fellow creatives in their quest for experimentation and discovery. This
        application was built for a group project in my web development
        bootcamp, and it's still one of my favorites. I use it consitently for
        my personal use, and building it was a great experience in learning how
        to work within a team and in querying for data from third-party APIs.
      </p>
      <video
        src={screenRecording}
        autoPlay
        type="video/webm"
        loop
        style={{ width: 400, height: 300 }}
      ></video>
    </div>
  );
}
