import { gv, gc } from '../../core/form.js';
import { types } from './types/index.js';
import { GUIDE_FEATURES, GENERAL_RULES, APP_INTERFACE, EXAM_INTERFACE } from './options.js';
import { mathRules } from './math.js';

const count = (type) => Number(gv(`n_${type.id}`));

function sectionTitle(exam, puzzle) {
  if (exam.length && puzzle.length) return 'Exam and puzzles';
  return exam.length ? 'Exam' : 'Puzzle activity';
}

function taskLine(guide, picked, title) {
  if (guide && picked.length) return `Create a study guide and ${title.toLowerCase()} from the files I provide.`;
  if (guide) return 'Create a study guide from the files I provide.';
  if (picked.length) return `Create ${title.toLowerCase()} from the files I provide.`;
  return 'Nothing is selected yet, so choose a study guide or a question type.';
}

export function build() {
  const picked = types.filter((type) => gc(`t_${type.id}`));
  const exam = picked.filter((type) => type.group !== 'puzzle');
  const puzzle = picked.filter((type) => type.group === 'puzzle');
  const guide = gc('sg');
  const title = sectionTitle(exam, puzzle);
  const sections = [];

  if (guide) {
    sections.push([
      'Study guide',
      [
        `Detail level: ${gv('det')}`,
        'Stay relevant to the lessons; no filler',
        'Cover every lesson fully, in order',
        ...GUIDE_FEATURES.filter(([id]) => gc(`sg_${id}`)).map(([, text]) => text)
      ]
    ]);
  }

  const math = mathRules({
    mathOn: gc('mth') || picked.some((type) => type.id === 'ps'),
    hasGuide: guide,
    mathKind: gv('mtx'),
    graphs: gc('gr'),
    graphKind: gv('grt')
  });
  if (math.length) sections.push(['Math, problem solving and graphs', math]);

  if (picked.length) {
    const total = picked.reduce((sum, type) => sum + count(type), 0);
    sections.push([
      title,
      [`Difficulty: ${gv('diff')}`, `Total per lesson: ${total}`, ...picked.map((type) => `${count(type)} × ${type.label} per lesson`)]
    ]);
    sections.push(['General question rules', GENERAL_RULES.filter((_, i) => gc(`gr_${i}`)).map(([text]) => text)]);
    picked.forEach((type) => {
      sections.push([`Rules for ${type.label}`, type.rules.filter((_, i) => gc(`r_${type.id}_${i}`))]);
    });
  }

  const showTabs = guide && picked.length;
  const interfaceRules = [
    ...APP_INTERFACE.filter(([id]) => gc(`ui_${id}`) && (id !== 'tabs' || showTabs)).map(([, text]) => text),
    ...(exam.length ? EXAM_INTERFACE.filter(([id]) => gc(`ui_${id}`)).map(([, text]) => text) : [])
  ];
  if (interfaceRules.length) sections.push(['Interface and design', interfaceRules]);

  sections.push(['Deliverable', [gv('del')]]);
  return { task: taskLine(guide, picked, title), sections };
}
