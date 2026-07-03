import "./ResultCard.css";

function ResultCard({ prediction }) {

  if (!prediction) return null;

  return (
    <section className="result">

      <div className="result-card">

        <div className="crop-icon">🌾</div>

        <h2>Recommended Crop</h2>

        <h1>{prediction}</h1>

        <p>
          High suitability based on your soil nutrients and climatic conditions.
        </p>

        <div className="result-grid">

          <div className="result-box">
            <h3>Accuracy</h3>
            <span>99.3%</span>
          </div>

          <div className="result-box">
            <h3>Water Need</h3>
            <span>Medium</span>
          </div>

          <div className="result-box">
            <h3>Growing Season</h3>
            <span>120 Days</span>
          </div>

          <div className="result-box">
            <h3>Market Demand</h3>
            <span>High</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ResultCard;