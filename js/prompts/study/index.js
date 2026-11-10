import { GUIDE_FEATURES } from './options.js';
import { questionCards, rulesPanel, interfacePanel, syncPanels } from './panels.js';
import { build } from './build.js';

export default {
  id: 'study',
  title: 'Study Guide and Exam',
  summary: 'Detailed study guide with a multi-type exam, rules and interface options',
  icon: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M19 19v2H6"/>',
  fieldsets: [
    {
      lg: 'Study guide',
      f: [
        { k: 'chk', id: 'sg', l: 'Include a study guide', d: 1 },
        { k: 'sel', id: 'det', l: 'Detail level', o: ['Concise', 'Detailed', 'Maximum detail, still relevant'], d: 2 },
        ...GUIDE_FEATURES.map(([id, l, d]) => ({ k: 'chk', id: `sg_${id}`, l, d }))
      ]
    },
    {
      lg: 'Math, problem solving and graphs',
      f: [
        { k: 'chk', id: 'mth', l: 'My lessons or questions include calculations / problem solving' },
        { k: 'txt', id: 'mtx', l: 'Kind of math (optional)', p: 'e.g. algebra, physics formulas, statistics' },
        { k: 'chk', id: 'gr', l: 'Include graphs or diagrams (drawn as accurate SVG vectors)' },
        { k: 'txt', id: 'grt', l: 'Kinds of graphs/diagrams (optional)', p: 'e.g. line graph, bar chart, free-body diagram' }
      ]
    },
    {
      lg: 'Questions',
      f: [
        {
          k: 'sel',
          id: 'diff',
          l: 'Difficulty',
          o: ['Easy', 'Medium', 'Hard', 'Mixed (20% easy, 40% medium, 40% hard)'],
          d: 3
        }
      ],
      custom: questionCards
    },
    { lg: 'Rules by question type', id: 'rules', custom: rulesPanel },
    { lg: 'Interface', custom: interfacePanel },
    {
      lg: 'Deliverable',
      f: [
        {
          k: 'sel',
          id: 'del',
          l: 'Build as',
          o: [
            'One interactive HTML file (study guide and questions as selected)',
            'Study guide only (HTML)',
            'Questions only (HTML)',
            'Study guide in Markdown and questions in JSON'
          ],
          d: 0
        }
      ]
    }
  ],
  build,
  ready: syncPanels
};
