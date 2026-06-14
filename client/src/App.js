import GoalInput from "./ui/GoalInput";
import StarField from "./effects/StarField";
import Navbar from "./layout/Navbar";
import HowItWorks from "./sections/HowItWorks";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="relative min-h-screen bg-[#0B0F19]">
      <StarField />
      <div className="relative z-10 flex flex-col items-center px-5 pb-16">
        <Navbar />

        <Hero />

        {/* ── How it works ── */}
        <HowItWorks />

        {/* ── Main input + results ── */}
        <GoalInput />

        {/* ── Feature cards ── */}
        {/* <Features />
 
        <Footer />
      */}

        {/* <h1 className="text-4xl font-bold text-blue-400 mb-10">Clario 🚀</h1>

        <GoalInput /> */}
      </div>
    </div>
  );
}

export default App;
