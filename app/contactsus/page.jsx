const Contactus = () => {
  <>
    {/* <div className="container mx-auto sm:px-4  ptb-120">
      <div
        className="flex flex-wrap  justify-center ptb-120 bg-cover items-center"
        style={{ background: "url(../assets/img/roi-banner.webp)" }}
      >
        <div className="lg:w-3/4 pr-4 pl-4 text-center ">
          <h1 className=" fs-48 txt-blk fw-600" style={{ fontSize: 80 }}>
            Get in touch!
          </h1>
          <p className="text-center">
            {" "}
            Drop us a message and sit back for the magic to happen
          </p>
          <button
            className="relative flex-grow max-w-full flex-1 px-4 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded mb-5 mt-3"
            onclick="Calendly.initPopupWidget({url: 'https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03'}); return false;"
          >
            Try Smartle AI For FREE
          </button>
        </div>
      </div>
    </div>
    <div className="container mx-auto sm:px-4 lg:flex-row flex flex-wrap">
      <div className="lg:w-3/5 pr-4 pl-4">
        <div
          className="mb-4 py-5 px-5 rounded-3"
          style={{ boxShadow: "0px 16px 48px 0px #D9D9D9" }}
        >
          <h4 className="text-center fw-bold py-3">Contact us</h4>
          <div className="lg:flex-row flex flex-wrap justify-between mb-3">
            <div className="lg:w-2/5 pr-4 pl-4">
              <label htmlFor="FirstName" className="mb-2">
                First Name *
              </label>
              <input
                className="rounded-3 input_contactus"
                type="text"
                id="FirstName"
                name="name"
                placeholder="First name"
              />
              <p style={{ color: "red", fontSize: 12 }} id="FirstNameErr" />
            </div>
            <div className="lg:w-2/5 pr-4 pl-4">
              <label htmlFor="LastName" className="mb-2">
                Last Name
              </label>
              <input
                className="rounded-3 input_contactus"
                type="text"
                id="LastName"
                name="name"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="lg:flex-row flex flex-wrap justify-between mb-4">
            <div className="lg:w-2/5 pr-4 pl-4">
              <label htmlFor="Email" className="mb-2">
                Email*
              </label>
              <input
                className="rounded-3 input_contactus"
                type="text"
                id="Email"
                name="name"
                placeholder="Email     "
              />
              <p style={{ color: "red", fontSize: 12 }} id="EmailErr" />
            </div>
            <div className="lg:w-2/5 pr-4 pl-4">
              <label htmlFor="PhoneNumber" className="mb-2">
                Phone Number
              </label>
              <input
                className="rounded-3 input_contactus"
                type="number"
                id="PhoneNumber"
                name="name"
                placeholder="Phone number"
              />
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="lg:w-full pr-4 pl-4">
              <label htmlFor="text-area" className="mb-2">
                Tell us a little about your site*
              </label>
              <textarea
                placeholder="Write your message"
                id="text-area"
                defaultValue={""}
              />
              <p style={{ color: "red", fontSize: 12 }} id="TextAreaErr" />
            </div>
          </div>
          <button
            className="relative flex-grow max-w-full flex-1 px-4 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded w-full"
            id="submit"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="lg:w-2/5 pr-4 pl-4 py-5" style={{ paddingLeft: "5%" }}>
        <div>
          <h6>Want to get on a quick call? ring us at</h6>
          <div className="py-3" style={{ paddingLeft: "5%" }}>
            <p>
              <i
                className="fas fa-phone"
                style={{ color: "#00356b", marginRight: "2%" }}
              />
              <span style={{ fontWeight: "bold" }}>Ohio, USA:</span>&nbsp;+1 614
              664 7677
            </p>
            <p>
              <i
                className="fas fa-phone"
                style={{ color: "#00356b", marginRight: "2%" }}
              />
              <span style={{ fontWeight: "bold" }}>Singapore:</span>&nbsp;+65
              6652 5475
            </p>
            <p>
              <i
                className="fas fa-phone"
                style={{ color: "#00356b", marginRight: "2%" }}
              />
              <span style={{ fontWeight: "bold" }}>Chennai, India:</span>
              &nbsp;+91 44 4784 3003
            </p>
          </div>
        </div>
        <div>
          <h6>Want to visit us? Here are the Google maps directions</h6>
          <div
            className="py-3 flex flex-col flex-wrap"
            style={{ paddingLeft: "5%" }}
          >
            <a
              style={{ color: "#00356b" }}
              href="https://www.google.com/maps/place/Spritle+software+LLC/@40.0044937,-83.1532564,17z/data=!3m1!4b1!4m6!3m5!1s0x8838978530ed0737:0xaa95bab488bbf005!8m2!3d40.0044937!4d-83.1532564!16s%2Fg%2F11rnntvpmb?entry=ttu"
            >
              <i
                className="fas fa-flag"
                style={{ color: "#00356b", marginRight: "2%" }}
              />
              <span style={{ fontWeight: "bold" }}>Ohio, USA</span>
            </a>
            <a
              style={{ color: "#00356b" }}
              href="https://www.google.co.in/maps/place/Spritle+Software/@1.3325619,103.8915719,17z/data=!3m1!5s0x31da19f66c9058fd:0x8871b496b404d2ba!4m6!3m5!1s0x31da1703646cca73:0xee6ab222437d335a!8m2!3d1.332946!4d103.8939974!16s%2Fg%2F11ffltwqh1?entry=ttu"
            >
              <i
                className="fas fa-flag"
                style={{ color: "#00356b", marginRight: "2%" }}
              />
              <span style={{ fontWeight: "bold" }}>Singapore</span>
            </a>
            <a
              style={{ color: "#00356b" }}
              href="https://www.google.com/maps/place/Spritle+Software/@13.0670529,80.1766501,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5263d902a72203:0xa64bbcae249c5436!8m2!3d13.0670529!4d80.1766501!16s%2Fg%2F1tfv3k9g?entry=ttu"
            >
              <i
                className="fas fa-flag"
                style={{ color: "#00356b", marginRight: "2%" }}
              />
              <span style={{ fontWeight: "bold" }}>Chennai, India</span>
            </a>
          </div>
        </div>
        <div className="py-3">
          <h6>
            <i
              className="fas fa-suitcase mb-3"
              style={{ color: "#00356b", marginRight: "2%" }}
            />
            For Jobs enquiries, email us at&nbsp;jobs@spritle.com
          </h6>
          <h6>
            <i
              className="fas fa-circle-info mb-3"
              style={{ color: "#00356b", marginRight: "2%" }}
            />
            For General enquiries, email us at&nbsp;info@spritle.com
          </h6>
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
            background: "url(../assets/img/still-not-sure.webp)",
            borderRadius: 10,
            backgroundSize: "cover",
          }}
        />
      </div>
    </div> */}
    <h1>
      Hi
    </h1>
  </>;
};

export default Contactus;
