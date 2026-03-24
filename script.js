// Ouverture/fermeture des détails de cours
function toggle(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.open = !el.open;
}
// Validation simple du formulaire
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');
  if(form){
    form.addEventListener('submit', (e) => {
      const required = form.querySelectorAll('[required]');
      for (const r of required){ if(!r.value.trim()){ alert('Merci de remplir tous les champs obligatoires.'); r.focus(); e.preventDefault(); return; } }
    });
  }
});
