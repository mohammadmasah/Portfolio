---
layout: post
title: "TrackIt — Job Applications & AI Interviews"
image: "/assets/images/job-tracker-hero.png"
description: "An open-source application for tracking job applications and preparing for interviews with a context-aware AI assistant. I developed its FastAPI backend and integrated LangChain to support local Ollama models or the OpenAI, Gemini and Claude APIs."
author: mohammad masah
overview_title: "Features designed for the job search"
hero_resources: true
tags: [Backend, AI, FastAPI, LangChain]
categories: [See more]

slug: project-11
date: 2026-07-24
fr_url: /project-11/
en_url: /en/project-11/
lang: en
locale: en_GB
---
<div class="project-overview" lang="en">
  <p class="project-lead">I developed <strong>TrackIt</strong> to bring job applications, recruiter contacts and interview preparation into one place. My work covers the React frontend, with a particular focus on <strong>the FastAPI backend, data and AI integration</strong>.</p>

  <h2>AI that supports the job search</h2>
  <div class="row">
    <div class="col-md-6">
      <h3><i class="fas fa-brain" aria-hidden="true"></i> An assistant that understands the context</h3>
      <p>The assistant uses application and contact information to provide responses tailored to the job search.</p>
      <ul>
        <li><strong>Choice of model:</strong> Run Ollama locally, or use OpenAI, Gemini and Claude with a personal API key.</li>
        <li><strong>LangChain integration:</strong> connecting AI to relevant application information.</li>
        <li><strong>Two languages:</strong> conversations in French or English.</li>
      </ul>
    </div>
    <div class="col-md-6">
      <h3><i class="fas fa-comments" aria-hidden="true"></i> Interview practice tailored to the role</h3>
      <p>Practice built around the selected role, with feedback to help improve from one session to the next.</p>
      <ul>
        <li><strong>Feedback on every answer</strong> during practice.</li>
        <li><strong>Saved sessions</strong> to revisit previous practice.</li>
        <li><strong>PDF report</strong> highlighting strengths and areas for improvement.</li>
      </ul>
    </div>
  </div>

  <h2>One workspace for the whole search</h2>
  <div class="row">
    <div class="col-md-6">
      <h3><i class="fas fa-columns" aria-hidden="true"></i> Track job applications</h3>
      <p>A dashboard to review statuses, save favourites, search and filter opportunities, and identify applications that need a follow-up.</p>
    </div>
    <div class="col-md-6">
      <h3><i class="fab fa-chrome" aria-hidden="true"></i> Save a job listing from Chrome</h3>
      <p>The Chrome extension saves job listings from compatible websites so they can be found in TrackIt.</p>
    </div>
    <div class="col-md-6">
      <h3><i class="fas fa-address-book" aria-hidden="true"></i> Keep contacts and documents together</h3>
      <p>Recruiter contact details and attachments stay linked to applications, making it easier to prepare conversations with the right information.</p>
    </div>
    <div class="col-md-6">
      <h3><i class="fas fa-file-excel" aria-hidden="true"></i> Export your data</h3>
      <p>Applications can be exported to a structured Excel file, alongside the PDF reports from interview practice.</p>
    </div>
  </div>

  <h2>My implementation: backend, data and AI integration</h2>
  <div class="row">
    <div class="col-md-6">
      <h3><i class="fas fa-server" aria-hidden="true"></i> REST API and authentication</h3>
      <ul>
        <li><strong>FastAPI:</strong> development of the REST API behind the application’s features.</li>
        <li><strong>JWT and HttpOnly cookies:</strong> authentication implementation.</li>
        <li><strong>React:</strong> frontend design and API integration.</li>
      </ul>
    </div>
    <div class="col-md-6">
      <h3><i class="fas fa-database" aria-hidden="true"></i> Storage and AI orchestration</h3>
      <ul>
        <li><strong>SQLite:</strong> data storage for the local application.</li>
        <li><strong>PostgreSQL:</strong> database for the Docker environment.</li>
        <li><strong>LangChain:</strong> AI integration using application and contact context.</li>
        <li><strong>Ollama or a personal API key:</strong> a choice between local execution and an external provider.</li>
      </ul>
    </div>
  </div>

  <div class="project-callout">
    <strong>From API to distributable application.</strong> TrackIt is available on macOS, Windows and Linux with a local web interface and integrated updates. I automated testing and cross-platform builds with <strong>GitHub Actions</strong>. The downloadable version requires no prior installation of Docker, Python or Node.js; a Docker environment is also provided for developers.
  </div>
  <p><strong>Open-source project:</strong> the code is available on GitHub and version 1.0.0 is available to download.</p>
  <div class="project-actions">
    <a class="hp-button" href="https://github.com/mohammadmasah/Job-Tracker-Aggregator/releases/tag/v1.0.0">Download TrackIt <span aria-hidden="true">↗</span></a>
    <a class="hp-button hp-button-secondary" href="https://github.com/mohammadmasah/Job-Tracker-Aggregator">View code on GitHub <span aria-hidden="true">↗</span></a>
  </div>
</div>
