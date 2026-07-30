document.addEventListener("DOMContentLoaded", () => {
    const alleBoxen = document.querySelectorAll('.box');

    alleBoxen.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.toggle('aktiv');
        });
    });
});