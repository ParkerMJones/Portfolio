import { Transition } from "react-transition-group";

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default function FadeIn({ children }) {
  return (
    <div>
      <Transition in={true} appear={true} timeout={duration}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
              display: "grid",
              placeContent: "center",
            }}
          >
            {children}
          </div>
        )}
      </Transition>
    </div>
  );
}
