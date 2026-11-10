export default {
  "id": "cross",
  "label": "Crossword",
  "description": "Interactive grid",
  "defaultCount": 1,
  "group": "puzzle",
  "icon": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M9 3v18M15 3v18M3 9h18M3 15h18\"/>",
  "rules": [
    "Interactive grid where every word interlocks correctly, with no letter conflicts and correct numbering",
    "A resize bar (slider) scales the grid and cell size, and the size is remembered",
    "Across and Down clue lists; tapping a clue highlights its cells; arrow keys move through the grid",
    "Buttons: Check letter, Check word, Check all, Reveal word and Reset",
    "Every word comes from the lessons and no clue contains words from its answer",
    "A progress bar shows the percentage of correct cells; the grid state is saved and restored on refresh",
    "Add a Question Bank view listing every clue with its answer and lesson",
    "Tag each word with its lesson"
  ]
};
