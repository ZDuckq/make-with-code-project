namespace SpriteKind {
    export const Arrow = SpriteKind.create()
}

function startGame() {
    //let arrow = sprites.create(assets.image`purpleArrow`, SpriteKind.Player)
    scene.setBackgroundColor(8)
    let scoreboard1 = sprites.create(img`
        fffffffffffffffffffffffffffff
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        fffffffffffffffffffffffffffff
    `, SpriteKind.Projectile)
    let scoreboard2 = sprites.create(img`
        fffffffffffffffffffffffffffff
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        fffffffffffffffffffffffffffff
    `, SpriteKind.Projectile)
    let scoreboard3 = sprites.create(img`
        fffffffffffffffffffffffffffff
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        fffffffffffffffffffffffffffff
    `, SpriteKind.Projectile)
    let scoreboard4 = sprites.create(img`
        fffffffffffffffffffffffffffff
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        f...........................f
        fffffffffffffffffffffffffffff
    `, SpriteKind.Projectile)
    scoreboard1.setPosition(20, 80)
    scoreboard2.setPosition(60, 80)
    scoreboard3.setPosition(100, 80)
    scoreboard4.setPosition(140, 80)
    info.setScore(0)
}

function sendArrow (direction: string) {
    let arrowSprite: Sprite = sprites.create(img`1`, SpriteKind.Arrow)
    
    if (direction == "left") {
        arrowSprite.setImage(assets.image`leftArrow`)
        arrowSprite.x = 20
    } else if (direction == "up") {
        arrowSprite.setImage(assets.image`upArrow`)
        arrowSprite.x = 60
    } else if (direction == "down") {
        arrowSprite.setImage(assets.image`downArrow`)
        arrowSprite.x = 100
    } else if (direction == "right") {
        arrowSprite.setImage(assets.image`rightArrow`)
        arrowSprite.x = 140
        
    }
    arrowSprite.y = 0
    arrowSprite.vy = 60
}

function startLevelZero (): void {
    sendArrow("left")
    pause(400)
    sendArrow("down")
    pause(400)
    sendArrow("up")
}

function startLevelOne(): void {

}

startGame()
startLevelZero()
