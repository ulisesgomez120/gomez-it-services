# Gomez IT Services — Landing Page Project Brief

## Overview
This document includes the **full wireframe** and **developer implementation plan** for the Gomez IT Services landing page.  
The page will be a single static HTML site built with **HTML, CSS, and jQuery**, hosted on **Netlify** (no backend).  
Email submissions will use **Formspree** or **EmailJS** since no server backend will be present.

---

# 🧱 Wireframe Layout

## Navigation (Sticky Header)
```
| Gomez IT Services | Home | About | Services | Why Us | Contact |
                                      [ Get a Quote ]
```
- Fixed at the top of the screen.
- Smooth-scroll anchor links.
- “Get a Quote” button scrolls to Contact section.

---

## Hero Section
```
[ Background: Cybersecurity visual or blue gradient overlay ]

HEADLINE:
"Trusted Cybersecurity for California Businesses"

SUBTEXT:
"Veteran- and minority-owned small business serving government,
defense, and private clients across California."

[ View Services ]   [ Contact Us ]

Badges:
(Veteran-Owned) (Minority-Certified) (California Compliant)
```

---

## About / Credibility Section
```
TITLE: "Experience You Can Trust"

TEXT:
Gomez IT Services is a family-owned, veteran- and minority-owned
business providing cybersecurity consulting, auditing, and compliance
services. Our team has supported organizations such as the LAPD,
defense contractors, and other government agencies.

[ Family Photos ]
| [Image of Founder] | [Image of Family Member 1] | [Image of Family Member 2] |
Caption: "A family dedicated to protecting California businesses."

[ Trusted By ]
| LAPD | DoD Contractor | City of Los Angeles | State of California |
```

---

## Services Overview (3 Tiers)
```
TITLE: "Our Cybersecurity Service Plans"

|-----------------------------------------------|
| Tier 1: Compliance Partner                    |
| - Meet CA cybersecurity law                   |
| - Annual compliance report                    |
| [ Get Compliant ]                             |
|-----------------------------------------------|
| Tier 2: Quarterly Security Review             |
| - Quarterly audits & fixes                    |
| - Detailed quarterly reports                  |
| [ Schedule Review ]                           |
|-----------------------------------------------|
| Tier 3: Full Protection Plan                  |
| - Continuous monitoring                       |
| - Incident response & advanced defense        |
| [ Request Consultation ]                      |
|-----------------------------------------------|

"Not sure which plan fits? Contact us and we’ll recommend one."
```

---

## Why Choose Us
```
TITLE: "Why Businesses Choose Gomez IT Services"

|-----------------------------------------------|
| ✔ Government-Level Expertise                  |
| ✔ Veteran-Owned Integrity                     |
| ✔ California Law Compliance Specialists       |
| ✔ Scalable Protection for Any Business        |
|-----------------------------------------------|

TEXT:
We bring military precision and government-grade security
practices to small and mid-size businesses across California.
```

---

## Testimonials / Case Highlights
```
TITLE: "Proven Results in the Field"

[ Case 1 ] Secured network infrastructure for LAPD-affiliated agency.
[ Case 2 ] Supported defense contractor with system hardening and compliance.
[ Case 3 ] Ongoing cybersecurity partner for small California businesses.

Optional Quote:
“Gomez IT Services delivered above and beyond — professional, efficient, reliable.”
```

---

## Contact / Inquiry Form
```
TITLE: "Request a Consultation"

Let’s discuss how we can protect your business and keep you compliant.

Form Fields:
- Name
- Email
- Company
- Service Interested In (dropdown)
- Message

[ Send Message ]

Contact Info:
📧 info@gomezitservices.com  
📞 (555) 123-4567  
[ LinkedIn ] [ Veteran-Owned Badge ] [ Minority-Owned Badge ]
```

---

## Footer
```
© 2025 Gomez IT Services
Veteran & Minority-Owned Small Business

Home | About | Services | Contact | Privacy Policy

[ Email ] [ LinkedIn ]
```

---

# ⚙️ Developer Instructions

## Goal
Create a responsive one-page website for **Gomez IT Services**, using **HTML, CSS, and jQuery**, hosted on **Netlify** without a backend.  
The contact form will use **Formspree** or **EmailJS** to send form submissions to an email address securely.

---

## Tech Stack
- HTML5 for structure  
- CSS3 for layout and styles (Flexbox or Grid)  
- jQuery for smooth scrolling, animations, and form submission  
- Formspree or EmailJS for email handling (no backend needed)

---

## File Structure
```
/gomez-it-services/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── img/
│   ├── logo.png
│   ├── family/
│   │   ├── founder.jpg
│   │   ├── member1.jpg
│   │   └── member2.jpg
│   └── clients/
│       ├── lapd.png
│       ├── dod.png
│       └── cityla.png
```

---

## Section IDs
Each major section should have its own anchor ID:
- `#hero`
- `#about`
- `#services`
- `#why-us`
- `#testimonials`
- `#contact`
- `#footer`

---

## Required Features

### 1. Smooth Scrolling
Implement jQuery smooth scroll for internal nav links and a sticky header.

### 2. Responsive Design
Use CSS media queries or flexbox to ensure mobile and desktop compatibility.

### 3. Contact Form via Formspree or EmailJS
**Option A — Formspree:**  
No backend required. Add this inside the `<form>` tag in HTML:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
  <input type="text" name="name" placeholder="Name" required>
  <input type="email" name="email" placeholder="Email" required>
  <input type="text" name="company" placeholder="Company">
  <select name="service">
    <option>Compliance Partner</option>
    <option>Quarterly Security Review</option>
    <option>Full Protection Plan</option>
  </select>
  <textarea name="message" placeholder="Your Message"></textarea>
  <button type="submit">Send Message</button>
</form>
```

**Option B — EmailJS:**  
Connect to EmailJS via JavaScript to send form data through their API. Requires EmailJS account + public key.

### 4. Form Data Format
The email should arrive in a clear, searchable format:
```
Subject: New Inquiry — Gomez IT Services

Name: John Doe
Email: john@example.com
Company: Example Co.
Service: Quarterly Review
Message: We’re interested in scheduling a consultation.
```

### 5. Visual Design Notes
- Professional color palette: dark blue, gray, white.  
- Use a clean font (Roboto, Inter, or Poppins).  
- Rounded CTA buttons with hover effects.  
- Fade-in scroll animations for sections.  

---

## Hosting on Netlify
1. Push your files to a GitHub repo (or upload folder directly).  
2. Connect repo to Netlify and deploy.  
3. Add custom domain or subdomain.  
4. Update your Formspree/EmailJS settings with the deployed domain.

Netlify automatically provides HTTPS, making this secure for form submissions.

---

## Security Notes
- No sensitive data is stored.  
- All submissions are securely transmitted via HTTPS through Formspree or EmailJS.  
- No backend or database needed.  

---

## Deliverables
- Responsive single-page static site.  
- Working contact form that emails submissions.  
- Hosted live on Netlify.  
- Assets optimized for web.

---

## Next Steps
1. Create `/index.html`, `/css/style.css`, and `/js/main.js`.  
2. Add Formspree integration for the contact form.  
3. Add final content and images once approved.  
4. Deploy to Netlify and test email delivery.

---

**End of File — Gomez IT Services Landing Page Project Brief**
