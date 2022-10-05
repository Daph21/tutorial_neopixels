let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.setBrightness(30)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(200)
})
