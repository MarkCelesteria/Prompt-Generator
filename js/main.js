import { $, $$ } from './core/dom.js';
import { svg } from './core/icons.js';
import { initTheme } from './core/theme.js';
import { startRouter } from './core/router.js';
import { copyText } from './core/output.js';
import { open, reset } from './core/workspace.js';
import { PROMPTS } from './prompts/index.js';

const home = $('#home');
const view = $('#view');

function renderHome() {
  home.innerHTML = `<h2>Choose a prompt type</h2>
<p class="sm">Pick what you want Claude to make. You will get a ready-to-paste prompt.</p>
<div class="prompt-grid">${PROMPTS.map(
    (p) => `<button class="prompt-card" data-id="${p.id}">${svg(p.icon)}<b>${p.title}</b><span class="sm">${p.summary}</span></button>`
  ).join('')}</div>`;
  $$('.prompt-card', home).forEach((card) => {
    card.onclick = () => {
      location.hash = card.dataset.id;
    };
  });
}

function show(prompt) {
  const isHome = !prompt;
  home.hidden = !isHome;
  view.hidden = isHome;
  $('#bk').hidden = isHome;
  $('#ttl').textContent = prompt ? prompt.title : 'Prompt Generator';
}

initTheme();
$('#bk').innerHTML = svg('back');
$('#bk').onclick = () => {
  location.hash = '';
};
$('#cp').onclick = async () => {
  $('#st').textContent = await copyText($('#o'));
  setTimeout(() => ($('#st').textContent = ''), 2000);
};
$('#rs').onclick = reset;
renderHome();
startRouter(PROMPTS, {
  onHome: () => show(null),
  onOpen: (prompt) => {
    show(prompt);
    open(prompt);
  }
});

if ('serviceWorker' in navigator) {
  addEventListener('load', () => navigator.serviceWorker.register('sw.js'));
}
