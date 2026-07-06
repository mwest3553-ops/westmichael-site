"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

// position biases the object-cover crop so faces stay in frame
const slideshowImages = [
  { src: "/images/about/01.jpg", position: "50% 25%" },
  { src: "/images/about/02.jpg", position: "50% 50%" },
  { src: "/images/about/03.jpg", position: "50% 50%" },
  { src: "/images/about/04.jpg", position: "50% 50%" },
];

const INTERVAL_MS = 5000;
const FADE_MS = 1000;

export default function AboutHero() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slideshowImages.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <div className="mx-auto max-w-3xl px-6">
      {/* Instagram-style circular profile photo */}
      <div className="flex justify-center">
        <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-accent shadow-xl md:h-36 md:w-36">
          <Image
            src="/images/about/profile.jpg"
            alt="Michael A. West III"
            fill
            sizes="(max-width: 768px) 112px, 144px"
            className="object-cover"
            style={{ objectPosition: "50% 30%" }}
            priority
          />
        </div>
      </div>

      {/* Rotating slideshow of the surrounding photos, above the bio text */}
      <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-lg border border-border shadow-2xl md:mt-12">
        {slideshowImages.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0"
            style={{
              opacity: i === index ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease-in-out`,
            }}
            aria-hidden={i !== index}
          >
            <Image
              src={img.src}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              priority
              className="object-cover"
              style={{ objectPosition: img.position }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
