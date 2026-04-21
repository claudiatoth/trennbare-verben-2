// ============================================
// FLASHCARDS - TRENNBARE VERBEN (TEIL 2)
// Claudia Toth · 55 verbe cu TTS
// ============================================

const flashcardsData = [
    // vor-
    { de: 'sich vorstellen', ro: 'a se prezenta' },
    { de: 'vorbereiten', ro: 'a pregăti' },
    { de: 'vorhaben', ro: 'a plănui / a avea de gând' },
    { de: 'vorlesen', ro: 'a citi cu voce tare' },
    { de: 'vorschlagen', ro: 'a sugera / a propune' },
    { de: 'vorziehen', ro: 'a prefera' },
    { de: 'vorkommen', ro: 'a se întâmpla / a apărea' },
    { de: 'vorbeigehen', ro: 'a trece pe lângă' },

    // zu-
    { de: 'zumachen', ro: 'a închide' },
    { de: 'zuhören', ro: 'a asculta atent' },
    { de: 'zuschauen', ro: 'a privi / a urmări' },
    { de: 'zustimmen', ro: 'a fi de acord' },
    { de: 'zunehmen', ro: 'a se îngrășa / a crește' },
    { de: 'zugeben', ro: 'a admite / a recunoaște' },

    // mit-
    { de: 'mitkommen', ro: 'a veni cu (cineva)' },
    { de: 'mitbringen', ro: 'a aduce cu sine' },
    { de: 'mitnehmen', ro: 'a lua cu sine' },
    { de: 'mitfahren', ro: 'a merge cu (vehicul)' },
    { de: 'mitmachen', ro: 'a participa' },
    { de: 'mithelfen', ro: 'a ajuta împreună' },
    { de: 'mitteilen', ro: 'a comunica / a informa' },
    { de: 'mitarbeiten', ro: 'a colabora' },

    // nach-
    { de: 'nachdenken', ro: 'a reflecta' },
    { de: 'nachfragen', ro: 'a se interesa' },
    { de: 'nachholen', ro: 'a recupera (lecții, timp)' },
    { de: 'nachmachen', ro: 'a imita' },
    { de: 'nachschauen', ro: 'a verifica / a se uita' },
    { de: 'nachsprechen', ro: 'a repeta după cineva' },

    // weiter-
    { de: 'weitermachen', ro: 'a continua' },
    { de: 'weitergehen', ro: 'a merge mai departe' },
    { de: 'weiterfahren', ro: 'a merge mai departe (vehicul)' },
    { de: 'weitersagen', ro: 'a transmite mai departe' },
    { de: 'weiterempfehlen', ro: 'a recomanda' },

    // weg-
    { de: 'weggehen', ro: 'a pleca' },
    { de: 'wegfahren', ro: 'a pleca (cu vehicul)' },
    { de: 'weglaufen', ro: 'a fugi' },
    { de: 'wegnehmen', ro: 'a lua de la cineva' },
    { de: 'wegwerfen', ro: 'a arunca la gunoi' },
    { de: 'wegbringen', ro: 'a duce (de aici)' },

    // zurück-
    { de: 'zurückkommen', ro: 'a se întoarce' },
    { de: 'zurückgehen', ro: 'a merge înapoi' },
    { de: 'zurückgeben', ro: 'a returna / a înapoia' },
    { de: 'zurückrufen', ro: 'a suna înapoi' },
    { de: 'zurückfahren', ro: 'a se întoarce cu vehicul' },
    { de: 'zurückschicken', ro: 'a trimite înapoi' },

    // hin- / her-
    { de: 'hingehen', ro: 'a se duce (acolo)' },
    { de: 'hinstellen', ro: 'a pune (acolo)' },
    { de: 'sich hinsetzen', ro: 'a se așeza (jos)' },
    { de: 'herkommen', ro: 'a veni (aici)' },
    { de: 'herbringen', ro: 'a aduce (aici)' },
    { de: 'hernehmen', ro: 'a lua (aducând aici)' },

    // zusammen-
    { de: 'zusammenarbeiten', ro: 'a colabora' },
    { de: 'zusammenkommen', ro: 'a se întâlni / a se aduna' },
    { de: 'zusammenfassen', ro: 'a rezuma' },
    { de: 'zusammenpassen', ro: 'a se potrivi' }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} verbe separabile cu prefixele vor-, zu-, mit-, nach-, weiter-, weg-, zurück-, hin-, her-, zusammen-.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție germană automată.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const currentCard = flashcardsData[currentCardIndex];
    de.textContent = currentCard.de;
    ro.textContent = currentCard.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(card.de);
        utterance.lang = 'de-DE';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Browser-ul tău nu suportă Text-to-Speech.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    buildFlashcards();
});
