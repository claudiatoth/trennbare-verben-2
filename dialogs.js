// ============================================
// DIALOGS.JS — Trennbare Verben (Teil 2): Dialog animat
// 1 dialog Annette ↔ Andrea (13 replici) cu animație CSS + audio sincronizat
// Pattern preluat din curs-spezial-deutsch-pflege-1-koerperpflege (31 mai 2026)
// Claudia Toth · Annettes Deutschkurs · A2/B1
// ============================================

// ============================================
// DIALOG 1: Andreas erster Tag bei Annette
// 13 replici, ~65 secunde estimate
// Cu MP3 (audio/dialog-01.mp3): sincronizare automată pe currentTime
// Fără MP3: animație pe timer (duration estimate per replică)
// ============================================
const dialog1Data = {
    id: 'dialog1',
    title: 'Andreas erster Tag bei Annette',
    context: 'Andrea sosește la cursul lui Annette pentru prima zi de practică pedagogică. Annette o întâmpină și o introduce în echipă. Folosește peste 10 verbe separabile din lecția 2.',
    audioFile: 'audio/dialog-01.mp3',
    totalDuration: 65,
    replici: [
        { id: 1,  speaker: 'annette', start: 0,  duration: 8,  de: 'Hallo Andrea! Willkommen bei Annettes Deutschkurs! Darf ich mich vorstellen? Ich bin Annette, deine Mentorin.', ro: 'Salut, Andrea! Bun venit la cursul lui Annette! Îmi permiteți să mă prezint? Eu sunt Annette, mentora ta. (sich vorstellen)' },
        { id: 2,  speaker: 'andrea',  start: 8,  duration: 6,  de: 'Hallo Annette! Ich bin Andrea. Ich habe meinen Laptop und ein Notizbuch mitgebracht.', ro: 'Salut, Annette! Eu sunt Andrea. Am adus laptopul și un caiet. (mitbringen)' },
        { id: 3,  speaker: 'annette', start: 14, duration: 5,  de: 'Super. Komm bitte mit, ich zeige dir den Unterrichtsraum.', ro: 'Super. Vino cu mine, te rog, îți arăt sala de curs. (mitkommen)' },
        { id: 4,  speaker: 'andrea',  start: 19, duration: 4,  de: 'Gerne. Darf ich einen Kaffee mitnehmen?', ro: 'Cu plăcere. Pot să iau o cafea cu mine? (mitnehmen)' },
        { id: 5,  speaker: 'annette', start: 23, duration: 6,  de: 'Natürlich! Die Küche ist da hinten. Geh hin, rechts ist die Maschine.', ro: 'Sigur! Bucătăria e în spate. Du-te acolo, în dreapta e aparatul. (hingehen)' },
        { id: 6,  speaker: 'andrea',  start: 29, duration: 3,  de: 'Danke. Wann fangen wir an?', ro: 'Mulțumesc. Când începem?' },
        { id: 7,  speaker: 'annette', start: 32, duration: 5,  de: 'Um neun Uhr. Wir arbeiten zusammen an der ersten Lektion.', ro: 'La nouă. Lucrăm împreună la prima lecție. (zusammenarbeiten)' },
        { id: 8,  speaker: 'andrea',  start: 37, duration: 3,  de: 'Und wenn ich eine Frage habe?', ro: 'Și dacă am o întrebare?' },
        { id: 9,  speaker: 'annette', start: 40, duration: 5,  de: 'Frag einfach nach! Ich bin deine Mentorin. Oder ruf mich an.', ro: 'Întreabă pur și simplu! Sunt mentora ta. Sau sună-mă. (nachfragen, anrufen)' },
        { id: 10, speaker: 'andrea',  start: 45, duration: 4,  de: 'Perfekt. Was hast du heute noch vor?', ro: 'Perfect. Ce mai ai de gând azi? (vorhaben)' },
        { id: 11, speaker: 'annette', start: 49, duration: 10, de: 'Um siebzehn Uhr gehen wir alle zurück zur Besprechung. Denk bitte daran nach, dass du deinen Stundenplan mitbringst.', ro: 'La șaptesprezece ne întoarcem cu toții la ședință. Gândește-te, te rog, să-ți aduci orarul. (zurückgehen, nachdenken, mitbringen)' },
        { id: 12, speaker: 'andrea',  start: 59, duration: 4,  de: 'Ich mache weiter, dann. Bis siebzehn Uhr!', ro: 'Atunci continui. Pe la șaptesprezece! (weitermachen)' },
        { id: 13, speaker: 'annette', start: 63, duration: 2,  de: 'Bis später!', ro: 'Pe mai târziu!' }
    ]
};

