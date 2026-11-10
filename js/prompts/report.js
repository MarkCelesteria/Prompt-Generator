import { gv, gc, yes } from '../core/form.js';

const fieldsets = [
  {
    "lg": "Paper",
    "f": [
      {
        "k": "sel",
        "id": "pt",
        "l": "Type",
        "o": [
          "Essay",
          "Report",
          "Reflection paper",
          "Reaction paper",
          "Position paper"
        ],
        "d": 0
      },
      {
        "k": "txt",
        "id": "pq",
        "l": "Main question or thesis topic",
        "p": "What should the paper be about?"
      },
      {
        "k": "num",
        "id": "pw",
        "l": "Target word count",
        "d": 1000
      },
      {
        "k": "sel",
        "id": "tn",
        "l": "Tone",
        "o": [
          "Academic",
          "Formal",
          "Simple and clear"
        ],
        "d": 0
      },
      {
        "k": "sel",
        "id": "cs",
        "l": "Citation style",
        "o": [
          "APA 7",
          "MLA 9",
          "Chicago",
          "No citations"
        ],
        "d": 0
      },
      {
        "k": "chk",
        "id": "po",
        "l": "Show an outline first",
        "d": 1
      },
      {
        "k": "chk",
        "id": "pth",
        "l": "Include a clear thesis statement",
        "d": 1
      },
      {
        "k": "chk",
        "id": "pc",
        "l": "Include a counterargument and response",
        "d": 0
      },
      {
        "k": "chk",
        "id": "pr",
        "l": "Add a reference list",
        "d": 1
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
          "Word document (.docx)",
          "Markdown",
          "Plain text"
        ],
        "d": 0
      }
    ]
  }
];

export default {
  id: "report",
  title: "Essay / Report",
  summary: "Essays, reports and reflection papers with citations",
  icon: "<path d=\"M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"/><path d=\"M14 3v6h6M8 13h8M8 17h6\"/>",
  task: "Write a paper from the files I provide.",
  fieldsets,
  build: ()=>[['Paper',['Type: '+gv('pt'),'Topic: '+(gv('pq')||'Choose a fitting topic from the files'),'About '+gv('pw')+' words','Tone: '+gv('tn'),'Citation style: '+gv('cs'),'Use original wording; do not copy from the sources'].concat(yes('po','Show an outline first'),yes('pth','Include a clear thesis statement'),yes('pc','Include a counterargument and response'),yes('pr','Add a reference list'))],['Deliverable',['Build as: '+gv('dl')]]]
};
