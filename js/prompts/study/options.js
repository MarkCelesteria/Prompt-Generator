export const GUIDE_FEATURES = [
  ["ex","Real-life examples",1],
  ["tb","Comparison tables",1],
  ["gl","Key terms glossary",1],
  ["mn","Memory aids and mnemonics",1],
  ["cm","Commonly confused pairs / mistakes",1],
  ["dp","“Going deeper” explanations (labeled as beyond the sources)",1],
  ["sm","Summary at the end of each lesson",0]
];

export const GENERAL_RULES = [
  ["Tag every question with its lesson",1],
  ["Question wording never gives away the answer",1],
  ["Include application questions, not only recall",1],
  ["Every question stores an answer key and a short explanation",1],
  ["Add a Question Bank tab listing every question with its answer, filterable by lesson and type",0]
];

export const APP_INTERFACE = [
  ["tabs","Separate top navigation tabs for the Study Guide and the question section",1],
  ["th","Light and dark mode toggle using vector (SVG) icons, no emoji",1],
  ["resp","Mobile friendly, one self-contained file, no external libraries",1],
  ["prog","Save all progress (current question, answers, score, puzzle state, found words) in localStorage and restore it on refresh; show a progress bar for anything that has progress, with a Reset progress button",1],
  ["pick","Lesson picker: bordered pill buttons, never plain link text; centered and wrapping onto several rows with no horizontal scroll bar; the selected lesson is highlighted",1],
  ["cards","Menus for choosing a lesson or question type use cards with vector icons",1]
];

export const EXAM_INTERFACE = [
  ["one","One question per screen",1],
  ["inst","Answer is checked instantly (green for correct, red for wrong, correct one shown)",1],
  ["gate","Back is allowed, but Next stays locked until the current question is answered",1],
  ["modes","Start screen to choose lesson by lesson or randomized",1],
  ["view","The “View in lesson” button appears only after a question is answered, never before",1],
  ["res","Results screen with score and a review of missed questions",1],
  ["expl","Short explanation shown after each answer",0],
  ["shuf","Shuffle choices in randomized mode",1]
];
