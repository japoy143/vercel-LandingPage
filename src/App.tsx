import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";
function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-20">
        <HeroSection />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}

export default App;
