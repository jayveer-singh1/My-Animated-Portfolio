import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.ticker.lagSmoothing(1000, 16);


gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection2 = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
          <div className="showcaselayout">

            <div className="project-list-wrapper overflow-hidden">

              <div className="project" ref={libraryRef}>
                <a href="https://gta-vi-jayveer-singh.vercel.app/" target='_blank'>
                  <div className="image-wrapper bg-[#FFEFDB]">
                    <img
                      src="/images/project6.png"
                      alt="GTA VI"
                    />
                  </div>
                </a>
                <h2>GTA VI - Animation with Selfie Effect</h2>
                <div className="mt-4 flex gap-4">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out shadow hover:shadow-lg"
                    onClick={() => window.open("https://gta-vi-jayveer-singh.vercel.app/", "_blank")}
                  >
                    🚀 Live
                  </button>
                  <button
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out shadow hover:shadow-lg"
                    onClick={() => window.open("https://github.com/jayveer-singh1/GTA-VI.git", "_blank")}
                  >
                    💻 Code
                  </button>
                </div>

              </div>
              <div className="project" ref={ycDirectoryRef}>
                <a href="https://3d-portfolio-jayveer.vercel.app/" target="_blank">
                  <div className="image-wrapper bg-[#FFE7EB]">
                    <img src="/images/project5.png" alt="3D Portfolio" />
                  </div>
                </a>
                <h2>3D Portfolio – Creative, Interactive, Immersive</h2>
                <div className="mt-4 flex gap-4">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out shadow hover:shadow-lg"
                    onClick={() => window.open("https://3d-portfolio-jayveer.vercel.app/", "_blank")}
                  >
                    🚀 Live
                  </button>
                  <button
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out shadow hover:shadow-lg"
                    onClick={() => window.open("https://github.com/jayveer-singh1/3D-Portfolio.git", "_blank")}
                  >
                    💻 Code
                  </button>
                </div>
              </div>

            </div>

            <div ref={rydeRef} className="first-project-wrapper">
              <a href="https://foodie-master-jayveer.vercel.app/" target="_blank">
                <div className="image-wrapper">
                  <img src="/images/project4.png" alt=" Foodie-Master" />
                </div>
              </a>
              <div className="text-content">
                <h2>
                  Foodie-Master
                </h2>
                <p className="text-white-50 md:text-xl">
                  A Restaurant Food Ordering Web Application developed and designed to provide a seamless, efficient, and user-friendly platform for browsing menus, placing orders, and managing restaurant services online.
                </p>
              </div>
              <div className="mt-4 flex gap-4">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out shadow hover:shadow-lg"
                  onClick={() => window.open("https://foodie-master-jayveer.vercel.app/", "_blank")}
                >
                  🚀 Live
                </button>
                <button
                  className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out shadow hover:shadow-lg"
                  onClick={() => window.open("https://github.com/jayveer-singh1/foodie-master.git", "_blank")}
                >
                  💻 Code
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ShowcaseSection2;
