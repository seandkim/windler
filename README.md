# MergeSpark - Demo Website

A minimal, clean demo website showcasing MergeSpark's help center creation service and HRIS (Human Resources Information System) connector.

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required - this is a static website!

### Running the Website

#### Option 1: Direct File Opening
1. Navigate to the project directory
2. Double-click on `index.html` to open it in your default browser

#### Option 2: Local Server (Recommended)
For the best experience and to avoid CORS issues, run a local server:

**Using Python (if installed):**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (if installed):**
```bash
# Install a simple server globally
npm install -g http-server

# Run the server
http-server -p 8000
```

**Using PHP (if installed):**
```bash
php -S localhost:8000
```

Then open your browser and go to: `http://localhost:8000`

#### Option 3: Live Server Extension (VS Code)
If you're using VS Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📁 Project Structure

```
windler/
├── index.html          # Main homepage for MergeSpark
├── hris-site.html      # HRIS connector demo page
├── styles.css          # CSS styles with modern design
├── script.js           # JavaScript for interactions and animations
└── README.md           # This file
```

## 🎨 Features

### Design Elements
- **Minimal Layout**: Clean, uncluttered design with ample white space
- **Modern Typography**: Inter font family for professional appearance
- **Subtle Animations**: Fade-in effects and smooth transitions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### Interactive Features
- **Help Center Generator**: Enter any website URL to create a modern help center
- **Category Selection**: Choose from various integration categories (HRIS, CRM, etc.)
- **Loading Animation**: Beautiful loading screen with progress indicators
- **Dynamic Theming**: Automatically applies company-specific themes

### Main Features
1. **Homepage (index.html)**: MergeSpark help center creation tool
2. **HRIS Demo (hris-site.html)**: Sample HRIS connector showcase
3. **Responsive Design**: Works on all devices
4. **Modern UI**: Clean, professional interface

## 🛠️ Customization

### Colors
The color scheme is defined in `styles.css`:
- Primary: `#1a1a1a` (Dark)
- Background: `#fefefe` (Off-white)
- Secondary: `#6a6a6a` (Gray)
- Accent: `#f8f9fa` (Light gray)

### Content
- Edit `index.html` to modify the main MergeSpark interface
- Update `hris-site.html` to customize the HRIS connector demo
- Modify company information, features, and testimonials as needed

### Styling
- Modify `styles.css` to change appearance
- All responsive breakpoints are included
- CSS custom properties can be added for easier theming

## 🔧 Technical Details

- **No Build Process**: Pure HTML, CSS, and JavaScript
- **No Dependencies**: No external libraries required
- **Modern CSS**: Uses Grid, Flexbox, and CSS custom properties
- **Vanilla JavaScript**: No frameworks, just clean ES6+ code
- **Accessible**: Semantic HTML and proper ARIA attributes

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🎯 Design Philosophy

MergeSpark features a modern, professional design approach:
- Clean, minimal aesthetic
- Focus on typography and white space
- Subtle, purposeful animations
- Professional yet approachable tone
- User-friendly interface for technical products

## 📄 License

This is a demo project created for educational purposes.

---

**Enjoy exploring MergeSpark! 🚀**
