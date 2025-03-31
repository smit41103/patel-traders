import React from "react";
import { Link } from "react-router-dom";
import newsletter from "../images/newsletter.png";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for new updates</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
              <address className="text-white fs-6">
                Patel Traders No. 26, Mahalaxmi Market 1 <br />{" "}
                Maninagar, Ahmedabad, Gujarat, India<br />
                  PinCode: 380008
                </address>
                <a href="https://www.google.com/maps/place/22%C2%B059'52.7%22N+72%C2%B036'28.9%22E/@22.9979725,72.6054439,802m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d22.9979725!4d72.6080188?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" target="_blank">
                click to get directions</a>
                <a
                  href="tel:+91 8264954234"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +91 8048968884
                </a>
                <a
                  href="mailto:pateltraders@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  pateltraders@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="https://www.chipresetters.com/">
                    I-Mart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Company Profile</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/" className="text-white py-2 mb-1">
                  Home
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Company Brief
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Our Products
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div> 
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/product" className="text-white py-2 mb-1">Hp series Chip</Link>
                <Link to="/product" className="text-white py-2 mb-1">Toner Chips</Link>
                <Link to="/product" className="text-white py-2 mb-1">Ricoh Chip & Chip Programmer</Link>
                <Link to="/product" className="text-white py-2 mb-1">Hp inkjet Chip</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Patel Traders
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
