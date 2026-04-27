const BC = document.getElementById("budget-calc");
const BS = document.getElementById("bio-shield");
const FCZ = document.getElementById("fcz-app");
const PE = document.getElementById("power-essay");
const RP = document.getElementById("research-paper");

if (BC && BS && FCZ && PE && RP) {
    BC.onclick = () => {
        window.location.href = "/pages/budget-calc.html";
    }

    BS.onclick = () => {
        window.location.href = "/pages/bio-shield.html";
    }

    FCZ.onclick = () => {
        window.location.href = "/pages/fcz-app.html";
    }

    PE.onclick = () => {
        window.location.href = "/pages/power-essay.html";
    }

    RP.onclick = () => {
        window.location.href = "/pages/research-paper.html";
    }
}