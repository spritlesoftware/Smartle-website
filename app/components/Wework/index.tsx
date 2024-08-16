"use client";
import Slider from "react-slick";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

    return (
        <div className="py-4 flex justify-center">
            <div className='w-full max-w-[90%] md:max-w-[70%] lg:max-w-[70%]'>
                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i} className='px-5 flex justify-center'>
                            <motion.div
                                className='py-10 text-center cursor-pointer'
                                initial={{ opacity: 0, scale: 0.8 }} // Initial state
                                animate={{ opacity: 1, scale: 1 }} // Animate to this state
                                transition={{ duration: 0.5 }} // Transition duration
                                whileHover={{ scale: 1.05 }} // Scale up slightly on hover
                            >
                                <div className='relative flex items-center justify-center'>
                                    <Image 
                                        src={items.imgSrc} 
                                        alt={items.name} 
                                        width={182} 
                                        height={122} 
                                        className="inline-block" 
                                        style={{ objectFit: 'contain' }} 
                                    />
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default MultipleItems;
