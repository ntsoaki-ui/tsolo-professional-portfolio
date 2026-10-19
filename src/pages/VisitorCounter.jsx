
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "../utils/VisitorTracker";

function VisitorTracker() {
  const location = useLocation();

  useEffect(() => {
    trackEvent("page_view", `Visited ${location.pathname}`);
  }, [location.pathname]);

  return null;
}

export default VisitorTracker;
