"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion

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
export default class MultipleItems extends Component {
    render() {
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
            <div className="py-32">
                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">Plugs into your existing tools</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">E-commerce ready</h3>
                    </div>
                </div>

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <motion.div
                                className='m-3 py-14 my-10 text-center shadow-xl rounded-3xl'
                                style={{ backgroundColor: items.bgColor }}
                                initial={{ opacity: 0, scale: 0.8 }} // Initial state
                                animate={{ opacity: 1, scale: 1 }} // Animate to this state
                                transition={{ duration: 0.5 }} // Transition duration
                            >
                                <div className='relative'>
                                    <Image src={items.imgSrc} alt={items.name} width={182} height={182} className="inline-block m-auto" />
                                </div>
                                {/* Optionally include name and profession */}
                                {/* <h4 className='text-4xl font-bold pt-14'>{items.name}</h4>
                                <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.profession}</h3> */}
                            </motion.div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
