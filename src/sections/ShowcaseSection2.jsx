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
                <a href="https://foodie-master-jayveer.vercel.app/" target='_blank'>
                  <div className="image-wrapper bg-[#FFEFDB]">
                    <img
                      src="/images/project4.png"
                      alt="Library Management Platform"
                    />
                  </div>
                </a>
                <h2>Foodie-Master - A Restaurant Food Ordering Web App</h2>
              </div>
              <div className="project" ref={ycDirectoryRef}>
                <a href="https://3d-portfolio-jayveer.vercel.app/" target="_blank">
                  <div className="image-wrapper bg-[#FFE7EB]">
                    <img src="/images/project5.png" alt="YC Directory App" />
                  </div>
                </a>
                <h2>3D Portfolio – Creative, Interactive, Immersive</h2>
              </div>
            </div>

            <div ref={rydeRef} className="first-project-wrapper">
              <a href="https://job-portal-client-brown-three.vercel.app/" target="_blank">
                <div className="image-wrapper">
                  <img src="/images/project1.avif" alt="Job POrtal webapp Interface" />
                </div>
              </a>
              <div className="text-content">
                <h2>
                  Job Search Made Simple with a Powerful, User-Friendly Web Application called Insiderjobs.
                </h2>
                <p className="text-white-50 md:text-xl">
                  A BCA final year project built with the MERN stack for a fast, user-friendly experience.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ShowcaseSection2;
