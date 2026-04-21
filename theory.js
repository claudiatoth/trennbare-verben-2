// ============================================
// TEORIE - TRENNBARE VERBEN (TEIL 2)
// Claudia Toth · Nivel A2/B1 · Prefixele secundare vor-, zu-, mit-, nach-, weiter-, weg-, zurück-, hin-/her-, zusammen-
// ============================================

const theoryHTML = `
    <!-- 0: Intro + recap -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Recapitulare + ce urmează</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box">
                <h4>📖 Recapitulare din lecția 1</h4>
                <ul>
                    <li>Verbele separabile au <strong>accent pe prefix</strong> (AUFstehen, ANrufen).</li>
                    <li>În <strong>Präsens/Präteritum</strong>: verbul pe poziția 2, prefixul la sfârșit.</li>
                    <li>În <strong>Perfekt</strong>: „-ge-" ÎNTRE prefix și verb (aufgestanden, angerufen).</li>
                    <li>Cu <strong>„zu"</strong>: zu se pune ÎNTRE prefix și verb (aufzustehen).</li>
                </ul>
            </div>
            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>🎯 Ce învățăm în lecția 2</h4>
                <p>Extindem vocabularul cu alte <strong>9 prefixe separabile</strong> foarte utile la A2/B1:</p>
                <ul>
                    <li><strong>vor-</strong> (în față, prezentare)  ·  <strong>zu-</strong> (spre, închidere, acceptare)</li>
                    <li><strong>mit-</strong> (împreună, cu)  ·  <strong>nach-</strong> (după, imitare)</li>
                    <li><strong>weiter-</strong> (continuare)  ·  <strong>zurück-</strong> (înapoi)</li>
                    <li><strong>weg-</strong> (plecare, îndepărtare)  ·  <strong>zusammen-</strong> (împreună)</li>
                    <li><strong>hin-</strong> / <strong>her-</strong> (direcție spre/de la vorbitor) — foarte important!</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: vor- -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>➡️ 2. Prefix vor- (în față / înainte / prezentare)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-vor.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Sens general</h4>
                <p><strong>vor-</strong> indică: <strong>în față, înainte, prezentare publică, pregătire, precedență</strong>.</p>
            </div>
            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Traducere</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">vorstellen (sich)</td><td>a (se) prezenta</td><td><em>Ich stelle mich vor: Ich heiße Anna.</em></td></tr>
                    <tr><td class="verb">vorbereiten</td><td>a pregăti</td><td><em>Ich bereite das Essen vor.</em></td></tr>
                    <tr><td class="verb">vorhaben</td><td>a plănui / a avea de gând</td><td><em>Was hast du am Samstag vor?</em></td></tr>
                    <tr><td class="verb">vorlesen</td><td>a citi cu voce tare (cuiva)</td><td><em>Die Mutter liest dem Kind vor.</em></td></tr>
                    <tr><td class="verb">vorschlagen</td><td>a sugera / a propune</td><td><em>Ich schlage einen Film vor.</em></td></tr>
                    <tr><td class="verb">vorziehen</td><td>a prefera</td><td><em>Ich ziehe Tee dem Kaffee vor.</em></td></tr>
                    <tr><td class="verb">vorkommen</td><td>a se întâmpla / a apărea</td><td><em>Das kommt selten vor.</em></td></tr>
                    <tr><td class="verb">vorbeigehen</td><td>a trece pe lângă</td><td><em>Ich gehe am Bäcker vorbei.</em></td></tr>
                </tbody>
            </table>
            <div class="example-box">
                <p class="de"><strong>Darf ich mich vorstellen?</strong> Ich <strong>heiße</strong> Anna.</p>
                <p class="ro">Îmi permiteți să mă prezint? Mă numesc Anna.</p>
            </div>
        </div>
    </div>

    <!-- 2: zu- -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🎯 3. Prefix zu- (spre / închidere / acceptare)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-zu.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Sens general</h4>
                <p><strong>zu-</strong> indică: <strong>închidere, direcție către, acceptare, atenție</strong>.</p>
            </div>
            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Traducere</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">zumachen</td><td>a închide</td><td><em>Mach die Tür zu!</em></td></tr>
                    <tr><td class="verb">zuhören</td><td>a asculta (atent)</td><td><em>Hör mir bitte zu!</em></td></tr>
                    <tr><td class="verb">zuschauen / zusehen</td><td>a privi / a se uita la</td><td><em>Wir schauen dem Spiel zu.</em></td></tr>
                    <tr><td class="verb">zustimmen</td><td>a fi de acord</td><td><em>Ich stimme dir zu.</em></td></tr>
                    <tr><td class="verb">zumachen</td><td>a închide (aparat, carte)</td><td><em>Mach das Buch zu!</em></td></tr>
                    <tr><td class="verb">zunehmen</td><td>a crește / a se îngrășa</td><td><em>Ich habe 2 Kilo zugenommen.</em></td></tr>
                    <tr><td class="verb">zugeben</td><td>a admite / a recunoaște</td><td><em>Er gibt seinen Fehler zu.</em></td></tr>
                </tbody>
            </table>
            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>⚠️ Atenție — zu are 3 roluri în germană</h4>
                <ul>
                    <li><strong>Prefix separabil</strong> (zuhören): se separă. „Ich <u>höre</u> dir <u>zu</u>."</li>
                    <li><strong>Prepoziție</strong> cu Dativ: „<em>zu</em> meiner Mutter" = la mama mea</li>
                    <li><strong>Particulă infinitiv</strong>: „Ich versuche, zu arbeiten."</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 3: mit- -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🤝 4. Prefix mit- (cu / împreună)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-mit.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Sens general</h4>
                <p><strong>mit-</strong> indică: <strong>participare, însoțire, împreună cu cineva/ceva</strong>.</p>
            </div>
            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Traducere</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">mitkommen</td><td>a veni cu / a însoți</td><td><em>Kommst du mit ins Kino?</em></td></tr>
                    <tr><td class="verb">mitbringen</td><td>a aduce cu sine</td><td><em>Ich bringe einen Kuchen mit.</em></td></tr>
                    <tr><td class="verb">mitnehmen</td><td>a lua cu sine</td><td><em>Nimm den Regenschirm mit!</em></td></tr>
                    <tr><td class="verb">mitfahren</td><td>a merge (cu vehicul) cu cineva</td><td><em>Ich fahre mit dir nach Berlin mit.</em></td></tr>
                    <tr><td class="verb">mitmachen</td><td>a participa (la o activitate)</td><td><em>Macht ihr mit beim Spiel?</em></td></tr>
                    <tr><td class="verb">mithelfen</td><td>a ajuta (împreună)</td><td><em>Er hilft im Garten mit.</em></td></tr>
                    <tr><td class="verb">mitteilen</td><td>a comunica / a informa</td><td><em>Ich teile dir die Nachricht mit.</em></td></tr>
                    <tr><td class="verb">mitarbeiten</td><td>a colabora / a lucra împreună</td><td><em>Wir arbeiten am Projekt mit.</em></td></tr>
                </tbody>
            </table>
            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>💡 Frază foarte utilă</h4>
                <p><strong>„Kommst du mit?"</strong> = Vii cu noi/mine? — una dintre cele mai frecvente întrebări uzuale în germană.</p>
            </div>
        </div>
    </div>

    <!-- 4: nach- + weiter- -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🔁 5. Prefixele nach- (după / imitare) + weiter- (continuare)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-nach-weiter.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Prefix nach- (după)</h4>
                <p><strong>nach-</strong> indică: <strong>urmare, verificare, imitare, reproducere</strong>.</p>
            </div>
            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Traducere</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">nachdenken</td><td>a reflecta / a se gândi</td><td><em>Ich denke über das Problem nach.</em></td></tr>
                    <tr><td class="verb">nachfragen</td><td>a se interesa / a întreba</td><td><em>Frag beim Chef nach!</em></td></tr>
                    <tr><td class="verb">nachholen</td><td>a recupera (o lecție, timp)</td><td><em>Ich hole den Stoff nach.</em></td></tr>
                    <tr><td class="verb">nachmachen</td><td>a imita</td><td><em>Das Kind macht alles nach.</em></td></tr>
                    <tr><td class="verb">nachschauen / nachsehen</td><td>a verifica / a se uita după</td><td><em>Schau im Wörterbuch nach!</em></td></tr>
                    <tr><td class="verb">nachsprechen</td><td>a repeta după cineva</td><td><em>Sprich das Wort nach!</em></td></tr>
                </tbody>
            </table>

            <div class="theory-box">
                <h4>Prefix weiter- (mai departe / continuare)</h4>
                <p><strong>weiter-</strong> indică: <strong>continuarea unei acțiuni</strong>.</p>
            </div>
            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Traducere</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">weitermachen</td><td>a continua</td><td><em>Mach weiter mit der Arbeit!</em></td></tr>
                    <tr><td class="verb">weitergehen</td><td>a merge mai departe</td><td><em>Wir gehen weiter.</em></td></tr>
                    <tr><td class="verb">weiterfahren</td><td>a merge mai departe (cu vehicul)</td><td><em>Der Zug fährt weiter.</em></td></tr>
                    <tr><td class="verb">weitersagen</td><td>a transmite (mai departe)</td><td><em>Sag es bitte nicht weiter!</em></td></tr>
                    <tr><td class="verb">weiterempfehlen</td><td>a recomanda</td><td><em>Ich empfehle das Buch weiter.</em></td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 5: weg- + zurück- -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>⬅️ 6. Prefixele weg- (departe) + zurück- (înapoi)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-weg-zurueck.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Prefix weg- (departe / plecare)</h4>
                <p><strong>weg-</strong> indică: <strong>îndepărtare, plecare, eliminare</strong>.</p>
            </div>
            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Traducere</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">weggehen</td><td>a pleca</td><td><em>Sie geht um 8 weg.</em></td></tr>
                    <tr><td class="verb">wegfahren</td><td>a pleca (cu vehicul)</td><td><em>Wir fahren nach München weg.</em></td></tr>
                    <tr><td class="verb">weglaufen</td><td>a fugi / a o lua la fugă</td><td><em>Der Hund läuft weg!</em></td></tr>
                    <tr><td class="verb">wegnehmen</td><td>a lua de la cineva</td><td><em>Nimm mir das Buch nicht weg!</em></td></tr>
                    <tr><td class="verb">wegwerfen</td><td>a arunca (la gunoi)</td><td><em>Wirf den Müll weg!</em></td></tr>
                    <tr><td class="verb">wegbringen</td><td>a duce (de acolo)</td><td><em>Bring die Flaschen weg!</em></td></tr>
                </tbody>
            </table>

            <div class="theory-box">
                <h4>Prefix zurück- (înapoi)</h4>
                <p><strong>zurück-</strong> indică: <strong>întoarcere, restituire, revenire</strong>.</p>
            </div>
            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Traducere</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">zurückkommen</td><td>a se întoarce</td><td><em>Ich komme um 6 zurück.</em></td></tr>
                    <tr><td class="verb">zurückgehen</td><td>a merge înapoi</td><td><em>Wir gehen nach Hause zurück.</em></td></tr>
                    <tr><td class="verb">zurückgeben</td><td>a înapoia / a returna</td><td><em>Gib mir mein Buch zurück!</em></td></tr>
                    <tr><td class="verb">zurückrufen</td><td>a suna înapoi</td><td><em>Ich rufe dich zurück.</em></td></tr>
                    <tr><td class="verb">zurückfahren</td><td>a se întoarce (cu vehicul)</td><td><em>Ich fahre nach Bukarest zurück.</em></td></tr>
                    <tr><td class="verb">zurückschicken</td><td>a trimite înapoi</td><td><em>Ich schicke das Paket zurück.</em></td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 6: hin- / her- / zusammen- -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>🧭 7. Prefixele hin- (de la vorbitor) / her- (spre vorbitor) + zusammen- (împreună)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-6')" id="btn-audio-6">▶</button>
                    <audio id="audio-6" preload="none"><source src="audio/07-hin-her-zusammen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>⚠️ Regula importantă pentru hin / her</h4>
                <p><strong>hin</strong> = mișcare <strong>DE LA</strong> vorbitor (undeva acolo).</p>
                <p><strong>her</strong> = mișcare <strong>CĂTRE</strong> vorbitor (aici, la mine).</p>
                <ul style="margin-top: 10px;">
                    <li><strong>Komm her!</strong> = Vino aici! (spre mine)</li>
                    <li><strong>Geh hin!</strong> = Du-te acolo! (departe de mine)</li>
                </ul>
            </div>

            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Traducere</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">hingehen</td><td>a se duce (undeva)</td><td><em>Wie oft gehst du hin?</em></td></tr>
                    <tr><td class="verb">hinstellen</td><td>a pune / a așeza (acolo)</td><td><em>Stell die Vase dorthin!</em></td></tr>
                    <tr><td class="verb">hinsetzen (sich)</td><td>a se așeza (jos)</td><td><em>Setz dich hin!</em></td></tr>
                    <tr><td class="verb">herkommen</td><td>a veni (aici)</td><td><em>Komm her, bitte!</em></td></tr>
                    <tr><td class="verb">herbringen</td><td>a aduce (aici)</td><td><em>Bring mir das Buch her!</em></td></tr>
                    <tr><td class="verb">hernehmen</td><td>a lua (de undeva, aici)</td><td><em>Wo nimmst du das Geld her?</em></td></tr>
                </tbody>
            </table>

            <div class="theory-box">
                <h4>Prefix zusammen- (împreună)</h4>
                <p><strong>zusammen-</strong> indică: <strong>unire, colaborare, întâlnire</strong>.</p>
            </div>
            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Traducere</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">zusammenarbeiten</td><td>a colabora / a lucra împreună</td><td><em>Wir arbeiten gut zusammen.</em></td></tr>
                    <tr><td class="verb">zusammenkommen</td><td>a se întâlni / a se aduna</td><td><em>Wir kommen am Abend zusammen.</em></td></tr>
                    <tr><td class="verb">zusammenfassen</td><td>a rezuma</td><td><em>Fass den Text zusammen!</em></td></tr>
                    <tr><td class="verb">zusammenpassen</td><td>a se potrivi (împreună)</td><td><em>Die Farben passen zusammen.</em></td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 7: Dialog + strategii -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(7)">
            <span>💬 8. Dialog: Der erste Arbeitstag + strategii</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-7">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-7')" id="btn-audio-7">▶</button>
                    <audio id="audio-7" preload="none"><source src="audio/08-dialog.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă dialogul (MP3, după ce înregistrezi)</span>
            </div>

            <div style="background: #eff6ff; border: 2px dashed #3b82f6; padding: 12px 16px; border-radius: 8px; margin-bottom: 15px; display: flex; flex-wrap: wrap; gap: 10px; align-items: center;">
                <button onclick="playFullDialog()" style="background:#3b82f6;color:white;border:none;padding:10px 18px;border-radius:8px;cursor:pointer;font-weight:600;">🎙️ Redă tot dialogul (TTS)</button>
                <button onclick="stopDialog()" style="background:#ef4444;color:white;border:none;padding:10px 18px;border-radius:8px;cursor:pointer;font-weight:600;">⏹ Stop</button>
                <small style="color:#6b7280;">Click pe 🔊 lângă orice replică pentru a o asculta individual.</small>
            </div>

            <p style="margin-bottom: 15px;"><em>Prima zi la muncă — Peter (coleg) o primește pe Anna (nouă) și îi arată biroul. Dialogul folosește peste 10 prefixe din lecția 2.</em></p>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> Hallo Anna! Willkommen im Team! Darf ich mich <u>vorstellen</u>? Ich bin Peter. <button onclick="speakDialogLine(event, 0)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Salut Anna! Bine ai venit în echipă! Îmi permiteți să mă prezint? Eu sunt Peter. (<em>sich vorstellen</em>)</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Hallo Peter! Ich bin Anna. Ich habe meinen Laptop <u>mitgebracht</u>. <button onclick="speakDialogLine(event, 1)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Salut Peter! Eu sunt Anna. Mi-am adus laptopul. (<em>mitbringen</em>)</p>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> Super. <u>Komm</u> bitte <u>mit</u>, ich zeige dir dein Büro. <button onclick="speakDialogLine(event, 2)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Super. Vino cu mine, te rog, îți arăt biroul. (<em>mitkommen</em>)</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Gerne. Darf ich einen Kaffee <u>mitnehmen</u>? <button onclick="speakDialogLine(event, 3)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Cu plăcere. Pot să iau o cafea cu mine? (<em>mitnehmen</em>)</p>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> Natürlich! Die Küche ist da hinten. <u>Geh</u> hinein, rechts ist die Maschine. <button onclick="speakDialogLine(event, 4)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Sigur! Bucătăria e în spate. Intră, în dreapta e aparatul. (<em>hineingehen</em>)</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Danke. Wann fangen wir an? <button onclick="speakDialogLine(event, 5)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Mulțumesc. Când începem?</p>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> Um 9. Wir <u>arbeiten zusammen</u> am ersten Projekt. <button onclick="speakDialogLine(event, 6)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">La 9. Lucrăm împreună la primul proiect. (<em>zusammenarbeiten</em>)</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Und wenn ich eine Frage habe? <button onclick="speakDialogLine(event, 7)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Și dacă am o întrebare?</p>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> <u>Frag</u> mich <u>nach</u>! Ich bin dein Mentor. Oder <u>ruf</u> mich einfach <u>an</u>. <button onclick="speakDialogLine(event, 8)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Întreabă-mă! Sunt mentorul tău. Sau sună-mă pur și simplu. (<em>nachfragen, anrufen</em>)</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Perfekt. Was <u>hast</u> du heute noch <u>vor</u>? <button onclick="speakDialogLine(event, 9)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Perfect. Ce mai ai de gând azi? (<em>vorhaben</em>)</p>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> Um 17 Uhr gehen wir alle <u>zurück</u> zur Besprechung. <u>Denk</u> bitte daran <u>nach</u>, dass du deinen Ausweis <u>mitbringst</u>. <button onclick="speakDialogLine(event, 10)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">La 17 ne întoarcem cu toții la ședință. Gândește-te, te rog, să-ți aduci legitimația. (<em>zurückgehen, nachdenken, mitbringen</em>)</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Ich <u>mache weiter</u>, dann. Bis 17 Uhr! <button onclick="speakDialogLine(event, 11)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Atunci continui. Pe la 17! (<em>weitermachen</em>)</p>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> Bis später! <button onclick="speakDialogLine(event, 12)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Pe mai târziu!</p>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6; margin-top: 20px;">
                <h4>🗝️ Verbe separabile cu prefixe din lecția 2 folosite în dialog</h4>
                <p><strong>sich vorstellen</strong> (a se prezenta), <strong>mitbringen</strong> (a aduce cu), <strong>mitkommen</strong> (a veni cu), <strong>mitnehmen</strong> (a lua cu), <strong>hineingehen</strong> (a intra), <strong>zusammenarbeiten</strong> (a colabora), <strong>nachfragen</strong> (a întreba), <strong>vorhaben</strong> (a plănui), <strong>zurückgehen</strong> (a merge înapoi), <strong>nachdenken</strong> (a reflecta), <strong>weitermachen</strong> (a continua).</p>
            </div>

            <div class="theory-box">
                <h4>🔑 Strategii</h4>
                <ul>
                    <li><strong>Învață pe situații:</strong> birou (vorstellen, mitbringen, zusammenarbeiten), călătorie (mitfahren, zurückkommen, weitergehen), familie (mithelfen, zuhören, vorlesen).</li>
                    <li><strong>Perechi cheie:</strong> hin ↔ her, vor ↔ zurück, weg ↔ zurück.</li>
                    <li><strong>Memorizare:</strong> „Komm <em>mit</em>!" și „Komm <em>her</em>!" sunt printre cele mai frecvente cereri în germană. Memorează-le cu voce tare.</li>
                </ul>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) {
        container.innerHTML = theoryHTML;
    }
});

// ============================================
// DIALOG TTS
// ============================================
const dialogLines = [
    "Hallo Anna! Willkommen im Team! Darf ich mich vorstellen? Ich bin Peter.",
    "Hallo Peter! Ich bin Anna. Ich habe meinen Laptop mitgebracht.",
    "Super. Komm bitte mit, ich zeige dir dein Büro.",
    "Gerne. Darf ich einen Kaffee mitnehmen?",
    "Natürlich! Die Küche ist da hinten. Geh hinein, rechts ist die Maschine.",
    "Danke. Wann fangen wir an?",
    "Um 9. Wir arbeiten zusammen am ersten Projekt.",
    "Und wenn ich eine Frage habe?",
    "Frag mich nach! Ich bin dein Mentor. Oder ruf mich einfach an.",
    "Perfekt. Was hast du heute noch vor?",
    "Um 17 Uhr gehen wir alle zurück zur Besprechung. Denk bitte daran nach, dass du deinen Ausweis mitbringst.",
    "Ich mache weiter, dann. Bis 17 Uhr!",
    "Bis später!"
];

function speakDialogLine(event, index) {
    if (event) event.stopPropagation();
    const line = dialogLines[index];
    if (!line) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(line);
        u.lang = 'de-DE';
        u.rate = 0.9;
        u.pitch = index % 2 === 0 ? 0.85 : 1.15;
        window.speechSynthesis.speak(u);
    } else {
        alert('Browser-ul tău nu suportă Text-to-Speech.');
    }
}

function playFullDialog() {
    if (!('speechSynthesis' in window)) {
        alert('Browser-ul tău nu suportă Text-to-Speech.');
        return;
    }
    window.speechSynthesis.cancel();
    dialogLines.forEach((line, i) => {
        const u = new SpeechSynthesisUtterance(line);
        u.lang = 'de-DE';
        u.rate = 0.9;
        u.pitch = i % 2 === 0 ? 0.85 : 1.15;
        window.speechSynthesis.speak(u);
    });
}

function stopDialog() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}
