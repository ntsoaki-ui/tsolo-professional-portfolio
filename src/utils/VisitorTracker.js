
const TRACKER_URL =
  "https://script.google.com/macros/s/AKfycbzBdk8ZeXqn5e-_CZM5El0aTTUnNMiC9yHdkd10kSgwanb8RDDYXEHqrn5teNmGMHMG/exec                                                                                         ";

function getVisitorId() {
  const key = "portfolio_visitor_id";

  try {
    let id = localStorage.getItem(key);

    if (!id) {
      id =                                                                                                                                                                                                       
        typeof crypto !== "undefined" &&                                        
        typeof crypto.randomUUID === "function"
          ? crypto.randomUUID()
          : "visitor-" + Date.now() + "-" +
            Math.random().toString(36).slice(2);

      localStorage.setItem(key, id);
    }

    return id;
  } catch {
    return "session-" + Date.now();
  }
}

export function trackEvent(event, details = "") {
  if (typeof window === "undefined") return;

  const payload = {
    visitorId: getVisitorId(),
    event,
    page: window.location.pathname,
    details,
    referrer: document.referrer || "Direct visit",
    timestamp: new Date().toISOString(),
  };

  fetch(TRACKER_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
    },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch((error) => {
    console.error("Visitor tracking failed:", error);
  });
}
