input.onButtonPressed(Button.A, function on_button_pressed_a() {
    player.move(1)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    shoot = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(10)
        if (Enemy.isTouching(shoot)) {
            Enemy.delete()
            game.addScore(1)
        }
        
    }
    shoot.delete()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    player.move(-1)
})
let Enemy : game.LedSprite = null
let shoot : game.LedSprite = null
let player : game.LedSprite = null
player = game.createSprite(2, 4)
basic.forever(function on_forever() {
    if (Enemy.isTouching(player)) {
        player.delete()
        game.gameOver()
    }
    
})
basic.forever(function on_forever2() {
    
    Enemy = game.createSprite(randint(0, 4), 0)
    for (let index2 = 0; index2 < 4; index2++) {
        Enemy.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    basic.pause(10)
    Enemy.delete()
})
