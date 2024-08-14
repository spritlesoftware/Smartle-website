"use client";
import Slider from "react-slick";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";

// CAROUSEL DATA
interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
    bgColor: string; // Background color property
}

const postData: DataType[] = [
    {
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/b-logo.webp',
        bgColor: '#fbe8e8',
    },
    {
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/shopify-plus.webp',
        bgColor: '#e8fbe8',
    },
    {
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/shopify.webp',
        bgColor: '#e8e8fb',
    },
    {
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/unknown-logo.webp',
        bgColor: '#fbe8f0',
    },
    {
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/woo.webp',
        bgColor: '#e8f0fb',
    },
    {
        profession: 'Co-founder',
        name: 'John Doe',
        imgSrc: '/images/word-press.webp',
        bgColor: '#f0fbe8',
    },
];

// CAROUSEL SETTINGS
const MultipleItems: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

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
        <>
            <div className="py-4">
                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                    <div className="text-center">
                        {/* <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">Plugs into your existing tools</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">E-commerce ready</h3> */}
                    </div>
                </div>

                <Slider {...settings}>  
                    {postData.map((items, i) => (
                        <div key={i}>
                            <motion.div
                                className='m-3 py-14 my-10 text-center shadow-xl rounded-3xl cursor-pointer'
                                style={{ backgroundColor: items.bgColor, height: '150px' }} // Fixed height for the box
                                initial={{ opacity: 0, scale: 0.8 }} // Initial state
                                animate={{ opacity: 1, scale: 1 }} // Animate to this state
                                transition={{ duration: 0.5 }} // Transition duration
                                whileHover={{ scale: 1.05 }} // Scale up slightly on hover
                            >
                                <div className='relative flex items-center justify-center h-full'>
                                    <Image 
                                        src={items.imgSrc} 
                                        alt={items.name} 
                                        width={182} 
                                        height={182} 
                                        className="inline-block" 
                                        style={{ objectFit: 'contain', maxHeight: '280px', }} 
                                    />
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </Slider>

                {/* Video Section */}
                <div className="flex flex-col items-center justify-center w-full mt-16 px-4">
                    <div className="text-center mb-8 max-w-4xl">
                        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4"> Transform Your Shopping  Experience with Smartle AI Chat Assistance</h2>
                        <p className="text-lg sm:text-xl text-gray-700 mb-4">
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
                    <div className="relative w-full max-w-4xl h-auto aspect-video overflow-hidden rounded-lg cursor-pointer border-4 border-blue-500 shadow-lg transform transition-transform duration-500 hover:scale-105">
                        <div 
                            dangerouslySetInnerHTML={{ __html: `
                                <script src="https://fast.wistia.com/embed/medias/l7use1c8qv.jsonp" async></script>
                                <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                                <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
                                    <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
                                        <div class="wistia_embed wistia_async_l7use1c8qv seo=true videoFoam=true" style="height:100%;position:relative;width:100%">
                                            <div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;">
                                                <img src="https://fast.wistia.com/embed/medias/l7use1c8qv/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `}}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MultipleItems;
