import { useEffect, useState } from "react";

const getRemaining = (end) => {
  const diff = Math.max(0, end.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
};

export default function useCountdown(end) {
  const [remaining, setRemaining] = useState(() => getRemaining(end));

  useEffect(() => {
    setRemaining(getRemaining(end));
    const timer = window.setInterval(() => setRemaining(getRemaining(end)), 1000);
    return () => window.clearInterval(timer);
  }, [end.getTime()]);

  return remaining;
}
