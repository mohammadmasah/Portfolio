---
title: "Contact"
permalink: "/contact.html"
---

<div class="container py-5">
    <div class="contact-card shadow-lg">
        <div class="row no-gutters">
            <div class="col-lg-5 contact-info-panel p-5 text-white">
                <h2 class="font-weight-bold mb-4 text-white">Get in Touch</h2>
                <p class="mb-5 opacity-8">I'm open to new opportunities, collaborations, or just a friendly hello. Let's build something amazing together!</p>
                
                <div class="contact-links">
                    <a href="mailto:mohammad-haroon.masah@epitech.eu" class="d-flex align-items-center mb-4 text-white text-decoration-none info-item">
                        <div class="icon-box mr-3"><i class="fas fa-envelope"></i></div>
                        <span>mohammad-haroon.masah@epitech.eu</span>
                    </a>
                    <a href="https://www.linkedin.com/in/mohammad-masah" target="_blank" class="d-flex align-items-center mb-4 text-white text-decoration-none info-item">
                        <div class="icon-box mr-3"><i class="fab fa-linkedin"></i></div>
                        <span>linkedin.com/in/mohammad-masah</span>
                    </a>
                    <div class="d-flex align-items-center text-white info-item">
                        <div class="icon-box mr-3"><i class="fas fa-map-marker-alt"></i></div>
                        <span>Based in France</span>
                    </div>
                </div>
            </div>

            <div class="col-lg-7 p-5 bg-white-glass">
                <form id="contact-form" action="https://formspree.io/f/mqeezkgz" method="POST">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="small font-weight-bold text-dark-blue">NAME</label>
                            <input class="form-control custom-input" type="text" name="name" placeholder="e.g. John Doe" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="small font-weight-bold text-dark-blue">EMAIL ADDRESS</label>
                            <input class="form-control custom-input" type="email" name="_replyto" placeholder="your.email@example.com" required>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="small font-weight-bold text-dark-blue">MESSAGE</label>
                        <textarea rows="5" class="form-control custom-input" name="message" placeholder="Let's build something great together" required></textarea>
                    </div>
                    <button id="submit-btn" class="btn btn-dark-blue btn-block py-3 font-weight-bold shadow-sm mt-4 text-white" type="submit">
                        <span id="btn-text">Send Message <i class="fas fa-paper-plane ml-2"></i></span>
                        <span id="btn-spinner" class="d-none"><i class="fas fa-spinner fa-spin mr-2"></i>Sending...</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- 🌟 پاپ‌آپ شیک (Success Modal) 🌟 -->
<div id="success-modal" class="modal-overlay d-none">
    <div class="modal-card">
        <div class="success-icon-wrap">
            <i class="fas fa-check-circle"></i>
        </div>
        <h3 class="font-weight-bold text-dark-blue mb-2">Message Sent!</h3>
        <p class="text-muted mb-4">Thank you for reaching out, Mohammad! Your message has been sent successfully. I will get back to you as soon as possible.</p>
        <button id="close-modal-btn" class="btn btn-dark-blue text-white px-4 py-2 font-weight-bold rounded-pill">
            Got it, thanks!
        </button>
    </div>
</div>

<style>
    footer { display: none; }
    
    .contact-card {
        border-radius: 20px;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .contact-info-panel {
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    }

    .icon-box {
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        font-size: 1.2rem;
        color: #38bdf8; 
    }

    .info-item:hover {
        transform: translateX(10px);
        color: #38bdf8 !important;
    }

    .bg-white-glass {
        background: rgba(255, 255, 255, 0.95);
    }

    .custom-input {
        border: none;
        border-bottom: 2px solid #e2e8f0;
        border-radius: 0;
        padding-left: 0;
        background: transparent !important;
        transition: 0.3s;
    }

    .custom-input:focus {
        box-shadow: none;
        border-color: #0f172a;
    }

    .btn-dark-blue {
        background-color: #0f172a;
        border: none;
        transition: 0.3s;
    }

    .btn-dark-blue:hover {
        background-color: #334155;
        transform: translateY(-2px);
    }

    .text-dark-blue { color: #0f172a; }
    .opacity-8 { opacity: 0.8; }


    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(15, 23, 42, 0.6);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    .modal-overlay.show {
        opacity: 1;
    }

    .modal-card {
        background: #ffffff;
        padding: 40px 30px;
        border-radius: 24px;
        max-width: 440px;
        width: 90%;
        text-align: center;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        transform: scale(0.8);
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .modal-overlay.show .modal-card {
        transform: scale(1);
    }

    .success-icon-wrap {
        font-size: 4rem;
        color: #10b981;
        margin-bottom: 15px;
        animation: popIn 0.5s ease-out;
    }

    @keyframes popIn {
        0% { transform: scale(0); }
        80% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
</style>

<div id="particles-js" style="position: fixed; width: 100%; height: 100%; top: 0; left: 0; z-index: -1; background-color: #f8fafc;"></div>
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>

<script>
  // ۱. تنظیمات ذرات background
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#0f172a" }, 
      "shape": { "type": "circle" },
      "opacity": { "value": 0.1, "random": false },
      "size": { "value": 3, "random": true },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#0f172a",
        "opacity": 0.1,
        "width": 1
      },
      "move": { "enable": true, "speed": 1.5, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }
    },
    "retina_detect": true
  });


  const urlParams = new URLSearchParams(window.location.search);
  const subject = urlParams.get('subject');
  if (subject) {
    const textarea = document.querySelector('textarea[name="message"]');
    if (textarea) {
      textarea.value = "Hello Mohammad,\n\nI would like to request code access for the " + subject + " project.";
    }
  }


  const form = document.getElementById('contact-form');
  const modal = document.getElementById('success-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const btnText = document.getElementById('btn-text');
  const btnSpinner = document.getElementById('btn-spinner');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    btnText.classList.add('d-none');
    btnSpinner.classList.remove('d-none');

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset(); 
    
        modal.classList.remove('d-none');
        setTimeout(() => modal.classList.add('show'), 10);
      } else {
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      alert("Oops! There was a network error. Please try again.");
    } finally {

      btnText.classList.remove('d-none');
      btnSpinner.classList.add('d-none');
    }
  });


  closeModalBtn.addEventListener('click', function() {
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('d-none'), 300);
  });
</script>