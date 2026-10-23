---
layout: post
title: "SpaceWord – DevOps & Automated Testing"
image: "/assets/images/spaceword.png"
description: "A high-performance game built with a professional CI/CD pipeline, focusing on security and automated testing."
author: mohammad masah
tags: []
categories: [See more]

slug: porject-7
date: 2026-03-02
fr_url: /porject-7/
en_url: /en/porject-7/
lang: en
locale: en_GB
---

&#8203;SpaceWord is a web-based game focused on high-quality code through CI/CD pipelines, Docker containerization, and rigorous automated testing (Unit & E2E).

<div class="project-overview">

    <p class="project-lead">
        SpaceWord is not just a game; it is a full-stack demonstration of <strong>modern software engineering</strong>.
        It features a robust development lifecycle where code quality is guaranteed by automation.
    </p>

    <div class="d-flex flex-wrap justify-content-center gap-3 mb-5 project-panel project-tech-list">

        <div class="text-center mx-3">
            <div class="project-tech-icon">
                <i class="fab fa-docker fa-2x"></i>
            </div>
            <small>Docker</small>
        </div>

        <div class="text-center mx-3">
            <div class="project-tech-icon">
                <i class="fas fa-flask fa-2x"></i>
            </div>
            <small>Mocha</small>
        </div>

        <div class="text-center mx-3">
            <div class="project-tech-icon">
                <i class="fas fa-check-double fa-2x"></i>
            </div>
            <small>Cypress</small>
        </div>

        <div class="text-center mx-3">
            <div class="project-tech-icon">
                <i class="fas fa-infinity fa-2x"></i>
            </div>
            <small>CI/CD</small>
        </div>

    </div>

    <hr>

    <div class="row">
        <div class="col-md-6 mb-4">
            <h3>
                <i class="fas fa-flask"></i> Testing Strategy
            </h3>
            <p>My primary focus was <strong>Zero-Bug Deployment</strong>. I implemented:</p>
            <ul>
                <li><strong>Unit Testing:</strong> Logic validation with Mocha & Chai.</li>
                <li><strong>Security Tests:</strong> Input sanitization and boundary checks.</li>
                <li><strong>E2E Testing:</strong> Real-user simulation using Cypress.</li>
            </ul>
        </div>

        <div class="col-md-6 mb-4">
            <h3>
                <i class="fas fa-infinity"></i> DevOps Pipeline
            </h3>
            <p>The project follows a professional workflow:</p>
            <ul>
                <li><strong>Auto-Build:</strong> Dockerized environment (Nginx Alpine).</li>
                <li><strong>Auto-Test:</strong> Tests run automatically on every Push.</li>
                <li><strong>Auto-Deploy:</strong> Verified images sent to Docker Hub.</li>
            </ul>
        </div>
    </div>

    <div class="project-callout">
        <i class="fas fa-info-circle"></i>
        <strong>Professional Note:</strong> All tests are executed inside Docker containers to ensure environment parity between development and production.
    </div>

    <div class="project-actions">

        <a href="https://github.com/mohammadmasah/js13k-spaceWord" target="_blank"
           class="hp-button" rel="noopener noreferrer">
            <i class="fab fa-github"></i> View Source Code
        </a>

        <a href="https://mohammadmasah.github.io/js13k-spaceWord/" target="_blank"
           class="hp-button" rel="noopener noreferrer">
            <i class="fas fa-rocket"></i> Play Live Demo
        </a>

    </div>

</div>
