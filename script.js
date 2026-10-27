function toggleDesc(id) {
  const el = document.getElementById(id);
  const btn = el.previousElementSibling;
  const span = btn.querySelector('span');
  
  el.classList.toggle('show');
  span.textContent = el.classList.contains('show') ? '-' : '+';
}
