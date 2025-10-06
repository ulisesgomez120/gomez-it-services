# Gomez IT Services — Landing Page Project Brief (Netlify Forms Edition)
*Version 2 — Updated for Netlify Form Handling*

---

## 🧭 Overview

This document outlines the **structure**, **content plan**, and **developer setup instructions** for the *Gomez IT Services* landing page.  
It includes updated handling for **Netlify Forms** (no backend required).

---

## 💡 Project Summary

**Company:** Gomez IT Services  
**Focus:** Cybersecurity contractor offering 3 service tiers for California businesses.  
**Highlights:**
- Veteran, minority, and family-owned small business  
- Experienced with government agencies (LAPD, DoD contractors)  
- California cybersecurity compliance expertise  
- Simple one-page layout with internal navigation  
- Contact form powered by **Netlify Forms** (no backend needed)

---

## 🧱 Developer Instructions

### 🪜 Tech Stack
- **HTML5**
- **CSS3** (vanilla or with a small framework if needed)
- **jQuery** for smooth scrolling & interactivity
- **Netlify Forms** for contact form handling

### 🗂️ Project Structure
```
/project-root
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    ├── logos/
    └── images/
```

### 🧰 Setup Instructions
1. Create a new Netlify site (manual deploy or via GitHub). (I will do this)
2. Copy the file structure above.
3. Include the following metadata in your `<head>`:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Gomez IT Services — Cybersecurity Experts</title>
   ```
4. Add smooth scroll behavior in CSS or jQuery:
   ```js
   $('a[href*="#"]').on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500);
   });
   ```

### 📬 Netlify Form Integration
Add the following code for the **contact form**:

```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact">
  <p class="hidden">
    <label>Don’t fill this out if you're human: <input name="bot-field"></label>
  </p>
  <p><label>Name: <input type="text" name="name" required></label></p>
  <p><label>Email: <input type="email" name="email" required></label></p>
  <p><label>Company: <input type="text" name="company"></label></p>
  <p><label>Service Interested In:
    <select name="service">
      <option>Compliance Partner</option>
      <option>Quarterly Review</option>
      <option>Full Protection Plan</option>
    </select>
  </label></p>
  <p><label>Message: <textarea name="message"></textarea></label></p>
  <p><button type="submit">Send Message</button></p>
</form>
```

💡 **Testing Tip:**  
After deploying to Netlify, go to your site → **Forms** tab to confirm submissions are appearing.

---

## 🧩 Wireframe Layout

### 🧭 Navigation (Sticky Header)
```
--------------------------------------------------------
[ Gomez IT Services ]     Home | About | Services | Why Us | Contact
--------------------------------------------------------
```

### 🦅 Hero Section
```
--------------------------------------------------------
Background: subtle tech/security image (dark overlay)

HEADLINE:
"Trusted Cybersecurity for California Businesses"

SUBTEXT:
"Veteran-, minority-, and family-owned business serving
government, defense, and private clients across California."

CTA Buttons: [ View Services ]   [ Contact Us ]
Badges: Veteran Owned | Minority Business | Family Owned
--------------------------------------------------------
```

### 🛡️ About / Credibility
```
--------------------------------------------------------
TITLE: "Experience You Can Trust"

TEXT:
We are a family-run cybersecurity firm with deep expertise in
government and private-sector defense. Our team has supported
organizations including LAPD, defense contractors, and more.

LOGOS ROW:
| LAPD | DoD Contractor | City of Los Angeles | State of California |

Family Section:
- Small grid of headshots with short bios of family members.

--------------------------------------------------------
```

### 💼 Services Overview (3 Tiers)
```
--------------------------------------------------------
TITLE: "Our Cybersecurity Service Plans"

CARD 1: Compliance Partner
CARD 2: Quarterly Review
CARD 3: Full Protection Plan

CTA: “Not sure which plan fits? Contact us and we’ll help.”
--------------------------------------------------------
```

### ⚙️ Why Choose Us
```
--------------------------------------------------------
✔ Government-Level Expertise
✔ Veteran-Owned Integrity
✔ California Compliance Specialists
✔ Family-Owned Dedication
--------------------------------------------------------
```

### 💬 Testimonials / Case Highlights
```
--------------------------------------------------------
TITLE: "Proven Results"

Cards or quotes from agencies & clients.
--------------------------------------------------------
```

### ✉️ Contact Form (Netlify)
```
--------------------------------------------------------
TITLE: "Request a Consultation"

Netlify form code integrated here (see section above).

Contact Info:
📧 info@gomezitservices.com
📞 (555) 123-4567
--------------------------------------------------------
```

### ⚫ Footer
```
--------------------------------------------------------
Gomez IT Services © 2025
Veteran • Minority • Family-Owned Small Business
--------------------------------------------------------
```

---

## 🧩 Deployment Notes

1. **Host:** Deploy to Netlify (static hosting).  
2. **Forms:** Netlify will automatically detect the form and store submissions.  
3. **Optional Integrations:**  
   - Email notifications (Netlify > Forms > Notifications)  
   - Zapier or Make.com automation for Google Sheets or CRMs  
4. **Security:** No exposed API keys, safe for static hosting.

---

## ✅ Summary

This updated brief provides:
- Clear one-page wireframe layout  
- Updated Netlify Forms integration  
- Static HTML/CSS/jQuery approach  
- No backend required, under free tier limits  

You can safely move forward to the **coding phase** with this document as the project blueprint.
