// by Mark Shapiro
input.onButtonPressed(Button.A, function () {
    player.move(1)
})
input.onButtonPressed(Button.AB, function () {
    Bullet = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        Bullet.change(LedSpriteProperty.Y, -1)
        basic.pause(10)
        if (Enemy.isTouching(Bullet)) {
            Enemy.delete()
            game.addScore(1)
        }
    }
    Bullet.delete()
})
input.onButtonPressed(Button.B, function () {
    player.move(-1)
})
function Live () {
    Lives = 1
    if (Enemy.isTouching(player)) {
        Lives += -1
        if (Lives < 1) {
            game.gameOver()
        }
    }
    if (Enemy.isTouching(Bullet)) {
        Lives += 0.25
    }
}
let Lives = 0
let Enemy: game.LedSprite = null
let Bullet: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
basic.forever(function () {
    Enemy = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        Enemy.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    basic.pause(10)
    Enemy.delete()
})
basic.forever(function () {
    if (Enemy.isTouching(player)) {
        player.delete()
        basic.showNumber(game.score())
        basic.pause(500)
        game.gameOver()
    }
})
