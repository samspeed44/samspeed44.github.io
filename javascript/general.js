//Message dans la console si l'utilisateur copie quelque chose
document.addEventListener('copy', function () {
  console.warn("Le plagiat est interdit !");
});

//Affiche l'heure actuelle dans l'élément avec id="horloge"
function horloge() {
  let maintenant = new Date();
  let h = maintenant.getHours();
  let m = maintenant.getMinutes();
  let s = maintenant.getSeconds();

  // Ajoute un 0 devant si nécessaire
  if (h < 10) h = '0' + h;
  if (m < 10) m = '0' + m;
  if (s < 10) s = '0' + s;

  document.getElementById('horloge').textContent = h + ':' + m + ':' + s;
}

//Chrono qui augmente chaque seconde
let secondes = 0;
function chrono() {
  secondes++;

  let h = Math.floor(secondes / 3600);
  let m = Math.floor((secondes % 3600) / 60);
  let s = secondes % 60;

  if (h < 10) h = '0' + h;
  if (m < 10) m = '0' + m;
  if (s < 10) s = '0' + s;

  document.getElementById('chrono').textContent = h + ':' + m + ':' + s;
}

// Lance les deux fonctions chaque seconde
setInterval(horloge, 1000);
setInterval(chrono, 1000);
horloge(); // pour que l'horloge s'affiche sans attendre 1 seconde

// Quand la page est prête
document.addEventListener("DOMContentLoaded", function () {

  //Confirmation avant d'aller sur la page équipe
  let lien = document.querySelector('a[href="apropos.html"]');
  if (lien) {
    lien.addEventListener("click", function (e) {
      if (!confirm("Aller à la page ÉQUIPE ?")) {
        e.preventDefault(); // Annule le clic si on répond "non"
      }
    });
  }

  //Quand on clique sur un produit, il change de couleur
  let produits = document.querySelectorAll('.product-item');
  produits.forEach(function (p) {
    p.addEventListener('click', function () {
      let avant = window.getComputedStyle(p).backgroundColor;
      let apres = '#87CEFA'; // bleu clair
      p.style.backgroundColor = apres;
      console.log("Produit cliqué - Avant : " + avant + " / Après : " + apres);
    });
  });
});
