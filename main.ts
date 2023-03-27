basic.forever(function () {
    if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.White)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 260)
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
        music.playMelody("C5 A B G A F G E ", 120)
        basic.showString("siuu")
        basic.pause(100)
    }
    if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.White)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 260)
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
        music.playMelody("C5 A B G A F G E ", 120)
        basic.showString("brrr")
        basic.pause(100)
    }
    if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.Black) || mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.Black)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 260)
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
        basic.showString("siuu")
    }
})