// ============================================
// BUILD ANIMATED DIALOG HTML
// ============================================
function buildAnimatedDialog(data) {
    const repliciHTML = data.replici.map(r => `
        <div class="reply-item" data-reply-id="${r.id}" data-speaker="${r.speaker}">
            <div class="reply-header">
                <span class="reply-num">${r.id}.</span>
                <span class="reply-speaker speaker-${r.speaker}">${r.speaker === 'andrea' ? '👩‍🎓 Andrea' : '👩‍🏫 Annette'}</span>
                <button class="btn-replay-reply" onclick="replayReply('${data.id}', ${r.id})">🔁</button>
            </div>
            <div class="reply-de">${r.de}</div>
            <div class="reply-ro">${r.ro}</div>
        </div>
    `).join('');

    return `
        <div class="animated-dialog" id="dialog-${data.id}" data-dialog-id="${data.id}">
            <div class="dialog-context">
                <strong>📍 Situația:</strong> ${data.context}
            </div>

            <div class="stage-container">
                <div class="stage">
                    <div class="character-wrapper character-andrea" data-speaker="andrea">
                        <div class="character-avatar">
                            <img src="images/andreea.png" alt="Andrea">
                        </div>
                        <div class="character-label">Andrea 🇷🇴</div>
                        <div class="speech-bubble speech-andrea" id="bubble-${data.id}-andrea">
                            <div class="bubble-de"></div>
                            <div class="bubble-ro"></div>
                        </div>
                    </div>

                    <div class="character-wrapper character-annette" data-speaker="annette">
                        <div class="character-avatar">
                            <img src="images/annette.png" alt="Annette">
                        </div>
                        <div class="character-label">Annette 🇩🇪</div>
                        <div class="speech-bubble speech-annette" id="bubble-${data.id}-annette">
                            <div class="bubble-de"></div>
                            <div class="bubble-ro"></div>
                        </div>
                    </div>
                </div>

                <div class="dialog-controls">
                    <button class="btn-dialog btn-play" id="btn-play-${data.id}" onclick="playDialog('${data.id}')">▶️ Pornește</button>
                    <button class="btn-dialog btn-pause" id="btn-pause-${data.id}" onclick="pauseDialog('${data.id}')" disabled>⏸ Pauză</button>
                    <button class="btn-dialog btn-reset" id="btn-reset-${data.id}" onclick="resetDialog('${data.id}')">🔄 Reset</button>
                </div>

                <div class="dialog-progress">
                    <div class="progress-bar" id="progress-${data.id}"><div class="progress-fill" id="progress-fill-${data.id}"></div></div>
                    <div class="progress-text" id="progress-text-${data.id}">Replica 0 / ${data.replici.length}</div>
                </div>

                <audio id="audio-${data.id}" preload="none">
                    <source src="${data.audioFile}" type="audio/mpeg">
                </audio>
            </div>

            <details class="transcript-details">
                <summary>📜 Vezi transcriptul complet (bilingv DE/RO)</summary>
                <div class="transcript-list">
                    ${repliciHTML}
                </div>
            </details>
        </div>
    `;
}

// ============================================
// STATE MANAGEMENT for each dialog
// ============================================
const dialogState = {};

