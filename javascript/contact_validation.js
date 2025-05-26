// Quand la page est entièrement chargée
document.addEventListener("DOMContentLoaded", () => {
    // Récupération des champs et éléments du formulaire
    const form = document.querySelector("form");
    const prenomNom = document.getElementById("prenomnom");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const submitBtn = document.getElementById("submitBtn");
    const confirmation = document.getElementById("confirmation-message");

    // Récupération des zones d’erreurs associées à chaque champ
    const errorPN = document.getElementById("prenomnom-error");
    const errorEmail = document.getElementById("email-error");
    const errorMsg = document.getElementById("message-error");

    // Fonction pour vérifier si tous les champs sont valides
    function verifierChamps() {
        let toutEstValide = true;

        // Vérifie le champ Prénom Nom (doit contenir deux mots)
        if (!prenomNom.value.trim().match(/^[^\s]+ [^\s]+$/)) {
            errorPN.textContent = "Entrez Prénom + Nom séparés par un espace.";
            toutEstValide = false;
        } else {
            errorPN.textContent = "";
        }

        // Vérifie le champ Email (doit contenir @ et .)
        if (!email.value.includes("@") || !email.value.includes(".")) {
            errorEmail.textContent = "Email invalide.";
            toutEstValide = false;
        } else {
            errorEmail.textContent = "";
        }

        // Vérifie le champ Message (entre 20 et 1000 caractères)
        const long = message.value.trim().length;
        if (long < 20 || long > 1000) {
            errorMsg.textContent = "Le message doit contenir entre 20 et 1000 caractères.";
            toutEstValide = false;
        } else {
            errorMsg.textContent = "";
        }

        // Active ou désactive le bouton Envoyer
        submitBtn.disabled = !toutEstValide;
        return toutEstValide;
    }

    // Vérifie les champs dès qu’on tape quelque chose
    prenomNom.addEventListener("input", verifierChamps);
    email.addEventListener("input", verifierChamps);
    message.addEventListener("input", verifierChamps);

    // Quand on soumet le formulaire
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // On empêche l’envoi réel

        // Si tout est bon, on affiche un message de confirmation
        if (verifierChamps()) {
            confirmation.classList.remove("hidden"); // Affiche le message
            form.reset(); // Vide les champs
            submitBtn.disabled = true; // Désactive le bouton

            // Cache le message après 5 secondes
            setTimeout(() => {
                confirmation.classList.add("hidden");
            }, 5000);
        }
    });
});
