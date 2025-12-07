"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

const Preloader = ({ children }) => {
  const containerRef = useRef(null);
  const preloaderBoxRef = useRef(null);
  const homeRef = useRef(null);
  const counterRef = useRef(null);

  useGSAP(
    () => {
      const preloader = containerRef.current;
      const preloaderBox = preloaderBoxRef.current;
      const home = homeRef.current;
      const counter = counterRef.current;

      // Select all elements with the 'reveal-text' class inside this component
      // We use gsap.utils.toArray to grab them as a list
      const textLines = gsap.utils.toArray(".reveal-text");

      // 1. Set Initial States
      // Text: Pushed down and hidden
      gsap.set(textLines, {
        y: 40, // Move down 40px
        opacity: 0,
        autoAlpha: 0,
      });

      // Box: Scale 0
      gsap.set(preloaderBox, {
        transformOrigin: "center center",
        scale: 0,
      });

      // Home: Pushed down
      gsap.set(home, { y: "10%" });

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power4.inOut" },
      });

      // 2. The Animation Sequence
      tl
        // --- PHASE 1: TEXT REVEAL ---
        // Animate text up and fade in BEFORE the box starts
        .to(textLines, {
          y: 0,
          opacity: 1,
          autoAlpha: 1,
          stagger: 0.05, // Delay of 0.07s between each line
          duration: 1.2,
          ease: "power3.out", // Smooth exit easing
        })

        // --- PHASE 2: BOX SCALING (Starts slightly before text finishes for flow) ---
        // Step 1: Scale to 0.15 & Counter to 15%
        .to(preloaderBox, { scale: 0.15 })
        .to(counter, { textContent: "15%", snap: "textContent" }, "<")

        // Step 2: Scale to 0.25 & Counter to 25%
        .to(preloaderBox, { scale: 0.25 }, "+=0.15")
        .to(counter, { textContent: "25%", snap: "textContent" }, "<")

        // Step 3: Scale to 0.5 & Counter to 50%
        .to(preloaderBox, { scale: 0.5 }, "-=0.25")
        .to(counter, { textContent: "50%", snap: "textContent" }, "<")

        // Step 4: Scale to 1 & Counter to 100%
        .to(preloaderBox, { scale: 1 }, "-=0.25")
        .to(counter, { textContent: "100%", snap: "textContent" }, "<")

        // --- PHASE 3: EXIT ---
        // Fade out text while box is full screen
        .to(textLines, { opacity: 0, y: -20, duration: 0.5 }, "-=0.5")
        .to(counter, { opacity: 0, duration: 0.5 }, "<")

        // Move preloader up
        .to(
          preloader,
          { y: "-120%", duration: 0.75, ease: "power3.inOut" },
          "-=0.5"
        )
        .to(home, { y: "0%", duration: 0.75, ease: "power3.inOut" }, "-=0.75")

        // Cleanup
        .set(preloader, { display: "none" });
    },
    { scope: containerRef }
  );

  return (
    <>
      <div
        className="bg-black w-screen h-screen absolute top-0 left-0 flex flex-col py-16 md:py-0 md:flex-row justify-between px-16 items-center z-50 text-white overflow-hidden"
        ref={containerRef}
      >
        {/* Left Text Column */}
        <div className="flex flex-col md:flex-row gap-16 font-pp-supply-mono uppercase text-xs">
          <div className="flex flex-col gap-1">
            {/* Added 'reveal-text' to specific lines for staggering */}
            <h4 className="reveal-text">Permian.</h4>
            <div className="text-right">
              {/* Wrapped lines in divs to act like separate lines for animation */}
              <p className="reveal-text">Join us to co-create</p>
              <p className="reveal-text">the sneaker brand of future.</p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="reveal-text">United Kingdom:London</h4>
            <p className="text-right reveal-text">
              51* 30' 35.5140'' N/0* 7' 29.9740'' W
            </p>
            <h5 className="mt-4 reveal-text">&gt;Worldwide</h5>
          </div>
        </div>

        {/* Center Box */}
        <div className="grid place-content-center absolute left-0 w-full h-full pointer-events-none z-50">
          <div
            className="w-[1920px] h-[1920px] bg-primary"
            ref={preloaderBoxRef}
          ></div>
        </div>

        {/* Counter */}
        <p
          className="font-pp-supply-mono uppercase text-sm reveal-text"
          ref={counterRef}
        >
          0%
        </p>
      </div>

      <div className="flex flex-col min-h-screen grow" ref={homeRef}>
        {children}
      </div>
    </>
  );
};

export default Preloader;
