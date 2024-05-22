import Image from "next/image";

const Banner = () => {
  return (
    <div className="mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
        {/* COLUMN-1 */}

        <div className="mx-auto sm:mx-0" style={{margin:"auto 0"}}>
          {/* <div className="py-3 text-center lg:text-start">
            <button className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
              DESIGN AGENCY
            </button>
          </div> */}
          <div className="py-3 text-center lg:text-start">
            <h1 className="text-5xl lg:text-70xl font-bold text-darkpurple" style={{lineHeight:"3.5rem"}}>
              Turn your window shoppers into paying customers with{" "}
              <span className="text-style-gradient">Smartle's Chat AI </span>
              Assistance
            </h1>
          </div>
          <div className="my-7 text-center lg:text-start">
            <button className="text-sm md:text-xl font-semibold hover:shadow-xl text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue" style={{backgroundColor:"#00356b"}}>
              Try Smartle AI
            </button>
          </div>
        </div>

        {/* COLUMN-2 */}

        <div className="lg:-m-24 lg:pt-20 lg:block">
          {/* <Image src="/images/banner/banner.svg" alt="hero-image" width={800} height={642} /> */}
          <div className="scene" style={{ margin: "0 auto" }}>
            <div className="phone-con" style={{ width: 300 }}>
              <div className="phone" style={{ width: 300 }}>
                <div className="buttons">
                  <div className="left">
                    <div className="button" />
                    <div className="button" />
                    <div className="button" />
                  </div>
                  <div className="right">
                    <div className="button" />
                  </div>
                </div>
                <div className="camera" />
                <div className="screen-container">
                  <iframe
                    src="https://chat.smartle.ai/"
                    width="100%"
                    height="100%"
                    style={{ borderRadius: 49, border: "none" }}
                  />
                  <div className="notch-container" tabIndex={0}>
                    <div className="notch">
                      <div className="content">
                        <div className="left" style={{ margin: "auto 0" }}>
                          {/* <div class="tile"> */}
                          <img
                            src="assets/img/logo/Sicon.png"
                            style={{
                              height: 20,
                              width: "20x",
                              marginLeft: "1.2rem",
                            }}
                          />
                          {/* </div> */}
                          <div className="text" />
                        </div>
                        <div className="right" />
                        <div className="bar">
                          <div className="duration" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="notch-blur" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
