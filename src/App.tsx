import underConstruction from "./assets/Website Launching Soon.png";

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <img 
        src={underConstruction} 
        alt="Under Construction" 
        className="max-w-full h-auto"
      />
    </div>
  );
}

export default App;