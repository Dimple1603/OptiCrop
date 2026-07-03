import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <div className="about-text">

          <h2>About OptiCrop</h2>

          <p>
            OptiCrop is an AI-powered Smart Agricultural Production
            Optimization Engine designed to help farmers choose the
            most suitable crop based on soil nutrients and climatic
            conditions.
          </p>

          <p>
            Using Machine Learning, the system analyzes Nitrogen,
            Phosphorus, Potassium, Temperature, Humidity, pH,
            and Rainfall to provide accurate crop recommendations.
          </p>

        </div>

        <div className="about-cards">

          <div className="feature-card">
            🌱
            <h3>Machine Learning</h3>
            <p>Random Forest model trained on agricultural data.</p>
          </div>

          <div className="feature-card">
            ⚡
            <h3>Fast Prediction</h3>
            <p>Instant crop recommendation using AI.</p>
          </div>

          <div className="feature-card">
            📊
            <h3>Analytics</h3>
            <p>Interactive dashboard with model insights.</p>
          </div>

          <div className="feature-card">
            🌍
            <h3>Smart Farming</h3>
            <p>Helping farmers improve productivity.</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;