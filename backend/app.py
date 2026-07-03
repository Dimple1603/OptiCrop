from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

model = joblib.load(os.path.join(BASE_DIR, "model", "crop_model.pkl"))
encoder = joblib.load(os.path.join(BASE_DIR, "model", "label_encoder.pkl"))


@app.route("/")
def home():
    return jsonify({
        "message": "OptiCrop Backend API is running."
    })


@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        print("Received Data:", data)

        N = float(data["N"])
        P = float(data["P"])
        K = float(data["K"])
        temperature = float(data["temperature"])
        humidity = float(data["humidity"])
        ph = float(data["ph"])
        rainfall = float(data["rainfall"])

        sample = np.array([[N, P, K, temperature, humidity, ph, rainfall]])

        prediction = model.predict(sample)

        crop = encoder.inverse_transform(prediction)[0]

        return jsonify({
            "success": True,
            "crop": crop
        })

    except Exception as e:
        import traceback
        traceback.print_exc()

        return jsonify({
            "success": False,
            "error": str(e)
        }), 400


if __name__ == "__main__":
    app.run(debug=True)