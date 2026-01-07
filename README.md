# Jebin Constructions - Modern Construction Website

A modern, responsive website for Jebin Constructions featuring construction site animations, interactive elements, and a seamless user experience.

## Features

### Design & Animation
- **Construction Site Animations**: Interactive animated construction site on the homepage
- **Modern UI**: Clean, professional design with dark/light mode support
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: CSS animations for building construction, crane movement, and workers

### Pages
-  **Home**: Hero section with construction animation, features, stats, and registration CTA
-  **About**: Company mission, vision, values, and story
-  **Services**: Showcase of construction services offered
-  **Contact**: Contact form and company information

### Key Features
-  **Register Button**: Links to Google Form for client registration (no backend needed)
-  **Theme Toggle**: Dark/light mode with persistent preference
-  **Interactive Elements**: Hover effects, animations, and smooth transitions
-  **Mobile-First**: Optimized for all screen sizes

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd jc
```

2. Install dependencies:
```bash
npm install
```

3. Configure Google Form URL:
   - Open `components/Header.tsx`
   - Replace `YOUR_FORM_ID` with your actual Google Form ID in the `GOOGLE_FORM_URL` constant
   - Do the same in `app/page.tsx`, `app/services/page.tsx`, `app/contact/page.tsx`, and `components/Footer.tsx`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Google Form Setup

1. Create a Google Form for collecting client details
2. Click "Send" and copy the form URL
3. Extract the form ID from the URL (format: `https://docs.google.com/forms/d/e/FORM_ID/viewform`)
4. Replace `YOUR_FORM_ID` in the following files:
   - `components/Header.tsx`
   - `app/page.tsx`
   - `app/services/page.tsx`
   - `app/contact/page.tsx`
   - `components/Footer.tsx`

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles with animations
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page with animation
├── components/            # React components
│   ├── ConstructionAnimation.tsx  # Construction site animation
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   └── ui/               # UI components (Button, Card, Input, etc.)
├── lib/                   # Utilities
│   ├── store/            # Zustand stores (theme)
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand (for theme)
- **Icons**: Material Design Icons (via Google Fonts)
- **Animations**: CSS keyframes and transitions

## Customization

### Colors
Edit `tailwind.config.ts` to change primary, secondary, and accent colors.

### Animations
Modify animation timings and effects in `app/globals.css`.

### Content
Update text content in each page component (`app/*/page.tsx`).

## Building for Production

```bash
npm run build
npm start
```

## Features in Detail

### Construction Animation
The homepage features an animated construction site with:
- Moving clouds
- Building construction animation
- Swinging crane
- Walking construction worker
- Moving construction vehicle

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized images and assets

### Theme System
- Dark and light modes
- Persistent theme preference (localStorage)
- Smooth theme transitions
- Accessible color contrast

## License

MIT License

## Support

For support, contact jebinconstructions.com or visit the contact page.
