def on_forever():
    if input.temperature() > 34:
        basic.show_leds("""
            . . # . .
                        . # # # .
                        # # # # #
                        # # # # #
                        . # # # .
        """)
        basic.pause(1000)
        basic.show_icon(IconNames.SAD)
    if True:
        pass
basic.forever(on_forever)
