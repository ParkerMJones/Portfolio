import FadeIn from "../../FadeIn";
import styled from "styled-components";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Stars } from "../Home/Starfield";
import { Canvas } from "@react-three/fiber";
import backArrow from "../../../assets/arrow-left.svg";
import { Link } from "react-router-dom";

const NightSky = ({ acceleration, starCount }) => {
  return (
    <Background>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Stars acceleration={acceleration} starCount={starCount} />
      </Canvas>
    </Background>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t6hrbyz",
        "template_rotw3ya",
        form.current,
        "user_lVa01O04SeZD1i9bURZPO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <Wrapper>
        <NightSky acceleration={0.1} starCount={20000} />
        <BackArrow />
        <div style={{ color: "white", zIndex: "2" }}>
          Thank you for visiting! I'll be in touch soon.
        </div>
      </Wrapper>
    );
  }
  return (
    <FadeIn>
      <NightSky acceleration={0.1} starCount={20000} />
      <BackArrow />
      <Wrapper>
        <h1 style={{ color: "white" }}>Contact</h1>
        <Form ref={form} onSubmit={sendEmail}>
          <div>
            <Label for="name">Name</Label>
            <Input
              type="text"
              placeholder="Faye Valentine"
              name="user_name"
              required
            />
          </div>
          <div>
            <Label for="email">Email</Label>
            <Input
              type="email"
              placeholder="Faye@Spacemail.com"
              name="user_email"
              required
            />
          </div>
          <div>
            <Label for="message">Message</Label>
            <TextArea placeholder="Hello..." name="message" required />
          </div>
          <div>
            <Button type="submit">Send Message</Button>
          </div>
        </Form>
      </Wrapper>
    </FadeIn>
  );
};

const BackArrow = () => {
  return (
    <Link to="/">
      <img
        src={backArrow}
        alt="back arrow"
        style={{
          position: "absolute",
          top: 50,
          left: 50,
        }}
      />
    </Link>
  );
};

export default Contact;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 2;
`;

const Background = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: black;
`;

const Label = styled.label`
  color: white;
`;

const Input = styled.input`
  width: 100%;
  color: white;
  background-color: (0, 0, 0, 0);
  border: 2px solid green;
  border-radius: 5px;
  margin-bottom: 16px;
  margin-top: 12px;
  padding: 8px;
  box-shadow: 0px 0px 2px 1px rgba(0, 255, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.25);

  &:focus,
  &:hover {
    border: 2px solid rgb(5, 230, 3);
    box-shadow: 0px 0px 3px 2px rgba(0, 255, 0, 0.5);

    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 16px;
  margin-top: 12px;
  padding: 8px;
  padding-bottom: 64px;
  border: 2px solid green;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 2px 1px rgba(0, 255, 0, 0.5);
  color: white;
  resize: none;

  &:focus,
  &:hover {
    border: 2px solid rgb(5, 230, 3);
    box-shadow: 0px 0px 3px 2px rgba(0, 255, 0, 0.5);
    outline: none;
  }
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.25);
  border: 1px solid green;
  color: white;
  padding: 12px;
  border-radius: 5px;

  &:hover {
    background-color: rgba(5, 230, 5, 0.75);
  }
`;

const Form = styled.form`
  width: 40vw;
`;
