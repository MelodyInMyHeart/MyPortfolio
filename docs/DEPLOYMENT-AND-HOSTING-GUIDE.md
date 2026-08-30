# Deployment & Custom Domain Guide

This document provides step-by-step instructions for hosting and deploying Onuabuchi Chidera's portfolio for free with high performance and automatic SSL certificates.

---

## ⚡ Option 1: Deploy on Vercel *(Recommended)*

Vercel provides edge caching, global CDN delivery, and instantaneous rebuilds on every GitHub push.

### Steps:
1. Visit [**vercel.com**](https://vercel.com) and sign in using your GitHub account (`MelodyInMyHeart`).
2. Click the **"Add New..."** button in the top right corner and select **"Project"**.
3. Locate and import your repository: `MelodyInMyHeart/My-Portfolio-site`.
4. In the configuration window:
   - If your files are in the `portfolio-onuabuchi` folder, click **Edit** next to **Root Directory** and choose `portfolio-onuabuchi`.
   - Leave Framework Preset as **Other** (Static HTML).
5. Click **Deploy**.
6. Within 15 seconds, your site is live at `https://[your-project-name].vercel.app`.

---

## 🌐 Option 2: Deploy on Netlify

1. Go to [**app.netlify.com**](https://app.netlify.com) and log in with GitHub.
2. Click **"Add new site" > "Import an existing project"**.
3. Select **GitHub** and authorize `MelodyInMyHeart/My-Portfolio-site`.
4. Set **Base directory** to `portfolio-onuabuchi`.
5. Click **Deploy site**.

---

## 📄 Option 3: Enable GitHub Pages

1. Navigate to your repository: [https://github.com/MelodyInMyHeart/My-Portfolio-site](https://github.com/MelodyInMyHeart/My-Portfolio-site).
2. Go to **Settings > Pages** (in the left sidebar).
3. Under **Build and deployment > Source**, choose **Deploy from a branch**.
4. Set Branch to `main` and folder to `/ (root)`.
5. Click **Save**.
6. Your site will be hosted at:
   `https://melodyinmyheart.github.io/My-Portfolio-site/portfolio-onuabuchi/`

---

## 🏷️ Connecting a Custom Domain (e.g. `chidera.design` or `onuabuchi.com`)

1. Purchase your desired domain from Namecheap, Porkbun, or Google Domains/Squarespace.
2. In Vercel or Netlify, go to **Project Settings > Domains**.
3. Enter your domain (e.g. `chidera.design`).
4. Add the provided **CNAME** or **A Records** to your domain registrar's DNS settings:
   - **Type A**: `@` pointing to `76.76.21.21` (Vercel IP)
   - **Type CNAME**: `www` pointing to `cname.vercel-dns.com`
5. DNS propagates within 5-30 minutes, and Vercel will automatically provision a free SSL certificate.
