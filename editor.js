window.addEventListener("load", function () {
    refreshAll()
    refreshJSON()
})

let canvas;

function refreshAll() {
    fillInputs()
    refreshModeSpecificInputs()
    drawGrid()
    updateLevel()
}

// Fill inputs with level data
function fillInputs() {
    document.getElementById("author").value = level.author
    document.getElementById("levelName").value = level.levelName
    document.getElementById("description").value = level.description
    document.getElementById("levelType").value = level.levelType
    document.getElementById("background").value = level.background
    document.getElementById("width").value = level.width
    document.getElementById("height").value = level.height
    document.getElementById("startLines").value = level.startLines
    document.getElementById("startSpeed").value = level.startSpeed
    document.getElementById("previewLines").value = level.previewLines > 0
    document.getElementById("noScrolling").value = level.noScrolling
    document.getElementById("noSpeedUp").value = level.noSpeedUp
    document.getElementById("limitSpeed").value = level.limitSpeed
    document.getElementById("seed").value = level.randomSeed
    document.getElementById("timeLimit").value = level.timeLimit
    document.getElementById("score").value = level.score
    document.getElementById("timeReached").value = level.timeReached
    document.getElementById("timeLimit").value = level.timeLimit
    document.getElementById("highestCombo").value = level.highestCombo
    document.getElementById("totalCombos").value = level.totalCombos
    document.getElementById("total4Combos").value = level.total4Combos
    document.getElementById("total5Combos").value = level.total5Combos
    document.getElementById("totalLCombos").value = level.totalLCombos
    document.getElementById("highestChain").value = level.highestChain
    document.getElementById("totalChains").value = level.totalChains
    document.getElementById("digHeight").value = level.digHeight
    document.getElementById("maxMoves").value = level.maxMovesCount
}

// Fill level data with inputs
function updateLevel() {

    level.author = document.getElementById("author").value
    level.levelName = document.getElementById("levelName").value
    level.description = document.getElementById("description").value
    level.levelType = document.getElementById("levelType").value
    level.background = document.getElementById("background").value
    level.width = document.getElementById("width").value
    level.height = document.getElementById("height").value
    level.startLines = document.getElementById("startLines").value
    level.startSpeed = document.getElementById("startSpeed").value
    level.previewLines = document.getElementById("previewLines").value ? 3 : -1
    level.noScrolling = document.getElementById("noScrolling").value
    level.noSpeedUp = document.getElementById("noSpeedUp").value
    level.limitSpeed = document.getElementById("limitSpeed").value
    level.randomSeed = document.getElementById("seed").value
    level.timeLimit = document.getElementById("timeLimit").value
    level.score = document.getElementById("score").value
    level.timeReached = document.getElementById("timeReached").value
    level.timeLimit = document.getElementById("timeLimit").value
    level.highestCombo = document.getElementById("highestCombo").value
    level.totalCombos = document.getElementById("totalCombos").value
    level.total4Combos = document.getElementById("total4Combos").value
    level.total5Combos = document.getElementById("total5Combos").value
    level.totalLCombos = document.getElementById("totalLCombos").value
    level.highestChain = document.getElementById("highestChain").value
    level.totalChains = document.getElementById("totalChains").value
    level.digHeight = document.getElementById("digHeight").value
    level.maxMovesCount = document.getElementById("maxMoves").value

    refreshModeSpecificInputs()
    refreshJSON()
}
function refreshGridSize() {

    let widthInput = document.getElementById("width")
    let heightInput = document.getElementById("height")

    let w = Number.parseInt(widthInput.value)
    level.width = Math.max(2, Number.isNaN(w) ? 0 : w)
    let h = Number.parseInt(heightInput.value)
    level.height = Math.min(16, Math.max(8, Number.isNaN(h) ? 0 : h))

    widthInput.value = level.width
    heightInput.value = level.height

    console.log("Grid size: " + width + "x" + height)

    drawGrid()
}

function drawGrid() {
    canvas = document.getElementById("editor-grid")

    // Draw grid
    let pixels = 20
    let w = level.width * pixels
    let h = level.height * pixels
    var ctx = canvas.getContext('2d')
    ctx.canvas.width = w
    ctx.canvas.height = h
    ctx.strokeStyle = 'rgb(255,255,255)';

    for (x = 0; x <= w; x += pixels) {
        for (y = 0; y <= h; y += pixels) {
            ctx.moveTo(x, 0)
            ctx.lineTo(x, h)
            ctx.stroke()
            ctx.moveTo(0, y)
            ctx.lineTo(w, y)
            ctx.stroke()
        }
    }
}

function refreshModeSpecificInputs() {
    let levelType = document.getElementById("levelType").value
    let isPuzzle = (levelType == 2)
    let isChallenge = (levelType == 1)

    let scrolling = !(isPuzzle || isChallenge)
    let objectives = (isPuzzle == false)
    let modifiers = !(isPuzzle || isChallenge)

    document.getElementById("scrolling").style.display = scrolling ? 'inline' : 'none'
    document.getElementById("objectives-scrolling").style.display = scrolling ? 'inline' : 'none'
    document.getElementById("objectives").style.display = objectives ? 'inline' : 'none'
    document.getElementById("puzzle").style.display = isPuzzle ? 'inline' : 'none'
    document.getElementById("modifiers").style.display =modifiers ? 'inline' : 'none'
}

function loadJSON() {
    console.log("Reloading level from JSON")
    let jsonEditor = document.getElementById("json-text")
    try {
        let newLevel = JSON.parse(jsonEditor.value)
        level = newLevel
    } catch (e) {
        console.error("Parsing error:", e)
    }


    refreshAll()
}

function refreshJSON() {
    let jsonEditor = document.getElementById("json-text")
    jsonEditor.value = JSON.stringify(level, null, 1)
}

function importJSON() {

}

function exportJSON() {

}

var level = {
    author: "Me",
    levelName: "My super level",
    description: "A level for Flipon",
    date: "",
    levelType: 0,
    background: 0,
    width: 6,
    height: 10,
    blocks: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ],
    previewLines: 2,
    startLines: 3,
    startSpeed: 1,
    limitSpeed: -1,
    noScrolling: false,
    noSpeedUp: false,
    gridAngle: 0,
    hideGridOnPause: false,
    randomSeed: -1,
    score: 0,
    timeReached: 0,
    timeMax: 0,
    timeLimit: 0,
    highestCombo: 0,
    totalCombos: 0,
    total4Combos: 0,
    total5Combos: 0,
    totalLCombos: 0,
    speedLevel: 0,
    highestChain: 0,
    totalChains: 0,
    digHeight: 0,
    maxMovesCount: 0,
    throwGarbage: {
        enabled: false,
        delay: 10,
        duration: 60,
        minFrequency: 0.15,
        maxFrequency: 2,
        playerCooldownSpeed: 0,
        garbageSize: 2
    },
    changeColors: {
        enabled: false,
        delay: 10,
        duration: 60,
        cooldown: 15,
        addNewColors: false
    },
    addBlocksModifier: {
        enabled: false,
        delay: 10,
        duration: 60,
        cooldown: 15,
        blockCount: 2,
        blocksColors: []
    },
    hideBlocksModifier: {
        enabled: false,
        delay: 10,
        duration: 60,
        gridHidePercent: 0.33,
        coolhideDurationdown: 3,
        wait: 5
    },
}