import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Quick Links",
    link: ["ROI Calculator", "About us", "Pricing", "Blogs"],
  },
];

const footer = () => {
  return (
    <div
      className="-mt-12"
      id="first-section"
      style={{ backgroundColor: "#00356b" }}
    >
      <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className=" grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-4" style={{marginLeft:"2rem"}}>
            <Link
              href="/"
              className="text-2xl sm:text-4xl font-semibold text-black"
            >
              <img
                src="/images/logo-white.png"
                alt="logo"
                className="max-w-full h-auto logo-color mt-1"
                style={{ width: 210, height: 100, marginLeft: "-1.8rem" , marginTop:"-2rem"  }}
              />
            </Link>
            {/* <h3 className='text-white text-4xl font-semibold leading-9 mb-4 lg:mb-10'> Desgy Solutions</h3> */}
            <h5 className="text-white mb-5">
              Transform your shopping experience with Smartle's revolutionary
              conversational AI chatbot for E-commerce crafted to boost sales by
              converting potential chats into revenue.
            </h5>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-extrabold mb-9">
                {product.section}
              </p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className="mb-5">
                    <Link
                      href="/"
                      className="text-white text-lg font-normal mb-6 space-links"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* LOCATION */}
          <div className="col-span-3" style={{ color: "white", marginLeft:"2rem"}}>
            <h5 className="text-white text-xl font-extrabold mb-9">Location</h5>
            <p className="mb-4">
              <a
                className="text-white"
                href="https://www.google.com/maps/place/Spritle+software+LLC/@40.0044937,-83.1532564,17z/data=!3m1!4b1!4m5!3m4!1s0x8838978530ed0737:0xaa95bab488bbf005!8m2!3d40.0044937!4d-83.1532564"
                target="_blank"
              >
                <svg
                  style={{ marginRight: 10, display: "inline" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="#ffffff"
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>{" "}
                Ohio, USA
              </a>
            </p>
            <p className="mb-4">
              <a className="text-white" href="tel:+16146647677" target="_blank">
                {" "}
                <svg
                  style={{ marginRight: 10, display: "inline" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="#ffffff"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>{" "}
                +1 614 664 7677
              </a>
            </p>
            <p className="mb-4">
              <a
                className="text-white"
                href="https://maps.app.goo.gl/NL4EA8yNxkMXUfpx9"
                target="_blank"
              >
                <svg
                  style={{ marginRight: 10, display: "inline" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="#ffffff"
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                Singapore
              </a>
            </p>
            <p className="mb-4">
              <a className="text-white" href="tel:+6566525475" target="_blank">
                <svg
                  style={{ marginRight: 10, display: "inline" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="#ffffff"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>{" "}
                +65 6652 5475
              </a>
            </p>
            <p className="mb-4">
              <a
                className="text-white"
                href="https://g.page/spritlesoftware?share"
                target="_blank"
              >
                <svg
                  style={{ marginRight: 10, display: "inline" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="#ffffff"
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>{" "}
                Chennai, India
              </a>
            </p>
            <p className="mb-4">
              <a
                className="text-white"
                href="tel:+914447843003"
                target="_blank"
              >
                <svg
                  style={{ marginRight: 10, display: "inline" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="#ffffff"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>{" "}
                +91 44 4784 3003
              </a>
            </p>
          </div>

          {/* FOLLOW US */}
          <div className="col-span-3" >
            <h5 className="text-white text-xl font-extrabold mb-5">
              Follow us on
            </h5>
            <div className="text-blue py-3">
              <a
                href="https://www.linkedin.com/company/smartle-ai/"
                className="me-4"
              >
                <i
                  className="fab fa-linkedin"
                  style={{ fontSize: 20, color: "white" }}
                />
              </a>
              <a href="https://www.instagram.com/smartle.ai/" className="me-4">
                <i
                  className="fab fa-instagram"
                  style={{ fontSize: 20, color: "white" }}
                />
              </a>
              <a href="https://twitter.com/Smartleai" className="me-4">
                <i
                  className="fab fa-square-x-twitter"
                  style={{ fontSize: 20, color: "white" }}
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61557493322712"
                className="me-4"
              >
                <i
                  className="fab fa-square-facebook"
                  style={{ fontSize: 20, color: "white" }}
                />
              </a>
            </div>
            <div>
              <Link href="/contactsus">
                <button className="bg-white rounded-2xl px-4 my-3 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline fw-bold">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}

      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <h3 className="text-center md:text-start text-offwhite text-lg">
                @2024 - All Rights Reserved by{" "}
                <Link href="https://adminmart.com/" target="_blank">
                  {" "}
                 Spritle Software
                </Link>
              </h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="https://www.spritle.com/privacy-policy/">
                <h3 className="text-offwhite pr-6">Privacy policy</h3>
              </Link>
              <Link href="https://www.spritle.com/terms-conditions/">
                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">
                  Terms & conditions
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
