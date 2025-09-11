# COD Rocket Landing Page

A modern, responsive landing page for the COD Rocket Shopify app, built with React and Tailwind CSS.
👉 Live Demo on Vercel: [https://landing-page-cod-nu.vercel.app/] (https://landing-page-cod-nu.vercel.app/)

## Features

- Clean, modern UI/UX inspired by SaaS best practices
- Fully responsive design for all devices
- Custom SVG icons and illustrations
- Smooth gradients and purple-focused color palette
- Animated FAQ section
- Contact form with validation
- Modular React components for easy customization

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/landing-page-cod.git
   cd landing-page-cod/landing-page
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open your browser at [http://localhost:5173](http://localhost:5173)

## Project Structure

```
landing-page/
├── public/
├── src/
│   ├── Components/
│   │   ├── Features.jsx
│   │   ├── how.jsx
│   │   ├── seeAction.jsx
│   │   ├── customers.jsx
│   │   ├── Pricing.jsx
│   │   ├── ready.jsx
│   │   ├── contact.jsx
│   │   ├── FAQ.jsx
│   │   └── ...
│   ├── App.jsx
│   └── ...
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization

- Update colors, gradients, and content in the `src/Components/` files.
- Replace images in `src/assets/` as needed.
- Edit the contact form logic in `contact.jsx` to connect to your backend or email service.

## Deployment

You can deploy this project to Vercel, Netlify, or any static hosting provider:

- Build for production:
  ```bash
  npm run build
  # or
  yarn build
  ```
- Deploy the `dist/` folder to your preferred host.

## License

MIT

---

> Designed and developed with ❤️ for the Shopify community.
