# DevOps Automated Website Deployment (GitHub Actions)

45-Day Industrial Training – Junior DevOps Intern, Catalyst Programmers, Jaipur.

A React website that is **automatically tested, built and deployed** to GitHub Pages
every time code is pushed to `main`. No manual release steps.

## Pipeline

```
Developer → git push (main) → GitHub Actions → Test → Build → Deploy → Live website
```

| Step | Command / Action | Why |
|------|------------------|-----|
| Checkout | `actions/checkout@v4` | Gets the repo code onto the runner |
| Setup Node | `actions/setup-node@v4` (Node 18) | Installs the runtime |
| Install | `npm install` | Downloads dependencies |
| **Test** | `npm test` | Pipeline stops here if a test fails, so broken code never goes live |
| **Build** | `npm run build` | Creates optimised files in `dist/` |
| **Deploy** | `upload-pages-artifact` + `deploy-pages` | Replaces the live site |

Pull requests run Test + Build only; deployment happens only on a push to `main`.

## Run locally

```bash
npm install
npm run dev      # development server
npm test         # run tests
npm run build    # production build into dist/
```

## Put it online (one-time setup)

1. Create a GitHub repo named **DevOps-Automated-Website-Deployment** (must match `base` in `vite.config.js`;
   if you use another name, change it there).
2. Push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/DevOps-Automated-Website-Deployment.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source → GitHub Actions**.
4. Open the **Actions** tab. The first run starts by itself; when it turns green, your site is live at
   `https://<your-username>.github.io/DevOps-Automated-Website-Deployment/`.

## Demo for the presentation

1. Edit a line in `src/App.jsx` (e.g. the subtitle) and push.
2. Show the Actions tab: Test → Build → Deploy turn green with no manual action.
3. Refresh the site: the text, the **Commit** hash and **Built at** time have changed.
4. (Optional) Break a test on purpose, push, and show the pipeline fail and block the deploy.

## Docker (optional)

```bash
docker build -t devops-site .
docker run -p 8080:80 devops-site
# open http://localhost:8080/DevOps-Automated-Website-Deployment/
```

## Project structure

```
.github/workflows/deploy.yml   CI/CD pipeline (the DevOps engine)
src/App.jsx                    The web application
src/App.test.jsx               Automated tests run by the pipeline
vite.config.js                 Build config (base path, build metadata)
Dockerfile                     Container version
```
