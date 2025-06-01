import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/NavBar";
import TechStack from "./sections/TechStack";
import Demo from "./sections/Demo";

const App = () => (
  <>
    <Navbar />
    <Demo />
    {/* <Hero /> */}
    <ShowcaseSection />
    <Experience />
    <TechStack />
    <Contact />
    <Footer />
  </>
);

export default App;