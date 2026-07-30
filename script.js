document.addEventListener("DOMContentLoaded", () => {
    const alleBoxLinks = document.querySelectorAll('.box-link');

    alleBoxLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Verhindert das sofortige, unschöne Springen zur neuen Website
            event.preventDefault(); 
            
            const box = link.querySelector('.box');
            const zielUhrl = link.getAttribute('href'); // Holt sich z.B. "academic.html"

            // Holt die exakte Position der Box auf dem aktuellen Bildschirm
            const position = box.getBoundingClientRect();

            // Übergibt die Start-Position an das CSS, damit sie von dort aus wächst
            box.style.setProperty('--box-top', position.top + 'px');
            box.style.setProperty('--box-left', position.left + 'px');
            box.style.setProperty('--box-width', position.width + 'px');
            box.style.setProperty('--box-height', position.height + 'px');

            // Aktiviert die CSS-Animation
            box.classList.add('aktiv');

            // Wartet exakt 400 Millisekunden (Dauer der Animation) und leitet dann weiter
            setTimeout(() => {
                window.location.href = zielUhrl;
            }, 400); 
        });
    });
});