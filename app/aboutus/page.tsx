"use client";


import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { InlineWidget } from 'react-calendly';
import { FaSmile, FaHandSparkles, FaChartLine, FaClock, FaDatabase } from 'react-icons/fa';

interface datatype {
  heading: string;
  imgSrc: string;
  paragraph: string;
  link: string;
}

const Aboutdata: datatype[] = [
  {
    heading: "83%",
    imgSrc: "/images/aboutus/imgOne.svg",
    paragraph: "Increased in customer satisfaction ratings",
    link: "Learn more",
  },
  {
    heading: "67%",
    imgSrc: "/images/aboutus/imgTwo.svg",
    paragraph: "Increase in Average order value",
    link: "Learn more",
  },
  {
    heading: "79%",
    imgSrc: "/images/aboutus/imgThree.svg",
    paragraph: "Reduction in customer support tickets",
    link: "Learn more",
  },
];

const Aboutus = () => {
  const [showCalendly, setShowCalendly] = useState(false);
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


  const handleButtonClick = () => {
    setShowCalendly(true);
    setOverlayVisible(true);
  };

  const handleCloseCalendly = () => {
    setShowCalendly(false);
    setOverlayVisible(false);
  };




  return (
    <div>

      <>

        <div className="container mx-auto sm:px-4  ptb-120">
          {overlayVisible && <div className="overlay"></div>}
          <div
            className="flex flex-wrap  justify-center ptb-120 bg-cover items-center"
            style={{ background: "url(https://smartle-ai.s3.amazonaws.com/assets/img/roi-banner.webp)" }}
          >
            <div className="lg:w-3/4 pr-4 pl-4 text-center ">
              <h1 className=" fs-48 txt-blk fw-600 py-5">
                Beyond Bots:
                <span className="fw-300">
                  {" "}
                  How Smartle AI is Making Your Store Smarter
                </span>
              </h1>
              {/* <button
                className="relative flex-grow max-w-full flex-1 px-4 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded mt-3"
                onclick="Calendly.initPopupWidget({url: 'https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03'}); return false;"
              >
                Try Smartle AI For FREE
              </button> */}
              <div className="flex items-center justify-center">
                <button
                  className="inline-block text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded mt-3"
                  onClick={handleButtonClick}
                >
                  Try Smartle AI For FREE
                </button>
                {showCalendly && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="relative rounded-lg p-8 w-11/12 max-w-4xl my-8 bg-transparent">
                      <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl text-white"
                        onClick={handleCloseCalendly}
                      >
                        &#10005; {/* X button */}
                      </button>
                      <InlineWidget url="https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03" />
                    </div>
                  </div>
                )}
                {overlayVisible && (
                  <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
                    onClick={handleCloseCalendly}
                  />
                )}
              </div>


            </div>
          </div>
        </div>
        <div className="container mx-auto sm:px-4 flex lg:flex-row flex-wrap justify-between w-full">
          <div className="lg:w-3/5 pr-4 pl-4">
            <h2 style={{ textAlign: "left", fontWeight: 500 }} className="fw-bold text-5xl fs-36">
              Your AI partner
            </h2>
            <p style={{ textAlign: "left", fontSize: "1.15rem" }} className="py-3">
              Imagine a world where conversation isn't confined to screens and
              buttons. Where you can chat, ask questions, and get things done
              with an AI as natural and engaging as a real person. That's the
              world Smartle AI is building.
              <br />
              <br /> Our team consists of enthusiastic inventors with a single
              objective in mind: creating an AI assistant that understands&nbsp;
              you like a friend. Forget the days of robotic responses and
              frustrating misunderstandings.
            </p>
          </div>
          <div className="lg:w-1/3 pr-4 pl-4">
            <img
              src="/images/aboutus-2.png"
              className="max-w-full h-auto"
              style={{ width: "auto" }}
            />
          </div>
        </div>
        <div
          className="container mx-auto sm:px-4 flex lg:flex-row justify-between py-3 my-20 flex-wrap"
          style={{ overflow: "hidden" }}
        >
          <div className="lg:w-1/3 pr-4 pl-4 py-5">
            <img
              src="/images/aboutus-4.png"
              className="max-w-full h-auto"
            />
          </div>
          <div
            className="lg:w-2/5 pr-4 pl-4 py-5 flex flex-col justify-center"
            style={{ marginLeft: "2%" }}
          >
            <h2 className="container fw-bold text-5xl fs-36 mb-2" style={{ fontWeight: 500 }}>Smartle AI</h2>
            <h6 style={{ fontWeight: 400, fontSize: "1.15rem" }} className="py-3" >
              Continuously learning, it adopts new strategies, while
              <br />
              personalizing its interactions to cater to your unique style and
              needs, ensuring a seamless and tailored experience.
            </h6>
          </div>
        </div>

        <div className="container mx-auto sm:px-4 pt-12 pb-12">
          <div className="flex flex-wrap items-center justify-center bg-gradient-to-r from-[#E3F2FD] to-[#FCE4EC] p-6 rounded-md">
            <h3 className="text-center text-4xl font-semibold mb-8 w-full">
              Why customers win with Smartle?
            </h3>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              navigation={false}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              className="swiper"
              effect="slide"
            >
              <SwiperSlide>
                <div className="bg-[#AFD5F0] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out flex flex-col items-center">
                  <div className="flex items-center mb-4">
                    <FaSmile className="text-2xl text-black mr-4" />
                    <div className="text-center">
                      <h3 className="text-2xl mb-2">Happier <br /> Shoppers</h3>
                      <hr className="mx-auto my-2 w-1/2 border-gray-300 border-opacity-30" />
                    </div>
                  </div>
                  <p className="text-center py-2 text-black">
                    Smartle AI provides delightful conversations, making shopping experiences more engaging and enjoyable.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-[#F8C8DC] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out flex flex-col items-center">
                  <div className="flex items-center mb-4">
                    <FaHandSparkles className="text-2xl text-black mr-4" />
                    <div className="text-center">
                      <h3 className="text-2xl mb-2">Effortless <br /> Assistance</h3>
                      <hr className="mx-auto my-2 w-1/2 border-gray-300 border-opacity-30" />
                    </div>
                  </div>
                  <p className="text-center py-2 text-black">
                    Get instant answers and product recommendations, leading to a smoother shopping experience.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-[#FEDD9E] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out flex flex-col items-center">
                  <div className="flex items-center mb-4">
                    <FaChartLine className="text-2xl text-black mr-4" />
                    <div className="text-center">
                      <h3 className="text-2xl mb-2">Increased <br /> Efficiency</h3>
                      <hr className="mx-auto my-2 w-1/2 border-gray-300 border-opacity-30" />
                    </div>
                  </div>
                  <p className="text-center py-2 text-black">
                    Smartle AI handles repetitive tasks, allowing your team to focus on more critical aspects of your business.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-[#AFD5F0] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out flex flex-col items-center">
                  <div className="flex items-center mb-4">
                    <FaClock className="text-2xl text-black mr-4" />
                    <div className="text-center">
                      <h3 className="text-2xl mb-2">24/7 <br /> Availability</h3>
                      <hr className="mx-auto my-2 w-1/2 border-gray-300 border-opacity-30" />
                    </div>
                  </div>
                  <p className="text-center py-2 text-black">
                    With Smartle AI, you’re never alone. Your virtual assistant is available round-the-clock 24/7.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-[#F8C8DC] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out flex flex-col items-center">
                  <div className="flex items-center mb-4">
                    <FaDatabase className="text-2xl text-black mr-4" />
                    <div className="text-center">
                      <h3 className="text-2xl mb-2">Data-Driven <br /> Insights</h3>
                      <hr className="mx-auto my-2 w-1/2 border-gray-300 border-opacity-30" />
                    </div>
                  </div>
                  <p className="text-center py-2 text-black">
                    Through Smartle AI interactions, obtain useful consumer data that can be used to improve marketing strategies and product suggestions.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>





        <div className="container mx-auto sm:px-4 ptb-60">
          <div
            className="flex flex-wrap   justify-center  "
            style={{ boxShadow: "0px 16px 48px 0px #D9D9D9", borderRadius: 10 }}
          >
            <div className="lg:w-1/2 pr-4 pl-4 p-12">
              <h3 className="mb-3 txt-blk fs-40 fw-600 text-center">
                Still Not Sure?
              </h3>
              <p className="txt-blk fs-18 text-center">
                Let us show you a quick DEMO tailored to your store. You’ll be
                impressed.
              </p>
              <div className="flex items-center justify-center">
                <button
                  className="my-3 inline-block text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded"
                  onClick={handleButtonClicks}
                >
                  Schedule Demo
                </button>
                {showsCalendly && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="relative rounded-lg p-8 w-11/12 max-w-4xl my-8 bg-transparent">
                      <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl text-white"
                        onClick={handleCalendlyClose}
                      >
                        &#10005; {/* X button */}
                      </button>
                      <InlineWidget url="https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03" />
                    </div>
                  </div>
                )}
                {overlayVisible && (
                  <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
                    onClick={handleCalendlyClose}
                  />
                )}
              </div>
            </div>
            <div
              className="lg:w-1/2 pr-4 pl-4 hidden lg:block"
              style={{
                background: "url(images/still-not-sure.webp)",
                borderRadius: 10,
                backgroundSize: "cover",
              }}
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default Aboutus;
