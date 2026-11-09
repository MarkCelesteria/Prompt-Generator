# Prompt Generator

An installable web app that builds ready-to-paste prompts for AI assistants. Pick what you want made, answer a few options, and copy the prompt it writes for you. The prompt changes live as you change your answers.

No build step, no dependencies, no account. Everything runs in the browser and your settings stay on your device.

## Prompt types

| Type | What it prepares |
| --- | --- |
| Study Guide and Exam | A detailed study guide plus an exam with many question types, question rules, math and graph rules, and exam interface options |
| Flashcards | Term, question or cloze cards, with hints, examples and lesson tags |
| Reviewer / Summary | Outline, Cornell notes, cheat sheet or mind-map style outline |
| Essay / Report | Essays, reports and reflection papers with citation style and structure |
| Presentation | Slide deck with speaker notes, style and audience |

## Features

- Home screen with a choice of prompt types
- Output as Markdown, plain text or JSON
- Choose whether the AI uses only your files, verifies with the internet, or adds internet research
- Include all lessons in your files, or list only the lessons you want
- Exam question types: multiple choice, true or false, identification, enumeration, fill in the blank, matching, scenario, sequencing, crossword, word connect, problem solving, short answer
- Built-in question rules, such as equal-length choices so the answer is never obvious
- Problem solving gets vertical step-by-step solutions, and graphs are requested as accurate SVG vectors
- Light and dark mode with vector icons
- Works offline after the first load
- Remembers your settings between visits

## Run locally

A service worker needs `localhost` or HTTPS, so do not open `index.html` directly from the file system.

```
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Install as an app

Open the site in Chrome, Edge or Safari, then use the install button in the address bar, or "Add to Home Screen" on your phone.

## Deploy to GitHub Pages

1. Push the project to a GitHub repository.
2. Go to Settings, then Pages.
3. Under Build and deployment, choose Deploy from a branch.
4. Select the main branch and the root folder, then save.

All paths are relative, so it works from a repository subpath.

## Project structure

```
prompt-generator/
├── index.html
├── styles.css
├── app.js
├── manifest.webmanifest
├── sw.js
└── icons/
    ├── icon.svg
    ├── icon-192.png
    ├── icon-512.png
    └── icon-maskable-512.png
```

## Add a new prompt type

1. In `app.js`, add an icon path to `ICON`.
2. Add an entry to `CARDS` with an id, title and short description.
3. Add a matching entry to `GEN` with `t` (title), `task`, `fs` (form fieldsets) and `b` (a function returning the prompt sections).

The Study Guide and Exam generator has its own form in `index.html` and is built separately from `GEN`.

## Updating an installed copy

Installed copies cache the app files. After changing any file, raise the version in `sw.js`, for example `prompt-generator-v3`, so users receive the update.

## Browser support

Any current version of Chrome, Edge, Firefox or Safari. Installing as an app is supported in Chrome, Edge and Safari.

## License

Add a license file of your choice, such as MIT, before sharing the project publicly.
