import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const hashPath = location.hash || window.location.hash || "/";
    const cleanedPath = hashPath.replace("#", "") || "/";

    if (window.gtag) {
      window.gtag("config", "G-640BWMC1HB", {
        page_path: cleanedPath,
      });
    }
  }, [location]);

  return null;
};

export default PageTracker;