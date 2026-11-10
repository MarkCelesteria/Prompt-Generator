export function format(task, sections, choice) {
  if (choice.startsWith('JSON')) {
    return JSON.stringify({ task, ...Object.fromEntries(sections) }, null, 2);
  }
  const plain = choice.startsWith('Plain');
  const head = plain ? `TASK\n${task}\n` : `# Task\n${task}\n`;
  const body = sections
    .map(([title, lines]) => {
      const heading = plain ? `\n${title.toUpperCase()}\n` : `\n## ${title}\n`;
      return heading + lines.map((line) => `- ${line}`).join('\n');
    })
    .join('\n');
  return `${head}${body}\n`;
}

export async function copyText(field) {
  try {
    await navigator.clipboard.writeText(field.value);
    return 'Copied';
  } catch (error) {
    field.select();
    return document.execCommand('copy') ? 'Copied' : 'Select and copy manually';
  }
}
