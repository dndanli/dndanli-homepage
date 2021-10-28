// import { useEffect } from "react";

function useNavStyleToggle(matches, menuSty, navSty, slideSty) {
  // if screen is less than max width
  // useEffect(() => {
  if (matches) {
    // make menu icon visible
    menuSty = { ...menuSty, visibility: "visible" };

    // hide the nav links
    navSty = { ...navSty, visibility: "hidden" };
  } else {
    menuSty = { ...menuSty, visibility: "hidden" };
    slideSty = { ...slideSty, visibility: "hidden" };
    navSty = { ...navSty, visibility: "visible" };
  }
  // }, [matches]);
  return { menuSty, navSty, slideSty };
}

export default useNavStyleToggle;
