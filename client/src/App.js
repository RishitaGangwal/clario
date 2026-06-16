import GoalInput from "./ui/GoalInput";
import StarField from "./effects/StarField";
import Navbar from "./layout/Navbar";
import HowItWorks from "./sections/HowItWorks";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-[#0F172A]">
      <StarField />

      <div className="relative z-10 flex flex-col items-center px-5">
        <Navbar />
        <Hero />
        <GoalInput />
        <HowItWorks />
        <Features />
        <Footer />
      </div>
    </div>
  );
}

export default App;
