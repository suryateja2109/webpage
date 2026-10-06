# Modern Frontend Developer Webpage

A sleek, responsive, and performant personal developer portfolio webpage built using clean Vanilla HTML5, CSS3, and JavaScript.

## Features
- **Design System**: Dark and Light theme toggle with local storage persistence.
- **Glassmorphism & Neon Glow**: Modern aesthetics with ambient background lighting.
- **Zero Build Step**: Pure HTML/CSS/JS that runs directly in any browser and deploys instantly.
- **Interactive UI**:
  - Dynamic greeting based on the user's local time.
  - Interactive project showcase cards.
  - Interactive contact form with simulated delivery and custom toast alerts.
  - One-click copy email address with instant feedback.
  - Fully responsive for mobile, tablet, and desktop screens.
- **Netlify Ready**: Configured with `netlify.toml` for 1-click deployment.

---

## 1. Local Preview
You can preview this site locally by opening `index.html` directly in any web browser, or using a local static server:
```bash
# Using Python
python -m http.server 3000

# Or using npx serve
npx serve .
```

---

## 2. Push to GitHub
Follow these simple commands to push your project to your GitHub account:

1. **Initialize Git**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: modern frontend portfolio webpage"
   git branch -M main
   ```

2. **Create a new repository on GitHub** (e.g. named `my-frontend-portfolio` or similar) on [github.com/new](https://github.com/new).

3. **Link your remote and push**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

---

## 3. Deploy to Netlify
There are two easy methods to deploy on Netlify:

### Method A: Connect with GitHub (Continuous Deployment - Recommended)
1. Go to [Netlify](https://app.netlify.com/) and sign in.
2. Click **"Add new site"** &rarr; **"Import an existing project"**.
3. Select **GitHub** and choose your repository.
4. Deployment settings:
   - **Branch to deploy**: `main`
   - **Build command**: *(leave blank)*
   - **Publish directory**: `.` *(current directory)*
5. Click **"Deploy site"**. Every time you push changes to GitHub, Netlify will auto-deploy your site!

### Method B: Netlify Drop (Instant Drag & Drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop this folder (`today`) directly into the drop zone.
3. Your site goes live instantly with a free `.netlify.app` URL!
