---
title: "About"
layout: page
permalink: "/about.html"
---



<div class="container py-4">
  <div class="row">
    <div class="col-lg-8 pr-lg-4">
      <div class="glass-content-card p-4 shadow-sm mb-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h6 class="text-tech-blue font-weight-bold text-uppercase m-0">My Story</h6>
          <span class="badge badge-info p-2" style="border-radius: 10px; font-size: 0.7rem;">Available for Alternance</span>
        </div>
        
        <h1 class="h2 font-weight-bold mb-3">From Coordination to <span class="text-tech-blue">Code</span></h1>
        
        <div class="about-text text-dark">
          <p class="lead" style="line-height: 1.7;">
            As a Full-Stack Web Development student at <strong>Web@cadémie by EPITECH Paris</strong>, I am translating my past experience as an NGO project coordinator into technical strengths.
          </p>
          <p class="text-muted">
            With an analytical mindset, I am learning to build reliable and intuitive applications using <strong>PHP, JavaScript, MySQL, and Docker</strong>. Backed by my professional maturity and rigorous work ethic, I am seeking a 14-month work-study placement starting <strong>Sept 2026</strong>.
          </p>
        </div>

        <div class="row mt-4 no-gutters text-center">
          <div class="col-md-4 px-1 mb-2">
            <div class="value-item-compact shadow-sm"><i class="fas fa-check-circle text-tech-blue mr-2"></i><strong>Reliability</strong></div>
          </div>
          <div class="col-md-4 px-1 mb-2">
            <div class="value-item-compact shadow-sm"><i class="fas fa-layer-group text-tech-blue mr-2"></i><strong>Scalability</strong></div>
          </div>
          <div class="col-md-4 px-1 mb-2">
            <div class="value-item-compact shadow-sm"><i class="fas fa-shield-alt text-tech-blue mr-2"></i><strong>Security</strong></div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-4">
      <div class="profile-sidebar p-3 shadow-sm text-center bg-white" style="border-radius: 25px; border: 1px solid #f1f5f9;">
        <div class="img-frame-modern mb-3">
          <img src="{{ '/assets/images/MASAH.jpg' | relative_url }}" alt="Mohammad" class="img-fluid rounded-20" style="height: 300px; width: 100%; object-fit: cover; object-position: center 22%;">
          <div class="live-status">Online</div>
        </div>
        <h5 class="font-weight-bold mb-1" style="color: #0f172a">Mohammad Masah</h5>
        <p class="text-tech-blue small font-weight-bold mb-3">Full-Stack Developer Student</p>
        <div class="info-list text-left mb-4 bg-light p-3 rounded-15">
          <div class="small mb-2"><i class="fas fa-map-marker-alt text-tech-blue mr-2"></i> Paris, France</div>
          <div class="small mb-2"><i class="fas fa-university text-tech-blue mr-2"></i> Epitech Paris</div>
          <div class="small"><i class="fas fa-language text-tech-blue mr-2"></i> English, French, Persian</div>
        </div>

        <a target="_blank" href="{{ '/assets/docs/cv_2026-01-06_mohammadharoon_masah.pdf' | relative_url }}" class="btn btn-modern-navy w-100 mb-2 py-2">
          <i class="fas fa-file-download mr-2"></i> Download CV
        </a>
        <a href="/contact.html" class="btn btn-modern-outline w-100 py-2 rounded-12">
          <i class="fas fa-paper-plane mr-2"></i> Contact Me
        </a>
      </div>
    </div>

  </div>
</div>

<style>
  :root { --tech-blue: #38bdf8; --dark-navy: #0f172a; }
  .text-tech-blue { color: var(--tech-blue) !important; }
  .glass-content-card { background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); border-radius: 25px; border: 1px solid rgba(0,0,0,0.05); }
  .rounded-20 { border-radius: 20px; }
  .rounded-15 { border-radius: 15px; }
  .rounded-12 { border-radius: 12px; }
  .img-frame-modern { position: relative; border-radius: 20px; overflow: hidden; }
  .live-status { position: absolute; top: 10px; right: 10px; background: #22c55e; color: white; font-size: 10px; padding: 2px 10px; border-radius: 20px; font-weight: bold; }
  .value-item-compact { background: #f8fafc; padding: 12px; border-radius: 15px; font-size: 0.85rem; }
  
  .btn-modern-navy { background: var(--dark-navy); color: white !important; border-radius: 12px; font-weight: 700; border: none; transition: 0.3s; }
  .btn-modern-navy:hover { background: #334155; transform: translateY(-2px); }
  
  .btn-modern-outline { border: 2px solid var(--dark-navy); color: var(--dark-navy) !important; border-radius: 12px; font-weight: 700; transition: 0.3s; }
  .btn-modern-outline:hover { background: var(--dark-navy); color: white !important; }

  .lang-switcher-wrapper { display: inline-flex; background: #fff; border-radius: 30px; padding: 5px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border: 1px solid #eee; }
  .lang-btn { padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; color: #64748b; text-decoration: none !important; transition: 0.3s; }
  .lang-btn.active { background: var(--dark-navy); color: #fff !important; }
  .lang-btn:hover:not(.active) { color: var(--tech-blue); }

  #particles-js { position: fixed; width: 100%; height: 100%; top: 0; left: 0; z-index: -1; background-color: #f8f9fa; }
</style>

<div id="particles-js"></div>
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 80 },
      "color": { "value": "#dc3545" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.2 },
      "size": { "value": 3, "random": true },
      "line_linked": { "enable": true, "distance": 150, "color": "#dc3545", "opacity": 0.2, "width": 1 },
      "move": { "enable": true, "speed": 2 }
    }
  });
</script>
