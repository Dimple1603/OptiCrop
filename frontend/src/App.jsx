import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import PredictionForm from "./components/PredictionForm/PredictionForm";
import ResultCard from "./components/ResultCard/ResultCard";
import Analytics from "./components/Analytics/Analytics";
import Footer from "./components/Footer/Footer";

function App() {
  const [prediction, setPrediction] = useState("");

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PredictionForm setPrediction={setPrediction} />
      <ResultCard prediction={prediction} />
      <Analytics />
      <Footer />
    </>
  );
}

export default App;