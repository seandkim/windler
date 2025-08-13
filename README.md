# HRIS Connector - Demo Website

A minimal, clean demo website inspired by Anthropic's design aesthetic, showcasing an HRIS (Human Resources Information System) connector service.

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
windler2/
├── index.html          # Main HTML file
├── styles.css          # CSS styles with Anthropic-inspired design
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
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Demo Modal**: Click any "Get Demo" or "Get Started" button to see the demo form
- **Hover Effects**: Subtle animations on buttons and cards
- **Scroll Animations**: Elements fade in as you scroll down the page

### Sections
1. **Hero Section**: Main value proposition with visual diagram
2. **Features**: Key benefits of the HRIS connector
3. **Integration Process**: Step-by-step setup guide
4. **Testimonial**: Customer feedback
5. **Call-to-Action**: Demo request section

## 🛠️ Customization

### Colors
The color scheme is defined in `styles.css`:
- Primary: `#1a1a1a` (Dark)
- Background: `#fefefe` (Off-white)
- Secondary: `#6a6a6a` (Gray)
- Accent: `#f8f9fa` (Light gray)

### Content
- Edit `index.html` to modify text content
- Update company information, features, and testimonials
- Add or remove sections as needed

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

## 🎯 Design Inspiration

This website draws inspiration from Anthropic's design philosophy:
- Clean, minimal aesthetic
- Focus on typography and white space
- Subtle, purposeful animations
- Professional yet approachable tone
- Technical content presented clearly

## 📄 License

This is a demo project created for educational purposes.

---

**Enjoy exploring the HRIS Connector demo! 🚀**
