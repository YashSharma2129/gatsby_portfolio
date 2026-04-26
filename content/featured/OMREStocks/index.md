---
date: '2'
title: 'OMRE Stocks'
cover: './cover.png'
covers:
  - './cover.png'
  - './omre2.png'
github: 'https://github.com/YashSharma2129'
external: 'https://omrestocks.com/'
tech:
  - React.js
  - Node.js
  - PostgreSQL
  - Nginx + SSL
  - VPS
---

**Problem:** Retail investors need real-time stock insights without the complexity of full trading platforms.

**Architecture:** Real-time stock insights platform with secure JWT authentication, deployed on **VPS with Nginx** reverse proxy and SSL termination. PostgreSQL for reliable financial data storage.

**Key Decision:** Chose VPS + Nginx over serverless for persistent connections required for real-time data streaming. PostgreSQL ensures ACID-compliant financial data integrity.

**Impact:** Handling **100+ API requests/day** with sub-second response times in production.
