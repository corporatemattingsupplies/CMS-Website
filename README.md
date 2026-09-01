# Corporate Matting Supplies website

This is a framework-free static website. It uses only HTML, CSS, and a small amount of JavaScript.

## Files

- `index.html` — website content and structure
- `styles.css` — all visual styling and responsive layouts
- `script.js` — mobile navigation and automatic footer year
- `_headers` — recommended Cloudflare security headers
- `.gitignore` — common local files Git should ignore

## Preview locally

You can double-click `index.html` to open it in a browser. For a more accurate local preview, run a simple web server from this directory:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Upload to GitHub

1. Create a new empty repository on GitHub.
2. Extract this ZIP.
3. Upload all files inside the `cms-static-website` folder to the repository root.
4. Commit the files to the `main` branch.

## Deploy with Cloudflare Pages

1. Sign in to the Cloudflare dashboard.
2. Open **Workers & Pages** and select **Create application**.
3. Choose **Pages** and connect your GitHub repository.
4. Use these deployment settings:
   - Production branch: `main`
   - Framework preset: `None`
   - Build command: leave blank
   - Build output directory: `/`
5. Save and deploy.

Cloudflare will provide a temporary `pages.dev` address. Each future commit to `main` will deploy automatically.

## Connect a custom domain

In the Cloudflare Pages project, open **Custom domains**, select **Set up a custom domain**, and enter your domain. If the domain already uses Cloudflare DNS, Cloudflare can create the required DNS record automatically.

## Editing content

Most text, phone numbers, email addresses, and links are inside `index.html`. Colours and layout are in `styles.css`.
