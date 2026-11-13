# Perspectivity website concepts

Four mock-up directions for the new perspectivity.org, built on the Perspectivity Design System.

- `a/` Calm: business register, white space, black and red type. **Editable by partners, in English (`a/en/`) and Dutch (`a/nl/`); `a/` forwards to `a/en/`.**
- `b/` Egg window: photos in the egg, patterns, light support colours
- `c/` Navigator: the visitor starts from their own question, exuberant colour fields
- `d/` Business card: the current site tidied up into one calm page, with training registration from the first screen and nothing that moves. Dutch (`d/nl/`) and English (`d/en/`); `d/` forwards to `d/nl/`.

Live: https://perspectivity-org.github.io/perspectivity-website-concepts/ (not indexed by search engines).

## How it is built

- Concept A is one Astro template (`src/components/ConceptA.astro`) rendered twice: `src/pages/a/en/index.astro` (English) and `src/pages/a/nl/index.astro` (Dutch). It reads its texts and lists from `content/*.json`, where every text holds both languages: `{ "en": "...", "nl": "..." }`. Fixed interface words (buttons, menu, form labels) sit in the template.
- Concept D is one Astro template (`src/components/ConceptD.astro`, styles in `src/styles/d.css`) that reads the same content files as A, so edits in Pages CMS show up in both. Its fonts are self-hosted (`src/assets/fonts/`).
- Training registration on D (`public/d/form.js`): without a form service the form opens the visitor's email program with the registration ready to send to `registration.email` in `content/settings.json`. Fill in `registration.endpoint` (a form service that accepts a JSON POST, such as Formspree) and registrations are sent directly instead. `registration.privacyUrl` adds the link to the privacy statement.
- B, C, the overview page and all shared assets live unchanged in `public/`. Shared tokens: `public/assets/tokens.css`; team data for B and C: `public/assets/team.js`.
- Every push to `main` builds the site with GitHub Actions and publishes it on GitHub Pages (`.github/workflows/deploy.yml`).
- Quicksand and Bitter stand in for Netto OT and Caecilia until a web font licence is arranged.

## Editing (Pages CMS)

Partners edit concept A at https://app.pagescms.org, logging in with the email address they were invited with. No GitHub account needed.

Every text field shows English and Nederlands side by side. What they can edit, set in `.pages.yml`:

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
