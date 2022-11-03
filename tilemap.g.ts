// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "leve3":
            case "level5":return tiles.createTilemap(hex`1400140000000000000000000000000000000000000000000000000000000000000800000006000000000004000500000800000000030103020301030103010300030103010301060000000002000000000000000000000000000003070000000200000000000000040000000800000001050008020000000000000701000003010201030103010302030103000001030000000000020000000000000200000000000000000006000002000000000007020000050000000001030103010201060000010302030103010000040000000000020003000000000200000000000103070500000002000001040000020008000000000001030007000200080003000002030103040000080000000301030103000001000200000001030103000000000000000005000003020000000000000000000000080000000103000001060000080000000000010301030000000000000003010301000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
....................
....................
.........222.2222222
.222222.............
.......2............
........2...........
2..22.222222.222..22
....................
....................
22222.2...22.2222...
.......2..........22
........2...........
22.......2...222....
...22222..2.....2222
...........2........
........22..2.......
..2222.......2222...
....................
....................
22222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile2,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
            case "level2":
            case "level3":return tiles.createTilemap(hex`140010000000000000000000000000000000000000000000050000000000040000080007000000000500000601030100000001010101010101030000010101010003000100000000000000000003000800000000060304000107000000000005000301010000000001010101010100000000000101030000000000000000000000000108000000000003000004000705080006000700000100060000000301010101010101020102010000000201020100030000000000000000000000000000000000000003000800000000000000000400070006000000000301020000000000000000010201020100000000030000010800000000000000000000000000000003040000020500000000000000000000000000010101010101020000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
....................
....................
2.2...2222222...2222
...2................
....2.........22....
222222.....22.......
......2.............
.......2......222222
22222...2222........
....................
..............22....
....22222.......2...
.................2..
............2222222.
....................
22222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`14000d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005000800060000000700000804000600000000030103010301000001030102030103010000000000000000000000000000000200000000000004000600000700000804000500020008000700050103010302010000030103010002000103010301000000000200000000000000000200000000000000000600020705000400000500020806000007040000010302010301030000010301030103010301000000000200000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 . . 2 2 2 . 2 2 2 2 . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
2 2 2 2 . 2 . . 2 2 2 2 . . . 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . 2 2 . 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile2,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tilePlatform":
            case "tile1":return tile1;
            case "myTile":
            case "tile3":return tile3;
            case "tilePlatform0":
            case "tile2":return tile2;
            case "myTile0":
            case "tile4":return tile4;
            case "myTile1":
            case "tile5":return tile5;
            case "myTile2":
            case "tile6":return tile6;
            case "myTile3":
            case "tile7":return tile7;
            case "myTile4":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
