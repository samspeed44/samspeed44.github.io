function date() {
    const now = new Date();
    return now.toLocaleString(); // Format lisible avec heure et secondes
}

function updateClock() {
    document.getElementById("date-container").textContent = date();
}


setInterval(updateClock, 1000);

updateClock();
document.getElementById("date-container").textContent = date();


function main(){
    console.log(date());
}
main();

/*
function setTimeout(function() {
            window.location.href = "page-suivante.html";
            
        }, 5000);

*/  