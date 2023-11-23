var volumeF = 1, estadoLigada = false, canal = 0;

function alternarEstado(){
    var televisao = document.getElementById("televisao");
    var canal = document.getElementById("canal");

    if (estadoLigada) {
        televisao.src = "imagens/branco2.jpg.jpg"; 
        estadoLigada = false;
    } else {
        televisao.src = "Imagens/netflix.jpg"; 
        canal.textContent = "1";
        estadoLigada = true;
    }
}
function aumentar(){
    volumeF = parseInt(document.getElementById("volume").textContent);
    if(volumeF >= 1 || volumeF == 0){
        volumeF++;
        document.getElementById("volume").textContent = volumeF;
        toggleVolumeBar();
    } else alert("Não é possível reduzir mais o volume.")

}
function reduzir(){
    volumeF = parseInt(document.getElementById("volume").textContent);
    if(volumeF >= 1){
        volumeF--;
        document.getElementById("volume").textContent = volumeF;
        toggleVolumeBar();
    } else alert("Não é possível reduzir mais o volume.")
}
function aumentarCanal(){
    canal = parseInt(document.getElementById("canal").textContent);
    if(canal >= 1 || canal == 0){
        canal++;
        controlarCanal(canal);
    } else alert("Não é possível reduzir mais o volume.")
}
function reduzirCanal(){
    canal = parseInt(document.getElementById("canal").textContent);
    if(canal >= 1 || canal == 0){
        canal--;
        controlarCanal(canal);
    } else alert("Não é possível reduzir mais o volume.")
}
function controlarCanal(canal2){
    switch (canal2){
        case 1:
            document.getElementById("canal").textContent = "1";
            document.getElementById("televisao").src="imagens/netflix.jpg";
            break;
        case 2:
            document.getElementById("canal").textContent = "2";
            document.getElementById("televisao").src="imagens/disney.jpeg";
            break;
        case 3:
            document.getElementById("canal").textContent = "3";
            document.getElementById("televisao").src="imagens/hbo-max.webp";
            break;
        case 4:
            document.getElementById("canal").textContent = "4";
            document.getElementById("televisao").src="imagens/prime.jpeg";
            break;
    }
}
function alterarVolume() {
    var volumeRange = document.getElementById("volumeRange");
    volumeF = volumeRange.value;
    document.getElementById("volume").textContent = volumeF;
}
function toggleVolumeBar() {
    var volumeBar = document.getElementById("volumeRange");
    var volumeNumber = document.getElementById("volume");

    volumeBar.style.display = "block";
    volumeNumber.style.display = "block";

    setTimeout(function () {
        volumeBar.style.display = "none";
        volumeNumber.style.display = "none";
    }, 2000);
}