function initDialogState(dialogId) {
    if (!dialogState[dialogId]) {
        dialogState[dialogId] = {
            isPlaying: false,
            currentReply: 0,
            lastDisplayedIdx: -1,
            timeouts: [],
            timeUpdateHandler: null,
            endedHandler: null,
            data: dialog1Data
        };
    }
    return dialogState[dialogId];
}

// ============================================
// PLAY DIALOG — sincronizare pe audio.currentTime
// Replicile apar fix când vocea ajunge la timpul lor, indiferent de
// delay-uri/buffering/pause-resume. Timer-based fallback dacă MP3 lipsește.
// ============================================
function playDialog(dialogId) {
    const state = initDialogState(dialogId);
    if (state.isPlaying) return;

    state.isPlaying = true;
    const data = state.data;
    const audio = document.getElementById(`audio-${dialogId}`);

    document.getElementById(`btn-play-${dialogId}`).disabled = true;
    document.getElementById(`btn-pause-${dialogId}`).disabled = false;

    if (audio && !state.timeUpdateHandler) {
        state.timeUpdateHandler = () => {
            if (!state.isPlaying) return;
            const t = audio.currentTime;
            let currentIdx = -1;
            for (let i = 0; i < data.replici.length; i++) {
                if (t >= data.replici[i].start) currentIdx = i;
                else break;
            }
            if (currentIdx >= 0 && currentIdx !== state.lastDisplayedIdx) {
                state.lastDisplayedIdx = currentIdx;
                state.currentReply = currentIdx + 1;
                showReply(dialogId, data.replici[currentIdx]);
                updateProgress(dialogId);
            }
        };
        audio.addEventListener('timeupdate', state.timeUpdateHandler);

        state.endedHandler = () => endDialog(dialogId);
        audio.addEventListener('ended', state.endedHandler);
    }

    if (audio) {
        if (state.currentReply > 0 && state.currentReply < data.replici.length) {
            // Stay where we are, don't reset
        } else if (state.currentReply >= data.replici.length) {
            audio.currentTime = 0;
            state.currentReply = 0;
            state.lastDisplayedIdx = -1;
        }
        // Error event = MP3 nu poate fi încărcat → fallback timer (1 singură dată)
        const errorFallback = () => {
            if (state.timeouts.length === 0) startTimerFallback(dialogId);
        };
        audio.addEventListener('error', errorFallback, { once: true });
        // Safety: dacă după 600ms audio n-a pornit (currentTime încă 0 + readyState insuficient), fallback timer
        setTimeout(() => {
            if (state.isPlaying && audio.currentTime === 0 && audio.readyState < 2 && state.timeouts.length === 0) {
                startTimerFallback(dialogId);
            }
        }, 600);
        audio.play().catch(() => {
            if (state.timeouts.length === 0) startTimerFallback(dialogId);
        });
    } else {
        startTimerFallback(dialogId);
    }
}

// Fallback: animație pe timer dacă audio nu există / nu poate fi redat
function startTimerFallback(dialogId) {
    const state = initDialogState(dialogId);
    const data = state.data;
    const startFromReply = state.currentReply;
    const offsetMs = startFromReply > 0 ? data.replici[startFromReply - 1].start * 1000 : 0;

    for (let i = startFromReply; i < data.replici.length; i++) {
        const reply = data.replici[i];
        const delayMs = (reply.start * 1000) - offsetMs;
        const timeout = setTimeout(() => {
            if (!state.isPlaying) return;
            state.lastDisplayedIdx = i;
            showReply(dialogId, reply);
            state.currentReply = i + 1;
            updateProgress(dialogId);
            if (i === data.replici.length - 1) {
                setTimeout(() => endDialog(dialogId), reply.duration * 1000);
            }
        }, delayMs);
        state.timeouts.push(timeout);
    }
}

