// ============================================
// TEST FINAL - Trennbare Verben (Teil 2)
// Claudia Toth · 20 întrebări mixte
// ============================================

const finalTestData = [
    // Sens prefix (matching)
    { type: 'matching', category: '🎯 Sens prefix', question: 'Prefix „mit-" indică de obicei:', options: ['împreună / cu cineva', 'plecare', 'întoarcere', 'prezentare'], correct: 'împreună / cu cineva', explanation: 'mit- = împreună, cu (mitkommen, mitbringen, mithelfen)' },
    { type: 'matching', category: '🎯 Sens prefix', question: 'Prefix „zurück-" indică de obicei:', options: ['continuare', 'înapoi / restituire', 'continuare', 'plecare'], correct: 'înapoi / restituire', explanation: 'zurück- = înapoi (zurückkommen, zurückgeben, zurückrufen)' },
    { type: 'matching', category: '🎯 Sens prefix', question: 'Prefix „vor-" indică de obicei:', options: ['înapoi', 'în față / prezentare', 'închidere', 'plecare'], correct: 'în față / prezentare', explanation: 'vor- = în față, prezentare (vorstellen, vorhaben, vorbereiten)' },

    // hin / her
    { type: 'multiple', category: '🧭 hin / her', question: '„Komm her!" — ce spune vorbitorul?', options: ['Du-te acolo!', 'Vino aici (la mine)!', 'Mergi mai departe!', 'Întoarce-te!'], correct: 'Vino aici (la mine)!', explanation: 'her = spre vorbitor' },
    { type: 'multiple', category: '🧭 hin / her', question: '„Wohin gehst du?" — ce răspund?', options: ['Spre vorbitor', 'Într-un loc acolo (direcție)', 'Înapoi', 'Împreună'], correct: 'Într-un loc acolo (direcție)', explanation: 'wohin = încotro. Răspund cu destinația: „Ich gehe ins Kino."' },
    { type: 'luckentext', category: '🧭 hin / her', question: 'Completează:', sentence: 'Ich bin hier. Komm bitte ___!', translation: 'spre mine', accept: ['her'], correct: 'her', explanation: 'her = CĂTRE vorbitor' },
    { type: 'luckentext', category: '🧭 hin / her', question: 'Completează:', sentence: 'Das Buch liegt dort. Geh ___ und hol es!', translation: 'departe de mine', accept: ['hin'], correct: 'hin', explanation: 'hin = DE LA vorbitor' },

    // Präsens separation
    { type: 'luckentext', category: '⚙️ Präsens', question: 'Conjugă:', sentence: 'Ich ______ mich den Kollegen ______. (sich vorstellen)', translation: 'Mă prezint colegilor.', accept: ['stelle vor', 'stelle ... vor', 'stelle...vor'], correct: 'stelle ... vor', explanation: 'stelle (poz. 2) + vor (sfârșit)' },
    { type: 'luckentext', category: '⚙️ Präsens', question: 'Conjugă:', sentence: 'Wir ______ am Projekt ______. (zusammenarbeiten)', translation: 'Lucrăm împreună la proiect.', accept: ['arbeiten zusammen', 'arbeiten ... zusammen'], correct: 'arbeiten ... zusammen', explanation: 'arbeiten + zusammen la sfârșit' },
    { type: 'luckentext', category: '⚙️ Präsens', question: 'Conjugă:', sentence: '______ du heute ______? (mitkommen)', translation: 'Vii cu noi azi?', accept: ['kommst mit', 'kommst ... mit'], correct: 'Kommst ... mit', explanation: 'La întrebare verbul trece pe poziția 1' },

    // Multiple choice — sens
    { type: 'multiple', category: '✅ Sens verb', question: 'Ce înseamnă „nachdenken"?', options: ['a face după', 'a reflecta / a se gândi', 'a urmări', 'a verifica'], correct: 'a reflecta / a se gândi', explanation: 'nachdenken = a reflecta. „Denk nach!" = Gândește-te!' },
    { type: 'multiple', category: '✅ Sens verb', question: 'Care e opusul lui „aufmachen"?', options: ['zumachen', 'anmachen', 'ausmachen', 'abmachen'], correct: 'zumachen', explanation: 'aufmachen (a deschide) ↔ zumachen (a închide)' },
    { type: 'multiple', category: '✅ Sens verb', question: 'Ce înseamnă „zuhören"?', options: ['a închide', 'a asculta atent', 'a auzi', 'a admite'], correct: 'a asculta atent', explanation: 'zuhören = a asculta cu atenție (diferit de „hören" = a auzi)' },
    { type: 'multiple', category: '✅ Sens verb', question: 'Care verb înseamnă „a returna / a înapoia"?', options: ['zurückkommen', 'zurückrufen', 'zurückgeben', 'zurückgehen'], correct: 'zurückgeben', explanation: 'zurückgeben = a înapoia (un obiect)' },

    // Traducere
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți:', ro: 'Vii cu noi la cinema?', accept: ['kommst du mit uns ins kino?', 'kommst du mit uns ins kino', 'kommst du ins kino mit?', 'kommst du ins kino mit'], correct: 'Kommst du mit uns ins Kino?', explanation: 'mitkommen + mit Dativ' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți:', ro: 'Te sun înapoi.', accept: ['ich rufe dich zurück.', 'ich rufe dich zurück', 'ich rufe dich zurueck.', 'ich rufe dich zurueck'], correct: 'Ich rufe dich zurück.', explanation: 'zurückrufen + Akk.' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți:', ro: 'Ascultă-mă, te rog!', accept: ['hör mir bitte zu!', 'hör mir bitte zu', 'höre mir bitte zu', 'hoer mir bitte zu'], correct: 'Hör mir bitte zu!', explanation: 'zuhören + Dativ (mir, nu mich!)' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți:', ro: 'Pot să mă prezint?', accept: ['darf ich mich vorstellen?', 'darf ich mich vorstellen'], correct: 'Darf ich mich vorstellen?', explanation: 'sich vorstellen — reflexiv (mich)' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți:', ro: 'Vino aici!', accept: ['komm her!', 'komm her', 'komm bitte her!', 'komm bitte her'] , correct: 'Komm her!', explanation: 'her = spre vorbitor' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> despre prefixele secundare (vor-, zu-, mit-, nach-, weiter-, weg-, zurück-, hin-, her-, zusammen-).</p>
            <ul class="test-info-list">
                <li>📋 Format: o întrebare pe pagină</li>
                <li>✅ Feedback instant</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 12-18 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar">
                    <div class="test-progress-fill" id="progress-fill"></div>
                </div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let questionHTML = '';
    if (q.type === 'matching' || q.type === 'multiple') {
        let optionsHTML = '';
        q.options.forEach((opt, i) => { optionsHTML += `<div class="mc-option"><input type="radio" name="test-answer" value="${opt}" id="test-opt-${i}"><label for="test-opt-${i}">${opt}</label></div>`; });
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${optionsHTML}</div></div>`;
    } else if (q.type === 'luckentext') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    } else if (q.type === 'translate') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content test-ro-text">🇷🇴 ${q.ro}</div><input type="text" id="test-answer" class="test-input" placeholder="Traducere în germană..."></div>`;
    }
    container.innerHTML = questionHTML;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple' || q.type === 'matching') {
            const radio = document.querySelector(`input[name="test-answer"][value="${userAnswers[index].answer}"]`);
            if (radio) radio.checked = true;
        } else {
            const input = document.getElementById('test-answer');
            if (input) input.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple' || type === 'matching') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple' || q.type === 'matching') {
        const selected = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = selected ? selected.value : '';
    } else {
        const input = document.getElementById('test-answer');
        userAnswer = input ? input.value.trim() : '';
    }
    if (!userAnswer) {
        const feedback = document.getElementById('test-feedback');
        feedback.className = 'feedback incorrect';
        feedback.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple' || q.type === 'matching') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const userAnswerNorm = userAnswer.toLowerCase().replace(/\s*\.\.\.\s*/g, ' ... ').replace(/\s+/g, ' ');
        isCorrect = q.accept.some(a => {
            const aNorm = a.toLowerCase().replace(/\s*\.\.\.\s*/g, ' ... ').replace(/\s+/g, ' ');
            return aNorm === userAnswerNorm;
        });
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const feedback = document.getElementById('test-feedback');
    if (ans.correct) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const wizard = document.getElementById('test-wizard');
    if (wizard) wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 70;
    let emoji, message, messageRo, badge;
    if (percentage === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (percentage >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (percentage >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (percentage >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat!'; }
    else if (percentage >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const categoryStats = {};
    finalTestData.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].total++;
        if (userAnswers[i] && userAnswers[i].correct) categoryStats[cat].correct++;
    });
    let statsHTML = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const cat in categoryStats) {
        const s = categoryStats[cat];
        const catPct = Math.round((s.correct / s.total) * 100);
        statsHTML += `<li>${cat}: <strong>${s.correct}/${s.total}</strong> (${catPct}%)</li>`;
    }
    statsHTML += '</ul></div>';
    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mistakes.push({ q, i, userAns: userAnswers[i].answer }); });
    if (mistakes.length > 0) {
        mistakesHTML = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mistakes.forEach(m => {
            mistakesHTML += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color: #991b1b;">Răspunsul tău: <em>${m.userAns}</em></span><br><span style="color: #065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color: #6b7280;">${m.q.explanation}</small></div>`;
        });
        mistakesHTML += '</div>';
    }
    const wizard = document.getElementById('test-wizard');
    const results = document.getElementById('test-results');
    wizard.style.display = 'none';
    results.style.display = 'block';
    results.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${percentage}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top: 8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsHTML}
        ${mistakesHTML}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const teorieContent = document.getElementById('main-section-0');
    const arrow = document.querySelectorAll('.arrow')[0];
    if (teorieContent && !teorieContent.classList.contains('active')) {
        teorieContent.classList.add('active');
        if (arrow) arrow.classList.add('rotated');
    }
    const teorieSection = document.getElementById('teorie');
    if (teorieSection) teorieSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', function() { buildFinalTest(); });
