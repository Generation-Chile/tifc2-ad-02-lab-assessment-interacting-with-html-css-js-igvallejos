
document.getElementById("titulo").textContent = "Adiós"

document.getElementById("naranja").style.color = "orange"


const naranja = document.getElementById("naranja");

naranja.addEventListener("click", function() {
    naranja.style.color = "brown";
});
