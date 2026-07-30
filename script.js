/* 
1. EVENT-LISTENER FÜR DAS LADE-EREIGNIS
Dieser Befehl sagt dem Browser: "Warte mit dem Ausführen des Codes, bis das gesamte 
HTML-Dokument (DOM) vollständig geladen und aufgebaut wurde." Das verhindert Fehler, 
falls das Skript versucht, eine Box zu finden, die noch gar nicht im Browser existiert.
*/
document.addEventListener("DOMContentLoaded", () => {
    
    /* 
    2. ELEMENTE SUCHEN UND SPEICHERN
    Sucht auf der gesamten Website nach JEDEM Element, das die CSS-Klasse ".box" hat. 
    Diese Elemente werden als eine Liste (NodeList) in der Variablen "alleBoxen" gespeichert.
    */
    const alleBoxen = document.querySelectorAll('.box');

    /* 
    3. DIE LISTE DURCHLAUFEN
    Da es mehrere Boxen gibt (in deinem Fall drei), benutzen wir eine Schleife (forEach). 
    Dieser Befehl geht jede einzelne Box nacheinander durch, damit wir jede Box einzeln 
    ansprechen und steuern können. Das Wort "box" in den Klammern ist der Platzhalter für die aktuelle Box.
    */
    alleBoxen.forEach(box => {
        
        /* 
        4. CLICK-EVENT HINZUFÜGEN
        Wir hängen an die aktuelle Box ein "Ohr" (EventListener) an, das ununterbrochen 
        darauf horcht, ob der Nutzer mit der Maus oder dem Finger auf exakt diese Box klickt.
        */
        box.addEventListener('click', () => {
            
            /* 
            5. DIE KLASSE UMSCHALTEN (TOGGLE)
            Wenn der Klick passiert, schaut JavaScript im HTML-Code nach:
            - Hat die angeklickte Box die Klasse "aktiv" noch NICHT? -> Füge sie hinzu.
            - Hat die angeklickte Box die Klasse "aktiv" BEREITS? -> Lösche sie wieder heraus.
            Das ist der "Lichtschalter-Effekt", durch den die Box im CSS auf- und zuklappt.
            */
            box.classList.toggle('aktiv');
        });
    });
});