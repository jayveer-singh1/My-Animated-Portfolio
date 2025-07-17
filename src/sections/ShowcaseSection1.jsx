import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
gsap.ticker.lagSmoothing(1000, 16);


gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection1 = () => {
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <TitleHeader
        title="Real-World Projects & My Technical Role"
        sub="🤝 What I Bring to Projects"
      />
      <br />
      <br />
      <br />
      <br />
      <div id="work" ref={sectionRef} className="app-showcase">

        <div className="w-full">
          <div className="showcaselayout">

            <div ref={rydeRef} className="first-project-wrapper">

              <a href="https://job-portal-client-brown-three.vercel.app/" target="_blank">
                <div className="image-wrapper">
                  <img src="/images/project1.avif" alt="Job Portal web app Interface" />
                </div>
              </a>


              <div className="text-content">
                <h2>
                  Job Search Made Simple with a Powerful, User-Friendly Web Application called Insiderjobs.
                </h2>
                <p className="text-white-50 md:text-xl">
                  A BCA final year project built with the MERN stack for a fast, user-friendly experience.
                </p>
                <div className="mt-4 flex gap-4">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out shadow hover:shadow-lg"
                    onClick={() => window.open("https://job-portal-client-brown-three.vercel.app/", "_blank")}
                  >
                    🚀 Live
                  </button>
                  <button
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out shadow hover:shadow-lg"
                    onClick={() => window.open("https://github.com/jayveer-singh1/Job-Portal.git", "_blank")}
                  >
                    💻 Code
                  </button>
                </div>
              </div>
            </div>

            <div className="project-list-wrapper overflow-hidden">
              <div className="project" ref={libraryRef}>
                <a href="https://eductional-website-by-jayveer.vercel.app/" target='_blank'>
                  <div className="image-wrapper bg-[#FFEFDB]">
                    <img
                      src="/images/project2.png"
                      alt="Edusity"
                    />
                  </div>
                </a>
                <h2>Edusity - The Education Website Platform</h2>
                <div className="mt-4 flex gap-4">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out shadow hover:shadow-lg"
                    onClick={() => window.open("https://eductional-website-by-jayveer.vercel.app/", "_blank")}
                  >
                    🚀 Live
                  </button>
                  <button
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out shadow hover:shadow-lg"
                    onClick={() => window.open("https://github.com/jayveer-singh1/Eductional-Website.git", "_blank")}
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

export default ShowcaseSection1;
