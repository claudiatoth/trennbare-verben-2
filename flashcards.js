// ============================================
// FLASHCARDS — TRENNBARE VERBEN (TEIL 2) (refactor mai 2026)
// Claudia Toth · Annettes Deutschkurs · A2/B1 · 50 carduri
// Substantive cu Sg + Pl (regula 13) · Audio Hedda pre-generat WAV
// ⚠️ ZERO ghilimele interne — CAPS pentru emfază
// ============================================

const flashcardsData = [
    // ===== 8 PREFIX vor- =====
    { de: "sich vorstellen", ro: "a se prezenta · REFLEXIV (mich, dich, sich)", audio: "audio/cards/01-vorstellen.wav" },
    { de: "vorbereiten", ro: "a pregăti · regulat", audio: "audio/cards/02-vorbereiten.wav" },
    { de: "vorhaben", ro: "a plănui, a avea de gând · neregulat (haben TARE)", audio: "audio/cards/03-vorhaben.wav" },
    { de: "vorlesen", ro: "a citi cu voce tare (cuiva) · TARE (e to ie)", audio: "audio/cards/04-vorlesen.wav" },
    { de: "vorschlagen", ro: "a propune, a sugera · TARE (a to ä; vorgeschlagen)", audio: "audio/cards/05-vorschlagen.wav" },
    { de: "vorziehen", ro: "a prefera · TARE (zog vor; vorgezogen)", audio: "audio/cards/06-vorziehen.wav" },
    { de: "vorkommen", ro: "a se întâmpla, a apărea · TARE + SEIN", audio: "audio/cards/07-vorkommen.wav" },
    { de: "vorbeigehen", ro: "a trece pe lângă · TARE + SEIN", audio: "audio/cards/08-vorbeigehen.wav" },

    // ===== 6 PREFIX zu- =====
    { de: "zumachen", ro: "a închide · regulat (opus aufmachen)", audio: "audio/cards/09-zumachen.wav" },
    { de: "zuhören", ro: "a asculta atent · regulat + DATIV (mir, nu mich!)", audio: "audio/cards/10-zuhoeren.wav" },
    { de: "zuschauen", ro: "a privi, a urmări · regulat + DATIV", audio: "audio/cards/11-zuschauen.wav" },
    { de: "zustimmen", ro: "a fi de acord · regulat + DATIV", audio: "audio/cards/12-zustimmen.wav" },
    { de: "zunehmen", ro: "a crește, a se îngrășa · TARE (nahm zu)", audio: "audio/cards/13-zunehmen.wav" },
    { de: "zugeben", ro: "a admite, a recunoaște · TARE (e to i)", audio: "audio/cards/14-zugeben.wav" },

    // ===== 8 PREFIX mit- =====
    { de: "mitkommen", ro: "a veni cu, a însoți · TARE + SEIN", audio: "audio/cards/15-mitkommen.wav" },
    { de: "mitbringen", ro: "a aduce cu sine · MIXT (brachte mit)", audio: "audio/cards/16-mitbringen.wav" },
    { de: "mitnehmen", ro: "a lua cu sine · TARE (nahm mit; e to i)", audio: "audio/cards/17-mitnehmen.wav" },
    { de: "mitfahren", ro: "a merge cu vehicul · TARE + SEIN (a to ä)", audio: "audio/cards/18-mitfahren.wav" },
    { de: "mitmachen", ro: "a participa la · regulat", audio: "audio/cards/19-mitmachen.wav" },
    { de: "mithelfen", ro: "a ajuta împreună · TARE (e to i; half mit)", audio: "audio/cards/20-mithelfen.wav" },
    { de: "mitteilen", ro: "a comunica, a informa · regulat", audio: "audio/cards/21-mitteilen.wav" },
    { de: "mitarbeiten", ro: "a colabora, a lucra împreună · regulat", audio: "audio/cards/22-mitarbeiten.wav" },

    // ===== 5 PREFIX nach- =====
    { de: "nachdenken", ro: "a reflecta · MIXT (dachte nach) + ÜBER+Akk", audio: "audio/cards/23-nachdenken.wav" },
    { de: "nachfragen", ro: "a se interesa, a întreba · regulat", audio: "audio/cards/24-nachfragen.wav" },
    { de: "nachholen", ro: "a recupera (lecții, timp) · regulat", audio: "audio/cards/25-nachholen.wav" },
    { de: "nachmachen", ro: "a imita · regulat", audio: "audio/cards/26-nachmachen.wav" },
    { de: "nachschauen", ro: "a verifica, a se uita după · regulat", audio: "audio/cards/27-nachschauen.wav" },

    // ===== 4 PREFIX weiter- =====
    { de: "weitermachen", ro: "a continua · regulat", audio: "audio/cards/28-weitermachen.wav" },
    { de: "weitergehen", ro: "a merge mai departe · TARE + SEIN", audio: "audio/cards/29-weitergehen.wav" },
    { de: "weiterempfehlen", ro: "a recomanda · TARE (empfahl; e to ie)", audio: "audio/cards/30-weiterempfehlen.wav" },
    { de: "weitersagen", ro: "a transmite mai departe · regulat", audio: "audio/cards/31-weitersagen.wav" },

    // ===== 5 PREFIX weg- =====
    { de: "weggehen", ro: "a pleca · TARE + SEIN (ging weg)", audio: "audio/cards/32-weggehen.wav" },
    { de: "weglaufen", ro: "a fugi, a o lua la fugă · TARE + SEIN (a to ä)", audio: "audio/cards/33-weglaufen.wav" },
    { de: "wegnehmen", ro: "a lua de la cineva · TARE (e to i)", audio: "audio/cards/34-wegnehmen.wav" },
    { de: "wegwerfen", ro: "a arunca la gunoi · TARE (e to i; warf weg)", audio: "audio/cards/35-wegwerfen.wav" },
    { de: "wegbringen", ro: "a duce de acolo · MIXT (brachte weg)", audio: "audio/cards/36-wegbringen.wav" },

    // ===== 5 PREFIX zurück- =====
    { de: "zurückkommen", ro: "a se întoarce · TARE + SEIN (kam zurück)", audio: "audio/cards/37-zurueckkommen.wav" },
    { de: "zurückgehen", ro: "a merge înapoi · TARE + SEIN", audio: "audio/cards/38-zurueckgehen.wav" },
    { de: "zurückgeben", ro: "a înapoia, a returna · TARE (gab zurück; e to i) + Dat+Akk", audio: "audio/cards/39-zurueckgeben.wav" },
    { de: "zurückrufen", ro: "a suna înapoi · TARE (rief zurück)", audio: "audio/cards/40-zurueckrufen.wav" },
    { de: "zurückschicken", ro: "a trimite înapoi · regulat", audio: "audio/cards/41-zurueckschicken.wav" },

    // ===== 4 PREFIX hin- / her- =====
    { de: "hingehen", ro: "a se duce undeva · TARE + SEIN (DE LA vorbitor)", audio: "audio/cards/42-hingehen.wav" },
    { de: "hinsetzen", ro: "a se așeza · regulat REFLEXIV (sich)", audio: "audio/cards/43-hinsetzen.wav" },
    { de: "herkommen", ro: "a veni aici · TARE + SEIN (SPRE vorbitor)", audio: "audio/cards/44-herkommen.wav" },
    { de: "herbringen", ro: "a aduce aici · MIXT (brachte her)", audio: "audio/cards/45-herbringen.wav" },

    // ===== 2 PREFIX zusammen- =====
    { de: "zusammenarbeiten", ro: "a colabora, a lucra împreună · regulat", audio: "audio/cards/46-zusammenarbeiten.wav" },
    { de: "zusammenfassen", ro: "a rezuma · regulat", audio: "audio/cards/47-zusammenfassen.wav" },

    // ===== 3 SUBSTANTIVE Sg + Pl (regula 13) =====
    { de: "der Vorschlag · die Vorschläge", ro: "propunerea · propunerile (m + Umlaut, plural în -e)", audio: "audio/cards/48-vorschlag.wav" },
    { de: "der Mitarbeiter · die Mitarbeiter", ro: "colegul · colegii (m, plural identic)", audio: "audio/cards/49-mitarbeiter.wav" },
    { de: "die Zusammenarbeit", ro: "colaborarea (f, NUR Singular — abstract)", audio: "audio/cards/50-zusammenarbeit.wav" }
];

