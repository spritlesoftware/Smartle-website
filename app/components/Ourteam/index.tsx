import Image from "next/image";

const index = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 my-16">
        {/* COLUMN-1 */}
        <div style={{margin:"auto 0"}}>
          <h2 className="text-5xl font-bold text-left">
            Smartle AI your trusted ecommerce ally ensures real results while
            preserving profit margins
          </h2>
          <h3 className="text-2xl font-medium text-left pt-10 opacity-50">
            Upgrade your customer experience with our AI chat: engaging in
            heartfelt conversations and responding promptly. Dive into
            meaningful answers, reduce wait times, and ensure happy customers.
          </h3>
        </div>

        {/* COLUMN-2 */}
        <div className="relative">
          <video
            autoPlay
            muted
            loop
            className=""
            style={{ height: "40rem", width: "25rem", margin:"0 auto"}}
          >
            <source src="/videos/smartle phone.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
    // <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 m-32">
    //   <h2 className="text-5xl font-bold text-center">
    //     Smartle AI your trusted ecommerce ally ensures real results while
    //     preserving profit margins
    //   </h2>
    //   <h3 className="text-2xl font-medium text-center pt-10 opacity-50">
    //     Upgrade your customer experience with our AI chat: engaging in heartfelt
    //     conversations and responding promptly. Dive into meaningful answers,
    //     reduce wait times, and ensure happy customers.
    //   </h3>
    //   <div className="grid grid-cols-1 my-16">
    //     {/* <Image
    //       src="/images/team/teamimg.png"
    //       alt="office-image"
    //       height={684}
    //       width={1296}
    //     /> */}
    // <video autoPlay muted loop className="" style={{height:"20rem" , width: "10rem"}}>
    //   <source src="/videos/smartle phone.mp4" type="video/mp4" />
    //   Your browser does not support the video tag.
    // </video>
    //   </div>
    // </div>
  );
};

export default index;
