"use client";
import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "../magicui/animated-beam";
import { cn } from "@/lib/utils";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

const index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  return (
    <>
      {/* ANIMATED BDEAM STARTS */}
      <div
        className="relative flex h-full w-full  items-center justify-center overflow-hidden rounded-lg  bg-background p-20 max-w-5xl "
        ref={containerRef}
        style={{margin:"0 auto", zIndex:"-10"}}
      >
        <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
          <div className="flex flex-col justify-center gap-2">
            <Circle ref={div1Ref}>
              
            </Circle>
            <Circle ref={div2Ref}>
              
            </Circle>
            <Circle ref={div3Ref}>
              
            </Circle>
            <Circle ref={div4Ref}>
             
            </Circle>
            <Circle ref={div5Ref}>
              
            </Circle>
          </div>
          <div className="flex flex-col justify-center">
            <Circle ref={div6Ref} className="h-16 w-16">
              
            </Circle>
          </div>
          <div className="flex flex-col justify-center">
            <Circle ref={div7Ref}>
              {/* <Icons.user className="text-black" /> */}
            </Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div6Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div6Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div6Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div6Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div6Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div7Ref}
        />
      </div>
      {/* ANIMATED BEAM ENDS */}
      <div className="mx-auto max-w-7xl px-8  sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 my-16">
          {/* COLUMN-1 */}
          <div style={{ margin: "auto 0" }}>
            <h2 className="text-5xl font-bold text-left">
              Smartle AI your trusted ecommerce ally ensures real results while
              preserving profit margins
            </h2>
            <h3 className="text-2xl font-medium text-left pt-10 opacity-50">
              Upgrade your customer experience with our AI chat: engaging in
              heartfelt conversations and responding promptly. Dive into
              meaningful answers, reduce wait times, and ensure happy customers.
            </h3>
          </div>

          {/* COLUMN-2 */}
          <div className="relative">
            <video
              autoPlay
              muted
              loop
              className=""
              style={{ height: "40rem", width: "25rem", margin: "0 auto" }}
            >
              <source src="/videos/smartle phone.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

    </>

    // <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 m-32">
    //   <h2 className="text-5xl font-bold text-center">
    //     Smartle AI your trusted ecommerce ally ensures real results while
    //     preserving profit margins
    //   </h2>
    //   <h3 className="text-2xl font-medium text-center pt-10 opacity-50">
    //     Upgrade your customer experience with our AI chat: engaging in heartfelt
    //     conversations and responding promptly. Dive into meaningful answers,
    //     reduce wait times, and ensure happy customers.
    //   </h3>
    //   <div className="grid grid-cols-1 my-16">
    //     {/* <Image
    //       src="/images/team/teamimg.png"
    //       alt="office-image"
    //       height={684}
    //       width={1296}
    //     /> */}
    // <video autoPlay muted loop className="" style={{height:"20rem" , width: "10rem"}}>
    //   <source src="/videos/smartle phone.mp4" type="video/mp4" />
    //   Your browser does not support the video tag.
    // </video>
    //   </div>
    // </div>
  );
};

export default index;
