import { gv, gc, yes } from '../core/form.js';

const fieldsets = [
  {
    "lg": "Reviewer",
    "f": [
      {
        "k": "sel",
        "id": "rf",
        "l": "Format",
        "o": [
          "Outline",
          "Cornell notes",
          "Cheat sheet (one page)",
          "Mind-map style outline"
        ],
        "d": 0
      },
      {
        "k": "sel",
        "id": "rl",
        "l": "Length",
        "o": [
          "Short (about 1 page per lesson)",
          "Medium (about 2 to 3 pages per lesson)",
          "Long (full detail)"
        ],
        "d": 1
      },
      {
        "k": "chk",
        "id": "rk",
        "l": "Key terms",
        "d": 1
      },
      {
        "k": "chk",
        "id": "rm",
        "l": "Formulas",
        "d": 0
      },
      {
        "k": "chk",
        "id": "rt",
        "l": "Comparison tables",
        "d": 1
      },
      {
        "k": "chk",
        "id": "rn",
        "l": "Memory aids",
        "d": 1
      },
      {
        "k": "chk",
        "id": "rq",
        "l": "Likely exam questions at the end",
        "d": 0
      }
    ]
  },
  {
    "lg": "Deliverable",
    "f": [
      {
        "k": "sel",
        "id": "dl",
        "l": "Build as",
        "o": [
          "Printable HTML (A4 friendly)",
          "Markdown",
          "Plain text"
        ],
        "d": 0
      }
    ]
  }
];

export default {
  id: "reviewer",
  title: "Reviewer / Summary",
  summary: "Outline, Cornell notes or a one-page cheat sheet",
  icon: "<path d=\"M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01\"/>",
  task: "Create a reviewer from the files I provide.",
  fieldsets,
  build: ()=>[['Reviewer',['Format: '+gv('rf'),'Length: '+gv('rl'),'Keep every point relevant to the lessons; no filler'].concat(yes('rk','Include key terms'),yes('rm','Include formulas with variables and units'),yes('rt','Include comparison tables'),yes('rn','Include memory aids'),yes('rq','End each lesson with likely exam questions'))],['Deliverable',['Build as: '+gv('dl'),'Light and dark friendly, vector icons only']]]
};
