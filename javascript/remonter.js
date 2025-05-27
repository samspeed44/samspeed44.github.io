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

    // Remonte vers le haut
    btnTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
        });
    });
});
