let kaverilista = [];
let nappi = document.getElementById('btn');
nappi.addEventListener('click', lisaaKaveri);
function lisaaKaveri(event){
    event.preventDefault();
    let teksti = document.getElementById('lisaaKaveriText').value;
    kaverilista.push(teksti);
    let uusiElementti = document.createElement('li');
    // let uusiElementtiteksti = document.createTextNode(teksti)
    uusiElementti.innerText = kaverilista[kaverilista.length-1];
    // uusiElementti.appendChild(uusiElementtiteksti)
    uusiElementti.className = 'list-item';
    document.getElementById('kaveriLista').appendChild(uusiElementti);
    console.log(kaverilista);
    document.getElementById('lisaaKaveriText').value = '';
}

