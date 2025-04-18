import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-640BWMC1HB", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

export default PageTracker;