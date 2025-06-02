import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection1 from "./sections/ShowcaseSection1";
import Navbar from "./components/NavBar";
import TechStack from "./sections/TechStack";
import ShowcaseSection2 from "./sections/ShowcaseSection2";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection1 />
    <ShowcaseSection2 />
    <Experience />
    <TechStack />
    <Contact />
    <Footer />
  </>
);

export default App;