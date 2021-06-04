let send = document.getElementById('send');

const name = () => {
    let sayHello = document.getElementById('sayHello');
    let nameStorage = localStorage.getItem('nom');

    if(nameStorage == null) {
        sayHello.textContent = "Bonjour, a toi l'inconnu, merci de renseigner ton pseudo";
    }else{
        sayHello.textContent = `Bonjour ${nameStorage}`;
    }
}

const visit = () => {
    let visitDisplay = document.getElementById('visitDisplay');
    let visitCount = localStorage.getItem('visites');

    visitCount++;
    localStorage.setItem('visites', visitCount);
    visitDisplay.textContent = `Nombre de visites : ${visitCount}`;
}

send.addEventListener('click', () => {
    let pseudo = document.getElementById('pseudo').value;
    localStorage.setItem('nom', pseudo);
});

name();
visit();