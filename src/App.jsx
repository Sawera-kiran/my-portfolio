// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./App.css";
// import Header from "./components/Header";
// import Home from "./pages/home/Home";
// import Contact from "./pages/contact/Contact";
// import About from "./pages/about/About";
// import Services from "./pages/services/Services";
// import Work from "./pages/works/Work";
// import ContactSection from "./components/contactsection/ContactSection";
// import Footer from "./components/footer/Footer";
// import { Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Header />
//       <ContactSection />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/works" element={<Work />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer/>
//     </>
//   );
// }

// export default App;

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Work from "./pages/works/Work";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;