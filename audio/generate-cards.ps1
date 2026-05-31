Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
try { $synth.SelectVoice("Microsoft Hedda Desktop") } catch { Write-Host "Hedda voice not available, using default DE voice" }
$synth.Rate = -2

$ae = [char]0x00E4; $oe = [char]0x00F6; $ue = [char]0x00FC; $ss = [char]0x00DF; $AE = [char]0x00C4; $OE = [char]0x00D6; $UE = [char]0x00DC

$outDir = "$PSScriptRoot\cards"
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

# 50 carduri: filename + text. Diacriticele DE sunt construite la runtime cu [char]0x.. ca să evităm corupția în PowerShell 5.1.
$cards = @(
    @("01-vorstellen.wav", "sich vorstellen"),
    @("02-vorbereiten.wav", "vorbereiten"),
    @("03-vorhaben.wav", "vorhaben"),
    @("04-vorlesen.wav", "vorlesen"),
    @("05-vorschlagen.wav", "vorschlagen"),
    @("06-vorziehen.wav", "vorziehen"),
    @("07-vorkommen.wav", "vorkommen"),
    @("08-vorbeigehen.wav", "vorbeigehen"),
    @("09-zumachen.wav", "zumachen"),
    @("10-zuhoeren.wav", "zuh${oe}ren"),
    @("11-zuschauen.wav", "zuschauen"),
    @("12-zustimmen.wav", "zustimmen"),
    @("13-zunehmen.wav", "zunehmen"),
    @("14-zugeben.wav", "zugeben"),
    @("15-mitkommen.wav", "mitkommen"),
    @("16-mitbringen.wav", "mitbringen"),
    @("17-mitnehmen.wav", "mitnehmen"),
    @("18-mitfahren.wav", "mitfahren"),
    @("19-mitmachen.wav", "mitmachen"),
    @("20-mithelfen.wav", "mithelfen"),
    @("21-mitteilen.wav", "mitteilen"),
    @("22-mitarbeiten.wav", "mitarbeiten"),
    @("23-nachdenken.wav", "nachdenken"),
    @("24-nachfragen.wav", "nachfragen"),
    @("25-nachholen.wav", "nachholen"),
    @("26-nachmachen.wav", "nachmachen"),
    @("27-nachschauen.wav", "nachschauen"),
    @("28-weitermachen.wav", "weitermachen"),
    @("29-weitergehen.wav", "weitergehen"),
    @("30-weiterempfehlen.wav", "weiterempfehlen"),
    @("31-weitersagen.wav", "weitersagen"),
    @("32-weggehen.wav", "weggehen"),
    @("33-weglaufen.wav", "weglaufen"),
    @("34-wegnehmen.wav", "wegnehmen"),
    @("35-wegwerfen.wav", "wegwerfen"),
    @("36-wegbringen.wav", "wegbringen"),
    @("37-zurueckkommen.wav", "zur${ue}ckkommen"),
    @("38-zurueckgehen.wav", "zur${ue}ckgehen"),
    @("39-zurueckgeben.wav", "zur${ue}ckgeben"),
    @("40-zurueckrufen.wav", "zur${ue}ckrufen"),
    @("41-zurueckschicken.wav", "zur${ue}ckschicken"),
    @("42-hingehen.wav", "hingehen"),
    @("43-hinsetzen.wav", "hinsetzen"),
    @("44-herkommen.wav", "herkommen"),
    @("45-herbringen.wav", "herbringen"),
    @("46-zusammenarbeiten.wav", "zusammenarbeiten"),
    @("47-zusammenfassen.wav", "zusammenfassen"),
    @("48-vorschlag.wav", "der Vorschlag, die Vorschl${ae}ge"),
    @("49-mitarbeiter.wav", "der Mitarbeiter, die Mitarbeiter"),
    @("50-zusammenarbeit.wav", "die Zusammenarbeit")
)

$total = $cards.Count
$ok = 0
foreach ($card in $cards) {
    $filename = $card[0]
    $text = $card[1]
    $outPath = Join-Path $outDir $filename
    try {
        $synth.SetOutputToWaveFile($outPath)
        $synth.Speak($text)
        $synth.SetOutputToNull()
        $ok++
        Write-Host "  [$ok/$total] $filename" -ForegroundColor Green
    } catch {
        Write-Host "  ERROR: $filename -- $_" -ForegroundColor Red
    }
}

$synth.Dispose()
Write-Host ""
Write-Host "Generated $ok / $total WAV files in $outDir" -ForegroundColor Cyan
