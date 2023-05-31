function giro_90 () {
    Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 100)
    Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CCW, 100)
    basic.pause(350)
    Maqueen.MotorStop(Maqueen.Motors.All)
}
function linea_recta () {
    Maqueen.MotorRun(Maqueen.Motors.All, Maqueen.Dir.CW, 100)
    basic.pause(500)
    Maqueen.MotorStop(Maqueen.Motors.All)
}
function giro_180 () {
    Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 100)
    Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CCW, 100)
    basic.pause(644)
    Maqueen.MotorStop(Maqueen.Motors.All)
}
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
basic.pause(500)
for (let index = 0; index < 4; index++) {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    linea_recta()
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    giro_90()
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
}
