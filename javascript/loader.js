document.addEventListener("DOMContentLoaded", () => {
    // Sélectionne tous les liens de navigation ayant la classe 'chargement'
    const liens = document.querySelectorAll("a.chargement");

    // Récupère l'élément du loader
    const loader = document.getElementById("loader");

    liens.forEach(lien => {
        lien.addEventListener("click", (e) => {
            e.preventDefault(); // Empêche la navigation immédiate
            const url = lien.getAttribute("href"); // Récupère l'URL cible

            // Affiche le loader en retirant la classe 'hidden'
            loader.classList.remove("hidden");

            // Simule un chargement de 2 secondes avant la navigation
            setTimeout(() => {
                // Crée un lien temporaire invisible
                const tempLink = document.createElement('a');
                tempLink.href = url;

                // Simule un vrai clic sur le lien, ce qui déclenche une vraie navigation
                tempLink.click();
            }, 2000);
        });
    });
});


// Dès que la nouvelle page est chargée, on cache le loader
    window.addEventListener('load', () => {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.classList.add("hidden");
        }
    });