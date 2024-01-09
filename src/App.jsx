import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Testimonial />
      <CTA />
    </>
  );
}

export default App;