function showReply(dialogId, reply) {
    const data = dialog1Data;

    const activeChar = document.querySelector(`#dialog-${dialogId} .character-${reply.speaker}`);
    const sameSpeakerContinues = activeChar && activeChar.classList.contains('speaking');

    document.querySelectorAll(`#dialog-${dialogId} .character-wrapper`).forEach(c => {
        if (c !== activeChar) c.classList.remove('speaking');
    });
    if (activeChar) activeChar.classList.add('speaking');

    document.querySelectorAll(`#dialog-${dialogId} .speech-bubble`).forEach(b => {
        if (!b.id.endsWith('-' + reply.speaker)) {
            b.classList.remove('visible');
        }
    });

    const bubble = document.getElementById(`bubble-${dialogId}-${reply.speaker}`);
    if (!bubble) return;

    if (sameSpeakerContinues) {
        bubble.classList.add('text-fading');
        setTimeout(() => {
            bubble.querySelector('.bubble-de').textContent = reply.de;
            bubble.querySelector('.bubble-ro').textContent = reply.ro;
            bubble.classList.remove('text-fading');
        }, 180);
    } else {
        bubble.querySelector('.bubble-de').textContent = reply.de;
        bubble.querySelector('.bubble-ro').textContent = reply.ro;
        bubble.classList.add('visible');
    }

    document.querySelectorAll(`#dialog-${dialogId} .reply-item`).forEach(r => r.classList.remove('active'));
    const replyItem = document.querySelector(`#dialog-${dialogId} .reply-item[data-reply-id="${reply.id}"]`);
    if (replyItem) replyItem.classList.add('active');
}

function pauseDialog(dialogId) {
    const state = dialogState[dialogId];
    if (!state || !state.isPlaying) return;
    state.isPlaying = false;
    state.timeouts.forEach(t => clearTimeout(t));
    state.timeouts = [];

    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) audio.pause();

    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function resetDialog(dialogId) {
    pauseDialog(dialogId);
    const state = initDialogState(dialogId);
    state.currentReply = 0;
    state.lastDisplayedIdx = -1;
    state.timeouts = [];

    document.querySelectorAll(`#dialog-${dialogId} .character-wrapper`).forEach(c => c.classList.remove('speaking'));
    document.querySelectorAll(`#dialog-${dialogId} .speech-bubble`).forEach(b => b.classList.remove('visible'));
    document.querySelectorAll(`#dialog-${dialogId} .reply-item`).forEach(r => r.classList.remove('active'));

    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) { audio.pause(); audio.currentTime = 0; }

    updateProgress(dialogId);

    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function endDialog(dialogId) {
    const state = dialogState[dialogId];
    if (!state) return;
    state.isPlaying = false;
    state.currentReply = state.data.replici.length;
    state.timeouts = [];
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function updateProgress(dialogId) {
    const state = dialogState[dialogId];
    if (!state) return;
    const total = state.data.replici.length;
    const pct = total > 0 ? (state.currentReply / total) * 100 : 0;
    const fill = document.getElementById(`progress-fill-${dialogId}`);
    const text = document.getElementById(`progress-text-${dialogId}`);
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = `Replica ${state.currentReply} / ${total}`;
}

// ============================================
// REPLAY single reply — sare audio.currentTime la timpul replicii
// ============================================
function replayReply(dialogId, replyId) {
    const data = dialog1Data;
    const replyIdx = data.replici.findIndex(r => r.id === replyId);
    if (replyIdx < 0) return;
    const reply = data.replici[replyIdx];

    const state = initDialogState(dialogId);
    state.lastDisplayedIdx = -1;
    showReply(dialogId, reply);
    state.currentReply = replyIdx + 1;
    updateProgress(dialogId);

    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) {
        audio.currentTime = reply.start;
        if (audio.paused) {
            state.isPlaying = true;
            audio.play().catch(() => { /* silent fail */ });
            document.getElementById(`btn-play-${dialogId}`).disabled = true;
            document.getElementById(`btn-pause-${dialogId}`).disabled = false;
        }
    }
}

// ============================================
// INJECT DIALOG INTO PAGE
// Container `dialog1-container` e în theoryHTML, deci se populează după DOMContentLoaded.
// theory.js apelează buildAnimatedDialog DUPĂ ce injectează theoryHTML — vezi theory.js linia ~478.
// ============================================
