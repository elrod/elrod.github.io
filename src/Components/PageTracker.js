import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search + location.hash;

    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: path || "/",
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
};

export default PageTracker;