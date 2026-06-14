# Year Calendar Wallpaper

This branch contains the wallpaper renderer and the current published wallpaper.

- `output/today.png` is the latest wallpaper used by GitHub Pages.
- `data/holiday-cache.js` is refreshed automatically as a 90-day rolling holiday window from all Nager.Date public-holiday countries, OpenHolidays, and curated cultural observances.
- `data/holiday-content.js` stores structured holiday names, types, and Chinese descriptions; run `npm run content:gaps -- --limit 50` to find missing descriptions, add `--legacy-only` to migrate old intro entries, or pass `--cache ./tmp-cache.js` after generating a future window with `npm run refresh-holidays -- --date YYYY-MM-DD --output ./tmp-cache.js --strict-providers`.
- `npm run content:validate` checks the structured holiday content database for empty fields, TODO text, uncovered legacy intro keys, and risky duplicate lookup keys.
- `npm run content:gaps:check` is the CI gate for the current holiday cache: it fails if Nager/OpenHolidays provider data is missing, uncovered, or still relying on legacy intros.
- `npm run content:scan -- --start YYYY-MM-DD --windows 4 --report-json holiday-content-coverage.json` scans multiple future provider windows into ignored temp files and reports missing or legacy-only content without overwriting the production cache.
- `.github/workflows/scan-holiday-content.yml` validates the content database, runs the same coverage scan in GitHub Actions, and uploads text, JSON, and JS stub artifacts for the next content batch; it never commits temporary caches.
- Chinese solar terms are not used as wallpaper themes.
- `data/theme-history.json` tracks recent motif choices so generated wallpapers vary over time.
- Generated wallpaper history lives on the `generated-wallpapers` branch.
