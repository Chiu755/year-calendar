# Year Calendar Context

## Domain language

- **Wallpaper render surface** — the fixed canvas-sized surface used to compose one phone wallpaper.
- **Year calendar model** — the date math, month geometry, day states, payday markers, and yearly progress data for one render date.
- **Motif library** — reusable visual motifs plus their tags, captions, palettes, and renderer implementations.
- **Holiday theme** — the selected daily title, description, palette, motif, tags, priority, and source metadata.

## Architecture notes

- The year calendar model is intentionally separate from canvas drawing so layout rules can be tested without rendering pixels.
- Motifs should stay code-native and deterministic; external wallpaper imagery is intentionally out of scope unless a future decision records a controlled asset pipeline.
