import { socialImgs } from "../constants";
import gsap from "gsap";
gsap.ticker.lagSmoothing(1000, 16);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jayveersinghrawat93512@gmail.com&su=Hello&body=How are you?" target="_blank">
            <p>&#9993; jayveersinghrawat93512@gmail.com</p>
          </a>
          <a href="https://wa.me/9079680620" target="_blank">
            <p>&#128222; +91 9079680620</p>
          </a>
          <a href="https://maps.app.goo.gl/AaABeCiuFSL224Lw9" target="_blank">
            <p>&#128205; Borimada, Pali, Rajasthan, India (Pin Code:- 306023)</p>
          </a>
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
