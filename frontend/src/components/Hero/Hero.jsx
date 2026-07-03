import "./Hero.css";

function Hero() {
  return (

<section className="hero">

<div className="overlay">

<div className="badge">
🌱 Machine Learning Powered
</div>

<h1>

Optimize Every Harvest

<br />

with Artificial Intelligence

</h1>

<p>

Predict the best crop for your land using advanced Machine Learning
models trained on 2200+ agricultural records.

</p>

<div className="hero-buttons">

<button className="primary-btn">

🚀 Start Prediction

</button>

<button className="secondary-btn">

Learn More

</button>

</div>

<div className="stats">

<div className="card">

<h2>99.3%</h2>

<span>Accuracy</span>

</div>

<div className="card">

<h2>22</h2>

<span>Crop Types</span>

</div>

<div className="card">

<h2>2200+</h2>

<span>Training Samples</span>

</div>

</div>

</div>

</section>

  );
}

export default Hero;