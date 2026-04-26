---
date: '4'
title: 'AI Buddy'
cover: './cover.jpg'
covers:
  - './cover.jpg'
github: 'https://github.com/YashSharma2129'
tech:
  - Python
  - OpenCV
  - PostgreSQL
  - Docker
---

**Problem:** Home workout users have no way to verify exercise form or count reps accurately without a personal trainer.

**Architecture:** AI-powered fitness assistant using **OpenCV** for real-time posture detection and rep counting. Containerized with **Docker** for consistent deployment. PostgreSQL for structured workout history and analytics.

**Key Decision:** Chose OpenCV over TensorFlow Lite for lower latency in real-time video processing. Dockerized the entire stack for reproducible builds across environments.

**Impact:** Achieved **90%+ posture detection accuracy** with real-time feedback during exercises.
