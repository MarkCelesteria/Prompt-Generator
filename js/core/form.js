import { $ } from './dom.js';

const field = (id) => $(`#f_${id}`);

export const gv = (id) => field(id).value.trim();
export const gc = (id) => field(id).checked;
export const yes = (id, text) => (gc(id) ? [text] : []);

export const checks = (items, prefix) =>
  items
    .map(([id, text, on]) => `<label><input type="checkbox" id="f_${prefix}_${id}"${on ? ' checked' : ''}> ${text}</label>`)
    .join('');

function renderField(f) {
  switch (f.k) {
    case 'txt':
      return `<label>${f.l}<input type="text" id="f_${f.id}" placeholder="${f.p ?? ''}" value="${f.d ?? ''}"></label>`;
    case 'area':
      return `<label>${f.l}<textarea id="f_${f.id}" rows="${f.r ?? 3}" placeholder="${f.p ?? ''}"></textarea></label>`;
    case 'sel':
      return `<label>${f.l}<select id="f_${f.id}">${f.o.map((option, i) => `<option${i === (f.d ?? 0) ? ' selected' : ''}>${option}</option>`).join('')}</select></label>`;
    case 'num':
      return `<div class="row"><label for="f_${f.id}">${f.l}</label><input type="number" id="f_${f.id}" value="${f.d}" min="1"></div>`;
    default:
      return `<label><input type="checkbox" id="f_${f.id}"${f.d ? ' checked' : ''}> ${f.l}</label>`;
  }
}

export function fieldset(definition) {
  const node = document.createElement('fieldset');
  if (definition.id) node.id = definition.id;
  node.innerHTML = `<legend>${definition.lg}</legend>${(definition.f ?? []).map(renderField).join('')}${definition.html ?? ''}`;
  definition.custom?.(node);
  return node;
}
