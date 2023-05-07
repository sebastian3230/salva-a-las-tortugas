basic.forever(function () {
    if (input.temperature() > 34) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        basic.showString("T.Alta")
    }
    if (input.temperature() < 26) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        basic.showString("T.Baja")
    }
    if (input.temperature() >= 26) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showString("T.normal")
    }
})
