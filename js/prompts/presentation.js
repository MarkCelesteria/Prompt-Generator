import { gv, gc, yes } from '../core/form.js';

const fieldsets = [
  {
    "lg": "Presentation",
    "f": [
      {
        "k": "num",
        "id": "sn",
        "l": "Number of slides",
        "d": 10
      },
      {
        "k": "sel",
        "id": "sy",
        "l": "Style",
        "o": [
          "Clean and minimal",
          "Colorful",
          "Dark",
          "Academic"
        ],
        "d": 0
      },
      {
        "k": "sel",
        "id": "sa",
        "l": "Audience",
        "o": [
          "Classmates",
          "Teacher or panel",
          "General public"
        ],
        "d": 0
      },
      {
        "k": "chk",
        "id": "sp",
        "l": "Speaker notes on every slide",
        "d": 1
      },
      {
        "k": "chk",
        "id": "so",
        "l": "One idea per slide",
        "d": 1
      },
      {
        "k": "chk",
        "id": "sv",
        "l": "Diagrams and charts as vector graphics",
        "d": 1
      },
      {
        "k": "chk",
        "id": "ss",
        "l": "Summary and Q&A slide at the end",
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
          "PowerPoint (.pptx)",
          "Interactive HTML slides",
          "Outline in Markdown"
        ],
        "d": 0
      }
    ]
  }
];

export default {
  id: "presentation",
  title: "Presentation",
  summary: "Slide deck with a clean structure and speaker notes",
  icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M12 16v4M8 20h8\"/>",
  task: "Create a presentation from the files I provide.",
  fieldsets,
  build: ()=>[['Presentation',[gv('sn')+' slides','Style: '+gv('sy'),'Audience: '+gv('sa'),'Short text on slides; no walls of text'].concat(yes('sp','Add speaker notes to every slide'),yes('so','One idea per slide'),yes('sv','Draw diagrams and charts as accurate vector graphics'),yes('ss','End with a summary and Q&A slide'))],['Deliverable',['Build as: '+gv('dl')]]]
};
