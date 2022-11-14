# by Mark Shapiro

def on_button_pressed_a():
    player.move(1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Bullet
    Bullet = game.create_sprite(player.get(LedSpriteProperty.X),
        player.get(LedSpriteProperty.Y))
    for index in range(4):
        Bullet.change(LedSpriteProperty.Y, -1)
        basic.pause(10)
        if Enemy.is_touching(Bullet):
            Enemy.delete()
            game.add_score(1)
    Bullet.delete()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    player.move(-1)
input.on_button_pressed(Button.B, on_button_pressed_b)

Enemy: game.LedSprite = None
Bullet: game.LedSprite = None
player: game.LedSprite = None
Lives = None
player = game.create_sprite(2, 4)


def on_forever():
    global Enemy
    Enemy = game.create_sprite(randint(0, 4), 0)
    for index2 in range(4):
        Enemy.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    basic.pause(10)
    Enemy.delete()
basic.forever(on_forever)

def on_forever2():
    if Enemy.is_touching(player):
        player.delete()
        basic.show_number(game.score())
        basic.pause(500)
        game.game_over()
basic.forever(on_forever2)
