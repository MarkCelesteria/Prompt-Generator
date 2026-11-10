import { gv, gc, yes } from '../core/form.js';

const fieldsets = [
  {
    "lg": "Flashcards",
    "f": [
      {
        "k": "sel",
        "id": "cf",
        "l": "Card format",
        "o": [
          "Term and definition",
          "Question and answer",
          "Fill in the blank (cloze)",
          "Mixed"
        ],
        "d": 3
      },
      {
        "k": "num",
        "id": "cn",
        "l": "Cards per lesson",
        "d": 20
      },
      {
        "k": "sel",
        "id": "cd",
        "l": "Difficulty",
        "o": [
          "Easy",
          "Medium",
          "Hard",
          "Mixed"
        ],
        "d": 3
      },
      {
        "k": "chk",
        "id": "ch",
        "l": "Add a short memory hint on the back",
        "d": 1
      },
      {
        "k": "chk",
        "id": "cx",
        "l": "Add an example on the back",
        "d": 1
      },
      {
        "k": "chk",
        "id": "ct",
        "l": "Tag every card with its lesson",
        "d": 1
      },
      {
        "k": "chk",
        "id": "cv",
        "l": "Add a “View in lesson” link on every card",
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
          "Interactive HTML flashcard app",
          "Markdown list",
          "CSV for Anki import",
          "JSON"
        ],
        "d": 0
      }
    ]
  }
];

export default {
  id: "flashcards",
  title: "Flashcards",
  summary: "Term, question or cloze cards from your lessons",
  icon: "<rect x=\"3\" y=\"7\" width=\"14\" height=\"12\" rx=\"2\"/><path d=\"M7 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2\"/>",
  task: "Create flashcards from the files I provide.",
  fieldsets,
  build: ()=>[['Flashcards',['Format: '+gv('cf'),gv('cn')+' cards per lesson','Difficulty: '+gv('cd')].concat(yes('ch','Add a short memory hint on the back'),yes('cx','Add an example on the back'),yes('ct','Tag every card with its lesson'),yes('cv','Add a “View in lesson” link on every card'))],['Card rules',['One idea per card','Never repeat the answer’s key words on the front','Keep the back short and accurate','Cover every lesson evenly']],['Deliverable',['Build as: '+gv('dl')].concat(gv('dl').startsWith('Interactive')?['Flip animation, shuffle, mark known or unknown with a progress count, filter by lesson, light and dark mode with vector icons, mobile friendly, one self-contained file']:[])]]
};
