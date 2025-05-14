// import Testimonials from "./sections/Testimonials";
// import Footer from "./sections/Footer";
// import Contact from "./sections/Contact";
// import Experience from "./sections/Experience";
// import Hero from "./sections/Hero";
// import ShowcaseSection from "./sections/ShowcaseSection";
// import FeatureCards from "./sections/FeatureCards";
// import Navbar from "./components/NavBar";
// import TechStack from "./sections/TechStack";

// const App = () => (
//   <>
//     <Navbar />
//     <Hero />
//     <ShowcaseSection />
//     <FeatureCards />
//     <Experience />
//     <TechStack />
//     <Testimonials />
//     <Contact />
//     <Footer />
//   </>
// );

// export default App;


import React, { lazy, Suspense } from "react";
import Navbar from "./components/NavBar";

// Lazy-loaded sections
const Hero = lazy(() => import("./sections/Hero"));
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const Experience = lazy(() => import("./sections/Experience"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

// Simple fallback loader (you can customize this)
const Loading = () => <div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>;

const App = () => (
  <>
    <Navbar />
    <Suspense fallback={<Loading />}>
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
      <TechStack />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </Suspense>
  </>
);

export default App;
