import About from "./components/About/About";
import Ecosystem from "./components/Ecosystem/Ecosystem";
import FooterSection from "./components/FooterSection/FooterSection";
import Home from "./components/Home/Home";
import Products from "./components/products/products";
import Roadmap from "./components/Roadmap/Roadmap";

export default function App() {
  return (
    <>
    <Home />
    <Ecosystem />
    <Products />
    <About />
    <Roadmap />
    <FooterSection />
    </>
  );
}