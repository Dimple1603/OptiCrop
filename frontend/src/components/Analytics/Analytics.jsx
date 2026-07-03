import "./Analytics.css";

function Analytics() {
  return (
    <section className="analytics">

      <h2>Project Statistics</h2>

      <div className="stats-grid">

        <div className="stat-card">
          <h1>99.3%</h1>
          <p>Accuracy</p>
        </div>

        <div className="stat-card">
          <h1>2200+</h1>
          <p>Training Samples</p>
        </div>

        <div className="stat-card">
          <h1>22</h1>
          <p>Crop Types</p>
        </div>

        <div className="stat-card">
          <h1>4</h1>
          <p>Algorithms Tested</p>
        </div>

      </div>

    </section>
  );
}

export default Analytics;