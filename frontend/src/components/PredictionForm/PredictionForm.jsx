import { useState } from "react";
import API from "../../services/api";
import "./PredictionForm.css";

function PredictionForm({ setPrediction }) {

  const [formData, setFormData] = useState({
    N: "",
    P: "",
    K: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await API.post("/predict", formData);

      if (res.data.success) {
    console.log("Prediction:", res.data.crop);
    setPrediction(res.data.crop);
} else {
        alert(res.data.error);
      }

    } catch (err) {
  console.log(err);
  console.log(err.response);
  console.log(err.response?.data);

  alert(
    err.response?.data?.error || "Couldn't reach the backend."
  );
}
  };

  return (
    <section className="prediction" id="predict">

      <div className="prediction-box">

        <h2>🌾 AI Crop Recommendation</h2>

        <p>
          Enter your soil nutrients and environmental conditions.
        </p>

        <form className="predict-form" onSubmit={handleSubmit}>

          <div className="grid">

            <input
              type="number"
              name="N"
              placeholder="Nitrogen (N)"
              onChange={handleChange}
            />

            <input
              type="number"
              name="P"
              placeholder="Phosphorus (P)"
              onChange={handleChange}
            />

            <input
              type="number"
              name="K"
              placeholder="Potassium (K)"
              onChange={handleChange}
            />

            <input
              type="number"
              name="temperature"
              placeholder="Temperature (°C)"
              onChange={handleChange}
            />

            <input
              type="number"
              name="humidity"
              placeholder="Humidity (%)"
              onChange={handleChange}
            />

            <input
              type="number"
              name="ph"
              placeholder="Soil pH"
              step="0.1"
              onChange={handleChange}
            />

            <input
              type="number"
              name="rainfall"
              placeholder="Rainfall (mm)"
              onChange={handleChange}
            />

          </div>

          <button type="submit">
            Predict Crop
          </button>

        </form>

      </div>

    </section>
  );
}

export default PredictionForm;