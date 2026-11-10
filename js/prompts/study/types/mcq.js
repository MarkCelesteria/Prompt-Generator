export default {
  "id": "mcq",
  "label": "Multiple choice",
  "description": "4 options, one answer",
  "defaultCount": 15,
  "group": "exam",
  "icon": "<path d=\"M5 7h.01M5 12h.01M5 17h.01M9 7h10M9 12h10M9 17h10\"/>",
  "rules": [
    "Exactly 4 choices; every choice has the same length, style and grammatical form",
    "Wrong choices are plausible, from the same category as the right one, and based on common mistakes",
    "No “all of the above” or “none of the above”",
    "Spread the correct answer evenly across positions A to D",
    "The question never repeats key words from the correct choice",
    "Choices are full-width tappable buttons, checked instantly (green correct, red wrong) and then locked"
  ]
};
