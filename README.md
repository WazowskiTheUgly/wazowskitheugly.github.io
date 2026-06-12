# Wazowski — Portfolio Website

Personal portfolio for Wazowski (Roblox Programmer & Game Designer).
Plain HTML/CSS/JS — no build tools, no dependencies. Edit a file, refresh the browser, done.

## Preview locally

Just open `index.html` in a browser (double-click it), or from this folder run:

```
start index.html
```

## How to edit content

| What | Where |
| --- | --- |
| Shipped games (cards with thumbnails) | `GAMES` list at the top of `script.js` |
| Video showcases (tank, weapon framework, etc.) | `PROJECTS` list at the top of `script.js` — `video` is the YouTube video ID (the part after `watch?v=`) |
| Bio, stats, experience, skills, contact info | `index.html` — each section is marked with a `<!-- ===== SECTION ===== -->` comment |
| Colors / theme | The `:root` variables at the top of `styles.css` |
| Game thumbnails | `assets/games/` — 768x432 PNGs pulled from Roblox |

To add a new game: copy one `{ ... }` block in the `GAMES` list, paste it, and edit the
values. Same for showcases in `PROJECTS`. Visit counts are a snapshot — bump the
`visits` numbers whenever you feel like it.

## How to publish (GitHub Pages, free hosting)

The site is designed for GitHub Pages. When ready:

```
gh repo create wazowskitheugly.github.io --public --source . --push
```

That's it — within a couple of minutes the site is live at
**https://wazowskitheugly.github.io** (repos named `<username>.github.io` are
automatically published by GitHub Pages from the `main` branch).

To update the live site after editing:

```
git add -A
git commit -m "Update portfolio"
git push
```
