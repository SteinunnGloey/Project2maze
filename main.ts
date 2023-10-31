function Ocean_1 () {
    game.showLongText("What type of fish is Jaques in finding nemo? ", DialogLayout.Bottom)
    story.showPlayerChoices("Fish ", "Shrimp")
    if (story.checkLastAnswer("Shrimp")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(2)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function Solar_2 () {
    game.showLongText("What is largest planet in the in the solar system. ", DialogLayout.Bottom)
    story.showPlayerChoices("Sun", "Jupiter")
    if (story.checkLastAnswer("Jupiter")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(1)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function Earth_2 () {
    game.showLongText("What was Pangaea? ", DialogLayout.Bottom)
    story.showPlayerChoices("A cheese", "Supercontinent ")
    if (story.checkLastAnswer("Supercontinent")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(1)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function Air_3 () {
    game.showLongText("A space that contains no air or any gas is known as?  ", DialogLayout.Bottom)
    story.showPlayerChoices("Vacumm", "Dark matter")
    if (story.checkLastAnswer("Vacumm")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(3)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    currentLevel += 1
    changeLevel(currentLevel)
})
function changeLevel (levelNumber: number) {
    if (levelNumber == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
        tiles.placeOnRandomTile(Spaceguy, assets.tile`myTile5`)
        info.startCountdown(120)
    } else if (levelNumber == 2) {
        tiles.setCurrentTilemap(tilemap`level3`)
        tiles.placeOnRandomTile(Spaceguy, assets.tile`myTile11`)
    } else if (levelNumber == 3) {
        tiles.setCurrentTilemap(tilemap`level7`)
        tiles.placeOnRandomTile(Spaceguy, assets.tile`myTile15`)
    } else if (levelNumber == 4) {
        tiles.setCurrentTilemap(tilemap`level8`)
        tiles.placeOnRandomTile(Spaceguy, assets.tile`myTile11`)
    } else if (levelNumber == 5) {
        tiles.setCurrentTilemap(tilemap`level11`)
        tiles.placeOnRandomTile(Spaceguy, assets.tile`myTile26`)
    }
}
function Earth1 () {
    game.showLongText("What is earth's atmosphere mostly made of?  ", DialogLayout.Bottom)
    story.showPlayerChoices("Nitrogen", "Hygrogen")
    if (story.checkLastAnswer("Nitrogen")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(1)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    Solar_2()
})
function Air_2 () {
    game.showLongText(" Which gas in the atmosphere saves us from the UV rays of the sun?  ", DialogLayout.Bottom)
    story.showPlayerChoices("Ozone ", "Humidity")
    if (story.checkLastAnswer("Ozone")) {
        info.changeScoreBy(3)
    } else {
        info.changeScoreBy(-1)
    }
}
function Earth_3 () {
    game.showLongText("Where did the first earth's life develop? ", DialogLayout.Bottom)
    story.showPlayerChoices("Forrest", "Ocean")
    if (story.checkLastAnswer("Ocean")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(1)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function Solar_1 () {
    game.splash(" How many planets are there in the solar system ")
    story.showPlayerChoices("9", "8")
    if (story.checkLastAnswer("8")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(1)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function Air_1 () {
    game.showLongText("Air is a?  ", DialogLayout.Bottom)
    story.showPlayerChoices("Water", "Gas")
    if (story.checkLastAnswer("Gas")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(3)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function Solar3 () {
    game.showLongText(" What protects Earth from meteoroids & radiation from the sun?  ", DialogLayout.Bottom)
    story.showPlayerChoices("Its atmosphere", "intelligence")
    if (story.checkLastAnswer("Its atmosphere")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(1)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function Ocean_3 () {
    game.showLongText("Where is the labrador in the ocean? ", DialogLayout.Bottom)
    story.showPlayerChoices("The shore ", "Atlantic")
    if (story.checkLastAnswer("Shrimp")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(3)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
function Ocean_2 () {
    game.showLongText("Which of the following do octopuses lack?", DialogLayout.Bottom)
    story.showPlayerChoices("blood", "Bones")
    if (story.checkLastAnswer("bones")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(1)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(-1)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    Solar3()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    Solar_1()
})
let currentLevel = 0
let Spaceguy: Sprite = null
Spaceguy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 1 f f f f f f f f f 1 1 . . 
    . 1 1 f f f f f f 8 8 f 1 1 . . 
    . 1 1 f f f f f f f f f 1 1 . . 
    . 1 1 f f f f f f f f f 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 1 1 . . . 1 1 1 . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Spaceguy, 100, 100)
scene.cameraFollowSprite(Spaceguy)
currentLevel = 1
changeLevel(1)
