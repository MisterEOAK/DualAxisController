let xVal = 0
let yVal = 0
basic.forever(function () {
    basic.clearScreen()
    xVal = pins.analogReadPin(AnalogPin.P0)
    yVal = pins.analogReadPin(AnalogPin.P1)
    if (xVal < 400) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (xVal > 600) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.clearScreen()
    } else if (yVal > 600) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (yVal < 400) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
        basic.pause(200)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.pause(200)
    }

    basic.clearScreen()
})
