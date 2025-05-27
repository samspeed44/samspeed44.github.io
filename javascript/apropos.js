// Quand toute la page est chargée (HTML + éléments)
document.addEventListener("DOMContentLoaded", () => {
  
  // Image masquée
  document.querySelectorAll('.photo-cover').forEach(image => {
    image.addEventListener('click', () => {
      image.style.opacity = '0';           // rend l'image complètement transparente
      image.style.pointerEvents = 'none';  // empêche qu'on puisse cliquer à nouveau dessus
    });
  });

  // Fenêtre pop up
  const modal = document.getElementById('modal');             // fenêtre modale
  const modalText = document.getElementById('modal-text');    // zone de texte dans la modale
  const closeBtn = document.querySelector('.close-button');   // bouton "fermer" dans la modale

  // Liste des textes à afficher selon le titre cliqué
  const textes = {
    "Offrir des produits de qualité": "Nous sélectionnons des cocos issues de filières responsables.",
    "Promouvoir la durabilité": "Nous réutilisons chaque partie de la noix de coco.",
    "Encourager la créativité": "Des idées et outils pour vos créations originales.",
    "Sensibiliser à l'écologie": "Nous partageons des gestes simples pour préserver la planète.",
    "Soutenir les communautés locales": "Nous travaillons avec des producteurs locaux."
  };

  // Pour chaque élément qui a la classe "mission-title"
  document.querySelectorAll('.mission-title').forEach(titre => {
    titre.style.cursor = 'pointer'; // change le curseur pour montrer que c'est cliquable

    titre.addEventListener('click', () => {
      const nom = titre.textContent.replace(':', '').trim(); // récupère le texte du titre sans les deux-points
      modalText.textContent = textes[nom] || "Pas de description disponible."; // insère le bon texte dans la modale
      modal.classList.remove('hidden'); // affiche la modale (elle était masquée par défaut)
    });
  });

  // Quand on clique sur la croix de fermeture de la modale
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden'); // on cache la modale
  });

  // Si on clique en dehors du contenu de la modale (sur le fond blanc semi-transparent)
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.add('hidden'); // on ferme aussi la modale
    }
  });
});
