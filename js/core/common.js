import { $ } from './dom.js';
import { gv, gc } from './form.js';

const SOURCE_RULES = {
  files: 'Use ONLY the files I provide. Do not add outside information.',
  verify: 'Base everything on my files. Use the internet only to verify facts or fill small gaps.',
  web: 'Use my files as the main source and also research the internet to add depth.'
};

export const top = [
  {
    lg: 'Subject',
    f: [
      { k: 'txt', id: 'title', l: 'Title / file name', p: 'e.g. my_file_name' },
      { k: 'sel', id: 'level', l: 'Student level', o: ['High school', 'College', 'Professional'], d: 1 },
      { k: 'txt', id: 'lang', l: 'Language', d: 'English' }
    ]
  },
  {
    lg: 'Lessons',
    f: [
      {
        k: 'area',
        id: 'lessons',
        l: 'Specific lessons to include (one per line). Leave blank to include all lessons in the files',
        p: 'Leave blank for all lessons, or list only the ones you want'
      }
    ]
  },
  {
    lg: 'Sources',
    html: `<label><input type="radio" name="src" value="files" checked> Only my uploaded files</label>
<label><input type="radio" name="src" value="verify"> My files first, internet only to verify or fill gaps</label>
<label><input type="radio" name="src" value="web"> My files plus internet research for extra depth</label>
<label><input type="checkbox" id="f_label" checked> Label content that did not come from my files</label>`
  }
];

export const bottom = [
  {
    lg: 'Output',
    f: [
      { k: 'sel', id: 'fmt', l: 'Prompt format', o: ['Markdown (easiest to paste)', 'Plain text', 'JSON (structured)'], d: 0 },
      { k: 'area', id: 'extra', l: 'Extra instructions', p: 'Anything else Claude should know' }
    ]
  }
];

export function commonSections() {
  const lessons = gv('lessons').split('\n').map((line) => line.trim()).filter(Boolean);
  const source = $('input[name=src]:checked')?.value ?? 'files';
  return {
    head: [
      [
        'Subject',
        [
          `Title and file name: ${gv('title') || 'Choose a fitting title based on the files'}`,
          lessons.length ? `Include ONLY these lessons: ${lessons.join('; ')}` : 'Include ALL lessons found in the files',
          `Student level: ${gv('level')}`,
          `Language: ${gv('lang') || 'English'}`
        ]
      ],
      ['Sources', [SOURCE_RULES[source], ...(gc('label') ? ['Clearly label any content that did not come from my files'] : [])]]
    ],
    tail: [['Extra instructions', [gv('extra') || 'None']]]
  };
}
