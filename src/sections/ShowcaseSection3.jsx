import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.ticker.lagSmoothing(1000, 16);


gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection3 = () => {
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

            <div ref={rydeRef} className="first-project-wrapper">

              <a href="https://food-delivery-web-app-jayveer.vercel.app/" target="_blank">
                <div className="image-wrapper">
                  <img src="/images/project8.png" alt="Job Portal web app Interface" />
                </div>
              </a>


              <div className="text-content">
                <h2>
                  Tomato- Food Delivery Web Application
                </h2>
                <p className="text-white-50 md:text-xl">
                 Experience hassle-free food delivery with Tomato — a powerful and user-friendly web application designed to bring your favorite meals right to your doorstep with speed, convenience, and reliability.
                </p>
                <div className="mt-4 flex gap-4">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out shadow hover:shadow-lg"
                    onClick={() => window.open("https://food-delivery-web-app-jayveer.vercel.app/", "_blank")}
                  >
                    🚀 Live
                  </button>
                  <button
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out shadow hover:shadow-lg"
                    onClick={() => window.open("https://github.com/jayveer-singh1/Food-Delivery-WebApp.git", "_blank")}
                  >
                    💻 Code
                  </button>
                </div>
              </div>
            </div>

            <div className="project-list-wrapper overflow-hidden">
              <div className="project" ref={libraryRef}>
                <a href="https://gametrax-jayveer.vercel.app/" target='_blank'>
                  <div className="image-wrapper bg-[#FFEFDB]">
                    <img
                      src="/images/project9.png"
                      alt="Edusity"
                    />
                  </div>
                </a>
                <h2>Gametrax - An Animated Game Trailers Showcase Platform</h2>
                <div className="mt-4 flex gap-4">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out shadow hover:shadow-lg"
                    onClick={() => window.open("https://gametrax-jayveer.vercel.app/", "_blank")}
                  >
                    🚀 Live
                  </button>
                  <button
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out shadow hover:shadow-lg"
                    onClick={() => window.open("https://github.com/jayveer-singh1/Gametrax.git", "_blank")}
                  >
                    💻 Code
                  </button>
                </div>
              </div>

              <div className="project" ref={ycDirectoryRef}>
                <a href="https://grilli-master-jayveer.vercel.app/" target="_blank">
                  <div className="image-wrapper bg-[#FFE7EB]">
                    <img src="/images/project3.png" alt="Grilli" />
                  </div>
                </a>
                <h2>Grilli - A Restaurant Startup</h2>
                <div className="mt-4 flex gap-4">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out shadow hover:shadow-lg"
                    onClick={() => window.open("https://grilli-master-jayveer.vercel.app/", "_blank")}
                  >
                    🚀 Live
                  </button>
                  <button
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out shadow hover:shadow-lg"
                    onClick={() => window.open("https://github.com/jayveer-singh1/grilli-master.git", "_blank")}
                  >
                    💻 Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ShowcaseSection3;
