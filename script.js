document.addEventListener('DOMContentLoaded', function () {
    const userList = document.getElementById('userList');

    // Generează 200 de utilizatori și îi adaugă în listă
    for (let i = 0; i < 200; i++) {
        const user = document.createElement('div');
        user.classList.add('user');

        const userImage = document.createElement('img');
        userImage.src = 'https://via.placeholder.com/150'; // Poți înlocui cu link-uri către imagini reale

        const buttonInterested = document.createElement('button');
        buttonInterested.innerText = 'Vreau să fac schimb';
        buttonInterested.addEventListener('click', function () {
            // Logica pentru cazul când utilizatorul este interesat să facă schimb
            alert('Ai apăsat butonul "Vreau să fac schimb"');
        });

        const buttonNotInterested = document.createElement('button');
        buttonNotInterested.innerText = 'Nu vreau să fac schimb';
        buttonNotInterested.addEventListener('click', function () {
            // Logica pentru cazul când utilizatorul nu este interesat să facă schimb
            alert('Ai apăsat butonul "Nu vreau să fac schimb"');
        });

        user.appendChild(userImage);
        user.appendChild(buttonInterested);
        user.appendChild(buttonNotInterested);

        userList.appendChild(user);
    }
});
