import styled from "styled-components";
import { MouseCursor } from "./Cursor";

export const StyledCursor = styled(MouseCursor)`
  width: 30px;
  height: 30px;
  border: 1px solid #00e0ff;
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
  transition-duration: 200ms;
  transition-timing-function: all ease-in-out;
`;
