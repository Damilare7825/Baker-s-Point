# Bakers Point — Website Requirements

## 1. Overview
**Business Name:** Bakers Point Bakery
**Tagline / Motto:** "Where Sweetness Meets You"
**Tech Stack:** React (Vite)
**Fonts:** Inter (primary/body), Satoshi (headings/display)

## 2. About / Brand Copy
**About Us:**
"At Bakers Point Bakery, we create fresh, delicious, and beautifully made treats for every occasion. From cakes to pastries, every bite is made with care and quality ingredients."

**Brand Assets:**
- Logo: circular chef mascot badge, "Bakers Point" wordmark, "Where Sweetness Meets You" sub-line
- Color palette (from logo/menu): cream/off-white background, deep brown (#3B2416-ish), pink/rose accent (#E91E63-ish), white
- Tone: warm, playful, sweet

## 3. Contact
- **Method:** WhatsApp only (no email/contact form to a server)
- **Numbers:**
  - 08105585849
  - 07087985562
- WhatsApp links should use `wa.me` deep links with pre-filled message (e.g. "Hi, I'd like to place an order / make a booking")

## 4. Site Structure (Pages/Sections)
1. **Home**
   - Hero: logo, tagline, CTA buttons ("Order on WhatsApp", "Book Now")
   - Brief about snippet
   - Featured menu highlights
2. **About**
   - About Us copy
   - Brand story / mascot imagery
3. **Menu**
   - Full menu, organized by category (see Section 5)
   - Prices in ₦ (Naira)
4. **Booking**
   - Booking/order form (see Section 6)
5. **Contact**
   - WhatsApp buttons (both numbers)
   - Location: Roju road ojota, akinleye oya, Ogun State

## 5. Menu Data (from provided menu)

### Cakes
| Item | Price |
|---|---|
| Small Cake (4 inches) | ₦8,000 |
| Medium Cake (6 inches) | ₦12,000 |
| Large Cake (8 inches) | ₦18,000 |
| Extra Large (10 inches) | ₦25,000 |
| Custom / Themed Cake | ₦30,000+ |

### Cupcakes
| Item | Price |
|---|---|
| Regular Cupcake | ₦1,000 |
| Premium Cupcake | ₦1,500 |

### Doughnuts
| Item | Price |
|---|---|
| Plain Doughnut | ₦600 |
| Glazed Doughnut | ₦700 |
| Chocolate Doughnut | ₦800 |
| Box of 6 (Assorted) | ₦4,000 |
| Box of 12 (Assorted) | ₦7,500 |

### Puff-Puff
| Item | Price |
|---|---|
| Small (Per ball) | ₦150 |
| Medium (Per ball) | ₦200 |
| Large (Per ball) | ₦250 |
| Pack of 10 (Small) | ₦1,300 |
| Pack of 10 (Medium) | ₦1,800 |
| Pack of 10 (Large) | ₦2,300 |

### Chin Chin
| Item | Price |
|---|---|
| Small Pack | ₦800 |
| Medium Pack | ₦1,500 |
| Large Pack | ₦2,500 |
| Family Pack | ₦4,000 |

### Other Treats
| Item | Price |
|---|---|
| Samosa (Meat) | ₦700 |
| Samosa (Chicken) | ₦600 |
| Meat Pie | ₦800 |
| Chicken Pie | ₦700 |

*Menu data should live in a single structured file (e.g. `menuData.js`/`.json`) so it's easy to update later without touching components.*

## 6. Booking System
**Purpose:** Let customers request a cake/order for a specific date, then hand off to WhatsApp for confirmation (no backend/payment processing required initially).

**Form Fields:**
- Full Name
- Phone Number
- Item(s) wanted (dropdown/checklist pulling from menu categories)
- Quantity / Size
- Preferred pickup/delivery date
- Delivery or Pickup toggle
- Delivery address (conditional, if delivery selected)
- Additional notes (e.g. cake message, theme, allergies)

**Behavior:**
- On submit, format the details into a message string
- Open a `wa.me` link (to one of the two numbers — default or user-selectable) with the message pre-filled
- Basic client-side validation (required fields, phone format)
- No database/backend required for v1 — WhatsApp is the order pipeline

**Future/Optional Enhancements:**
- Store bookings in a backend (Node/Express + DB) for order tracking
- Email/SMS confirmation
- Payment integration (Paystack, given existing stack familiarity)

## 7. Design/UX Requirements
- **Fonts:** Inter for body/UI text, Satoshi for headings and display text
- **Responsive:** Mobile-first (majority of customers likely order via phone)
- **Visual style:** Match menu card aesthetic — cream background, brown/pink accents, rounded pill-shaped category badges
- **Imagery:** Product photos for cakes, cupcakes, doughnuts, puff-puff, chin chin, pies/samosas
- **Sticky WhatsApp button:** Floating action button visible on all pages

## 8. Technical Requirements
- **Framework:** React + Vite
- **Routing:** React Router (Home, About, Menu, Booking, Contact)
- **Styling:** CSS Modules / Tailwind (TBD) with Inter + Satoshi loaded via font files or CDN
- **State:** Local component state sufficient for v1 (no global state library needed unless booking history is added)
- **Deployment target:** TBD (Vercel/Netlify recommended for a static React app)

## 9. Out of Scope (v1)
- Online payments
- User accounts/login
- Admin dashboard for managing orders
- Real-time order tracking

## 10. Open Questions
- Should each menu item support a photo, or category-level images only?
- Default WhatsApp number for the floating button/order CTA — which of the two numbers first?
- Delivery radius/fee structure?
