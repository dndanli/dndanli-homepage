import { CursorEffect } from "./CursorEffect";

export const MouseCursor = ({ className }) => {
  return (
    <div className={className} id="cursor">
      {CursorEffect()}
    </div>
  );
};
