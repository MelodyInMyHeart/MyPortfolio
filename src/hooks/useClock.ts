import { useState, useEffect } from "react";

export function useClock() {
  const [time, setTime] = useState("--:-- WAT");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      try {
        const t = new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(now);
        setTime(`${t} WAT (GMT+1)`);
      } catch {
        setTime(`${now.toLocaleTimeString()} WAT`);
      }
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
