from flask import Flask, request, jsonify
from flask_cors import CORS
from chat import get_response
import os

app = Flask(__name__)
CORS(app)

@app.post("/predict")
def predict():
    data = request.get_json()
    message = data.get("message")
    response = get_response(message)
    return jsonify({"answer": response})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=False, host='0.0.0.0', port=port)
