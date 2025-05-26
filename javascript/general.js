
// Alerte dans la console lors d'une copie
//la fonction est appellée quand l'utilisateur copie grace à 'copy'
document.addEventListener('copy', function(event) { 
    console.warn("🔔 Attention : Le plagiat est interdit. Merci de respecter les droits d'auteur !");
});

// Horloge temps réel
function mettreAJourHorloge() {
  const maintenant = new Date();
  const heures = maintenant.getHours().toString().padStart(2, '0');
  const minutes = maintenant.getMinutes().toString().padStart(2, '0');
  const secondes = maintenant.getSeconds().toString().padStart(2, '0');
  document.getElementById('horloge').textContent = `${heures}:${minutes}:${secondes}`;
}

// Chronomètre temps passé
let secondesPassees = 0;
function mettreAJourChrono() {
  secondesPassees++;
  const heures = Math.floor(secondesPassees / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((secondesPassees % 3600) / 60).toString().padStart(2, '0');
  const secondes = (secondesPassees % 60).toString().padStart(2, '0');
  document.getElementById('chrono').textContent = `${heures}:${minutes}:${secondes}`;
}

// Initialisation
setInterval(mettreAJourHorloge, 1000);
setInterval(mettreAJourChrono, 1000);
mettreAJourHorloge();

document.addEventListener("DOMContentLoaded", function () {
  const lienEquipe = document.querySelector('a[href="apropos.html"]');

  if (lienEquipe) {
    lienEquipe.addEventListener("click", function (e) {
      const confirmation = confirm("Voulez-vous vraiment accéder à la page PRÉSENTATION DE L'ÉQUIPE ?");
      if (!confirmation) {
        e.preventDefault(); // Empêche la navigation
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll('.product-item');

  items.forEach(item => {
    item.addEventListener('click', function () {
      // Récupérer la couleur actuelle de fond (ancienne)
      const oldColor = window.getComputedStyle(item).backgroundColor;

      // Définir une nouvelle couleur au clic
      const newColor = '#87CEFA'; // Exemple : bleu clair (modifiable)

      // Appliquer la nouvelle couleur
      item.style.backgroundColor = newColor;

      // Afficher dans la console
      console.log(`✅ L'item a été cliqué. Ancienne couleur : ${oldColor}, nouvelle couleur : ${newColor}`);
    });
  });
});

