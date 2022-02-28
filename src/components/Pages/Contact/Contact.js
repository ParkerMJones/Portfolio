import styled from "styled-components";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import backArrow from "../../../assets/arrow-left.svg";
import { Link } from "react-router-dom";

const NightSky = () => {
  return (
    <Background>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
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
        <NightSky />
        <BackArrow />
        <div style={{ color: "white", zIndex: "2" }}>
          Thank you for visiting! I'll be in touch soon.
        </div>
      </Wrapper>
    );
  }
  return (
    <>
      <NightSky />
      <BackArrow />
      <Wrapper>
        <h1 style={{ color: "white" }}>Contact</h1>
        <Form ref={form} onSubmit={sendEmail}>
          <div>
            <Label for="name">Name</Label>
            <Input
              type="text"
              placeholder="Ender Wiggin"
              name="user_name"
              required
            />
          </div>
          <div>
            <Label for="email">Email</Label>
            <Input
              type="email"
              placeholder="EnderWiggin@spacemail.com"
              name="user_email"
              required
            />
          </div>
          <div>
            <Label for="message">Message</Label>
            <TextArea
              placeholder="Hello, my name is Ender Wiggin and I like your website."
              name="message"
              required
            />
          </div>
          <div>
            <Button type="submit">Send Message</Button>
          </div>
        </Form>
      </Wrapper>
    </>
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
`;

const Background = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: black;
  z-index: -1;
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
    background-color: rgba(5, 150, 5, 0.75);
  }
`;

const Form = styled.form`
  width: 40vw;
`;
