document.addEventListener("DOMContentLoaded", () => {
    const alleBoxen = document.querySelectorAll('.box');

    alleBoxen.forEach(box => {
        box.addEventListener('click', (event) => {
            
            // Wenn man direkt auf den "Mehr erfahren" Button klickt,
            // soll die Box NICHT einklappen, sondern der Link normal öffnen.
            if (event.target.classList.contains('weiter-btn')) {
                return; 
            }
            
            // Schaltet die Klasse "aktiv" um, um das CSS-Ausfahren zu starten
            box.classList.toggle('aktiv');
        });
    });
});