let currentCardIndex = 0;
let currentFlashAudio = null;

function buildFlashcards() {
    const c = document.getElementById('flashcards-container');
    if (!c) return;
    c.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 50 carduri Trennbare Verben (Teil 2)</strong> — 8 vor- + 6 zu- + 8 mit- + 5 nach- + 4 weiter- + 5 weg- + 5 zurück- + 4 hin/her + 2 zusammen- + 3 substantive Sg+Pl.<br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție Hedda. Folosește săgețile pentru navigare.
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
    const card = flashcardsData[currentCardIndex];
    const deEl = document.getElementById('flashcard-de');
    const roEl = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const fc = document.getElementById('flashcard');
    if (deEl) deEl.textContent = card.de;
    if (roEl) roEl.textContent = card.ro;
    if (counter) counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (fc) fc.classList.remove('flipped');
}

function flipCard() {
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcardsData.length;
    updateFlashcard();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    updateFlashcard();
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (currentFlashAudio) {
        currentFlashAudio.pause();
        currentFlashAudio.currentTime = 0;
    }
    if (card.audio) {
        currentFlashAudio = new Audio(card.audio);
        currentFlashAudio.play().catch(() => playWithTTS(card.de));
    } else {
        playWithTTS(card.de);
    }
}

function playWithTTS(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'de-DE';
        u.rate = 0.82;
        window.speechSynthesis.speak(u);
    }
}

buildFlashcards();
