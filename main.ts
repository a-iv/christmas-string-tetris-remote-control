input.onButtonPressed(Button.A, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(6)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(5)
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(9)
})
