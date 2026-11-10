import { $, $$ } from './dom.js';
import { store } from './storage.js';
import { fieldset, gv } from './form.js';
import { top, bottom, commonSections } from './common.js';
import { format } from './output.js';

let current = null;

const storageKey = (prompt) => `pg:${prompt.id}`;

function snapshot(form) {
  const data = {};
  $$('[id^="f_"]', form).forEach((node) => {
    data[node.id] = node.type === 'checkbox' ? node.checked : node.value;
  });
  const source = $('input[name=src]:checked', form);
  if (source) data.src = source.value;
  return data;
}

function restore(prompt, form) {
  const data = store.get(storageKey(prompt));
  if (!data) return;
  $$('[id^="f_"]', form).forEach((node) => {
    if (!(node.id in data)) return;
    if (node.type === 'checkbox') node.checked = data[node.id];
    else node.value = data[node.id];
  });
  if (data.src) $$('input[name=src]', form).forEach((radio) => (radio.checked = radio.value === data.src));
}

function update(prompt) {
  const result = prompt.build();
  const body = Array.isArray(result) ? { task: prompt.task, sections: result } : result;
  const common = commonSections();
  const text = format(body.task, [...common.head, ...body.sections, ...common.tail], gv('fmt'));
  $('#o').value = text;
  $('#ln').textContent = `${text.length} characters`;
  store.set(storageKey(prompt), snapshot($('#form')));
}

export function open(prompt) {
  current = prompt;
  const form = $('#form');
  form.replaceChildren(...[...top, ...prompt.fieldsets, ...bottom].map(fieldset));
  restore(prompt, form);
  form.oninput = form.onchange = () => update(prompt);
  prompt.ready?.(form);
  update(prompt);
}

export function reset() {
  if (!current) return;
  store.remove(storageKey(current));
  open(current);
}
