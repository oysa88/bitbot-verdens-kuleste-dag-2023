radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.rotate(BBRobotDirection.Left, 60)
    } else if (receivedNumber == 2) {
        bitbot.rotate(BBRobotDirection.Right, 60)
    } else if (receivedNumber == 3) {
        bitbot.go(BBDirection.Forward, 100)
    } else if (receivedNumber == 4) {
        bitbot.go(BBDirection.Reverse, 100)
    } else {
        bitbot.go(BBDirection.Forward, 0)
    }
})
radio.setGroup(1)
bitbot.setLedColor(0xD82600)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `, 0)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `, 0)
    } else if (input.rotation(Rotation.Pitch) < -25) {
        radio.sendNumber(3)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `, 0)
    } else if (input.rotation(Rotation.Pitch) > 25) {
        radio.sendNumber(4)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `, 0)
    } else {
        radio.sendNumber(0)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `, 0)
    }
})
