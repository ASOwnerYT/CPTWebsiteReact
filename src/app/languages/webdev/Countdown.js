"use client";

import { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Set the target date
  const targetDate = new Date("January 1, 2026 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    // Initialize the time left only on the client side
    setTimeLeft(targetDate - Date.now());
    
    const timer = setInterval(() => {
      const newTimeLeft = targetDate - Date.now();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Show loading state until client-side initialization
  if (timeLeft === null) {
    return null;
  }

  if (timeLeft < 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Happy New Year!</h1>
      </div>
    );
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-900 text-white rounded-md">
      <h1 className="text-3xl text-white font-bold mb-6">Countdown to New Year 2026</h1>
      <div className="flex space-x-8 text-2xl">
        <div className="text-center">
          <span className="block text-5xl font-extrabold">{days}</span>
          <span>Days</span>
        </div>
        <div className="text-center">
          <span className="block text-5xl font-extrabold">{hours}</span>
          <span>Hours</span>
        </div>
        <div className="text-center">
          <span className="block text-5xl font-extrabold">{minutes}</span>
          <span>Minutes</span>
        </div>
        <div className="text-center">
          <span className="block text-5xl font-extrabold">{seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
