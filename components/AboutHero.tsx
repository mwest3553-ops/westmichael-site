"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

// position biases the object-cover crop so faces stay in frame.
// TODO: replace each `alt` with a specific description of that photo
// (who/where/what) for stronger accessibility + image SEO.
const slideshowImages = [
  { src: "/images/about/01.jpg", position: "50% 25%", alt: "Michael A. West III" },
  { src: "/images/about/02.jpg", position: "50% 50%", alt: "Michael A. West III" },
  { src: "/images/about/03.jpg", position: "50% 50%", alt: "Michael A. West III" },
  { src: "/images/about/04.jpg", position: "50% 50%", alt: "Michael A. West III" },
];

const INTERVAL_MS = 5000;
const FADE_MS = 1000;
// circumference of the r=46 progress ring (2·π·46)
const RING_CIRC = 289;

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
      {/* Framed slideshow with a slow Ken Burns zoom; the profile portrait sits
          on the lower-left as a composed avatar rather than floating above. */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border shadow-2xl">
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
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              priority
              className={`object-cover ${
                prefersReducedMotion ? "" : "animate-kenburns"
              }`}
              style={{ objectPosition: img.position }}
            />
          </div>
        ))}

        {/* Subtle bottom gradient so the avatar reads against any frame */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg-deep/80 to-transparent"
          aria-hidden="true"
        />

        {/* Avatar + gold progress ring (ring fills across each 5s slide) */}
        <div className="absolute bottom-4 left-4 flex items-center gap-3 md:bottom-6 md:left-6">
          <div className="relative h-[4.5rem] w-[4.5rem] md:h-[5.5rem] md:w-[5.5rem]">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full -rotate-90"
              aria-hidden="true"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="rgba(10,22,40,0.55)"
                strokeWidth="4"
              />
              <circle
                key={index}
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#F5B53A"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={RING_CIRC}
                className={prefersReducedMotion ? "" : "animate-ring-fill"}
                style={
                  prefersReducedMotion ? { strokeDashoffset: 0 } : undefined
                }
              />
            </svg>
            <div className="absolute inset-[7px] overflow-hidden rounded-full ring-2 ring-bg shadow-xl">
              <Image
                src="/images/about/profile.jpg"
                alt="Michael A. West III"
                fill
                sizes="88px"
                className="object-cover"
                style={{ objectPosition: "50% 22%" }}
                priority
              />
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-bg/55 px-3 py-1.5 backdrop-blur-md">
            <p className="text-meta font-semibold text-ink">
              Michael A. West III
            </p>
            <p className="text-xs text-muted">Marketing &amp; Psychology</p>
          </div>
        </div>
      </div>
    </div>
  );
}
