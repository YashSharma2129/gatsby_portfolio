---
date: '1'
title: 'Illusora'
cover: './cover.png'
covers:
  - './cover.png'
  - './illusora2.png'
  - './illusora3.png'
github: 'https://github.com/YashSharma2129'
external: 'https://illusora.com/'
tech:
  - React.js
  - Node.js
  - PostgreSQL
  - AWS EC2 + RDS
  - JWT + RBAC
---

**Problem:** Small businesses need affordable, multi-tenant SaaS tools to manage operations across users and roles without enterprise pricing.

**Architecture:** Full-stack SaaS platform with multi-tenant architecture, JWT auth, role-based access control, admin dashboards, and REST APIs deployed on **AWS EC2 + RDS**.

**Key Decision:** Used PostgreSQL over MongoDB for relational integrity in tenant isolation. Implemented RBAC for scalable permission management across user hierarchies.

**Impact:** Serving **100+ active users** handling real production workloads.
