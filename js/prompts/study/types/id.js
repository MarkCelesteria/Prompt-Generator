export default {
  "id": "id",
  "label": "Identification",
  "description": "Type the answer",
  "defaultCount": 5,
  "group": "exam",
  "icon": "<circle cx=\"11\" cy=\"11\" r=\"6\"/><path d=\"M21 21l-5-5\"/>",
  "rules": [
    "Each item has exactly one correct answer of 1 to 3 words",
    "Typed answer with a Check button; ignore case and extra spaces and accept listed spelling variants",
    "The clue never contains words from the answer",
    "After checking, always show the accepted answer",
    "A hint button reveals only the first letter"
  ]
};
