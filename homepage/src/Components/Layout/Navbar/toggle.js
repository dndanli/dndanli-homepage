function toggleMenuIcon(matches, useMenuStyle, useNavStyle, useMobileStyle) {
  if (matches) {

    useMenuStyle = { ...useMenuStyle, visibility: "visible" };
    useNavStyle = { ...useNavStyle, visibility: "hidden" };

  } else {

    useMenuStyle = { ...useMenuStyle, visibility: "hidden" };
    useMobileStyle = { ...useMobileStyle, visibility: "hidden" };
    useNavStyle = { ...useNavStyle, visibility: "visible" };
    
  }
  return {useMenuStyle,useNavStyle, useMobileStyle };
}

export default toggleMenuIcon;
