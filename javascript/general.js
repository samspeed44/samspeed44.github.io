
// Alerte dans la console lors d'une copie
//la fonction est appellée quand l'utilisateur copie grace à 'copy'
document.addEventListener('copy', function(event) { 
    console.warn("🔔 Attention : Le plagiat est interdit. Merci de respecter les droits d'auteur !");
});




// LOADER + DELAI
// Code exécuté quand le DOM est prêt
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a.chargement"); // Tous les liens avec la classe "chargement"
  const loader = document.getElementById("loader"); // Le loader à afficher

  // Pour chaque lien, on intercepte le clic
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault(); // Empêche la navigation immédiate

      const targetUrl = this.href; // URL vers laquelle on veut aller

      loader.classList.remove("hidden"); // Affiche le loader

      // Délai de 2 secondes avant redirection
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 2000);
    });
  });
});


