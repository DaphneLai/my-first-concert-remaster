function initPlayer () {
    conductor = sprites.create(assets.image`imgConductor01`, SpriteKind.Player)
    scene.cameraFollowSprite(conductor)
    controller.moveSprite(conductor)
    conductor.setPosition(80, 180)
}
let conductor: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundImage(assets.image`imgConcertHall`)
initPlayer()
