---
title: "Contact"
permalink: "/contact.html"
---

<div class="container py-5">
    <div class="contact-card shadow-lg">
        <div class="row no-gutters">
            <div class="col-lg-5 contact-info-panel p-5 text-white">
                <h2 class="font-weight-bold mb-4">Get in Touch</h2>
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
                <form action="https://formspree.io/f/mqeezkgz" method="POST">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="small font-weight-bold text-dark-blue">NAME</label>
                            <input class="form-control custom-input" type="text" name="name"  required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="small font-weight-bold text-dark-blue">EMAIL ADDRESS</label>
                            <input class="form-control custom-input" type="email" name="_replyto" placeholder="" required>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="small font-weight-bold text-dark-blue">MESSAGE</label>
                        <textarea rows="5" class="form-control custom-input" name="message" placeholder="How can I help you?" required></textarea>
                    </div>
                    <button class="btn btn-dark-blue btn-block py-3 font-weight-bold shadow-sm mt-4 text-white" type="submit">
                        Send Message <i class="fas fa-paper-plane ml-2"></i>
                    </button>
                </form>
            </div>
        </div>
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
</style>

<div id="particles-js" style="position: fixed; width: 100%; height: 100%; top: 0; left: 0; z-index: -1; background-color: #f8fafc;"></div>
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
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
</script>