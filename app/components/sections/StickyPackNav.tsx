"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function StickyPackNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [visibleCycle, setVisibleCycle] = useState(0);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const updateVisibility = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      const shouldShow = heroBottom <= 0;

      setIsVisible((wasVisible) => {
        if (!wasVisible && shouldShow) {
          setIsExpanded(true);
          setVisibleCycle((cycle) => cycle + 1);
        }

        return shouldShow;
      });
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = window.setTimeout(() => {
      setIsExpanded(false);
    }, 3200);

    return () => window.clearTimeout(timer);
  }, [isVisible, visibleCycle]);

  const showExpanded = isVisible && (isExpanded || isHovering);

  return (
    <div
      className={`fixed bottom-4 right-4 z-[200] w-[calc(100%-32px)] transition-all duration-300 md:bottom-6 md:right-6 ${
        showExpanded ? "max-w-[524px]" : "max-w-[204px]"
      } ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-hidden={!isVisible}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
    >
      <div
        className={`relative flex h-[72px] items-center rounded-full border border-white/10 shadow-[0_12.448px_49.794px_rgba(0,0,0,0.37)] backdrop-blur-[9.336px] transition-all duration-300 md:h-[100px] ${
          showExpanded ? "justify-between px-[18px] md:px-[28px]" : "justify-center px-0"
        }`}
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          boxShadow:
            "0px 12.448px 49.794px rgba(0,0,0,0.37), inset 0px 1.556px 0px rgba(255,255,255,0.1)",
        }}
      >
        <div
          className={`overflow-hidden transition-all duration-300 ${
            showExpanded ? "mr-4 w-[160px] opacity-100 md:w-[228px]" : "mr-0 w-0 opacity-0"
          }`}
        >
          <Image
            src="/Logo-Brand-Collective-White-PNG_1.png"
            alt="Brand Collective"
            width={228}
            height={55}
            className="h-auto w-[160px] min-w-[160px] object-contain md:w-[228px] md:min-w-[228px]"
            priority={false}
          />
        </div>

        <button
          className="group flex h-[44px] min-w-[150px] items-center justify-center gap-2 rounded-full border-[1.313px] border-primary-dark px-5 text-[13px] font-semibold text-black transition-transform duration-300 hover:scale-105 active:scale-95 md:h-[46px] md:min-w-[204px] md:text-[14px]"
          style={{
            background: "linear-gradient(90deg, #E1FA00 17.788%, #EEFF55 100%)",
            boxShadow:
              "0px 0px 19.275px rgba(225,250,0,0.35), 0px 0px 9.637px rgba(225,250,0,0.25), inset 0px 1.285px 0px #E1FA00",
          }}
        >
          Quero meu pack
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          >
            <path
              d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
