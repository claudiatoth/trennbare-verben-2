# Audio pentru Trennbare Verben (Teil 2) — A2/B1

## 🎙️ Vocea Claudiei — Teorie (8 MP3) + Dialog animat (1 MP3)

Pune aici **8 MP3-uri pentru teorie + 1 MP3 pentru dialog**. Folderul e momentan gol — până încarci fișierele, butoanele ▶ vor afișa un mesaj „audio lipsește" (la dialog: animația merge pe timer fallback).

### Teorie (8 MP3 — câte unul per subsecțiune)

| # | Fișier | Subsecțiune |
|---|---|---|
| 1 | `01-intro.mp3` | Intro + recapitulare din Teil 1 |
| 2 | `02-vor.mp3` | Prefix vor- (în față / prezentare) |
| 3 | `03-zu.mp3` | Prefix zu- (spre / închidere / acceptare) |
| 4 | `04-mit.mp3` | Prefix mit- (împreună / cu) |
| 5 | `05-nach-weiter.mp3` | Prefixele nach- și weiter- |
| 6 | `06-weg-zurueck.mp3` | Prefixele weg- și zurück- |
| 7 | `07-hin-her-zusammen.mp3` | Prefixele hin- / her- / zusammen- |
| 8 | `08-substantive.mp3` | Substantive derivate Sg + Pl (8 substantive) |

### Dialog animat (1 MP3 lung cu cele 13 replici)

| Fișier | Conținut |
|---|---|
| `dialog-01.mp3` | „Andreas erster Tag bei Annette" — toate 13 replici Annette + Andrea într-un singur fișier. Lungime estimată: ~65 secunde. Animația din pagină sincronizează automat pe `currentTime` — vezi `dialogs.js` câmpul `start` (în secunde) pentru fiecare replică. |

**Cum să înregistrezi `dialog-01.mp3`**: citește în ordine cele 13 replici din `dialogs.js` câmpul `de`, fără pauze lungi (1-2 sec între replici e ok). Audio normal de la 0 la final — animația sare automat la replica potrivită pe baza timpilor `start` predefiniți. Dacă durata reală diferă semnificativ, ajustez `start` în `dialogs.js`.

## 📥 Cum încarci fișierele

**Varianta web (fără Git):** Pe pagina repo-ului GitHub, intri în folderul `audio/`, apeși **„Add file" → „Upload files"**, dai drag-and-drop la MP3-uri, commit.

**Varianta locală:** Le pui în `E:\Date Asus\...\trennbare-verben-2\audio\` și-mi spui să fac commit + push.

## 🤖 Audio Hedda pregenerat (flashcards — 50 WAV)

Folderul `cards/` conține 50 fișiere WAV pre-generate cu vocea Hedda (Windows TTS Microsoft Hedda Desktop). Sunt declanșate de butonul 🔊 din carduri și funcționează direct.

Maparea fișiere → cuvânt e definită în `flashcards.js` (atributul `audio:` din fiecare card).

## 🎙️ Voci recomandate pentru MP3 (TTSMaker — dacă vrei voci alternative)

- **Sander-DE Germany Female** (voce 290, nelimitat) — narator feminin
- **Killian-DE Germany Male** (voce 120095, 3000 char/conv) — narator masculin

Pentru dialog cu voci alternante (Annette + Andreea), pot să-ți rescriu codul ca să folosească 13 fragmente separate (`08-01.mp3` … `08-13.mp3`) — spune-mi.
