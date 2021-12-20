import styled from "styled-components";
import { MouseCursor } from "./Cursor";

export const StyledCursor = styled(MouseCursor)`
  width: 30px;
  height: 30px;
  border: 1px solid #e16259;
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
  transition-duration: 200ms;
  transition-timing-function: all ease-in-out;
`;
