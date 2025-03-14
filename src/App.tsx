import logo from './assets/logo-full.png';

<img src={logo} alt="Logo" />

import { Code, Palette, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden py-12 px-4">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-64 md:w-96 h-64 md:h-96 rounded-full bg-gradient-to-r from-[#00FFB0] to-[#00C7F3] blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 md:w-96 h-64 md:h-96 rounded-full bg-gradient-to-l from-[#00FFB0] to-[#00C7F3] blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Area */}
          <div className="mb-6 md:mb-8 inline-block p-3 md:p-4 ">
            {/* <Construction className="w-8 h-8 md:w-12 md:h-12 text-black" /> */}
            <img src={logo} alt="" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-white">
            Coming Soon
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            We're building something extraordinary. Our new website is under construction, bringing cutting-edge IT solutions to transform your digital landscape.
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 px-4">
            <div className="p-4 md:p-6 rounded-xl bg-black/50 backdrop-blur-sm border border-gray-800 transform transition-transform hover:scale-105">
              <Code className="w-8 h-8 text-[#00FFB0] mx-auto mb-3 md:mb-4" />
              <h3 className="text-white text-lg font-semibold mb-2">Software Development</h3>
              <p className="text-gray-400 text-sm md:text-base">Custom enterprise solutions and innovative applications built with cutting-edge technology</p>
            </div>
            
            <div className="p-4 md:p-6 rounded-xl bg-black/50 backdrop-blur-sm border border-gray-800 transform transition-transform hover:scale-105">
              <Palette className="w-8 h-8 text-[#00C7F3] mx-auto mb-3 md:mb-4" />
              <h3 className="text-white text-lg font-semibold mb-2">Design</h3>
              <p className="text-gray-400 text-sm md:text-base">User-centric UI/UX design creating beautiful, intuitive digital experiences</p>
            </div>
            
            <div className="p-4 md:p-6 rounded-xl bg-black/50 backdrop-blur-sm border border-gray-800 transform transition-transform hover:scale-105">
              <Shield className="w-8 h-8 text-[#00FFB0] mx-auto mb-3 md:mb-4" />
              <h3 className="text-white text-lg font-semibold mb-2">Cybersecurity</h3>
              <p className="text-gray-400 text-sm md:text-base">Advanced security solutions protecting your digital assets and infrastructure</p>
            </div>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
            <input
              type="email"
              placeholder="Enter your email for updates"
              className="w-full sm:w-auto px-4 md:px-6 py-3 rounded-lg bg-white/5 border border-gray-800 text-white focus:outline-none focus:border-[#00FFB0] transition-colors"
            />
            <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-[#00FFB0] to-[#00C7F3] text-black font-semibold hover:opacity-90 transition-opacity">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;