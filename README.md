# Prompt Generator

An installable web app that builds ready-to-paste prompts for AI assistants. Pick what you want made, answer a few options, and copy the prompt it writes for you. The prompt changes live as you change your answers.

No build step, no dependencies, no account. Everything runs in the browser and your settings stay on your device.

## Live demo

https://markcelesteria.github.io/Prompt-Generator/

Open it in your browser and install it as an app from there.

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
Prompt-Generator/
├── index.html
├── manifest.webmanifest
├── sw.js
├── css/
│   ├── base.css
│   └── components.css
├── icons/
└── js/
    ├── main.js
    ├── core/
    │   ├── common.js
    │   ├── dom.js
    │   ├── form.js
    │   ├── icons.js
    │   ├── output.js
    │   ├── router.js
    │   ├── storage.js
    │   ├── theme.js
    │   └── workspace.js
    └── prompts/
        ├── index.js
        ├── flashcards.js
        ├── reviewer.js
        ├── report.js
        ├── presentation.js
        ├── answer.js
        └── study/
            ├── index.js
            ├── build.js
            ├── math.js
            ├── options.js
            ├── panels.js
            └── types/
                ├── index.js
                └── mcq.js, tf.js, id.js, enum.js, fib.js, match.js,
                    scen.js, ord.js, cross.js, wc.js, ps.js, essay.js
```

Each prompt type lives in its own file under `js/prompts/`. Shared logic (form rendering, saving, output formatting, routing, theme) lives in `js/core/`.

## Edit a prompt type

- **Change a prompt's options or wording:** open its file in `js/prompts/`, for example `flashcards.js`.
- **Change the rules of a question type:** open its file in `js/prompts/study/types/`, for example `cross.js`. The `rules` list is what gets added to the prompt.
- **Change the shared study guide, general rules or interface options:** edit `js/prompts/study/options.js`.
- **Change the math and graph rules:** edit `js/prompts/study/math.js`.

## Add a new prompt type

1. Create `js/prompts/my-type.js` that exports an object with `id`, `title`, `summary`, `icon` (SVG path markup), `task`, `fieldsets` and `build`.
2. Import it and add it to the list in `js/prompts/index.js`.
3. Add the new file to `ASSETS` in `sw.js` and raise the cache version.

`fieldsets` is a list of `{ lg, f: [...] }` groups. Field kinds are `txt`, `area`, `sel`, `num` and `chk`. `build` returns a list of `[heading, [lines]]` sections. Read values with `gv(id)` and `gc(id)` from `core/form.js`.

## Add a question type to the study guide and exam

1. Copy any file in `js/prompts/study/types/` and change its `id`, `label`, `description`, `icon` and `rules`. Use `group: "puzzle"` for puzzle-style types.
2. Import it and add it to the list in `js/prompts/study/types/index.js`.
3. Add the file to `ASSETS` in `sw.js` and raise the cache version.

## Updating an installed copy

Installed copies cache the app files. After changing any file, raise the version in `sw.js`, for example `prompt-generator-v7`, so users receive the update.

## Browser support

Any current version of Chrome, Edge, Firefox or Safari. Installing as an app is supported in Chrome, Edge and Safari.

## License

Add a license file of your choice, such as MIT, before sharing the project publicly.
