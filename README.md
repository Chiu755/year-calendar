# Year Calendar Wallpaper

An automated year-calendar wallpaper generator for iPhone. The project builds a dark illustrated calendar wallpaper every day, picks the most visually interesting holiday or cultural observance for that date, and publishes the current wallpaper as:

`output/today.png`

GitHub Actions handles the routine work: refreshing the rolling holiday cache, rendering today's wallpaper, generating the next 7 days, and keeping wallpaper history in the archive branch.

## How It Works

The daily theme comes from a ranked list of candidates:

- public holidays from Nager.Date
- holidays from OpenHolidays
- curated cultural and international observances
- seasonal fallback themes when no suitable holiday is available

Holiday names, display labels, and short Chinese descriptions are stored in the local content database so the rendered text stays consistent and readable.

The visual system uses reusable motif rules instead of hand-drawing every holiday. Each theme selects a motif, palette, and semantic ornaments, then renders the final PNG through the canvas-based wallpaper renderer.

## Automation

- `refresh-holidays` keeps `data/holiday-cache.js` updated as a rolling future window.
- `render` creates `output/today.png`, archives the next 7 days, and saves discarded candidate drafts.
- GitHub Pages serves `output/today.png` from `main`.
- Long-term generated wallpaper history is kept on the `generated-wallpapers` branch.

## Local Commands

```bash
npm run refresh-holidays
npm run render
npm run content:validate
npm run content:gaps:check
```

Useful content-maintenance commands:

```bash
npm run content:gaps -- --limit 50
npm run content:scan -- --start YYYY-MM-DD --windows 4 --report-json holiday-content-coverage.json
```

For the maintainer-oriented checklist, see [docs/maintenance.md](docs/maintenance.md).

## Notes

Chinese solar terms are intentionally not used as wallpaper themes. The project focuses on holidays, cultural observances, and fallback seasonal moods.
