import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const hashPath = location.hash || window.location.hash || "/";
    const cleanedPath = hashPath.replace("#", "") || "/";

    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: cleanedPath,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
};

export default PageTracker;