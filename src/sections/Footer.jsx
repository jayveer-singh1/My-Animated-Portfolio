import { socialImgs } from "../constants";
import gsap from "gsap";
gsap.ticker.lagSmoothing(1000, 16);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
          <p>&#9993; jayveersinghrawat93512@gmail.com</p>
          <p>&#128222; +91 9079680620</p>
          <p>&#128205; Borimada, Pali, Rajasthan, India (Pin Code:- 306023)</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a href={socialImg.Href} target="_blank">
                <img src={socialImg.imgPath} alt="social icon" />
              </a>
            </div>


          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Jayveer Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
