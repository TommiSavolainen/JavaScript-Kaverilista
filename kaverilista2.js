let kaverilista = [];
let nappi = document.getElementById('btn');
nappi.addEventListener('click', lisaaKaveri);
function lisaaKaveri(event) {
    event.preventDefault();
    let teksti = document.getElementById('lisaaKaveriText').value;
    if (teksti.length == 0){
        alert('Täytyy antaa nimi!');
        return;
    }
    kaverilista.push(teksti);
    let uusiElementti = document.createElement('li');
    // let uusiElementtiteksti = document.createTextNode(teksti)
    uusiElementti.innerText = kaverilista[kaverilista.length - 1];
    // uusiElementti.appendChild(uusiElementtiteksti)
    uusiElementti.className = 'list-item';
    document.getElementById('kaveriLista').appendChild(uusiElementti);
    document.getElementById('lisaaKaveriText').value = '';
}
let poista = document.getElementById('poista');
poista.addEventListener('click', poistaKaveri);
function poistaKaveri(event) {
    event.preventDefault();
    let poistettavaNimi = document.getElementById('lisaaKaveriText').value;
    if (poistettavaNimi.length == 0){
        alert('Täytyy antaa nimi!');
        return;
    }
    let parentti = document.getElementById('kaveriLista')
    let kaverit = document.getElementsByClassName('list-item')
    for (let kaveri in kaverilista) {
        if (kaverilista[kaveri] == poistettavaNimi) {
            parentti.removeChild(kaverit[kaveri]);
            kaverilista.splice(kaveri, 1);
        }
    }
    document.getElementById('lisaaKaveriText').value = '';

}
let jarjesta = document.getElementById('jarjesta');
jarjesta.addEventListener('click', jarjestaKaverit);
function jarjestaKaverit(event){
    event.preventDefault();
    let kaverit = document.getElementsByClassName('list-item')
    kaverilista.sort();
    for (let kaveri in kaverilista){
        kaverit[kaveri].innerText = kaverilista[kaveri];
    }
}
