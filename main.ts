input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        `)
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.showIcon(IconNames.Duck)
    basic.pause(2000)
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.showIcon(IconNames.House)
    basic.pause(2000)
    basic.showIcon(IconNames.Giraffe)
    basic.pause(2000)
    basic.showIcon(IconNames.Butterfly)
    basic.pause(2000)
    basic.showIcon(IconNames.LeftTriangle)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Sporting")
    basic.showString("Gogogo this is amazing")
})
