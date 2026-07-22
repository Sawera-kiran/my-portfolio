import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Work from "./pages/works/Work";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Skills from "./pages/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills/>
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;