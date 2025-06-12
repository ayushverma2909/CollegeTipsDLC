const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
document.getElementById('next-slide').onclick = () => changeSlide(1);
document.getElementById('prev-slide').onclick = () => changeSlide(-1);

function changeSlide(direction) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(() => changeSlide(1), 4000);

const items = document.querySelectorAll('.accordion .question');
items.forEach(q => {
  q.addEventListener('click', () => {
    const isActive = q.classList.contains('active');
    items.forEach(i => {
      i.classList.remove('active');
      i.nextElementSibling.style.maxHeight = null;
    });
    if (!isActive) {
      q.classList.add('active');
      const ans = q.nextElementSibling;
      ans.style.maxHeight = ans.scrollHeight + 'px';
    }
  });
});

function switchLanguage(lang) {
    const textElements = document.querySelectorAll("[data-en]");
    textElements.forEach(el => {
      if (el.tagName.toLowerCase() === 'input') {
        el.placeholder = el.getAttribute(`data-${lang}`);
      } else {
        el.textContent = el.getAttribute(`data-${lang}`);
      }
    });

    // Highlight selected language
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.remove("active");
    });
    document.querySelector(`.lang-btn[onclick*="${lang}"]`).classList.add("active");
  }

document.getElementById('hero-cta').addEventListener('click', () => {
  document.getElementById('cta-btn').scrollIntoView({ behavior: 'smooth' });
});


document.getElementById('cta-btn').addEventListener('click', () => {
  window.location.href = 'https://www.collegetips.in/dlc';
});


const revealElements = document.querySelectorAll('.fade-on-scroll');
window.addEventListener('scroll', () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

function toggleSidebar() {
  const sidebar = document.getElementById("mobileSidebar");
  const overlay = document.getElementById("overlay");
  sidebar.style.width = "250px";
  overlay.style.display = "block";
}

function closeSidebar() {
    const sidebar = document.getElementById("mobileSidebar");
    const overlay = document.getElementById("overlay");
    sidebar.style.width = "0";
    overlay.style.display = "none";
}

let currentFontSize = 16;

function adjustFontSize(change) {
  currentFontSize += change;
  if (currentFontSize < 12) currentFontSize = 12;
  if (currentFontSize > 24) currentFontSize = 24;
  document.body.style.fontSize = currentFontSize + 'px';
}

let currentLang = 'en'; // Default to English

  // OPTIONAL: Switch language from your existing buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.textContent.toLowerCase().includes('hindi')) {
        currentLang = 'hi';
      } else {
        currentLang = 'en';
      }
    });
  });

  function speakText(element) {
    const text =
      element.getAttribute(`data-${currentLang}`) ||
      element.innerText.trim();

    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = currentLang === 'hi' ? 'hi-IN' : 'en-US';
      speechSynthesis.cancel(); // Stop ongoing speech
      speechSynthesis.speak(utterance);
    } else {
      alert("Speech not supported in your browser.");
    }
  }