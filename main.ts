namespace SpriteKind {
    export const Sheet = SpriteKind.create()
}
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
// currentSheet.setPosition(0, 0)
function initSong () {
    song1 = [0]
    song2 = [0]
    song3 = [0]
    musicSheet = [musicSheet1, musicSheet2, musicSheet3]
    songList = [song1, song2, song3]
    correctNotes = songList[currentLevel]
    musicSheet1 = sprites.create(assets.image`imgMusic1`, SpriteKind.Sheet)
    musicSheet2 = sprites.create(assets.image`imgMusic2`, SpriteKind.Sheet)
    musicSheet3 = sprites.create(assets.image`imgMusic3`, SpriteKind.Sheet)
    currentSheet = musicSheet[currentLevel]
}
let currentSheet: Sprite = null
let correctNotes: number[] = []
let songList: number[][] = []
let musicSheet3: Sprite = null
let musicSheet2: Sprite = null
let musicSheet1: Sprite = null
let musicSheet: Sprite[] = []
let song3: number[] = []
let song2: number[] = []
let song1: number[] = []
let conductor: Sprite = null
let currentLevel = 0
let mapLevel: tiles.TileMapData[] = []
mapLevel = [tilemap`level1`, tilemap`level2`, tilemap`level10`]
info.setLife(3)
// SET UP
tiles.setCurrentTilemap(mapLevel[currentLevel])
scene.setBackgroundImage(assets.image`imgConcertHall`)
initSong()
initPlayer()
game.onUpdate(function () {
	
})
