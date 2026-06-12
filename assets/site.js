
document.addEventListener('input', (event) => {
  if (!event.target.matches('[data-card-search]')) return;
  const query = event.target.value.trim().toLowerCase();
  const cards = [...document.querySelectorAll('[data-card]')];
  let shown = 0;
  for (const card of cards) {
    const match = card.textContent.toLowerCase().includes(query);
    card.style.display = match ? '' : 'none';
    if (match) shown++;
  }
  const count = document.querySelector('[data-visible-count]');
  if (count) count.textContent = `${shown} shown`;
});
