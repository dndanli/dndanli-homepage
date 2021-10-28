function useNavStyleToggle(matches, menuSty, navSty, slideSty) {
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
  return { menuSty, navSty, slideSty };
}

export default useNavStyleToggle;
