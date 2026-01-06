# Quick Start Guide - Jebin Constructions

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Google Form**
   - Create a Google Form for collecting client details
   - Copy the form URL (format: `https://docs.google.com/forms/d/e/FORM_ID/viewform`)
   - Replace `YOUR_FORM_ID` in these files:
     - `components/Header.tsx` (line with `GOOGLE_FORM_URL`)
     - `app/page.tsx` (line with `GOOGLE_FORM_URL`)
     - `app/services/page.tsx` (line with `GOOGLE_FORM_URL`)
     - `app/contact/page.tsx` (line with `GOOGLE_FORM_URL`)
     - `components/Footer.tsx` (line with `GOOGLE_FORM_URL`)

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   Navigate to `http://localhost:3000`

## Key Features to Test

### 1. Construction Animation
- Visit the homepage to see the animated construction site
- Watch the building construction, crane movement, and workers

### 2. Theme Toggle
- Click the sun/moon icon in the header
- Theme preference is saved in localStorage

### 3. Register Button
- Click any "Register" button throughout the site
- Should open your Google Form in a new tab

### 4. Responsive Design
- Resize browser window or test on mobile device
- All pages should adapt smoothly

### 5. Interactive Elements
- Hover over cards to see elevation effects
- Navigate between pages smoothly

## Project Structure

- **Home Page**: Features construction animation and company highlights
- **About Page**: Company mission, vision, and values
- **Services Page**: Showcase of construction services
- **Contact Page**: Contact form and company information

## Customization

### Update Company Information
- Edit contact details in `app/contact/page.tsx` and `components/Footer.tsx`
- Update company stats in `app/page.tsx`

### Modify Colors
- Edit `tailwind.config.ts` for color scheme changes

### Adjust Animations
- Modify animation timings in `app/globals.css`
- Update construction animation in `components/ConstructionAnimation.tsx`

## Building for Production

```bash
npm run build
npm start
```

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Build Errors
```bash
rm -rf .next
npm run build
```

### Google Form Not Opening
- Double-check that you've replaced `YOUR_FORM_ID` in all files
- Ensure the Google Form URL is correct and accessible
