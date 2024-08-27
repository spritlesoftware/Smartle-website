'use client';

import React, { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";
const Pricing = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [showsCalendly, setShowsCalendly] = useState(false);
  const [isCalendlyVisible, setCalendlyVisibility] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleCal, setIsVisibleCal] = useState(false);
  const [isVisibleTrial, setIsVisibleTrial] = useState(false);
  const [showWidget, setShowWidget] = useState(false);

  const [overlayVisible, setOverlayVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(3);
  const [errors, setErrors] = useState({
    visitPM: '',
    orderPM: '',
    aOV: '',
  });

  const handleButtonClick = () => {
    setOverlayVisible(!overlayVisible);
    setShowCalendly(true);
    setCalendlyVisibility(true);
  };

  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
  };

  const getCardClasses = (cardId) => {
    return cardId === activeCard
      ? 'lg:w-1/4 pr-4 pl-4 bg-blue p-6 br-14 box-shadow mb-4 lg:mb-0'
      : 'lg:w-1/4 pr-4 pl-4 mb-4 lg:mb-0';
  };

  const getTextColor = (cardId) => {
    return cardId === activeCard ? 'text-white' : 'text-gray';
  };

  const getButtonClasses = () => {
    return 'relative flex-grow max-w-full flex-1 px-4 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-white text-gray-800 btn-rounded mt-3 w-90';
  };

  const handleCloseCalendly = () => {
    setOverlayVisible(false);
    setShowCalendly(false);
    setShowsCalendly(false);
    setCalendlyVisibility(false);
  };


  const handleClicks = () => {
    setShowWidget(true);
  };
  const handleClose = () => {
    setIsVisible(false);
  };

  const handleTrialButtonClick = () => {
    setIsVisibleTrial(true);
  };

  const handlesClick = () => {
    setIsVisibleCal(true);
  };




  const handleButtonClicks = () => {
    setOverlayVisible(!overlayVisible);
    setShowsCalendly(true);
  };

  const handlesButtonClick = () => {
    setCalendlyVisibility(true);
  };

  const handleClick = () => {
    setIsVisible(true);
  };
  useEffect(() => {
    function btnClick(e) {
      e.preventDefault();

      const visitPM = document.getElementById("visitors-pm").value;
      const orderPM = document.getElementById("order-pm").value;
      const aOV = document.getElementById("aov").value;

      let newErrors = {
        visitPM: '',
        orderPM: '',
        aOV: '',
      };

      if (!visitPM) {
        newErrors.visitPM = 'Please enter the number of store visitors per month.';
      }
      if (!orderPM) {
        newErrors.orderPM = 'Please enter the number of orders you generate per month.';
      }
      if (!aOV) {
        newErrors.aOV = 'Please enter the Average Order Value (AOV).';
      }

      setErrors(newErrors);

      if (newErrors.visitPM || newErrors.orderPM || newErrors.aOV) {
        return; // Stop processing if there are errors
      }

      var conversationsPerMonth = parseFloat((visitPM * 0.015).toFixed(0));
      var potentialAdditionalSales = parseFloat((orderPM * 0.16).toFixed(0));
      var potentialAOV = parseFloat((aOV * 1.1).toFixed(0));
      var addUnlockSales = parseFloat(
        (potentialAdditionalSales * potentialAOV).toFixed(0)
      );
      var monthlyROI = parseFloat(
        (((addUnlockSales - 15) / 15) * 100).toFixed(0)
      );

      document.getElementById("con-pm").textContent = conversationsPerMonth;
      document.getElementById("addSales").textContent = potentialAdditionalSales;
      document.getElementById("potAV").textContent = "$ " + potentialAOV;
      document.getElementById("addSalesFromSpritle").textContent = "$ " + addUnlockSales;
      document.getElementById("subsCost").textContent = "$ 15";
      document.getElementById("mon-ROI").textContent = monthlyROI + " %";
      document.getElementById("ROI").classList.remove("hidden");
    }

    document.getElementById("myButton").addEventListener("click", btnClick);
  }, []);


  return (
    <>
      <div className="container mx-auto sm:px-4 ptb-120">
        <div className="flex flex-wrap  justify-center">
          <div
            className="lg:w-full pr-4 pl-4 text-center ptb-120 bg-cover rounded-xl"
            style={{ background: "url(/images/pricing-banner.webp)" }}
          >
            <h1 className=" fs-48 txt-blk px-3">
              <span className="fw-600">Conversation to Conversion</span>:
              Mastering the Art of Sales-Driven AI Chat
            </h1>
            <h2 className="mt-4 text-xl lg:block hidden max-w-5xl" style={{ margin: "0 auto" }}>
              At Smartle.ai, we recognize the unique needs of every business.
              Ready to transform your conversational AI journey? Choose a plan
              and let&apos;s build your success story together.
            </h2>
            <p className="mt-4 fs-18 block lg:hidden py-4">
              At Smartle.ai, we recognize the unique needs of every business.
              Ready to transform your conversational AI journey? Choose a plan
              and <br /> let&apos;s build your success story together.
            </p>
            <p />
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-4 pb-20">
        <h2 className="text-center text-5xl" style={{ paddingBottom: '6%' }}>
          Pricing that propels your success
        </h2>
        <div className="flex flex-wrap lg:w-5/6 pr-4 pl-4 mx-auto justify-center cursor-pointer">
          {[
            {
              id: 1,
              price: '$39',
              plan: 'Starter',
              replies: '500 replies/month',
              webpages: '1,000 webpages stored',
              support: 'Standard Support',
              trainAI: 'Train your AI',
              proActiveSales: 'Pro-Active AI Sales',
              embedAnywhere: 'Embed Anywhere'
            },
            {
              id: 2,
              price: '$99',
              plan: 'Growth',
              replies: '1,500 replies/month',
              webpages: '5,000 webpages stored',
              support: 'Standard Support',
              trainAI: 'Train your AI',
              proActiveSales: 'Pro-Active AI Sales',
              embedAnywhere: 'Embed Anywhere'
            },
            {
              id: 3,
              price: '$199',
              plan: 'Pro',
              replies: '3,000 replies/month',
              webpages: '15,000 webpages stored',
              support: 'Priority Support',
              trainAI: 'Train your AI',
              upSelling: 'Up Selling',
              mediaIntegration: 'Media Channel Integration',
              crmIntegration: 'CRM tool Integration',
              proActiveSales: 'Pro-Active AI Sales',
              embedAnywhere: 'Embed Anywhere'
            },
            {
              id: 4,
              price: '$499',
              plan: 'Scale',
              replies: '7,000 replies/month',
              webpages: '30,000 webpages stored',
              support: 'Priority Support',
              trainAI: 'Train your AI',
              upSelling: 'Up Selling',
              crossSelling: 'Cross Selling',
              mediaIntegration: 'Media Channel Integration',
              crmIntegration: 'CRM tool integration',
              aiImageSearch: 'AI Image Search*',
              proActiveSales: 'Pro-Active AI Sales',
              embedAnywhere: 'Embed Anywhere'
            }
          ].map(card => (
            <div
              key={card.id}
              className={`w-full sm:w-1/2 lg:w-1/3 p-4 ${getCardClasses(card.id)} `}
              onClick={() => handleCardClick(card.id)}
              style={{ alignSelf: 'flex-start' }}
            >
              {card.id === 3 && (
                <div
                  className={`inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded-full py-2 px-4 fs-15 fw-500 float-end mb-3 ${activeCard === 3 ? 'bg-white text-black' : 'bg-blue text-white'
                    }`}
                >
                  Most Popular
                </div>
              )}
              <h2 className={`my-3 pt-2 fw-300 ${getTextColor(card.id)}`}>
                {card.price}<span className="fs-18">/month</span>
              </h2>
              <h3 className={`mb-2 text-4xl font-bold ${getTextColor(card.id)}`}>{card.plan}</h3>
              <p className={`mb-4 fs-15 ${getTextColor(card.id)}`}>5 days free trial</p>
              <ul className="p-0" style={{ listStyle: 'none' }}>
                <li className={`fs-15 mb-2 ${getTextColor(card.id)}`}>
                  <i className={`fa-solid fa-circle-check pe-2 ${activeCard === card.id ? 'text-white' : 'text-blue'}`} />
                  {card.replies}
                </li>
                <li className={`fs-15 mb-2 ${getTextColor(card.id)}`}>
                  <i className={`fa-solid fa-circle-check pe-2 ${activeCard === card.id ? 'text-white' : 'text-blue'}`} />
                  {card.webpages}
                </li>
                {card.support && (
                  <li className={`fs-15 mb-2 ${getTextColor(card.id)}`}>
                    <i className={`fa-solid fa-circle-check pe-2 ${activeCard === card.id ? 'text-white' : 'text-blue'}`} />
                    {card.support}
                  </li>
                )}
                {card.trainAI && (
                  <li className={`fs-15 mb-2 ${getTextColor(card.id)}`}>
                    <i className={`fa-solid fa-circle-check pe-2 ${activeCard === card.id ? 'text-white' : 'text-blue'}`} />
                    {card.trainAI}
                  </li>
                )}
                {card.upSelling && (
                  <li className={`fs-15 mb-2 ${getTextColor(card.id)}`}>
                    <i className={`fa-solid fa-circle-check pe-2 ${activeCard === card.id ? 'text-white' : 'text-blue'}`} />
                    {card.upSelling}
                  </li>
                )}
                {card.crossSelling && (
                  <li className={`fs-15 mb-2 ${getTextColor(card.id)}`}>
                    <i className={`fa-solid fa-circle-check pe-2 ${activeCard === card.id ? 'text-white' : 'text-blue'}`} />
                    {card.crossSelling}
                  </li>
                )}
                {card.mediaIntegration && (
                  <li className={`fs-15 mb-2 ${getTextColor(card.id)}`}>
                    <i className={`fa-solid fa-circle-check pe-2 ${activeCard === card.id ? 'text-white' : 'text-blue'}`} />
                    {card.mediaIntegration}
                  </li>
                )}
                {card.crmIntegration && (
                  <li className={`fs-15 mb-2 ${getTextColor(card.id)}`}>
                    <i className={`fa-solid fa-circle-check pe-2 ${activeCard === card.id ? 'text-white' : 'text-blue'}`} />
                    {card.crmIntegration}
                  </li>
                )}
                {card.aiImageSearch && (
                  <li className={`fs-15 mb-2 ${getTextColor(card.id)}`}>
                    <i className={`fa-solid fa-circle-check pe-2 ${activeCard === card.id ? 'text-white' : 'text-blue'}`} />
                    {card.aiImageSearch}
                  </li>
                )}
                {card.embedAnywhere && (
                  <li className={`fs-15 mb-2 ${getTextColor(card.id)}`}>
                    <i className={`fa-solid fa-circle-check pe-2 ${activeCard === card.id ? 'text-white' : 'text-blue'}`} />
                    {card.embedAnywhere}
                  </li>
                )}
              </ul>
              <div className="text-center">
                <button
                  className={`py-1 px-5 rounded-full transition-colors duration-500 ${activeCard === card.id ? 'bg-white text-blue' : 'bg-blue text-white'
                    }`}
                  onClick={() => setShowCalendly(true)}
                >
                  Start FREE Trial
                </button>
              </div>
            </div>
          ))}
          {/* Overlay for Calendly */}
          {showCalendly && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="relative rounded-lg p-8 w-11/12 max-w-4xl my-8 max-h-screen bg-transparent">
                <InlineWidget url="https://calendly.com/smartle/30min" />
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl text-white"
                  onClick={() => setShowCalendly(false)}
                >
                  &#10005; {/* X button */}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto sm:px-4 ptb-60">
        <div
          className="flex flex-wrap  p-6"
          style={{ boxShadow: "0px 16px 48px 0px #D9D9D9", borderRadius: 10 }}
        >
          <div className="pr-4 pl-4 max-lg-7xl">
            <h3 className="text-4xl font-bold ">Enterprise</h3>
            <p className="mb-2 text-xl mt-4" style={{ width: "80%" }}>
              For organizations requiring more, please don&apos;t hesitate to contact
              us, and we will be glad to assist you in addressing your specific
              needs.
            </p>
            <div className="flex justify-center">
              <button
                className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-w btn-rounded mt-3 justify-center items-center"
                onClick={handleButtonClick}
              >
                Schedule a Call
                <i className="fa-solid fa-arrow-right float-end ps-4 mt-1" />
              </button>

            </div>
            {/* <button
      type="button"
      class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue mt-3 btn-w flex justify-center items-center"
    >
      Schedule a Call
      <i class="fa-solid fa-arrow-right float-end ps-4"></i>
    </button> */}
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-4 mx-auto sm:px-4 ptb-60">
        <div className="flex flex-col flex-wrap  items-center justify-center">
          <h3 className="text-center txt-blue mb-5 fs-30 fw-600" style={{ width: "100%" }}>
            CALCULATE YOUR ROI
          </h3>
          <h4 className="text-center txt-blk mb-5 fs-30 fw-300">
            Maximize your potential with Smartle.ai
          </h4>
          <div
            className="lg:w-3/4 pr-4 pl-4 bg-white lg:flex  justify-center"
            style={{ boxShadow: "0px 16px 48px 0px #D9D9D9", borderRadius: 10 }}
          >
            <div className="lg:w-1/2 pr-4 pl-4 p-6 mb-4 lg:mb-0">
              <form className="my-3">
                <h5 className="mb-4 fs-18 fw-600">Your Current Process</h5>
                <div className="mb-4">
                  <label className="mb-3">
                    Enter the number of store visitors per month:
                  </label>
                  <input
                    type="number"
                    className={`w-full input ps-3 lh-22 ${errors.visitPM ? 'border-red-500' : ''}`}
                    required
                    id="visitors-pm"
                    onChange={() => setErrors({ ...errors, visitPM: '' })}
                  />
                  {errors.visitPM && <p style={{ color: "red" }}>{errors.visitPM}</p>}
                </div>
                <div className="mb-4">
                  <label className="mb-3">
                    Enter the number of orders you generate per month:
                  </label>
                  <input
                    type="number"
                    className={`w-full input ps-3 lh-22 ${errors.orderPM ? 'border-red-500' : ''}`}
                    required
                    id="order-pm"
                    onChange={() => setErrors({ ...errors, orderPM: '' })}
                  />
                  {errors.orderPM && <p style={{ color: "red" }}>{errors.orderPM}</p>}
                </div>
                <div className="mb-4">
                  <label className="mb-3">
                    What is your store&apos;s Average Order Value (AOV)?
                  </label>
                  <input
                    type="number"
                    className={`w-full lh-22 input ps-3 ${errors.aOV ? 'border-red-500' : ''}`}
                    required
                    id="aov"
                    onChange={() => setErrors({ ...errors, aOV: '' })}
                  />
                  {errors.aOV && <p style={{ color: "red" }}>{errors.aOV}</p>}
                </div>
                <div className="mt-5">
                  <button
                    className="relative flex-grow max-w-full flex-1 px-4 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded w-full mt-2"
                    id="myButton"
                  >
                    Calculate
                  </button>
                </div>
              </form>

            </div>

            <div className="lg:w-1/2 pr-4 pl-4">
              <div
                className=" ms-3 my-2 px-2 pb-5 pt-3 bg-blue h-390"
                style={{
                  boxShadow: "0px 16px 48px 0px #D9D9D9",
                  borderRadius: 10,
                }}
              >
                <h5 className="my-3 ps-3 fs-18 fw-600">
                  ROI Calculator Result
                </h5>
                <ul className="flex flex-col pl-0 mb-0 rounded  bg-blue">
                  <li className="relative block py-3 px-6 -mb-px bg-blue lh-2 flex items-center justify-between">
                    Conversations per month:
                    <span className="value float-end fs-20 fw-600" id="con-pm">
                      0
                    </span>
                  </li>
                  <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline bg-blue lh-2 flex items-center justify-between">
                    Potential additional sales:
                    <span
                      className="value float-end fs-20 fw-600"
                      id="addSales"
                    >
                      0
                    </span>
                  </li>
                  <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline bg-blue lh-2 flex items-center justify-between">
                    Potential AOV from SmartleAI sales:
                    <span className="value float-end fs-20 fw-600" id="potAV">
                      0
                    </span>
                  </li>
                  <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline bg-blue lh-2 flex items-center justify-between">
                    Additional unlock sales from SmartleAI:
                    <span
                      className="value float-end fs-20 fw-600 "
                      id="addSalesFromSpritle"
                    >
                      0
                    </span>
                  </li>
                  <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 bg-blue lh-2 flex items-center justify-between" style={{ borderBottom: ".2rem" }}>
                    Subscription Cost:
                    <span
                      className="value float-end fs-20 fw-600"
                      id="subsCost"
                    >
                      0
                    </span>
                  </li>
                </ul>
                <div className=" flex items-center justify-center">
                  <div
                    className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded py-2 flex items-center justify-content-evenly bg-white w-90 text-left my-3 fs-20 hidden"
                    id="ROI"
                  >
                    Monthly ROI :{" "}
                    <span
                      id="mon-ROI"
                      className="float-end txt-green fw-600 fs-30"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap  justify-center items-center mt-5">
          <div className="lg:w-1/3 pr-4 pl-4 text-center">
            <button
              className="relative flex-grow max-w-full flex-1 px-4 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded mb-5"
              style={{ width: "90%" }}
              onClick={handleButtonClick}
            >
              Unlock Additional Sales Now
            </button>
            {showCalendly && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="relative rounded-lg p-8 w-11/12 max-w-4xl my-8 max-h-screen bg-transparent">
                  <InlineWidget url="https://calendly.com/smartle/30min" />
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl text-white"
                    onClick={handleCloseCalendly}
                  >
                    &#10005; {/* X button */}
                  </button>
                </div>
              </div>
            )}
            {overlayVisible && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 40,
                }}
                onClick={handleCloseCalendly}
              />
            )}
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-4 ptb-60 max-w-7xl">
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
                onClick={handleButtonClick}
              >
                Schedule Demo
              </button>
              {showCalendly && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="relative rounded-lg p-8 w-11/12 max-w-4xl my-8 max-h-screen bg-transparent">
                    <InlineWidget url="https://calendly.com/smartle/30min" />
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl text-white"
                      onClick={handleCloseCalendly}
                    >
                      &#10005; {/* X button */}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className="lg:w-1/2 pr-4 pl-4 hidden lg:block"
            style={{
              background:
                "url(https://smartle-ai.s3.amazonaws.com/assets/img/still-not-sure.webp)",
              borderRadius: 10,
              backgroundSize: "cover",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Pricing;
