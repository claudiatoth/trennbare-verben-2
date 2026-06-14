// ============================================
// EXERCIȚII - TRENNBARE VERBEN (TEIL 2)
// Claudia Toth · 5 exerciții A2/B1
// ============================================

// Helper standard normalizeAnswer (diacritice DE + RO + separatoare)
function normalizeAnswer(s) {
    if (!s) return '';
    return s.toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

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
                    <small style="color: #5A5147; font-style: italic;">💬 ${item.hint}</small>
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
        const userAnswer = normalizeAnswer(input.value.replace(/^-+|-+$/g, ''));
        if (userAnswer === normalizeAnswer(item.correct)) {
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
        const userAnswer = normalizeAnswer(input.value);
        const normalizedAccept = item.accept.map(a => normalizeAnswer(a));
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
        const userAnswer = normalizeAnswer(input.value.replace(/^-+|-+$/g, ''));
        if (userAnswer === normalizeAnswer(item.correct)) {
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
        const userAnswer = normalizeAnswer(input.value);
        if (item.accept.some(a => normalizeAnswer(a) === userAnswer)) {
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

// ============================================
// EXERCIȚIUL 6: Perfekt cu „-ge-" la mijloc (verbe TARE și MIXTE)
// ============================================
const ex6Data = [
    { id: 'a', sentence: 'Ich habe einen Kaffee ______. (mitnehmen)', correct: 'mitgenommen', hint: 'verb TARE: nahm/genommen → mitgenommen' },
    { id: 'b', sentence: 'Sie hat ein Buch ______. (mitbringen)', correct: 'mitgebracht', hint: 'verb MIXT: brachte/gebracht → mitgebracht (-t!)' },
    { id: 'c', sentence: 'Wir haben über das Problem ______. (nachdenken)', correct: 'nachgedacht', hint: 'verb MIXT: dachte/gedacht → nachgedacht' },
    { id: 'd', sentence: 'Er hat mir das Buch ______. (zurückgeben)', correct: 'zurückgegeben', hint: 'verb TARE: gab/gegeben → zurückgegeben' },
    { id: 'e', sentence: 'Ich bin um 18 Uhr ______. (zurückkommen)', correct: 'zurückgekommen', hint: 'verb TARE + SEIN: kam/gekommen → zurückgekommen' },
    { id: 'f', sentence: 'Anna hat ihre Kollegen ______. (vorstellen)', correct: 'vorgestellt', hint: 'verb SLAB: stellte/gestellt → vorgestellt' },
    { id: 'g', sentence: 'Ich habe ihm gut ______. (zuhören)', correct: 'zugehört', hint: 'verb SLAB + DATIV: hörte/gehört → zugehört (ihm, NU ihn!)' },
    { id: 'h', sentence: 'Du hast ein gutes Buch ______. (vorschlagen)', correct: 'vorgeschlagen', hint: 'verb TARE: schlug/geschlagen → vorgeschlagen' },
    { id: 'i', sentence: 'Wir sind nach München ______. (weiterfahren)', correct: 'weitergefahren', hint: 'verb TARE + SEIN: fuhr/gefahren → weitergefahren' },
    { id: 'j', sentence: 'Mihai hat den Müll ______. (wegwerfen)', correct: 'weggeworfen', hint: 'verb TARE: warf/geworfen → weggeworfen' }
];

function buildEx6() {
    const container = document.getElementById('ex6-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Completează cu Partizip II (forma de Perfekt).</strong><br>
            La verbele separabile, „-ge-" se pune <strong>ÎNTRE prefix și verb</strong>: vor + ge + stellt → <em>vorgestellt</em>.
        </div>
    `;
    ex6Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <input type="text" id="ex6-${item.id}" placeholder="Partizip II">
                    <small style="color: #5A5147; font-style: italic;">💬 ${item.hint}</small>
                </div>
                <div class="feedback" id="ex6-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx6() {
    let correct = 0;
    const total = ex6Data.length;
    ex6Data.forEach(item => {
        const input = document.getElementById(`ex6-${item.id}`);
        const feedback = document.getElementById(`ex6-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        if (userAnswer === normalizeAnswer(item.correct)) {
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
// EXERCIȚIUL 7: Diktat — ascultă propoziția și scrie-o
// (Regula 17: accept cifră alternativă, e.g. „6" sau „sechs")
// ============================================
const ex7Data = [
    { id: 'a', text: 'Ich komme um 8 Uhr zurück.', accept: ['Ich komme um 8 Uhr zurück.', 'Ich komme um acht Uhr zurück.'] },
    { id: 'b', text: 'Bring bitte den Laptop mit!', accept: ['Bring bitte den Laptop mit!', 'Bringe bitte den Laptop mit!'] },
    { id: 'c', text: 'Hör mir bitte zu, Mihai!', accept: ['Hör mir bitte zu, Mihai!', 'Höre mir bitte zu, Mihai!', 'Hoer mir bitte zu, Mihai!'] },
    { id: 'd', text: 'Wir arbeiten heute an der Lektion 2 zusammen.', accept: ['Wir arbeiten heute an der Lektion 2 zusammen.', 'Wir arbeiten heute an der Lektion zwei zusammen.'] },
    { id: 'e', text: 'Bring mir das Buch her!', accept: ['Bring mir das Buch her!', 'Bringe mir das Buch her!'] }
];

function buildEx7() {
    const container = document.getElementById('ex7-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🎧 Diktat — ascultă și scrie ce auzi.</strong><br>
            Apasă 🔊 pentru fiecare propoziție. Scrie EXACT ce auzi, cu majuscule, punctuație și semne de exclamare/întrebare.<br>
            <em>(Cifrele pot fi scrise în litere sau cifre — ex. „8 Uhr" SAU „acht Uhr".)</em>
        </div>
    `;
    ex7Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>
                        <button onclick="speakDictation(event, '${item.id}')" style="background:#10b981;color:white;border:none;border-radius:50%;width:38px;height:38px;cursor:pointer;font-size:1.1rem;vertical-align:middle;margin-right:8px;">🔊</button>
                        Propoziția ${index + 1} — click pe 🔊 ca să o asculți
                    </label>
                    <input type="text" id="ex7-${item.id}" placeholder="Scrie propoziția cu majuscule și punctuație...">
                </div>
                <div class="feedback" id="ex7-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function speakDictation(event, id) {
    if (event) event.stopPropagation();
    const item = ex7Data.find(x => x.id === id);
    if (!item) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(item.text);
        u.lang = 'de-DE';
        u.rate = 0.85;
        window.speechSynthesis.speak(u);
    } else {
        alert('Browser-ul tău nu suportă Text-to-Speech.');
    }
}

function checkEx7() {
    let correct = 0;
    const total = ex7Data.length;
    // Pentru Diktat folosim comparare STRICTĂ (cu majuscule + punctuație + caractere DE) — NU normalizeAnswer (care omoară diacriticele).
    function normalizeDiktat(s) {
        return (s || '').trim().replace(/\s+/g, ' ');
    }
    ex7Data.forEach(item => {
        const input = document.getElementById(`ex7-${item.id}`);
        const feedback = document.getElementById(`ex7-f${item.id}`);
        const userAnswer = normalizeDiktat(input.value);
        const accepted = item.accept.some(a => normalizeDiktat(a) === userAnswer);
        if (accepted) {
            feedback.className = 'feedback correct';
            feedback.textContent = `Corect: ${item.text}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.text}`;
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
    buildEx6();
    buildEx7();
});
