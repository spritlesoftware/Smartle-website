'use client'; 

import React, { useState } from 'react';
import { InlineWidget } from "react-calendly";
const Roi = () => {
    const [showCalendly, setShowCalendly] = useState(false);
    const [showsCalendly, setShowsCalendly] = useState(false);

 
    const [visitorsPM, setVisitorsPM] = useState('');
    const [ordersPM, setOrdersPM] = useState('');
    const [aov, setAov] = useState('');
    const [results, setResults] = useState({
        conversationsPerMonth: 0,
        potentialAdditionalSales: 0,
        potentialAOV: 0,
        addUnlockSales: 0,
        monthlyROI: 0,
    });

    const handleButtonClick = () => {
        setShowCalendly(true);
      };
    const handleButtonClicks = () => {
        setShowCalendly(true);
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!visitorsPM || !ordersPM || !aov) {
            console.log("error");
        } else {
            const conversationsPerMonth = (parseFloat(visitorsPM) * 0.015).toFixed(2);
            const potentialAdditionalSales = (parseFloat(ordersPM) * 0.16).toFixed(2);
            const potentialAOV = (parseFloat(aov) * 1.1).toFixed(2);
            const addUnlockSales = (potentialAdditionalSales * potentialAOV).toFixed(2);
            const monthlyROI = (((addUnlockSales - 15) / 15) * 100).toFixed(2);

            setResults({
                conversationsPerMonth,
                potentialAdditionalSales,
                potentialAOV,
                addUnlockSales,
                monthlyROI,
            });

            document.getElementById("ROI").classList.remove("hidden");
        }
    };

    return (
        <div>
            <div className="container mx-auto sm:px-4 ptb-120">
                <div
                    className="flex flex-wrap justify-center ptb-120 bg-cover items-center"
                    style={{
                        background:
                            "url(https://smartle-ai.s3.amazonaws.com/assets/img/roi-banner.webp)"
                    }}
                >
                    <div className="lg:w-3/4 pr-4 pl-4 text-center ">
                        <h1 className="fs-48 txt-blk fw-600">
                            Calculate how much Smartle AI can boost your Income
                        </h1>
                        <p className="mt-4 fs-18">
                            Partnering with Smartle AI ensures the fastest path to increasing
                            E-Commerce revenue and guarantees a high return on investment.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 ptb-60">
                <div className="flex flex-wrap items-center justify-center">
                    <h3 className="text-center txt-blue fs-30 fw-600">CALCULATE YOUR ROI</h3>
                    <h4 className="text-center txt-blk mb-5 fs-30 fw-300">
                        Maximize your potential with Smartle AI
                    </h4>
                    <div
                        className="lg:w-3/4 pr-4 pl-4 bg-white lg:flex justify-center"
                        style={{ boxShadow: "0px 16px 48px 0px #D9D9D9", borderRadius: 10 }}
                    >
                        <div className="lg:w-1/2 pr-4 pl-4 p-6 mb-4 lg:mb-0">
                            <form className="my-3" onSubmit={handleSubmit}>
                                <h5 className="mb-4 fs-18 fw-600">Your Current Process</h5>
                                <div className="mb-4">
                                    <label className="mb-3">
                                        Enter the number of store visitors per month:
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full input lh-22 ps-3"
                                        required
                                        id="visitors-pm"
                                        value={visitorsPM}
                                        onChange={(e) => setVisitorsPM(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="mb-3">
                                        Enter the number of orders you generate per month:
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full input lh-22 ps-3"
                                        required
                                        id="order-pm"
                                        value={ordersPM}
                                        onChange={(e) => setOrdersPM(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="mb-3">
                                        What is your store's Average Order Value (AOV)?
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full lh-22 input ps-3"
                                        required
                                        id="aov"
                                        value={aov}
                                        onChange={(e) => setAov(e.target.value)}
                                    />
                                </div>
                                <div className="mt-5">
                                    <button
                                        className="relative flex-grow max-w-full flex-1 px-4 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded w-full mt-2"
                                        type="submit"
                                        id="myButton"
                                    >
                                        Calculate
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="lg:w-1/2 pr-4 pl-4">
                            <div
                                className="ms-3 my-2 px-2 pb-5 pt-3 bg-blue h-390"
                                style={{ boxShadow: "0px 16px 48px 0px #D9D9D9", borderRadius: 10 }}
                            >
                                <h5 className="my-3 ps-3 fs-18 fw-600">ROI Calculator Result</h5>
                                <ul className="flex flex-col pl-0 mb-0 border rounded border-gray-300 bg-blue">
                                    <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline bg-blue lh-2 flex items-center justify-between">
                                        Conversations per month:
                                        <span className="value float-end fs-20 fw-600" id="con-pm">
                                            {results.conversationsPerMonth}
                                        </span>
                                    </li>
                                    <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline bg-blue lh-2 flex items-center justify-between">
                                        Potential additional sales:
                                        <span className="value float-end fs-20 fw-600" id="addSales">
                                            {results.potentialAdditionalSales}
                                        </span>
                                    </li>
                                    <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline bg-blue lh-2 flex items-center justify-between">
                                        Potential AOV from SmartleAI sales:
                                        <span className="value float-end fs-20 fw-600" id="potAV">
                                            $ {results.potentialAOV}
                                        </span>
                                    </li>
                                    <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline bg-blue lh-2 flex items-center justify-between">
                                        Additional unlock sales from SmartleAI:
                                        <span className="value float-end fs-20 fw-600" id="addSalesFromSpritle">
                                            $ {results.addUnlockSales}
                                        </span>
                                    </li>
                                    <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline bg-blue lh-2 flex items-center justify-between">
                                        Subscription Cost:
                                        <span className="value float-end fs-20 fw-600" id="subsCost">
                                            $ 15
                                        </span>
                                    </li>
                                </ul>
                                <div className="flex items-center justify-center">
                                    <div
                                        className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded py-2 flex items-center justify-content-evenly bg-white w-90 text-left my-3 fs-20 hidden"
                                        id="ROI"
                                    >
                                        Monthly ROI :{" "}
                                        <span
                                            id="mon-ROI"
                                            className="float-end txt-green fw-600 fs-30"
                                        >
                                            {results.monthlyROI} %
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-center mt-5">
                    <div className="lg:w-1/3 pr-4 pl-4 text-center">
                    <button
        className="relative flex-grow max-w-full flex-1 px-4 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded mb-5"
        style={{ width: "90%" }}
        onClick={handleButtonClick}
      >
        Unlock Additional Sales Now
      </button>
      {showCalendly && <InlineWidget url="https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03" />}
                    </div>
                </div>
            </div>
            <div className="container mx-auto sm:px-4 ptb-60">
                <div
                    className="flex flex-wrap justify-center"
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
                        <div className="flex justify-center">
                        <button
        className="w-70 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded mt-4"
        onClick={handleButtonClicks}
      >
        Schedule Demo
      </button>
      {showsCalendly && <InlineWidget url="https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03" />}
                        </div>
                    </div>
                    <div
                        className="lg:w-1/2 pr-4 pl-4 hidden lg:block"
                        style={{
                            background:
                                "url(https://smartle-ai.s3.amazonaws.com/assets/img/still-not-sure.webp)",
                            borderRadius: 10,
                            backgroundSize: "cover"
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Roi;
