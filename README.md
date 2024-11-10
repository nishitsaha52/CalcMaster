# 🧮 Interactive Calculator

Welcome to the Interactive Calculator! This project is a fully responsive, feature-rich calculator with a sleek and modern UI. Designed with a theme toggle (light/dark mode) and optimized for mobile devices, it’s a great tool for performing basic arithmetic operations and learning frontend skills.

## 📸 Preview

![Calculator Preview](preview-image.png) <!-- Replace with a link to a hosted image if available -->

## 🎨 Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Theme Toggle**: Switch between light and dark themes with a smooth toggle button.
- **Basic Operations**: Perform standard calculations like addition, subtraction, multiplication, and division.
- **Styled UI**: Designed with modern styling, shadows, gradients, and smooth transitions.

## 🚀 Live Demo

[View Live Demo](https://your-demo-link.com) <!-- Replace with actual link to the live demo if available -->

## 🛠️ Tech Stack

- **HTML**
- **CSS (with custom themes)**
- **JavaScript**
- **React.js** for interactivity and component structure

## 🎛️ Theme Toggle

The calculator includes a theme toggle button, allowing users to switch between light and dark modes for better readability in different lighting conditions.

### How it Works

1. **Dark Mode** (default): A sleek, high-contrast color scheme with gold highlights.
2. **Light Mode**: A soft color scheme, easier on the eyes for daylight use.

The theme toggle is implemented using CSS variables and JavaScript to dynamically switch themes without reloading the page.

## 🖱️ Usage Instructions

### Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/interactive-calculator.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd interactive-calculator
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the application**:
   ```bash
   npm start
   ```

5. **Open the calculator in your browser**:
   Go to `http://localhost:3000`.

### Calculator Usage

- Enter numbers and use the provided buttons for operations.
- Clear the screen using the **C** button.
- Toggle between **light and dark themes** by clicking the toggle switch at the top.

## 🖼️ Screenshots

![Dark Theme Preview](dark-theme.png) <!-- Replace with links to screenshots if available -->
*Dark theme showcasing gold highlights and shadows*

![Light Theme Preview](light-theme.png)
*Light theme with subtle shadowing and lighter tones*

## 📐 Responsive Design

The calculator is fully responsive, adapting seamlessly to different screen sizes. 

- **Desktop**: Full view with wider layout and full button grid.
- **Mobile**: Compact layout with easy-to-tap buttons and responsive grid.

## 📁 Folder Structure

```plaintext
interactive-calculator/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Calculator.js       # Main calculator component
│   │   └── ThemeToggle.js      # Theme toggle button component
│   ├── styles/
│   │   ├── App.css             # Main app styling
│   │   └── theme.css           # Light and dark theme styles
│   ├── App.js                  # Main app file
│   └── index.js                # Entry point
├── README.md
├── package.json
└── .gitignore
```

## 📄 CSS Theme Overview

CSS is managed using CSS variables, which adjust dynamically when the theme toggle is activated. The following CSS variables control the overall look:

```css
/* Dark Theme */
:root {
  --bg-color: #1a1a1a;
  --text-color: #fff;
  --highlight-color: #ffcc00;
}

/* Light Theme */
.light-theme {
  --bg-color: #f5f5f5;
  --text-color: #222;
  --highlight-color: #333;
}
```

## 🤝 Contributions

Contributions are welcome! If you find bugs or want to improve the calculator, please open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

---
