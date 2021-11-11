import { useState, useEffect } from "react";

function CheckQuery(query, defaultMatches = window.matchMedia(query)) {
  const [matches, setMatches] = useState(defaultMatches);

  useEffect(() => {
    //media query list
    const mql = window.matchMedia(query);

    const listener = () => setMatches(mql.matches);

    if (mql.matches !== matches) {
      setMatches(mql.matches);
    }

    //add event
    mql.addEventListener("change", listener);

    //cleanup
    return () => mql.removeEventListener("change", listener);
  }, [query, matches]);

  return matches;
}

export default CheckQuery;
