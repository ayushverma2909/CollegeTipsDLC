# Digital Literacy Campaign Chatbot

Welcome to the **Digital Literacy Campaign Chatbot** — a friendly assistant designed to help users learn and navigate popular digital tools like WhatsApp, Paytm, and Google Maps through FAQs and step-by-step tutorials.

---

## 🚀 Features

- **Interactive Chat Interface**: User-friendly chatbot UI with chat bubbles and input box.
- **FAQ Support**: Hard-coded FAQs covering common digital literacy questions.
- **Step-by-Step Guides**: Easy instructions for WhatsApp, Paytm, and Google Maps tasks.
- **Basic NLP Model**: Uses a neural network for intent classification and appropriate responses.
- **Extensible JSON Intents**: Easily update chatbot knowledge by modifying the JSON file.
- **Bonus**: Ready for AI integration with Dialogflow or ChatGPT API (optional).

---

## 📁 Repository Contents

- `app.py` — Flask backend serving chatbot API
- `intents.json` — JSON file with chatbot questions and responses
- `model.py` — Neural network model definition
- `nltk_utils.py` — Tokenization and bag-of-words utility functions
- `train.py` — Script to train the chatbot model
- `static/` — Frontend files (HTML, CSS, JS) for chatbot UI
- `README.md` — This file

---

## 💻 Installation & Setup

### Prerequisites

- Python 3.7 or higher
- pip (Python package manager)

### Clone the repository

```bash
git clone https://github.com/yourusername/digital-literacy-chatbot.git
cd digital-literacy-chatbot
