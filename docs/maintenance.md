# Maintenance Checklist

This document collects the operational notes for keeping the wallpaper automation healthy. The README stays focused on what the project is; this file is for upkeep.

## Daily Wallpaper Output

- `output/today.png` is the current wallpaper served by GitHub Pages.
- `npm run render` generates today's wallpaper, the next 7 days, archived output images, discarded draft candidates, and `output/render-summary.json`.
- `data/theme-history.json` tracks recent motif choices so fallback wallpapers avoid repeating the same visual language too often.
- Generated wallpaper history is kept on the `generated-wallpapers` branch.

## Holiday Cache

- `data/holiday-cache.js` is refreshed as a rolling future holiday window.
- Holiday data currently comes from Nager.Date, OpenHolidays, and curated cultural observances.
- Run this for the normal refresh path:

```bash
npm run refresh-holidays
```

- To generate a future temporary cache for content review:

```bash
npm run refresh-holidays -- --date YYYY-MM-DD --output ./tmp-cache.js --strict-providers
```

## Holiday Content Database

- `data/holiday-content.js` stores structured holiday names, display types, and short Chinese descriptions.
- Use gaps output to find entries that need better copy:

```bash
npm run content:gaps -- --limit 50
```

- Use `--legacy-only` when migrating old intro entries.
- Use `--cache ./tmp-cache.js` after generating a future window.

## Validation

Run these before treating a change as stable:

```bash
node --check theme-engine.js
node --check refresh-holiday-data.js
node --check render.js
npm run content:validate
npm run content:gaps:check
git diff --check
```

`npm run content:validate` checks for empty fields, TODO text, uncovered legacy intro keys, and risky duplicate lookup keys.

`npm run content:gaps:check` is the CI gate for the current holiday cache. It fails if provider data is missing, uncovered, or still relying on legacy intros.

## Coverage Scans

Use this when preparing the next batch of holiday descriptions:

```bash
npm run content:scan -- --start YYYY-MM-DD --windows 4 --report-json holiday-content-coverage.json
```

The scan writes ignored temporary files and reports missing or legacy-only content without overwriting the production cache.

## GitHub Actions

- The daily generation workflow should install Puppeteer's pinned Chrome before rendering.
- The content scan workflow validates the content database, scans future provider windows, and uploads text, JSON, and JS stub artifacts for the next content batch.
- Temporary caches from scans should not be committed.

## Theme Rules

- Chinese solar terms are intentionally not used as wallpaper themes.
- Fallback themes should stay available until holiday coverage is good enough to cover every date naturally.
- New motifs should be wired in both `theme-engine.js` and `refresh-holiday-data.js`, then added to fallback rotation if they are suitable for ordinary days.
