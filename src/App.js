import React from "react";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header!!">
        
        <About />
        <Services />
        <Contact />
      </header>
    </div>
  );
}

export default App;
