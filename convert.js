const fs = require('fs');
const path = require('path');

// Read index.html
let html = fs.readFileSync('index.html', 'utf-8');

// Extract body contents
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
let bodyContent = bodyMatch ? bodyMatch[1] : html;

// Remove script tags
bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

// Convert class to className
bodyContent = bodyContent.replace(/class=/g, 'className=');

// Fix unclosed tags (img, input, br, hr)
bodyContent = bodyContent.replace(/<img(.*?)>/g, (match, attrs) => {
    if (attrs.trim().endsWith('/')) return match;
    return `<img${attrs}/>`;
});
bodyContent = bodyContent.replace(/<input(.*?)>/g, (match, attrs) => {
    if (attrs.trim().endsWith('/')) return match;
    return `<input${attrs}/>`;
});
bodyContent = bodyContent.replace(/<br>/g, '<br/>');
bodyContent = bodyContent.replace(/<hr(.*?)>/g, (match, attrs) => {
    if (attrs.trim().endsWith('/')) return match;
    return `<hr${attrs}/>`;
});

// Polyline fix (React requires camelCase for some attributes, but standard SVG mostly works)
bodyContent = bodyContent.replace(/stroke-width/g, 'strokeWidth');
bodyContent = bodyContent.replace(/stroke-linecap/g, 'strokeLinecap');
bodyContent = bodyContent.replace(/stroke-linejoin/g, 'strokeLinejoin');

// Fix inline styles - basic naive conversion for the specific ones we know exist
// e.g. style="top: 5%; left: 8%; transform: rotate(-15deg);"
bodyContent = bodyContent.replace(/style="([^"]*)"/g, (match, styleStr) => {
    if(!styleStr.trim()) return `style={{}}`;
    const rules = styleStr.split(';').filter(Boolean);
    let objArr = [];
    for(let rule of rules) {
        if(!rule.includes(':')) continue;
        let [key, val] = rule.split(':');
        key = key.trim();
        val = val.trim();
        // camelCase key
        key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        objArr.push(`${key}: '${val}'`);
    }
    return `style={{ ${objArr.join(', ')} }}`;
});

// Write to src/App.jsx
const appJsx = `import React, { useEffect } from 'react';
import './styles.css';

// You can eventually migrate your script.js logic into useEffect hooks here.
// For now, we will import it directly or run it globally if possible, but React prefers proper state.

function App() {
  useEffect(() => {
    // Dynamically loading the old script for the migration phase
    const script = document.createElement('script');
    script.src = "/script.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      ${bodyContent}
    </>
  );
}

export default App;
`;

fs.mkdirSync('src', { recursive: true });
fs.writeFileSync('src/App.jsx', appJsx);
console.log('Successfully created src/App.jsx');

// Create main.jsx
const mainJsx = `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
`;
fs.writeFileSync('src/main.jsx', mainJsx);
console.log('Successfully created src/main.jsx');

// Create new index.html for Vite
const viteHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Akil - AI & Full Stack Developer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;
fs.writeFileSync('index.html', viteHtml);
console.log('Successfully replaced index.html for Vite');

// Move styles and scripts so public assets or src can handle them properly
// script.js goes to public so the dynamically injected tag works
fs.mkdirSync('public', {recursive: true});
if(fs.existsSync('script.js')) {
    fs.copyFileSync('script.js', 'public/script.js');
}

// Ensure styles.css is in src
if(fs.existsSync('styles.css')) {
    fs.copyFileSync('styles.css', 'src/styles.css');
}

console.log('Migration prep complete. Remember to write package.json and vite.config.js manually.');
