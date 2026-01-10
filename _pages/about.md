---
title: "About"
layout: page-sidebar
permalink: "/about.html"
comments: true
---

<style>
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }

  .my-profile-img {
    width: 350px; 
    height: 350px; 
    object-fit: cover; 
    object-position: 0 5%; 
    border-radius: 50%;
    box-shadow: 0 20px 40px rgba(21, 27, 111, 0.4);
    animation: float 4s ease-in-out infinite; 
    margin-left: 15px;
  }
</style>

<img src="{{ '/assets/images/MASAH.jpg' | relative_url }}" 
     alt="Mohammad Haroon" 
     class="my-profile-img">
