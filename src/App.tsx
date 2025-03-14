import { useState } from "react";
import { Code, Palette, Shield } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import logo from "./assets/logo-full.png";

function App() {
  const [email, setEmail] = useState("");

  const handleNotify = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email!", {
        style: {
          background: "#222",
          color: "#ff6b6b",
        },
      });
      return;
    }

    toast.success("You're subscribed! Stay tuned for updates.", {
      style: {
        background: "#00FFB0",
        color: "#000",
      },
    });

    setEmail(""); // Clear input after submission
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden py-12 px-4">
      <Toaster position="top-center" reverseOrder={false} />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-64 md:w-96 h-64 md:h-96 rounded-full bg-gradient-to-r from-[#00FFB0] to-[#00C7F3] blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 md:w-96 h-64 md:h-96 rounded-full bg-gradient-to-l from-[#00FFB0] to-[#00C7F3] blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Area */}
          <div className="mb-6 md:mb-8 inline-block p-3 md:p-4 ">
            <img src={logo} alt="Logo" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-white">
            Coming Soon
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            We're building something extraordinary. Our new website is under construction, bringing cutting-edge IT solutions to transform your digital landscape.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 px-4">
            <FeatureCard Icon={Code} title="Software Development" color="#00FFB0">
              Custom enterprise solutions and innovative applications built with cutting-edge technology.
            </FeatureCard>
            <FeatureCard Icon={Palette} title="Design" color="#00C7F3">
              User-centric UI/UX design creating beautiful, intuitive digital experiences.
            </FeatureCard>
            <FeatureCard Icon={Shield} title="Cybersecurity" color="#00FFB0">
              Advanced security solutions protecting your digital assets and infrastructure.
            </FeatureCard>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for updates"
              className="w-full sm:w-auto px-4 md:px-6 py-3 rounded-lg bg-white/5 border border-gray-800 text-white focus:outline-none focus:border-[#00FFB0] transition-colors"
            />
            <button
              onClick={handleNotify}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-[#00FFB0] to-[#00C7F3] text-black font-semibold hover:opacity-90 transition-opacity"
            >
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ Icon, title, color, children }) => {
  return (
    <div className="p-4 md:p-6 rounded-xl bg-black/50 backdrop-blur-sm border border-gray-800 transform transition-transform hover:scale-105">
      <Icon className="w-8 h-8 mx-auto mb-3 md:mb-4" style={{ color }} />
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm md:text-base">{children}</p>
    </div>
  );
};

export default App;
