document.addEventListener("DOMContentLoaded", () => {
    let numeros = document.querySelectorAll(".tel");

    // Crée une instance audio
    let sonnerie = new Audio("video/ringtone.mp3");

    numeros.forEach(el => {
        el.addEventListener("copy", (e) => {
            let numero = el.getAttribute("data-num");

            setTimeout(() => {
                const confirmation = prompt(
                    `Si vous voulez appeler ce numéro : ${numero},\nentrez-le de nouveau dans le champ ci-dessous puis validez.`
                );

                    console.log(`Vous appelez ce numéro : ${numero}`);

                    // Joue la sonnerie
                    sonnerie.currentTime = 0;
                    sonnerie.play();

                    // Arrête la sonnerie après 5 secondes
                    setTimeout(() => {
                        sonnerie.pause();
                        sonnerie.currentTime = 0;
                    }, 5000);
                }, 100);
            });
        });
    });
