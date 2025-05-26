

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.photo-cover').forEach(cover => {
    cover.addEventListener('click', () => {
      cover.style.opacity = '0';
      cover.style.pointerEvents = 'none'; // empêche d'y recliquer
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modal-text');
  const closeButton = document.querySelector('.close-button');

  const missionDescriptions = {
    "Offrir des produits de qualité": "Nous sélectionnons des noix de coco issues de filières responsables, garantissant fraîcheur et respect de l’environnement.",
    "Promouvoir la durabilité": "Notre objectif est de réutiliser chaque partie de la noix de coco pour limiter les déchets.",
    "Encourager la créativité": "Nous offrons des idées, tutoriels et matériaux pour transformer vos noix en objets uniques.",
    "Sensibiliser à l’écologie": "Par des ateliers et des contenus éducatifs, nous partageons des gestes écologiques du quotidien.",
    "Soutenir les communautés locales": "Nous collaborons avec des producteurs locaux pour un impact social et économique positif."
  };

  document.querySelectorAll('.mission-title').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      const title = item.textContent.replace(':', '').trim();
      modalText.textContent = missionDescriptions[title] || "Description non disponible.";
      modal.classList.remove('hidden');
    });
  });

  closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Fermer la modale si on clique en dehors du contenu
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
});