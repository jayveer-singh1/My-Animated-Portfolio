import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import JayveerImage from "../../public/images/hero.png"
gsap.ticker.lagSmoothing(1000, 16);

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden displ">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* Hero Content */}
        <div className="flex items-center justify-center min-h-screen w-full bg-black text-white">
          <header className="flex flex-col items-center justify-center text-center gap-7 px-5 md:px-20">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Jayveer Singh, a developer based in <br />Borimada, Pali, Rajasthan, India with a passion for
              code.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </header>
        </div>















        {/* RIGHT: 3D Model or Visual */}
        {/* <figure>
          <div className="hero-3d-layout">
            <img src={JayveerImage} alt="" id="hero-my-image" />
          </div>
        </figure> */}
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;