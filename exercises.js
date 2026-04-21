// ============================================
// EXERCIȚII - TRENNBARE VERBEN (TEIL 2)
// Claudia Toth · 5 exerciții A2/B1
// ============================================

// ============================================
// EXERCIȚIUL 1: Completează prefixul potrivit
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Ich ______stelle mich vor.', correct: 'vor', hint: 'a se prezenta — prefix „în față"' },
    { id: 'b', sentence: 'Komm bitte ______! (spre mine)', correct: 'her', hint: 'mișcare spre vorbitor' },
    { id: 'c', sentence: 'Ich bringe einen Kuchen ______. (împreună cu mine)', correct: 'mit', hint: '„cu mine"' },
    { id: 'd', sentence: 'Ich denke noch über das Problem ______. (reflectez)', correct: 'nach', hint: '„nachdenken"' },
    { id: 'e', sentence: 'Mach bitte die Tür ______! (închide)', correct: 'zu', hint: '„zumachen"' },
    { id: 'f', sentence: 'Ich komme um 6 ______. (mă întorc)', correct: 'zurück', hint: '„înapoi"' },
    { id: 'g', sentence: 'Lauf nicht ______! (nu fugi departe)', correct: 'weg', hint: '„departe"' },
    { id: 'h', sentence: 'Wir arbeiten gut ______. (împreună)', correct: 'zusammen', hint: '„împreună"' },
    { id: 'i', sentence: 'Mach bitte ______! (continuă)', correct: 'weiter', hint: '„mai departe / continuare"' },
    { id: 'j', sentence: 'Geh bitte ______! (du-te acolo)', correct: 'hin', hint: 'mișcare DE LA vorbitor' }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Completează cu prefixul potrivit.</strong><br>
            Alegeri: <em>vor, zu, mit, nach, weiter, weg, zurück, hin, her, zusammen</em>.
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <input type="text" id="ex1-${item.id}" placeholder="prefix">
                    <small style="color: #6b7280; font-style: italic;">💬 ${item.hint}</small>
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const feedback = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = input.value.trim().toLowerCase().replace(/^-+|-+$/g, '');
        if (userAnswer === item.correct.toLowerCase()) {
            feedback.className = 'feedback correct';
            feedback.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 2: Präsens — separarea prefixului
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Peter ____ sich den Kollegen ____. (sich vorstellen)', correct: 'stellt ... vor', accept: ['stellt vor', 'stellt ... vor'] },
    { id: 'b', sentence: 'Anna ____ den Laptop ____. (mitbringen)', correct: 'bringt ... mit', accept: ['bringt mit', 'bringt ... mit'] },
    { id: 'c', sentence: 'Ich ____ dir ____. (zuhören)', correct: 'höre ... zu', accept: ['höre zu', 'höre ... zu', 'hoere zu', 'hoere ... zu'] },
    { id: 'd', sentence: 'Wir ____ am Projekt ____. (zusammenarbeiten)', correct: 'arbeiten ... zusammen', accept: ['arbeiten zusammen', 'arbeiten ... zusammen'] },
    { id: 'e', sentence: 'Er ____ den Fehler ____. (zugeben)', correct: 'gibt ... zu', accept: ['gibt zu', 'gibt ... zu'] },
    { id: 'f', sentence: 'Ich ____ um 6 ____. (zurückkommen)', correct: 'komme ... zurück', accept: ['komme zurück', 'komme ... zurück'] },
    { id: 'g', sentence: 'Sie ____ das Paket ____. (zurückschicken)', correct: 'schickt ... zurück', accept: ['schickt zurück', 'schickt ... zurück'] },
    { id: 'h', sentence: '____ du ins Kino ____? (mitkommen)', correct: 'Kommst ... mit', accept: ['kommst mit', 'kommst ... mit'] },
    { id: 'i', sentence: 'Ich ____ dir morgen das Buch ____. (mitbringen)', correct: 'bringe ... mit', accept: ['bringe mit', 'bringe ... mit'] },
    { id: 'j', sentence: '____ bitte ____! (weitermachen)', correct: 'Mach ... weiter', accept: ['mach weiter', 'mach ... weiter', 'mache weiter', 'mache ... weiter'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Conjugă în Präsens cu prefix separat la sfârșit.</strong><br>
            Format: <em>verb ... prefix</em>.
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <input type="text" id="ex2-${item.id}" placeholder="verb ... prefix">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const feedback = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = input.value.trim().toLowerCase().replace(/\s*\.\.\.\s*/g, ' ... ').replace(/\s+/g, ' ');
        const normalizedAccept = item.accept.map(a => a.toLowerCase().replace(/\s*\.\.\.\s*/g, ' ... ').replace(/\s+/g, ' '));
        if (normalizedAccept.includes(userAnswer)) {
            feedback.className = 'feedback correct';
            feedback.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 3: Multiple Choice — sens și opuse
// ============================================
const ex3Data = [
    { id: 'a', question: 'Care e opusul lui „weggehen"?', options: ['zurückkommen', 'mitkommen', 'vorgehen', 'weitergehen'], correct: 'zurückkommen', explanation: 'weggehen (a pleca) ↔ zurückkommen (a se întoarce)' },
    { id: 'b', question: 'Care verb înseamnă „a reflecta / a se gândi"?', options: ['nachmachen', 'nachsprechen', 'nachdenken', 'nachschauen'], correct: 'nachdenken', explanation: 'nachdenken = a reflecta. Literal: „a gândi după / în urmă".' },
    { id: 'c', question: '„Kommst du mit?" înseamnă:', options: ['Vii cu noi?', 'Vii înapoi?', 'Pleci?', 'Te duci acolo?'], correct: 'Vii cu noi?', explanation: 'mitkommen = a veni cu (cineva). O întrebare uzuală.' },
    { id: 'd', question: 'Care verb înseamnă „a prezenta / a se prezenta"?', options: ['vorstellen', 'vorlesen', 'vorschlagen', 'vorkommen'], correct: 'vorstellen', explanation: 'vorstellen = a (se) prezenta. „Ich stelle mich vor."' },
    { id: 'e', question: 'Care e opusul lui „aufmachen"?', options: ['zumachen', 'anmachen', 'abmachen', 'ausmachen'], correct: 'zumachen', explanation: 'aufmachen (a deschide) ↔ zumachen (a închide)' },
    { id: 'f', question: '„Komm her!" spune cineva care:', options: ['vrea să plece', 'te invită SPRE el', 'te trimite DEPARTE', 'nu vrea să vadă nimic'], correct: 'te invită SPRE el', explanation: 'her = spre vorbitor (aici, la mine). „Komm her!" = Vino aici!' },
    { id: 'g', question: '„Geh hin!" spune cineva care:', options: ['te invită spre el', 'te trimite DEPARTE (acolo)', 'vrea să plece cu tine', 'vrea să te urmărească'], correct: 'te trimite DEPARTE (acolo)', explanation: 'hin = de la vorbitor (acolo, departe). „Geh hin!" = Du-te acolo!' },
    { id: 'h', question: 'Care verb înseamnă „a returna / a înapoia"?', options: ['zurückgeben', 'zurückkommen', 'zurückrufen', 'zurückgehen'], correct: 'zurückgeben', explanation: 'zurückgeben = a înapoia (un obiect). „Gib mir mein Buch zurück!"' }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Alege răspunsul corect.</strong><br>
            Atenție la sens și la perechi opuse.
        </div>
    `;
    ex3Data.forEach((item, index) => {
        let optionsHTML = '';
        item.options.forEach((opt, i) => {
            optionsHTML += `
                <div class="mc-option">
                    <input type="radio" name="ex3-${item.id}" value="${opt}" id="ex3-${item.id}-${i}">
                    <label for="ex3-${item.id}-${i}">${opt}</label>
                </div>
            `;
        });
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.question}</label>
                    <div class="mc-options">${optionsHTML}</div>
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const selected = document.querySelector(`input[name="ex3-${item.id}"]:checked`);
        const feedback = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = selected ? selected.value : '';
        if (userAnswer === item.correct) {
            feedback.className = 'feedback correct';
            feedback.textContent = `${item.correct} — ${item.explanation}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct} — ${item.explanation}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 4: hin sau her?
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'Ich bin hier. Komm bitte ____! (spre mine)', correct: 'her', explanation: 'her = spre vorbitor' },
    { id: 'b', sentence: 'Das Buch liegt dort. Geh ____ und hol es! (departe de mine)', correct: 'hin', explanation: 'hin = de la vorbitor (acolo)' },
    { id: 'c', sentence: 'Wo willst du ____gehen? (unde vrei să te duci?)', correct: 'hin', explanation: 'hingehen = a se duce (într-un loc acolo)' },
    { id: 'd', sentence: 'Wo kommst du ____? (de unde vii?)', correct: 'her', explanation: 'herkommen = a veni (spre vorbitor)' },
    { id: 'e', sentence: 'Bring mir das Buch ____! (spre mine)', correct: 'her', explanation: 'herbringen = a aduce (spre vorbitor)' },
    { id: 'f', sentence: 'Stell die Vase dort____! (acolo, departe)', correct: 'hin', explanation: 'hinstellen = a pune (acolo)' },
    { id: 'g', sentence: 'Setz dich ____! (pe un scaun, nu contează direcția)', correct: 'hin', explanation: 'sich hinsetzen = a se așeza (jos, pe un scaun)' },
    { id: 'h', sentence: 'Wo nimmst du das Geld ____? (de unde — spre tine)', correct: 'her', explanation: 'hernehmen = a lua (dintr-un loc, aducând spre tine)' }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Completează cu „hin" sau „her".</strong><br>
            <strong>hin</strong> = DE LA vorbitor (acolo) · <strong>her</strong> = CĂTRE vorbitor (aici)
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <input type="text" id="ex4-${item.id}" placeholder="hin / her">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const feedback = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = input.value.trim().toLowerCase().replace(/^-+|-+$/g, '');
        if (userAnswer === item.correct.toLowerCase()) {
            feedback.className = 'feedback correct';
            feedback.textContent = `Corect: ${item.correct} — ${item.explanation}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct} — ${item.explanation}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 5: Traducere RO → DE
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Vin cu tine.', correct: 'Ich komme mit dir mit.', accept: ['ich komme mit dir mit.', 'ich komme mit dir mit', 'ich komme mit.', 'ich komme mit'] },
    { id: 'b', ro: 'Te sun înapoi.', correct: 'Ich rufe dich zurück.', accept: ['ich rufe dich zurück.', 'ich rufe dich zurück', 'ich rufe dich zurueck.', 'ich rufe dich zurueck'] },
    { id: 'c', ro: 'Pot să mă prezint?', correct: 'Darf ich mich vorstellen?', accept: ['darf ich mich vorstellen?', 'darf ich mich vorstellen'] },
    { id: 'd', ro: 'Adu un prieten cu tine!', correct: 'Bring einen Freund mit!', accept: ['bring einen freund mit!', 'bring einen freund mit', 'bringe einen freund mit!', 'bringe einen freund mit'] },
    { id: 'e', ro: 'Ascultă-mă, te rog!', correct: 'Hör mir bitte zu!', accept: ['hör mir bitte zu!', 'hör mir bitte zu', 'höre mir bitte zu!', 'hoere mir bitte zu', 'hoer mir bitte zu'] },
    { id: 'f', ro: 'Vino aici!', correct: 'Komm her!', accept: ['komm her!', 'komm her', 'komm bitte her!', 'komm bitte her'] },
    { id: 'g', ro: 'Mă întorc la 6.', correct: 'Ich komme um 6 zurück.', accept: ['ich komme um 6 zurück.', 'ich komme um 6 zurück', 'ich komme um sechs zurück.', 'ich komme um sechs zurück', 'ich komme um 6 zurueck.', 'ich komme um 6 zurueck'] },
    { id: 'h', ro: 'Continuă, te rog!', correct: 'Mach bitte weiter!', accept: ['mach bitte weiter!', 'mach bitte weiter', 'mache bitte weiter!', 'mache bitte weiter'] }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Traduceți în germană.</strong><br>
            Folosiți prefixele învățate: vor, zu, mit, nach, weiter, weg, zurück, hin, her, zusammen.
        </div>
    `;
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>🇷🇴 ${item.ro}</label>
                    <input type="text" id="ex5-${item.id}" placeholder="Traducere în germană...">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const feedback = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = input.value.trim().toLowerCase().replace(/\s+/g, ' ');
        if (item.accept.some(a => a === userAnswer)) {
            feedback.className = 'feedback correct';
            feedback.textContent = item.correct;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// BUILD
document.addEventListener('DOMContentLoaded', function() {
    buildEx1();
    buildEx2();
    buildEx3();
    buildEx4();
    buildEx5();
});
