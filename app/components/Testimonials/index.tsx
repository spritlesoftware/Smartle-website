"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
    text:string;
}

const postData: DataType[] = [
    {
        name: "Founder & CEO",
        profession: 'United States',
        comment: "It's beautifully designed, seamlessly integrates with my Ecommerce platform, and is exceptionally trained on my specific content. Right out of the box, it's easy to use and actually knows my products! It answers most questions and seamlessly escalates the tricky ones to my support team. I couldn't be happier with its conversational ecommerce integration, which includes generative AI chatbot capabilities, elevating customer interaction",
        imgSrc: '/images/b-logo.webp',
        text: "Smartle AI? Different story."
    },
    {
        name: "Leslie Alexander",
        profession: 'CEO, Parkview Int.Ltd',
        comment: "This AI chatbot exceeded our expectations. Just a month ago, we were planning to recruit two live chat agents, which meant app installation, training, and ongoing costs. Instead, we discovered this Smartle AI's amazing conversational AI for ecommerce. Without any initial effort, it impressed us with its accurate responses. And after a single day of refining its answers, it transformed our customer interactions, boosting both conversion rates and average order value! Now, our team can focus on strategic tasks while the AI assistance handles routine queries effortlessly.",
        imgSrc: '/images/shopify-plus.webp',
        text: "Say goodbye to hiring hassles!"
    },
    {
        name: "Cody Fisher",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/woo.webp',
        text:"aa"
    },
    {
        name: "Robert Fox",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/word-press.webp',
        text:"bb"
    },
    {
        name: "Leslie Alexander",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/unknown-logo.webp',
        text:"cc"
    },
    {
        name: "Cody Fisher",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/shopify.webp',
        text:"dd"
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
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
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">Why is Smartle AI being loved?</h3>
                        {/* <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">Why is Smartle AI being loved?</h3> */}
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">Why is Smartle AI being loved?</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    {/* <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" /> */}
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
