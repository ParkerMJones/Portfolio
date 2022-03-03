import { useState } from "react";
import styled from "styled-components";

function Tooltip({ content, children }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showTooltip = isHovered || isFocused;

  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {children}
      </TooltipTarget>
      {showTooltip && (
        <CenterContainer>
          <TooltipBox>{content}</TooltipBox>
        </CenterContainer>
      )}
    </TooltipWrapper>
  );
}

export default Tooltip;

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

const TooltipTarget = styled.button`
  border: none;
  background: none;
  padding: 8px;
  margin: -1px;
  color: inherit;
  cursor: inherit;
  display: flex;
`;

const CenterContainer = styled.div`
  position: absolute;
  width: 250px;
  margin-left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 33%;
  bottom: calc(100% + 5px);
  pointer-events: none;
`;

const TooltipBox = styled.span`
  position: relative;
  background-color: rgba(255, 253, 228, 0.5);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 10px 8px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);

  &:after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1px;
    transform: rotate(90deg);
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent rgba(255, 255, 255, 0.6);
    left: calc(50% - 4.5px);
    top: 100%;
  }
`;
