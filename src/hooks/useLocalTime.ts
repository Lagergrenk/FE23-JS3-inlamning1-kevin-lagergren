import { useState, useEffect } from 'react';

// Define the LocalTime type
type LocalTime = {
  hours: number;
  minutes: number;
  seconds: number;
};

const useLocalTime = (): LocalTime => {

  // Initialize the local time state
  const [localTime, setLocalTime] = useState<LocalTime>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Update the local time state every second
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      setLocalTime({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return localTime;
};

export default useLocalTime;
