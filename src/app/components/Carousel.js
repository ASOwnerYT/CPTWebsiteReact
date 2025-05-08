"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";
import Button from "@/app/components/Button";
import Link from "next/link";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  });

  return (
    <div className="relative w-full overflow-hidden mb-16">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[400px] md:h-[500px] flex-shrink-0"
          >
            <Image
              src={image}
              alt={`Slide ${index}`}
              placeholder="blur"
              quality={100}
              priority={index === 0}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
              className="brightness-50"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 cursor-pointer"
        aria-label="Previous Slide"
        title="Previous Slide"
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
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 cursor-pointer"
        aria-label="Next Slide"
        title="Next Slide"
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
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-slate-800" : "bg-slate-600"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full">
        <div className="container mx-auto text-white max-md:flex max-md:justify-center max-md:items-center">
          <h1 className="mb-4 text-4xl font-bold font-mono">
            Learn
            <br />
            Computer
            <br />
            Programming
          </h1>
          <p className="mb-6 hidden md:block">
            Get started learning to code today! Learn Scratch, Python, web
            development and more.
          </p>
          <Link href="/contact" className="hidden md:block">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
