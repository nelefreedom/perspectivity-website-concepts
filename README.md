# Perspectivity website concepts

Three mock-up directions for the new perspectivity.org, built on the Perspectivity Design System.

- `a/` Calm: business register, white space, black and red type. **Editable by partners.**
- `b/` Egg window: photos in the egg, patterns, light support colours
- `c/` Navigator: the visitor starts from their own question, exuberant colour fields

Live: https://nelefreedom.github.io/perspectivity-website-concepts/ (not indexed by search engines).

## How it is built

- Concept A is an Astro page (`src/pages/a/index.astro`) that reads its texts and lists from `content/*.json`.
- B, C, the overview page and all shared assets live unchanged in `public/`. Shared tokens: `public/assets/tokens.css`; team data for B and C: `public/assets/team.js`.
- Every push to `main` builds the site with GitHub Actions and publishes it on GitHub Pages (`.github/workflows/deploy.yml`).
- Quicksand and Bitter stand in for Netto OT and Caecilia until a web font licence is arranged.

## Editing (Pages CMS)

Partners edit concept A at https://app.pagescms.org, logging in with the email address they were invited with. No GitHub account needed.

What they can edit, set in `.pages.yml`:

- Page texts: every title, introduction and text block, the quote, the toolbox methods and the contact details
- Training dates and trainings
- Projects, News and blogs
- Team, including photos (uploads go to `public/uploads/`)

Links and buttons stay fixed in the template. A save is live after about two minutes.

## Working locally

```
npm install
npm run dev
```

Then open http://localhost:4321/perspectivity-website-concepts/
