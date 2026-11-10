import { $ } from './dom.js';
import { store } from './storage.js';
import { svg } from './icons.js';

const KEY = 'pg:theme';

export function initTheme() {
  const button = $('#th');
  const apply = (theme) => {
    document.documentElement.dataset.theme = theme;
    button.innerHTML = svg(theme === 'dark' ? 'sun' : 'moon');
    store.set(KEY, theme);
  };
  const preferred = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  apply(store.get(KEY) ?? preferred);
  button.onclick = () => apply(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
}
