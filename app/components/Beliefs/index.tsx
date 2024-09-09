"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';
// import { BorderedBeam } from "../magicui/bordered-beam";
import HeroVideoDialog from "../magicui/bordered-beam";

const Beliefs = () => {
  const [showsCalendly, setShowsCalendly] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleButtonClicks = () => {
    setShowsCalendly(true);
    setOverlayVisible(true);
  };

  const handleCalendlyClose = () => {
    setShowsCalendly(false);
    setOverlayVisible(false);
  };

  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 pt-8 px-10 sm:px-24 rounded-3xl"
        style={{ marginBottom: "-2.5rem", backgroundColor: "#f5e2e4" }}
      >
        <div>
          <h2 className="text-lg font-bold text-blue tracking-widest mb-2 text-center sm:text-start">
            ENGAGE VISITORS
          </h2>
          <h3 className="text-4xl sm:text-6xl font-bold text-black leading-snug mb-2 text-center sm:text-start">
            <span className="text-blue"> AI chat </span> Pro-Actively engage
            visitors
          </h3>
          <h5 className="bluish pt-2 mb-5 text-center sm:text-start text-xl">
            Our Proactive Chat engages visitors differently depending on their
            behaviour in your store.
          </h5>
        </div>

        <div className="flex justify-center items-end">
          <div className="relative h-[350px] lg:h-[400px] w-full">
            <Image
              src="/images/belief-img-1.png"
              alt="belief-img-1"
              layout="fill"       
              objectFit="cover"  
            />
          </div>
        </div>
      </div> 
      
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5">
        <div className="bg-darkblue pt-12 px-10 sm:px-24 rounded-3xl flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-white tracking-widest mb-5 text-center sm:text-start">
              BE THEIR FRIEND
            </h2>
            <h3 className="text-4xl sm:text-6xl font-bold text-white leading-snug mb-5 text-center sm:text-start">
              Be their Friend{" "}
              <span className="text-grey">, not a textbook.</span>
            </h3>
            <h5 className="text-offwhite pt-2 text-center sm:text-start text-xl">
              No matter where or how they speak, Smartle.ai adapts to your
              business, breaking the language barrier with its conversational AI.
            </h5>
          </div>
          <div className="flex justify-center items-end">
            <div className="relative h-[450px] lg:h-[700px] w-full lg:w-[700px]">
              <Image
                src="/images/belief-img-2.webp"
                alt="belief-img-2"
                layout="fill"       
                objectFit="cover"  
              />
            </div>
          </div>
        </div>
        <div className="pt-12 px-10 sm:px-24 rounded-3xl flex flex-col justify-between" style={{backgroundColor:"#D6FFEB"}}>
          <div>
            <h2 className="text-lg font-bold text-blue tracking-widest mb-5 text-center sm:text-start">
              TRAIN
            </h2>
            <h3 className="text-4xl sm:text-6xl font-bold text-black leading-snug mb-5 text-center sm:text-start">
              <span className="text-blue">Train</span> your AI assistance to suit
              your needs
            </h3>
            <h5 className="bluish pt-2 mb-5 text-center sm:text-start text-xl">
              Every chat is an opportunity for Smartle.ai to learn something new
              and with each response, it gets better at understanding what you
              need. The longer you use Smartle.ai, the better it becomes at
              helping you make sales with its conversational AI for e-commerce.
            </h5>
          </div>
          <div className="flex justify-center items-end">
            <div className="relative h-[450px] lg:h-[500px] w-full">
              <Image
                src="/images/belief-img-3.png"
                alt="belief-img-3"
                layout="fill"       
                objectFit="cover"  
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="flex flex-col items-center justify-center w-full mt-20 px-4">
        <div className="text-center mb-8 max-w-4xl">
          <h2 className="text-3xl sm:text-5xl font-bold text-black mb-4 mt-4">Transform Your Shopping Experience with Smartle AI Chat Assistance</h2>
          <p className="text-2xl font-medium text-center pt-4 opacity-50 mb-4">
            Elevate your style effortlessly with Smartle AI Chat Assistance. Discover a new way to shop, where every recommendation is perfectly suited to your unique taste.
          </p>
          <button
            className="inline-block p-2 my-3 text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded"
            onClick={handleButtonClicks}
          >
            Try Smartle.ai
          </button>
          {showsCalendly && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="relative rounded-lg p-8 w-11/12 max-w-4xl my-8 max-h-screen bg-transparent">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl text-white"
                  onClick={handleCalendlyClose}
                >
                  &#10005; {/* X button */}
                </button>
                {/* InlineWidget component */}
                <InlineWidget url="https://calendly.com/smartle/30min" />
              </div>
            </div>
          )}
          {overlayVisible && (
            <div
              className="fixed inset-0 z-40"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
              onClick={handleCalendlyClose}
            />
          )}
        </div>
      </div>

      {/* Video Section */}
      <section className="max-w-3xl mx-auto flex flex-col justify-center items-center px-7 lg:px-0 relative mt-12">
        <div className="relative rounded-2xl p-1 overflow-hidden">
          {/* <BorderedBeam /> */}
          <HeroVideoDialog
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/SpQaL1vW6WY?autoplay=1&loop=1&playlist=SpQaL1vW6WY"
            thumbnailSrc="../images/thumbnail.png"
            thumbnailAlt="Smartle.ai"
          />
        </div>
      </section>
    </div>
  );
};

export default Beliefs;
