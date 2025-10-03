# LYRIC Hair Defense Shampoo Website

A promotional website for LYRIC herbal shampoo brand built with Next.js, inspired by the Hairnic Bootstrap template.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern Animations**: Smooth scrolling, hover effects, and fade-in animations
- **Contact Form**: Functional email contact form with API integration
- **Product Gallery**: Interactive gallery with hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Tech Stack

- Next.js 14
- Bootstrap 5
- Custom CSS with animations
- Font Awesome icons
- Google Fonts (Poppins)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── pages/
│   ├── _app.js          # App component with Bootstrap
│   ├── _document.js     # Document with fonts and icons
│   ├── index.js         # Main homepage
│   └── api/
│       └── contact.js   # Contact form API
├── components/
│   └── Layout.js        # Layout with navigation and footer
├── styles/
│   └── globals.css      # Global styles and animations
└── public/
    └── images/          # Product images (add your images here)
```

## Customization

### Adding Product Images
1. Add your product images to the `public/images/` folder
2. Update the gallery section in `pages/index.js` to use real images
3. Replace placeholder emojis with actual product photos

### Modifying Colors
Update CSS variables in `styles/globals.css`:
```css
:root {
  --primary-color: #8B4513;    /* Brown */
  --secondary-color: #228B22;  /* Green */
  --accent-color: #FFD700;     /* Gold */
}
```

### Contact Form Integration
The contact form currently uses a dummy API. To integrate with a real email service:
1. Update `pages/api/contact.js` with your email service (SendGrid, Nodemailer, etc.)
2. Add environment variables for API keys
3. Configure email templates

## Sections

- **Home**: Hero section with product introduction
- **About**: Brand story and key benefits
- **Features**: Product features with icons
- **Ingredients**: Natural ingredients showcase
- **Testimonials**: Customer reviews
- **Gallery**: Product image gallery
- **Contact**: Email contact form

## Deployment

Build for production:
```bash
npm run build
npm start
```

Deploy to Vercel, Netlify, or any hosting platform that supports Next.js.

## License

This project is for LYRIC Hair Care brand promotional use.