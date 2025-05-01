"use client";

import { useState, useEffect } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  // scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  function handleVisibleButton() {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  // scroll to top when clicked
  function handleClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="fixed bottom-4 right-4 z-10">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full transition-opacity duration-500 ease-in-out aspect-square cursor-pointer"
        style={{ opacity: visible ? 1 : 0 }}
        onClick={handleClick}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
