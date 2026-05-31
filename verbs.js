// ============================================
// VERB-KONJUGATION — TRENNBARE VERBEN (TEIL 2)
// Claudia Toth · Annettes Deutschkurs · A2/B1 · 8 verbe-cheie
// Toate PONS-verified · Präteritum → RO IMPERFECT (regula 12)
// Format: pronume + formă DE + Traducere RO la FIECARE rând
// ============================================

const verbsData = [
    {
        inf: 'sich vorstellen', ro: 'a se prezenta · reflexiv (mich, dich, sich)', typ: 'regulat (slab)', aux: 'haben', part: 'vorgestellt',
        praes: [['ich','stelle mich vor','mă prezint'],['du','stellst dich vor','te prezinți'],['er/sie/es','stellt sich vor','se prezintă'],['wir','stellen uns vor','ne prezentăm'],['ihr','stellt euch vor','vă prezentați'],['sie/Sie','stellen sich vor','se prezintă · dvs. vă prezentați']],
        praet: [['ich','stellte mich vor','mă prezentam'],['du','stelltest dich vor','te prezentai'],['er/sie/es','stellte sich vor','se prezenta'],['wir','stellten uns vor','ne prezentam'],['ihr','stelltet euch vor','vă prezentați'],['sie/Sie','stellten sich vor','se prezentau']],
        perf: [['ich','habe mich vorgestellt','m-am prezentat'],['du','hast dich vorgestellt','te-ai prezentat'],['er/sie/es','hat sich vorgestellt','s-a prezentat'],['wir','haben uns vorgestellt','ne-am prezentat'],['ihr','habt euch vorgestellt','v-ați prezentat'],['sie/Sie','haben sich vorgestellt','s-au prezentat']],
        note: '🔁 Verb REFLEXIV obligatoriu (mich/dich/sich + uns/euch/sich). Pronume reflexiv ÎNAINTEA prefixului separat: <em>Ich stelle mich vor.</em> NU „Ich stelle vor mich". Partizip <strong>vorgestellt</strong> — „ge-" ÎNTRE prefix și verb.',
        same: 'sich vorbereiten, sich vornehmen — același tipar reflexiv'
    },
    {
        inf: 'vorschlagen', ro: 'a propune / a sugera', typ: 'tare (neregulat)', aux: 'haben', part: 'vorgeschlagen',
        praes: [['ich','schlage vor','propun'],['du','schlägst vor','propui (🚨 a→ä!)'],['er/sie/es','schlägt vor','propune (🚨 a→ä!)'],['wir','schlagen vor','propunem'],['ihr','schlagt vor','propuneți'],['sie/Sie','schlagen vor','propun · dvs. propuneți']],
        praet: [['ich','schlug vor','propuneam'],['du','schlugst vor','propuneai'],['er/sie/es','schlug vor','propunea'],['wir','schlugen vor','propuneam'],['ihr','schlugt vor','propuneați'],['sie/Sie','schlugen vor','propuneau']],
        perf: [['ich','habe vorgeschlagen','am propus'],['du','hast vorgeschlagen','ai propus'],['er/sie/es','hat vorgeschlagen','a propus'],['wir','haben vorgeschlagen','am propus'],['ihr','habt vorgeschlagen','ați propus'],['sie/Sie','haben vorgeschlagen','au propus']],
        note: '🚨 Verb TARE cu DOUĂ schimbări: (1) Präsens du/er: <strong>schlägst / schlägt</strong> (a→ä cu Umlaut!). (2) Präteritum cu radical <strong>schlug</strong>. Partizip: <strong>vorgeschlagen</strong> („ge-" ÎNTRE „vor" și „schlagen"). Substantiv asociat: <em>der Vorschlag / die Vorschläge</em>.'
    },
    {
        inf: 'mitkommen', ro: 'a veni cu / a însoți', typ: 'tare (neregulat)', aux: 'sein', part: 'mitgekommen',
        praes: [['ich','komme mit','vin cu'],['du','kommst mit','vii cu'],['er/sie/es','kommt mit','vine cu'],['wir','kommen mit','venim cu'],['ihr','kommt mit','veniți cu'],['sie/Sie','kommen mit','vin cu · dvs. veniți cu']],
        praet: [['ich','kam mit','veneam cu'],['du','kamst mit','veneai cu'],['er/sie/es','kam mit','venea cu'],['wir','kamen mit','veneam cu'],['ihr','kamt mit','veneați cu'],['sie/Sie','kamen mit','veneau cu']],
        perf: [['ich','bin mitgekommen','am venit cu'],['du','bist mitgekommen','ai venit cu'],['er/sie/es','ist mitgekommen','a venit cu'],['wir','sind mitgekommen','am venit cu'],['ihr','seid mitgekommen','ați venit cu'],['sie/Sie','sind mitgekommen','au venit cu']],
        note: '🚨 Verb TARE + auxiliar <strong>SEIN</strong> (mișcare/schimbare de loc). Partizip <strong>mitgekommen</strong> — „ge-" ÎNTRE „mit" și „kommen". Întrebare uzuală: <em>„Kommst du mit?"</em> (Vii și tu?) — Răspuns: „Ja, ich komme mit." / „Nein, ich komme nicht mit." (negația „nicht" ÎNAINTEA prefixului!).',
        same: 'mitfahren, mitgehen, mitlaufen — toate cu SEIN'
    },
    {
        inf: 'mitbringen', ro: 'a aduce cu sine', typ: 'mixt (neregulat)', aux: 'haben', part: 'mitgebracht',
        praes: [['ich','bringe mit','aduc cu'],['du','bringst mit','aduci cu'],['er/sie/es','bringt mit','aduce cu'],['wir','bringen mit','aducem cu'],['ihr','bringt mit','aduceți cu'],['sie/Sie','bringen mit','aduc cu · dvs. aduceți cu']],
        praet: [['ich','brachte mit','aduceam cu'],['du','brachtest mit','aduceai cu'],['er/sie/es','brachte mit','aducea cu'],['wir','brachten mit','aduceam cu'],['ihr','brachtet mit','aduceați cu'],['sie/Sie','brachten mit','aduceau cu']],
        perf: [['ich','habe mitgebracht','am adus cu'],['du','hast mitgebracht','ai adus cu'],['er/sie/es','hat mitgebracht','a adus cu'],['wir','haben mitgebracht','am adus cu'],['ihr','habt mitgebracht','ați adus cu'],['sie/Sie','haben mitgebracht','au adus cu']],
        note: '🔀 Verb MIXT: schimbă radicalul ca un verb TARE (i→a la Präteritum: <strong>brachte</strong>) DAR ia terminația -te a verbelor SLABE. Partizip: <strong>mitgebracht</strong> (cu -t, ca verbele slabe). Cel mai uzual pentru cadouri/obiecte aduse: <em>„Ich habe einen Kuchen mitgebracht."</em>',
        same: 'denken (dachte/gedacht), bringen, brennen — toate verbe mixte'
    },
    {
        inf: 'nachdenken', ro: 'a reflecta / a se gândi (atent, profund)', typ: 'mixt (neregulat)', aux: 'haben', part: 'nachgedacht',
        praes: [['ich','denke nach','reflectez'],['du','denkst nach','reflectezi'],['er/sie/es','denkt nach','reflectează'],['wir','denken nach','reflectăm'],['ihr','denkt nach','reflectați'],['sie/Sie','denken nach','reflectează · dvs. reflectați']],
        praet: [['ich','dachte nach','reflectam'],['du','dachtest nach','reflectai'],['er/sie/es','dachte nach','reflecta'],['wir','dachten nach','reflectam'],['ihr','dachtet nach','reflectați'],['sie/Sie','dachten nach','reflectau']],
        perf: [['ich','habe nachgedacht','am reflectat'],['du','hast nachgedacht','ai reflectat'],['er/sie/es','hat nachgedacht','a reflectat'],['wir','haben nachgedacht','am reflectat'],['ihr','habt nachgedacht','ați reflectat'],['sie/Sie','haben nachgedacht','au reflectat']],
        note: '🔀 Verb MIXT (la fel ca <em>denken/dachte/gedacht</em>). Construcție tipică: <strong>nachdenken ÜBER + Akkusativ</strong> (a reflecta ASUPRA): <em>„Ich denke über das Problem nach."</em> Diferit de „denken" simplu = a gândi (general). „Nachdenken" = a se gândi PROFUND, a chibzui.'
    },
    {
        inf: 'zuhören', ro: 'a asculta atent (pe cineva)', typ: 'regulat (slab)', aux: 'haben', part: 'zugehört',
        praes: [['ich','höre zu','ascult'],['du','hörst zu','asculți'],['er/sie/es','hört zu','ascultă'],['wir','hören zu','ascultăm'],['ihr','hört zu','ascultați'],['sie/Sie','hören zu','ascultă · dvs. ascultați']],
        praet: [['ich','hörte zu','ascultam'],['du','hörtest zu','ascultai'],['er/sie/es','hörte zu','asculta'],['wir','hörten zu','ascultam'],['ihr','hörtet zu','ascultați'],['sie/Sie','hörten zu','ascultau']],
        perf: [['ich','habe zugehört','am ascultat'],['du','hast zugehört','ai ascultat'],['er/sie/es','hat zugehört','a ascultat'],['wir','haben zugehört','am ascultat'],['ihr','habt zugehört','ați ascultat'],['sie/Sie','haben zugehört','au ascultat']],
        note: '🚨 ATENȚIE CAZ: zuhören cere <strong>DATIV</strong>, NU Akkusativ! <em>Ich höre DIR zu</em> (eu te ascult — dir, NU dich!). <em>Sie hört DEM LEHRER zu</em>. Diferit de „hören" simplu (a auzi) care ia Akkusativ: <em>„Ich höre Musik."</em>',
        same: 'zusehen, zuschauen — toate cu Dativ'
    },
    {
        inf: 'zurückgeben', ro: 'a înapoia / a returna (un obiect)', typ: 'tare (neregulat)', aux: 'haben', part: 'zurückgegeben',
        praes: [['ich','gebe zurück','înapoiez'],['du','gibst zurück','înapoiezi (🚨 e→i!)'],['er/sie/es','gibt zurück','înapoiază (🚨 e→i!)'],['wir','geben zurück','înapoiem'],['ihr','gebt zurück','înapoiați'],['sie/Sie','geben zurück','înapoiază · dvs. înapoiați']],
        praet: [['ich','gab zurück','înapoiam'],['du','gabst zurück','înapoiai'],['er/sie/es','gab zurück','înapoia'],['wir','gaben zurück','înapoiam'],['ihr','gabt zurück','înapoiați'],['sie/Sie','gaben zurück','înapoiau']],
        perf: [['ich','habe zurückgegeben','am înapoiat'],['du','hast zurückgegeben','ai înapoiat'],['er/sie/es','hat zurückgegeben','a înapoiat'],['wir','haben zurückgegeben','am înapoiat'],['ihr','habt zurückgegeben','ați înapoiat'],['sie/Sie','haben zurückgegeben','au înapoiat']],
        note: '🚨 Verb TARE (la fel ca <em>geben/gab/gegeben</em>). Schimbare e→i la Präsens (du gibst, er gibt). Construcție: <strong>JEMANDEM (Dativ) ETWAS (Akkusativ) zurückgeben</strong>: <em>„Ich gebe DIR (Dat) das BUCH (Akk) zurück."</em> Partizip: <strong>zurückgegeben</strong> — „ge-" ÎNTRE „zurück" și „geben".'
    },
    {
        inf: 'weiterempfehlen', ro: 'a recomanda (mai departe)', typ: 'tare (neregulat)', aux: 'haben', part: 'weiterempfohlen',
        praes: [['ich','empfehle weiter','recomand'],['du','empfiehlst weiter','recomanzi (🚨 e→ie!)'],['er/sie/es','empfiehlt weiter','recomandă (🚨 e→ie!)'],['wir','empfehlen weiter','recomandăm'],['ihr','empfehlt weiter','recomandați'],['sie/Sie','empfehlen weiter','recomandă · dvs. recomandați']],
        praet: [['ich','empfahl weiter','recomandam'],['du','empfahlst weiter','recomandai'],['er/sie/es','empfahl weiter','recomanda'],['wir','empfahlen weiter','recomandam'],['ihr','empfahlt weiter','recomandați'],['sie/Sie','empfahlen weiter','recomandau']],
        perf: [['ich','habe weiterempfohlen','am recomandat'],['du','hast weiterempfohlen','ai recomandat'],['er/sie/es','hat weiterempfohlen','a recomandat'],['wir','haben weiterempfohlen','am recomandat'],['ihr','habt weiterempfohlen','ați recomandat'],['sie/Sie','haben weiterempfohlen','au recomandat']],
        note: '🚨 Verb TARE cu TREI capcane: (1) Präsens du/er: <strong>empfiehlst / empfiehlt</strong> (e→ie cu „ie"!). (2) Präteritum <strong>empfahl</strong>. (3) Partizip <strong>weiterempfohlen</strong> — verbul de bază „empfehlen" deja începe cu prefix neseparabil „emp-", deci NU se adaugă „ge-" la mijloc; ge- e absorbit. Construcție: <em>„Ich empfehle dir das Buch weiter."</em>'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function(x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    var ex = v.perf[2] || v.perf[0];
    var hint = '<small style="color:#6b7280;">Conjugi auxiliarul ca de obicei (' + (v.aux === 'sein' ? 'ich bin, du bist, er ist...' : 'ich habe, du hast, er hat...') + ') + <strong>' + v.part + '</strong>.</small>';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (perfect compus / timp vorbit)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + ex[0] + ' <strong>' + ex[1] + '</strong> · <em style="color:#6b7280;">' + ex[2] + '</em><br>' +
        hint + '</p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '<div class="exercise-instruction"><strong>🔁 8 verbe-cheie:</strong> sich vorstellen (reflexiv) · vorschlagen (TARE a→ä) · mitkommen (TARE+SEIN) · mitbringen (MIXT) · nachdenken (MIXT) · zuhören (slab+DATIV) · zurückgeben (TARE e→i) · weiterempfehlen (TARE e→ie). Toate PONS-verified.</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">Aceste 8 verbe acoperă <strong>4 patternuri</strong> de conjugare: slab (vorstellen, zuhören), tare (vorschlagen, mitkommen, zurückgeben, weiterempfehlen), mixt (mitbringen, nachdenken) și reflexiv (sich vorstellen). Memorează verbele cu <strong>Partizip II + auxiliar</strong> de la început — e cea mai grea parte. Verifică capcanele cazurilor: <em>zuhören + DATIV</em> (mir, nu mich!), <em>zurückgeben</em> cere Dativ + Akkusativ împreună. 🦋</div>' +
        '</div></div>';

    verbsData.forEach(function(v, i) {
        let badge;
        if (v.typ.indexOf('tare') >= 0) badge = '#dc2626';
        else if (v.typ.indexOf('mixt') >= 0) badge = '#7c3aed';
        else badge = '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            (v.same ? '<div class="theory-box" style="background:#d1fae5;"><p style="margin:0;">📎 <strong>Același tipar:</strong> ' + v.same + '</p></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
