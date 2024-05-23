const Pricing = () => {
  return (
    <>
      <div className="container mx-auto sm:px-4 ptb-120">
        <div className="flex flex-wrap  justify-center">
          <div
            className="lg:w-full pr-4 pl-4 text-center ptb-120 bg-cover"
            style={{ background: "url(/images/pricing-banner.webp)" }}
          >
            <h1 className=" fs-48 txt-blk px-3">
              <span className="fw-600">Conversation to Conversion</span>:
              Mastering the Art of Sales-Driven AI Chat
            </h1>
            <p className="mt-4 fs-18 lg:block hidden">
              At Smartle AI, we recognize the unique needs of every business.
              Ready to transform your conversational AI journey? Choose a plan
              and let's build your success story together.
            </p>
            <p className="mt-4 fs-18 block lg:hidden py-4">
              At Smartle AI, we recognize the unique needs of every business.
              Ready to transform your conversational AI journey? Choose a plan
              and <br /> let's build your success story together.
            </p>
            <p />
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-4 pb-60">
        <h2 className="text-center" style={{ paddingBottom: "6%" }}>
          Pricing that propels your success
        </h2>
        <div className="flex flex-wrap  lg:w-5/6 pr-4 pl-4 mx-auto justify-center items-end">
          <div className="lg:w-1/4 pr-4 pl-4 mb-4 lg:mb-0">
            <h2 className="mb-3 fw-300">
              $39<span className="fs-18 txt-gray">/month</span>
            </h2>
            <h3 className="mb-2 fw-300 ">Starter</h3>
            <p className="mb-4 txt-gray fs-15">5 days free trial</p>
            <ul className="p-0" style={{ listStyle: "none" }}>
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                500 replies/month
              </li>
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                1,000 webpages stored
              </li>
              {/* <li class="txt-gray fs-15 mb-2">
        <i class="fa-solid fa-circle-check txt-blue pe-2"></i>2 Stores
      </li> */}
              {/* <li class="txt-gray fs-15 mb-2">
        <i class="fa-solid fa-circle-check txt-blue pe-2"></i>1 Member
      </li> */}
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                Standard Support
              </li>
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                Train your AI
              </li>
              {/* <li class="txt-gray fs-15 mb-2">
        <i class="fa-solid fa-circle-check txt-blue pe-2"></i>Sales Tracker
      </li> */}
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                Pro-Active AI Sales
              </li>
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                Embed Anywhere
              </li>
              {/* <li class="txt-gray fs-15 mb-2">
        <i class="fa-solid fa-circle-check txt-blue pe-2"></i>Embed Anywhere
      </li> */}
            </ul>
            <div className="text-center">
              <button
                className="relative flex-grow max-w-full flex-1 px-4 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded mt-3 w-90"
                onclick="Calendly.initPopupWidget({url: 'https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03'}); return false;"
              >
                Start FREE Trail
              </button>
              {/* <button
        type="button"
        class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline  btn-dark-rounded bg-blue mt-3"
      >
        Start FREE Trail
      </button> */}
            </div>
          </div>
          <div className="lg:w-1/4 pr-4 pl-4 mb-4 lg:mb-0">
            <h2 className="mb-3 fw-300">
              $99<span className="fs-18 txt-gray">/month</span>
            </h2>
            <h3 className="mb-2 fw-300 ">Growth</h3>
            <p className="mb-4 txt-gray fs-15">5 days free trial</p>
            <ul className="p-0" style={{ listStyle: "none" }}>
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                1,500 replies/month
              </li>
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                5,000 webpages stored
              </li>
              {/* <li class="txt-gray fs-15 mb-2">
        <i class="fa-solid fa-circle-check txt-blue pe-2"></i>5 Stores
      </li> */}
              {/* <li class="txt-gray fs-15 mb-2">
        <i class="fa-solid fa-circle-check txt-blue pe-2"></i>Unlimited Members
      </li> */}
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                Standard Support
              </li>
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                Train your AI
              </li>
              {/* <li class="txt-gray fs-15 mb-2">
        <i class="fa-solid fa-circle-check txt-blue pe-2"></i>Sales Tracker
      </li> */}
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                Pro-Active AI Sales
              </li>
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                Embed Anywhere
              </li>
              {/* <li class="txt-gray fs-15 mb-2">
        <i class="fa-solid fa-circle-check txt-blue pe-2"></i>Embed Anywhere
      </li> */}
            </ul>
            <div className="text-center">
              <button
                className="relative flex-grow max-w-full flex-1 px-4 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded mt-3 w-90"
                onclick="Calendly.initPopupWidget({url: 'https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03'}); return false;"
              >
                Start FREE Trail
              </button>
              {/* <button
        type="button"
        class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline  btn-dark-rounded bg-blue mt-3"
      >
        Start FREE Trail
      </button> */}
            </div>
          </div>
          <div className="lg:w-1/4 pr-4 pl-4 bg-blue p-6 br-14 box-shadow mb-4 lg:mb-0">
            <div className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded rounded-full py-2 px-4 bg-white fs-15 fw-100 text-blue float-end mb-3">
              Most Popular
            </div>
            <h2 className="my-3 pt-2 fw-300">
              $199<span className="fs-18">/month</span>
            </h2>
            <h3 className="mb-2 fw-300">Pro</h3>
            <p className="mb-4 fs-15">5 days free trial</p>
            <ul className="p-0" style={{ listStyle: "none" }}>
              <li className="txt-white fs-15 mb-2">
                <i className="fa-solid fa-circle-check  pe-2" />
                3,000 replies/month
              </li>
              <li className="txt-white fs-15 mb-2">
                <i className="fa-solid fa-circle-check  pe-2" />
                15,000 webpages stored
              </li>
              {/* <li class="txt-white fs-15 mb-2">
        <i class="fa-solid fa-circle-check  pe-2"></i>10 Stores
      </li> */}
              {/* <li class="txt-white fs-15 mb-2">
        <i class="fa-solid fa-circle-check pe-2"></i>Unlimited Members
      </li> */}
              <li className="txt-white fs-15 mb-2">
                <i className="fa-solid fa-circle-check  pe-2" />
                Priority Support
              </li>
              <li className="txt-white fs-15 mb-2">
                <i className="fa-solid fa-circle-check  pe-2" />
                Train your AI
              </li>
              <li className="txt-white fs-15 mb-2">
                <i className="fa-solid fa-circle-check pe-2" />
                Up selling
              </li>
              <li className="txt-white fs-15 mb-2">
                <i className="fa-solid fa-circle-check  pe-2" />
                Media Channel Integration
              </li>
              <li className="txt-white fs-15 mb-2">
                <i className="fa-solid fa-circle-check pe-2" />
                CRM tool Integration
              </li>
              <li className="txt-white fs-15 mb-2">
                <i className="fa-solid fa-circle-check  pe-2" />
                Pro-Active AI Sales
              </li>
              <li className="txt-white fs-15 mb-2">
                <i className="fa-solid fa-circle-check pe-2" />
                Embed Anywhere
              </li>
            </ul>
            <div className="text-center">
              <button
                type="button"
                className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline  btn-dark-rounded txt-blue but-white mt-3"
                onclick="Calendly.initPopupWidget({url: 'https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03'}); return false;"
              >
                Start FREE Trial
              </button>
            </div>
          </div>
          <div className="lg:w-1/4 pr-4 pl-4 mb-4 lg:mb-0 ps-4">
            <h2 className="mb-3 fw-300">
              $499<span className="fs-18 txt-gray">/month</span>
            </h2>
            <h3 className="mb-2 fw-300 ">Scale</h3>
            <p className="mb-4 txt-gray fs-15">5 days free trial</p>
            <ul className="p-0" style={{ listStyle: "none" }}>
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                7,000 replies/month
              </li>
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                30,000 webpages stored
              </li>
              {/* <li class="txt-gray fs-15 mb-2">
        <i class="fa-solid fa-circle-check txt-blue pe-2"></i>20 Stores
      </li> */}
              {/* <li class="txt-gray fs-15 mb-2">
        <i class="fa-solid fa-circle-check txt-blue pe-2"></i>Unlimited Members
      </li> */}
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                Priority Support
              </li>
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                Train your AI
              </li>
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                Up Selling
              </li>
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                Cross Selling
              </li>
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                Media Channel Integration
              </li>
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                CRM tool integrtaion
              </li>
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                AI Image Search*
              </li>
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                Pro-Active AI Sales
              </li>
              <li className="txt-gray fs-15 mb-2">
                <i className="fa-solid fa-circle-check txt-blue pe-2" />
                Embed Anywhere
              </li>
              {/* <li class="txt-gray fs-15 mb-2">
        <i class="fa-solid fa-circle-check txt-blue pe-2"></i>Voice Integration
      </li> */}
            </ul>
            <div className="text-center">
              <button
                className="relative flex-grow max-w-full flex-1 px-4 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded mt-3 w-90"
                onclick="Calendly.initPopupWidget({url: 'https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03'}); return false;"
              >
                Start FREE Trail
              </button>
              {/* <button
        type="button"
        class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline  btn-dark-rounded bg-blue mt-3"
      >
        Start FREE Trail
      </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-4 ptb-60">
        <div
          className="flex flex-wrap  p-6"
          style={{ boxShadow: "0px 16px 48px 0px #D9D9D9", borderRadius: 10 }}
        >
          <div className="lg:w-5/6 pr-4 pl-4">
            <h3 className="fw-600 mb-2">Enterprise</h3>
            <p className="mb-2">
              For organizations requiring more, please don't hesitate to contact
              us, and we will be glad to assist you in addressing your specific
              needs.
            </p>
            <div className="flex justify-center">
              <button
                className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-w btn-rounded mt-3 justify-center items-center"
                onclick="Calendly.initPopupWidget({url: 'https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03'}); return false;"
              >
                {" "}
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
      <div className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 ptb-60">
        <div className="flex flex-wrap  items-center justify-center">
          <h3 className="text-center txt-blue fs-30 fw-600">
            CALCULATE YOUR ROI
          </h3>
          <h4 className="text-center txt-blk mb-5 fs-30 fw-300">
            Maximize your potential with Smartle AI
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
                    className="w-full input ps-3 lh-22"
                    required=""
                    id="visitors-pm"
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3">
                    Enter the number of orders you generate per month:
                  </label>
                  <input
                    type="number"
                    className="w-full input ps-3 lh-22"
                    required=""
                    id="order-pm"
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 ">
                    What is your store's Average Order Value (AOV)?
                  </label>
                  <input
                    type="number"
                    className="w-full lh-22 input ps-3"
                    required=""
                    id="aov"
                  />
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
                <ul className="flex flex-col pl-0 mb-0 border rounded border-gray-300  bg-blue">
                  <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline bg-blue lh-2 flex items-center justify-between">
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
                  <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline bg-blue lh-2 flex items-center justify-between">
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
              onclick="Calendly.initPopupWidget({url: 'https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03'}); return false;"
            >
              Unlock Additional Sales Now
            </button>
          </div>
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
            <div className="flex justify-center">
              <button
                className="w-70 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded mt-4"
                onClick="Calendly.initPopupWidget({url: 'https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03'}); return false;"
              >
                Schedule Demo
              </button>
            </div>
          </div>
          <div
            className="lg:w-1/2 pr-4 pl-4 hidden lg:block"
            style={{
              background: "url(../assets/img/still-not-sure.webp)",
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