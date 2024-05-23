import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

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
        paragraph: 'Increased in customer satisfaction ratings',
        link: 'Learn more'
    },
    {
        heading: "67%",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'Increase in Average order value',
        link: 'Learn more'
    },
    {
        heading: "79%",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Reduction in customer support tickets',
        link: 'Learn more'
    },
]

const Aboutus = () => {
    return (

        <div>
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>SMARTLE.AI</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Your AI Partner</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group card'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            {/* <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" /> */}
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            {/* <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link> */}
                        </div>
                    ))}
                </div>
            </div>

            {/* content */}

            <>
  <div className="container mx-auto sm:px-4  ptb-120">
    <div
      className="flex flex-wrap  justify-center ptb-120 bg-cover items-center"
      style={{ background: "url(../../../public/images/aboutus/roi-banner.webp)" }}
    >
      <div className="lg:w-3/4 pr-4 pl-4 text-center ">
        <h1 className=" fs-48 txt-blk fw-600 py-5">
          Beyond Bots:
          <span className="fw-300">
            {" "}
            How Smartle AI is Making Your Store Smarter
          </span>
        </h1>
        <button
          className="relative flex-grow max-w-full flex-1 px-4 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded mt-3"
          onclick="Calendly.initPopupWidget({url: 'https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03'}); return false;"
        >
          Try Smartle AI For FREE
        </button>
        {/* <button class="bg-blue mb-4 mt-3 lg:mb-0 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-w">Try Smartle AI For FREE</button> */}
      </div>
    </div>
  </div>
  <div className="container mx-auto sm:px-4 flex lg:flex-row flex-wrap justify-between w-full">
    <div className="lg:w-2/5 pr-4 pl-4">
      <h2 style={{ textAlign: "left" }} className="fw-bold">
        Your AI partner
      </h2>
      <p style={{ textAlign: "left" }} className="py-3">
        Imagine a world where conversation isn't confined to screens and
        buttons. Where you can chat, ask questions, and get things done with an
        AI as natural and engaging as a real person. That's the world Smartle AI
        is building.
        <br />
        <br /> Our team consists of enthusiastic inventors with a single
        objective in mind: creating an AI assistant that understands&nbsp; you
        like a friend. Forget the days of robotic responses and frustrating
        misunderstandings.
      </p>
    </div>
    <div className="lg:w-1/3 pr-4 pl-4">
      <img
        
        src="../images/aboutus/aboutus-2.png"
        className="max-w-full h-auto"
        style={{ width: "auto" }}
      />
    </div>
  </div>
  <div
    className="container mx-auto sm:px-4 flex lg:flex-row justify-between py-3 flex-wrap"
    style={{ overflow: "hidden" }}
  >
    <div className="lg:w-1/3 pr-4 pl-4 py-5">
      <img src="../public/images/aboutus-2.png" className="max-w-full h-auto" />
    </div>
    <div
      className="lg:w-2/5 pr-4 pl-4 py-5 flex flex-col justify-center"
      style={{ marginLeft: "5%" }}
    >
      <h2 style={{ fontWeight: 600 }}>Smartle AI</h2>
      <h6 style={{ fontWeight: 400 }}>
        Continuously learning, it adopts new strategies, while
        <br />
        personalizing its interactions to cater to your unique style and
        <br />
        needs, ensuring a seamless and tailored experience.
      </h6>
    </div>
  </div>
  <div className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 bg-gray-100 ptb-60">
    <div className="flex flex-wrap  items-center justify-center">
      <h3 className="text-center fs-40 fw-600 mb-5">
        Why customers win with Smartle?
      </h3>
      <div className="lg:w-5/6 pr-4 pl-4">
        <div className="swiper" id="owl-carousell" style={{ margin: "0 auto" }}>
          <div className="swiper-wrapper">
            <div className="item swiper-slide">
              {" "}
              <div
                className="bg-white  p-6 "
                style={{ width: 320, height: 350 }}
              >
                <div className="flex">
                  <div className="text-center w-full fw-bolder text-gray-900 mt-4">
                    <h3>
                      Happier
                      <br /> Shoppers
                    </h3>
                    <div className="flex justify-center">
                      <hr
                        style={{
                          width: "80%",
                          backgroundColor: "black",
                          height: 2
                        }}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-900 py-3">
                  Smartle AI provides delightful conversations, making shopping
                  experiences more engaging and enjoyable.
                </p>
              </div>
            </div>
            <div className="item swiper-slide">
              {" "}
              <div
                className="bg-white  p-6 "
                style={{ width: 320, height: 350 }}
              >
                <div className="flex justify-between mt-4">
                  <div className="text-center  w-full fw-bolder text-gray-900">
                    <h3>
                      Effortless
                      <br />
                      Assistance
                    </h3>
                    <div className="flex justify-center">
                      <hr
                        style={{
                          width: "80%",
                          backgroundColor: "black",
                          height: 2
                        }}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-900 py-3">
                  Get instant answers and product recommendations, leading to
                  faster purchases and fewer frustrated customers.
                </p>
              </div>
            </div>
            <div className="item swiper-slide">
              {" "}
              <div
                className="bg-white  p-6 "
                style={{ width: 320, height: 350 }}
              >
                <div className="flex justify-between mt-4">
                  <div className="text-center  w-full fw-bolder text-gray-900">
                    <h3>
                      Personalized
                      <br />
                      Touch
                    </h3>
                    <div className="flex justify-center">
                      <hr
                        style={{
                          width: "80%",
                          backgroundColor: "black",
                          height: 2
                        }}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-900 py-3">
                  Smartle AI learns buyer preferences, offering relevant
                  suggestions and boosting customer satisfaction.
                </p>
              </div>
            </div>
            <div className="item swiper-slide">
              {" "}
              <div
                className="bg-white  p-6 "
                style={{ width: 320, height: 350 }}
              >
                <div className="flex justify-between mt-4">
                  <div className="text-center  w-full fw-bolder text-gray-900">
                    <h3>24/7 support</h3>
                    <div className="flex justify-center">
                      <hr
                        style={{
                          width: "80%",
                          backgroundColor: "black",
                          height: 2
                        }}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-900 py-3">
                  With round-the-clock AI assistance that continues
                  conversations even after business hours, you'll never miss a
                  sale.
                </p>
              </div>
            </div>
            <div className="item swiper-slide">
              {" "}
              <div
                className="bg-white  p-6 "
                style={{ width: 320, height: 350 }}
              >
                <div className="flex justify-between mt-4">
                  <div className="text-center  w-full fw-bolder text-gray-900">
                    <h3>
                      Data-Driven <br /> Insights
                    </h3>
                    <div className="flex justify-center">
                      <hr
                        style={{
                          width: "80%",
                          backgroundColor: "black",
                          height: 2
                        }}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-900 py-3">
                  Through Smartle AI interactions, obtain useful consumer data
                  that can be used to improve marketing strategies and product
                  suggestions.
                </p>
              </div>
            </div>
          </div>
        </div>
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
            onclick="Calendly.initPopupWidget({url: 'https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03'}); return false;"
          >
            Schedule Demo
          </button>
        </div>
      </div>
      <div
        className="lg:w-1/2 pr-4 pl-4 hidden lg:block"
        style={{
          background: "url(../images/aboutus/aboutus-2.png)",
          borderRadius: 10,
          backgroundSize: "cover"
        }}
      />
    </div>
  </div>
</>

            
        </div>

    )
}

export default Aboutus;