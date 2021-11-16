import { useEffect } from "react";

export const CursorEffect = () => {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    document.addEventListener("mousemove", (el) => {
      cursor.setAttribute(
        "style",
        "top:" + (el.pageY - 15) + "px; left:" + (el.pageX - 15) + "px;"
      );
    });
  }, []);
};
