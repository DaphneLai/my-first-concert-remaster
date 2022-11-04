namespace SpriteKind {
    export const Sheet = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    conductor,
    assets.animation`jumpUp`,
    200,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    conductor,
    assets.animation`walkLeft`,
    200,
    true
    )
})
function initIntro () {
	
}
// CUT SCENE
// CONDUCTOR
function initPlayer () {
    conductor = sprites.create(assets.image`imgConductor00`, SpriteKind.Player)
    scene.cameraFollowSprite(conductor)
    controller.moveSprite(conductor)
    conductor.setPosition(80, 180)
    conductor.ay = 300
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    conductor,
    assets.animation`walkRight`,
    200,
    true
    )
})
// SET UP LEVEL
function gameStatus () {
    mapLevel = [tilemap`level1`, tilemap`level2`, tilemap`level2`]
    tiles.setCurrentTilemap(mapLevel[currentLevel])
}
info.onLifeZero(function () {
    game.over(false, effects.confetti)
})
// currentSheet.setPosition(0, 0)
function initSong () {
    song1 = [0]
    song2 = [0]
    song3 = [0]
    musicSheet = [assets.image`imgMusic1`, assets.image`imgMusic2`, assets.image`imgMusic3`]
    songList = [song1, song2, song3]
    correctNotes = songList[currentLevel]
    currentSheet = sprites.create(musicSheet[currentLevel], SpriteKind.Sheet)
    tiles.placeOnTile(currentSheet, tiles.getTileLocation(0, 0))
    currentSheet.setStayInScreen(true)
}
let currentSheet: Sprite = null
let correctNotes: number[] = []
let songList: number[][] = []
let musicSheet: Image[] = []
let song3: number[] = []
let song2: number[] = []
let song1: number[] = []
let currentLevel = 0
let mapLevel: tiles.TileMapData[] = []
let conductor: Sprite = null
gameStatus()
scene.setBackgroundImage(assets.image`imgConcertHall`)
initSong()
info.setLife(3)
initPlayer()
game.onUpdate(function () {
	
})
