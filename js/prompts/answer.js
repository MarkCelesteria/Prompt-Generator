import { gv, gc, yes } from '../core/form.js';

const NW=[
['n1','Start directly with the answer; do not restate the question or announce what you will do'],
['n2','Avoid overused AI words: delve, tapestry, landscape, realm, testament, pivotal, crucial, intricate, multifaceted, nuanced, robust, seamless, leverage, harness, foster, underscore, showcase, navigate, embark, vibrant, comprehensive'],
['n3','Avoid stock phrases: “it is important to note”, “it is worth noting”, “in today’s fast-paced world”, “plays a crucial role”, “serves as a testament”, “in the realm of”'],
['n4','Avoid “it’s not just X, it’s Y” and “not only X but also Y”; state the point directly'],
['n5','Vary sentence length naturally; mix short and long sentences and let paragraphs differ in length and shape'],
['n6','Use few em dashes, none if possible; use commas, periods or parentheses'],
['n7','Do not force lists of three or pad with parallel phrases'],
['n8','Use specific details, names, numbers and examples from the sources instead of vague general claims'],
['n9','Prefer plain words over formal ones (use, show, help instead of utilize, demonstrate, facilitate); contractions are fine when the tone allows'],
['n10','No formulaic endings such as “In conclusion”, “Overall” or “Ultimately”; stop when the point is made'],
['n11','No filler openers or closers such as “Great question” or “I hope this helps”; no emojis'],
['n12','Keep hedging minimal; do not stack “may”, “can”, “might” and “often”'],
['n13','No bold, headers or bullets unless the format asks for them; do not start consecutive paragraphs with the same transition such as “Furthermore”, “Moreover” or “Additionally”'],
['n14','Do not invent facts, quotes or citations; use only what the sources support']
];

const fieldsets = [
  {
    "lg": "Answer",
    "f": [
      {
        "k": "area",
        "id": "aq",
        "l": "Question or task",
        "p": "Paste the question here"
      },
      {
        "k": "sel",
        "id": "af",
        "l": "Answer format",
        "o": [
          "One paragraph",
          "Two or three paragraphs",
          "Short answer (1 to 2 sentences)",
          "Bullet points",
          "Numbered steps",
          "Essay with introduction, body and conclusion",
          "Table"
        ],
        "d": 0
      },
      {
        "k": "num",
        "id": "aw",
        "l": "Target length in words",
        "d": 150
      },
      {
        "k": "sel",
        "id": "at",
        "l": "Tone",
        "o": [
          "Natural student voice",
          "Simple and clear",
          "Formal academic",
          "Conversational"
        ],
        "d": 0
      },
      {
        "k": "sel",
        "id": "ar",
        "l": "Reading level",
        "o": [
          "Grade 8",
          "Grade 10",
          "College",
          "Graduate"
        ],
        "d": 2
      },
      {
        "k": "chk",
        "id": "ae",
        "l": "Include one specific example from the sources",
        "d": 1
      },
      {
        "k": "chk",
        "id": "ac",
        "l": "Cite the sources I gave",
        "d": 0
      }
    ]
  },
  {
    "lg": "Natural writing rules",
    "f": [
      ...NW.map(([id, l]) => ({ k: "chk", id, l, d: 1 })),
      { "k": "txt", "id": "ax", "l": "Extra words or phrases to avoid", "p": "Add your own" }
    ]
  }
];

export default {
  id: "answer",
  title: "Written Answer",
  summary: "Paragraph or short answers that read naturally and avoid AI-sounding patterns",
  icon: "<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/><path d=\"M8 9h8M8 13h5\"/>",
  task: "Write an answer to my question using the files I provide.",
  fieldsets,
  build: ()=>[['Answer',['Question: '+(gv('aq')||'Use the question in my files'),'Format: '+gv('af'),'Length: about '+gv('aw')+' words','Tone: '+gv('at'),'Reading level: '+gv('ar')].concat(yes('ae','Include one specific example from the sources'),yes('ac','Cite the sources I gave'))],['Natural writing rules',NW.filter(r=>gc(r[0])).map(r=>r[1]).concat(gv('ax')?['Also avoid: '+gv('ax')]:[])]]
};
