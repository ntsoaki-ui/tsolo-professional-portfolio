
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "../utils/VisitorTracker.js";

export default function VisitorTracker() {
  const location = useLocation();

  useEffect(() => {
    trackEvent("page_view", `Visited ${location.pathname}`);
  }, [location.pathname]);

  return null;
}
