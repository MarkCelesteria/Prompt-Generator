export function startRouter(prompts, { onHome, onOpen }) {
  const route = () => {
    const prompt = prompts.find((item) => item.id === location.hash.slice(1));
    if (prompt) onOpen(prompt);
    else onHome();
    scrollTo(0, 0);
  };
  addEventListener('hashchange', route);
  route();
}
