import { $, $$ } from '../../core/dom.js';
import { gc, gv, checks } from '../../core/form.js';
import { svg } from '../../core/icons.js';
import { types } from './types/index.js';
import { GENERAL_RULES, APP_INTERFACE, EXAM_INTERFACE } from './options.js';

let active = 'general';

export const selectedTypes = () => types.filter((type) => gc(`t_${type.id}`));

function showTab() {
  const ids = selectedTypes().map((type) => type.id);
  if (active !== 'general' && !ids.includes(active)) active = 'general';
  $('#rules-empty').hidden = ids.length > 0;
  $$('.tab').forEach((tab) => {
    const key = tab.dataset.key;
    tab.hidden = !ids.length || (key !== 'general' && !ids.includes(key));
    tab.classList.toggle('on', key === active);
  });
  $$('.rule-panel').forEach((panel) => {
    panel.hidden = !ids.length || panel.dataset.key !== active;
  });
}

function updateTotal() {
  const total = selectedTypes().reduce((sum, type) => sum + Number(gv(`n_${type.id}`)), 0);
  $('#total').textContent = total ? `Total: ${total} questions per lesson` : '';
}

const card = (type) => `<label class="type-card"><input type="checkbox" id="f_t_${type.id}">${svg(type.icon)}<b>${type.label}</b><span class="sm">${type.description}</span><input type="number" class="count" min="1" max="100" id="f_n_${type.id}" value="${type.defaultCount}"></label>`;

export function questionCards(node) {
  node.insertAdjacentHTML(
    'beforeend',
    `<p class="sm">Pick the question types you want and how many per lesson. Everything is off until you turn it on.</p><div class="type-cards">${types.map(card).join('')}</div><p class="sm" id="total"></p>`
  );
  node.addEventListener('change', (event) => {
    const id = event.target.id;
    if (!id?.startsWith('f_t_')) return;
    if (event.target.checked) active = id.slice(4);
    showTab();
    updateTotal();
    if (event.target.checked) $('#rules').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  node.addEventListener('input', updateTotal);
}

export function rulesPanel(node) {
  const tabs = [{ id: 'general', label: 'General' }, ...types]
    .map((item) => `<button type="button" class="tab" data-key="${item.id}">${item.label}</button>`)
    .join('');
  const general = GENERAL_RULES.map(
    ([text, on], i) => `<label><input type="checkbox" id="f_gr_${i}"${on ? ' checked' : ''}> ${text}</label>`
  ).join('');
  const panels = types
    .map(
      (type) =>
        `<div class="rule-panel" data-key="${type.id}">${type.rules
          .map((rule, i) => `<label><input type="checkbox" id="f_r_${type.id}_${i}" checked> ${rule}</label>`)
          .join('')}</div>`
    )
    .join('');
  node.insertAdjacentHTML(
    'beforeend',
    `<p class="sm" id="rules-empty">Turn on a question type above to see its rules here.</p><div class="tabs">${tabs}</div><div class="rule-panel" data-key="general">${general}</div>${panels}`
  );
  node.addEventListener('click', (event) => {
    const tab = event.target.closest('.tab');
    if (!tab) return;
    active = tab.dataset.key;
    showTab();
  });
}

export const interfacePanel = (node) =>
  node.insertAdjacentHTML(
    'beforeend',
    `<p class="sm">App</p>${checks(APP_INTERFACE, 'ui')}<p class="sm">Exam flow (used only when exam-style questions are selected)</p>${checks(EXAM_INTERFACE, 'ui')}`
  );

export function syncPanels() {
  const first = selectedTypes()[0];
  active = first ? first.id : 'general';
  showTab();
  updateTotal();
}
