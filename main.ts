function Init_Trees () {
    tree_1 = [
    [7, 8],
    [7, 8],
    [
    1,
    2,
    7,
    8,
    13,
    14
    ],
    [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
    ],
    [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ],
    [
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
    ],
    [
    5,
    6,
    7,
    8,
    9,
    10
    ],
    [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ],
    [
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
    ],
    [
    5,
    6,
    7,
    8,
    9,
    10
    ],
    [
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
    ],
    [
    5,
    6,
    7,
    8,
    9,
    10
    ],
    [
    6,
    7,
    8,
    9
    ],
    [7, 8],
    [7, 8],
    [7]
    ]
    stem = [[7, 8], [7, 8], [7, 8]]
    ornaments = [
    [8],
    [1, 14],
    [7],
    [10],
    [6],
    [9],
    [2, 13],
    [5],
    [8],
    [3, 12],
    [9],
    [6],
    [9],
    [6],
    [7],
    [8]
    ]
    star = [
    [20],
    [20],
    [20],
    [20],
    [20],
    [20],
    [20],
    [20],
    [20],
    [20],
    [20],
    [20],
    [20],
    [20],
    [7, 8],
    [7, 8]
    ]
}
function showStar (flip: boolean) {
    if (flip) {
        strip.setPixelColor(248, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(247, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(232, neopixel.colors(NeoPixelColors.Orange))
        strip.setPixelColor(231, neopixel.colors(NeoPixelColors.White))
    } else {
        strip.setPixelColor(248, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(247, neopixel.colors(NeoPixelColors.Orange))
        strip.setPixelColor(232, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(231, neopixel.colors(NeoPixelColors.Yellow))
    }
}
function petternC () {
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Double))
}
function move_circle () {
    draw_circle(x_iter, 3, 2, 1)
    strip.show()
    x_iter += 1
    if (x_iter + 2 > 32) {
        x_iter = 2
    }
    strip.clear()
}
function playMusic () {
    patternA()
    patternB()
    patternA()
    petternC()
}
function diag_pattern () {
    matrix_disp(x_iter, y_iter, 1, 1, true)
    x_iter += 1
    if (x_iter > 31) {
        x_iter = 0
    }
    y_iter += 1
    if (y_iter > 7) {
        y_iter = 0
    }
}
function patternA () {
    for (let index = 0; index < 2; index++) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
    }
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(466, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(466, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(466, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
}
function draw_circle (x_origin: number, y_origin: number, radius: number, Max_Width: number) {
    x_next = x_origin
    y_next = y_origin
    matrix_disp(x_next, y_next, Max_Width, 1, true)
    color = neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255))
    angle = 0
    while (angle < 360) {
        x_next = Math.round(radius * Math.cos(angle) + x_origin)
        y_next = Math.round(radius * Math.sin(angle) + y_origin)
        matrix_disp(x_next, y_next, Max_Width, 1, true)
        angle += 10
    }
}
input.onButtonPressed(Button.A, function () {
    playMusic()
})
function patternB () {
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
}
function shooting_star () {
    star_X = 14
    Star_Y = 14
    for (let index = 0; index < 15; index++) {
        matrix_disp(star_X + 0, Star_Y + -1, 16, 2, true)
        matrix_disp(star_X + -1, Star_Y + 0, 16, 2, true)
        matrix_disp(star_X + 0, Star_Y + 0, 16, 8, true)
        matrix_disp(star_X + 1, Star_Y + 0, 16, 2, true)
        matrix_disp(star_X + 0, Star_Y + 1, 16, 2, true)
        strip.show()
        star_X += -1
        Star_Y += -1
        if (star_X < 0) {
            x_iter = 16
        }
        basic.pause(100)
        strip.clear()
    }
}
function matrix_disp (xpos: number, ypos: number, max_width: number, Color_idx: number, color_val: boolean) {
    if (xpos % 2 == 0) {
        pixel_id = xpos * max_width + ypos
    } else {
        pixel_id = (xpos + 1) * max_width - 1 - ypos
    }
    if (color_val) {
        strip.setPixelColor(pixel_id, Color_list[Color_idx])
    } else {
        strip.setPixelColor(pixel_id, neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
    }
}
function drawline (x1pos: number, y1pos: number, x2pos: number, y2pos: number, Max_Width: number) {
    x_next = x1pos
    y_next = y1pos
    matrix_disp(x1pos, y1pos, Max_Width, 1, true)
    if (x1pos == x2pos) {
        while (y_next != y2pos) {
            if (y_next < y2pos) {
                y_next += 1
            } else if (y_next > y2pos) {
                y_next += -1
            }
            matrix_disp(x_next, y_next, Max_Width, 1, true)
        }
    } else if (y1pos == y2pos) {
        while (x_next != x2pos) {
            if (x_next < x2pos) {
                x_next += 1
            } else if (x_next > y2pos) {
                x_next += -1
            }
            matrix_disp(x_next, y_next, Max_Width, 1, true)
        }
    } else {
        while (x_next != x2pos) {
            if (x_next < x2pos) {
                x_next += 1
            } else if (x_next > x2pos) {
                x_next += -1
            }
            y_next = Math.floor((y2pos - y1pos) / (x2pos - x1pos) * (x_next - x1pos) + y1pos)
            serial.writeValue("xx", x_next)
            serial.writeValue("yy", y_next)
            matrix_disp(x_next, y_next, Max_Width, 1, true)
        }
        y_next = y1pos
        while (y_next != y2pos) {
            if (y_next < y2pos) {
                y_next += 1
            } else if (y_next > y2pos) {
                y_next += -1
            }
            x_next = Math.floor((x2pos - x1pos) / (y2pos - y1pos) * (y_next - y1pos) + x1pos)
            serial.writeValue("x", x_next)
            serial.writeValue("y", y_next)
            matrix_disp(x_next, y_next, Max_Width, 1, true)
        }
    }
    matrix_disp(x2pos, y2pos, Max_Width, 1, true)
}
function show_my_bitmap (coloridx: number, bitmap_idx: number) {
    fixed_clr = true
    if (bitmap_idx == 0) {
        map_to_disp = tree_1
    } else if (bitmap_idx == 1) {
        map_to_disp = stem
    } else if (bitmap_idx == 2) {
        map_to_disp = ornaments
        fixed_clr = false
    } else if (bitmap_idx == 3) {
        map_to_disp = star
    }
    arr_d0_idx = 0
    serial.writeValue("----------------------------", 0)
    for (let element of map_to_disp) {
        arr_d1_idx = 0
        serial.writeValue(" x", arr_d0_idx)
        while (element.length != arr_d1_idx) {
            serial.writeValue("    y", arr_d1_idx)
            matrix_disp(arr_d0_idx, element[arr_d1_idx], 16, coloridx, fixed_clr)
            arr_d1_idx += 1
        }
        arr_d0_idx += 1
    }
    strip.show()
}
let init_done = false
let arr_d1_idx = 0
let arr_d0_idx = 0
let map_to_disp: number[][] = []
let fixed_clr = false
let Star_Y = 0
let star_X = 0
let angle = 0
let y_next = 0
let x_next = 0
let y_iter = 0
let star: number[][] = []
let ornaments: number[][] = []
let stem: number[][] = []
let tree_1: number[][] = []
let Color_list: number[] = []
let x_iter = 0
let color = 0
let pixel_id = 0
let strip: neopixel.Strip = null
// tree_1 = [[0]]
let WIDTH = 16
let HEIGHT = 16
let matrix = SmartMatrix.create(
DigitalPin.P1,
32,
8,
NeoPixelMode.RGB
)
matrix.Brightness(5)
strip = neopixel.create(DigitalPin.P2, 256, NeoPixelMode.RGB)
strip.setBrightness(5)
strip.clear()
pixel_id = 0
color = neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255))
x_iter = 5
serial.writeValue("----------------------------", 0)
Color_list = [
neopixel.colors(NeoPixelColors.Red),
neopixel.colors(NeoPixelColors.Orange),
neopixel.colors(NeoPixelColors.Yellow),
neopixel.colors(NeoPixelColors.Green),
neopixel.colors(NeoPixelColors.Blue),
neopixel.colors(NeoPixelColors.Indigo),
neopixel.colors(NeoPixelColors.Violet),
neopixel.colors(NeoPixelColors.Purple),
neopixel.colors(NeoPixelColors.White),
neopixel.colors(NeoPixelColors.Black),
neopixel.rgb(210, 105, 30)
]
let BROWN_CLR_IDX = 10
Init_Trees()
basic.forever(function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
})
basic.forever(function () {
    color = neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255))
    matrix.scrollText(
    "MERRY CHRISTMAS",
    20,
    1,
    color
    )
    matrix.show()
})
basic.forever(function () {
    if (init_done) {
        show_my_bitmap(1, 2)
        showStar(true)
        strip.show()
        basic.pause(100)
        showStar(false)
        strip.show()
        basic.pause(100)
    }
})
basic.forever(function () {
    init_done = false
    shooting_star()
    show_my_bitmap(3, 0)
    show_my_bitmap(BROWN_CLR_IDX, 1)
    init_done = true
    basic.pause(12500)
})
