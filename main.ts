// CUT SCENE
// CONDUCTOR
function initPlayer () {
    conductor = sprites.create(assets.image`imgConductor01`, SpriteKind.Player)
    scene.cameraFollowSprite(conductor)
    controller.moveSprite(conductor)
    conductor.setPosition(80, 180)
    conductor.ay = 300
}
// SET UP LEVEL
function gameStatus () {
    tiles.setCurrentTilemap(mapLevel[currentLevel])
}
info.onLifeZero(function () {
    game.over(false, effects.confetti)
})
let conductor: Sprite = null
let mapLevel: tiles.TileMapData[] = []
let currentLevel = 0
let song1 = [0]
let song2 = [0]
let song3 = [0]
let songList = [song1, song2, song3]
let correctNotes = songList[currentLevel]
mapLevel = [tilemap`level1`, tilemap`level2`, tilemap`leve3`]
info.setLife(3)

// SET UP
tiles.setCurrentTilemap(mapLevel[currentLevel])
scene.setBackgroundImage(assets.image`imgConcertHall`)
initPlayer()
game.onUpdate(function () {
	
})
