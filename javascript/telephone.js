// Quand la page est chargée
document.addEventListener("DOMContentLoaded", function () {
  // On récupère tous les éléments contenant un numéro de téléphone
  let numeros = document.querySelectorAll(".tel");

  // Prépare un son de sonnerie
  let sonnerie = new Audio("video/ringtone.mp3");

  // Pour chaque numéro, événement lors d'une copie
  numeros.forEach(function (element) {
    element.addEventListener("copy", function () {
      // On prend le numero visible
      let numeroAffiche = element.textContent.trim();

      setTimeout(function () {
        // On demande à l’utilisateur de confirmer le numéro copié
        let confirmation = prompt(
          "Si vous voulez appeler ce numéro : " + numeroAffiche + 
          "\nEntrez-le de nouveau ci-dessous puis validez."
        );

        // Si l’utilisateur retape le numéro
          console.log("Vous appelez ce numéro : " + numeroAffiche);

          // On joue la sonnerie
          sonnerie.currentTime = 0;
          sonnerie.play();

          // On arrête la sonnerie après 5 secondes
          setTimeout(function () {
            sonnerie.pause();
            sonnerie.currentTime = 0;
          }, 5000);
      }, 100);
    });
  });
});
