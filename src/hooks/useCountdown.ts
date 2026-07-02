import { useEffect, useState } from "react";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  finished: boolean;
}

function diffToCountdown(target: number): Countdown {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    finished: diff <= 0,
  };
}

/** Contagem regressiva em tempo real até `targetDate` (ISO string). */
export function useCountdown(targetDate: string): Countdown {
  const target = new Date(targetDate).getTime();
  const [countdown, setCountdown] = useState(() => diffToCountdown(target));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(diffToCountdown(target));
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return countdown;
}
