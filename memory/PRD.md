# JR Agro Chemicals — Website PRD

## Original Problem Statement
Premium, modern, trustworthy website for an Indian fertilizer/agricultural products company (source of truth: two company PDFs — JR English Catalogue & JR New Catalogue). Trilingual (EN/HI/MR), animated intro, product catalogue with search/filters, enquiry via email/WhatsApp, dealers, certifications, testimonials, FAQ, SEO, fully responsive. No invented facts/stats/certificates — placeholders only.

## Company Facts (from PDFs + user)
- Name: JR Agro Chemicals — Tagline: "Nourishing Nature. Enriching Lives." / "Success Your Dream With Us"
- Address: Amit Apt. Flat No-7, Gulmohor Colony, Sangli 416416, Maharashtra
- Phones: +91 9822623658, +91 8983434736 · WhatsApp: +91 8668237470
- Emails: jragrochem@gmail.com (general), avdhootgiri@gmail.com (sales/enquiries)
- Contact persons: Avdhoot Giri, Satyajeet Patil · Website: www.jragrochemicals.com
- No real social URLs, dealer list, certificates, or testimonials provided → placeholders only.

## Architecture
- Frontend-only React SPA (no backend dependency per user request; backend server.py is health-check only).
- Trilingual system: /app/frontend/src/i18n/translations.js (en/hi/mr), LanguageContext (localStorage persisted), navbar selector + per-section SectionLang pill.
- Product DB: /app/frontend/src/data/products.js — 29 products, 6 categories, trilingual names/descriptions/benefits/dosages, real compositions from PDFs.
- Product images: real pack shots cropped from the PDFs → /app/frontend/public/products/*.webp (29 files).
- Enquiries: mailto (avdhootgiri@gmail.com) + wa.me/918668237470 pre-filled. No DB, no email service.
- Motion: framer-motion + lenis smooth scroll. Custom SVG logo (favicon.svg + Logo.jsx).
- Design: dark forest green #0A2F24, gold #C59B27, cream #FAF8F3; Cormorant Garamond + Plus Jakarta Sans + Tiro Devanagari Marathi.

## Implemented (2026-09-29)
- Animated intro splash (particles, logo reveal, skip intro)
- Sticky glass navbar + mobile hamburger, language switcher (navbar + every section)
- Kinetic hero with masked line reveal + parallax, editorial marquee
- About (mission/vision/5 value cards), Agricultural Solutions (6), Why Choose Us (6)
- Product catalogue: search, category pills with counts, crop + application filters, cards, detail modal (composition/dosage/benefits/crops/packaging/storage), View Details / Enquire Now (mailto) / WhatsApp
- Farmer section, Certifications placeholders, Dealer finder structure (empty state), Enquiry form (validation → mailto), Contact with Google Maps embed, Testimonials placeholders, FAQ accordion, premium footer, floating WhatsApp button
- SEO meta/OG/JSON-LD in index.html

## User Personas
- Farmer (Marathi/Hindi-first, mobile, WhatsApp-driven)
- Dealer/distributor (business enquiry)
- Agronomist/business customer (English, product specs)

## Backlog
- P0 (needs user assets): real dealer list, certificates, testimonials, social media URLs, missing pack sizes ("Information to be updated" fields)
- P1: crop-wise solution pages, dosage calculator, product brochure PDFs download
- P2: blog/agri-tips, multi-page SEO structure, dealer onboarding form
