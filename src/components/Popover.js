import { useState } from "react";
import styled from "styled-components";
import { Root, Trigger, Content, Arrow } from "@radix-ui/react-popover";

const Popover = ({ children, content }) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <Root open={open || hover}>
      <Trigger asChild>
        <div
          onMouseDown={() => setOpen(!open)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {children}
        </div>
        <Content
          side="top"
          align="center"
          onOpenAutoFocus={(e) => e.preventDefault()}
          onInteractOutside={() => setOpen(false)}
        >
          <Container>
            {content}
            <Arrow fill="#f8f8ff" />
          </Container>
        </Content>
      </Trigger>
    </Root>
  );
};

const Container = styled.div`
  padding: 8px;
  background-color: #f8f8ff;
  border-radius: 4px;
  max-width: min(50vw, 275px);
`;

export default Popover;
