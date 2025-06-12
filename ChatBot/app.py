import os
import nltk
from flask import Flask, request, jsonify
from flask_cors import CORS
from chat import get_response

try:
    nltk.data.find("tokenizers/punkt")
except LookupError:
    nltk.download("punkt")

try:
    nltk.data.find("corpora/wordnet")
except LookupError:
    nltk.download("wordnet")

try:
    nltk.data.find("corpora/omw-1.4")
except LookupError:
    nltk.download("omw-1.4")

app = Flask(__name__)
CORS(app)

@app.get("/")
def home():
    return "Chatbot backend is running!"

@app.post("/predict")
def predict():
    try:
        data = request.get_json()
        if not data or "message" not in data:
            return jsonify({"answer": "Invalid request"}), 400
        
        message = data["message"]
        response = get_response(message)
        return jsonify({"answer": response})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=False, host="0.0.0.0", port=port)
