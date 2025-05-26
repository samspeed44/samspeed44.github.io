document.addEventListener("DOMContentLoaded", () => {
    const btnTop = document.getElementById("backToTop");

    // Affiche le bouton si on a scrollé de plus de 200px
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    });

    // Défile vers le haut de façon fluide
    btnTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
        });
    });
});
