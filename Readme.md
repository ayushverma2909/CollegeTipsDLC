<<<<<<< HEAD
# 🌐 Digital Literacy Campaign (DLC) Website – by Ayush Verma
  
This project was built as part of the **CollegeTips Internship** challenge to design an engaging, accessible, and informative **Digital Literacy Campaign (DLC)** website aimed at empowering **parents and elderly users** to confidently use digital tools!  
> 🚀 *Built under the CollegeTips Internship Program – by [Ayush Verma](https://github.com/ayushverma2909)*
## 🚀 Objective
> **Empowering Digital Literacy!**  
Our mission: to make the digital world simple, helpful, and friendly—especially for the generation that didn’t grow up with it.

---

## 🧩 Key Features

### 🏠 Home Page
- ✨ Tagline: **Empowering Digital Literacy!**
- 🧭 Navigation: `Home | Tutorials | AI Chat | Feedback`

### 📚 Tutorials Page
- 🎴 Engaging cards for tutorials on **WhatsApp**, **Paytm**, **Google Maps**, etc.
- 🎥 Each tutorial uses simple visuals, text, or video to guide users.

### 🤖 AI Chatbot – DigiBuddy
- 💬 Integrated corner chatbot built with Python (Flask) and trained on custom intents.
- 🧠 Trained model (`data.pth`) uses NLP and PyTorch.
- 🌈 UI built with HTML/CSS/JavaScript.
- 💡 Positioned as a helpful little assistant in the bottom-right corner.

### ♿ Accessibility Features
- 🎙️ Voice commands (optional add-on)
- 🌐 Multi-language options (future-ready)
- 🔍 Adjustable font sizes (in CSS)

### 📝 Feedback Section
- 📬 Collects suggestions from users to improve the site.
- 👥 Aimed at real interaction and iterative learning.

---

## 🛠 Tech Stack

| Technology      | Description                          |
|-----------------|--------------------------------------|
| `HTML/CSS/JS`   | UI & styling                         |
| `Python (Flask)`| Backend for chatbot logic            |
| `PyTorch`       | Trained AI chatbot model             |
| `JSON`          | For intents and responses            |
| `GitHub Pages`  | Hosting the frontend                 |


---

## 🧠 How It Works

### 1. Chatbot Training
The chatbot is trained using `intents.json` which contains:
- 💬 User inputs (patterns)
- 🤖 Bot replies (responses)
Once trained using `train.py`, a model file `data.pth` is generated.

### 2. Flask Backend
Handles user queries, processes them with NLP (`nltk_utils.py`), and returns intelligent responses.

### 3. UI Integration
- The chatbot is embedded as a floating icon in the main `index.html` using direct HTML inclusion.
- JavaScript toggles its visibility for a clean look.

---

## 📸 Preview 
[Live Preview 💡](https://ayushverma2909.github.io/CollegeTipsDLC/) 

---

## 📦 How to Clone & Run Locally

```bash
# 1. Clone the repo
<<<<<<< HEAD
git clone https://github.com/ayushverma2909/CollegeTipsDLC.git
cd DLC_Website_Ayush

# 2. Setup virtual environment (optional but recommended)
cd ChatBot
python -m venv venv
source venv/bin/activate  # on Windows: venv\Scripts\activate

# 3. Install requirements
pip install flask torch nltk

# 4. Run Flask app
python app.py

# 5. Open the site
Navigate to index.html in your browser.
