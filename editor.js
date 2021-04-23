window.addEventListener("load", function () {
    clearLevel()

    canvas.addEventListener('mousedown', canvasClick)
    selectPalette(1)
})

var canvas
var palette

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
    document.getElementById("previewLines").checked = level.previewLines > 0
    document.getElementById("noScrolling").checked = level.noScrolling
    document.getElementById("noSpeedUp").checked = level.noSpeedUp
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
    
    document.getElementById("throwGarbage_enabled").value = level.throwGarbage.enabled
    document.getElementById("throwGarbage_delay").value = level.throwGarbage.delay
    document.getElementById("throwGarbage_duration").value = level.throwGarbage.duration
    document.getElementById("throwGarbage_minFrequency").value = level.throwGarbage.minFrequency
    document.getElementById("throwGarbage_maxFrequency").value = level.throwGarbage.maxFrequency
    document.getElementById("throwGarbage_garbageSize").value = level.throwGarbage.garbageSize

    document.getElementById("changeColors_enabled").value = level.changeColors.enabled
    document.getElementById("changeColors_delay").value = level.changeColors.delay
    document.getElementById("changeColors_duration").value = level.changeColors.duration
    document.getElementById("changeColors_cooldown").value = level.changeColors.cooldown
    document.getElementById("changeColors_addNewColors").value = level.changeColors.addNewColors

    document.getElementById("addBlocksModifier_enabled").value = level.addBlocksModifier.enabled
    document.getElementById("addBlocksModifier_delay").value = level.addBlocksModifier.delay
    document.getElementById("addBlocksModifier_duration").value = level.addBlocksModifier.duration
    document.getElementById("addBlocksModifier_cooldown").value = level.addBlocksModifier.cooldown
    document.getElementById("addBlocksModifier_blockCount").value = level.addBlocksModifier.blockCount

    document.getElementById("hideBlocksModifier_enabled").value = level.hideBlocksModifier.enabled
    document.getElementById("hideBlocksModifier_delay").value = level.hideBlocksModifier.delay
    document.getElementById("hideBlocksModifier_duration").value = level.hideBlocksModifier.duration
    document.getElementById("hideBlocksModifier_gridHidePercent").value = level.hideBlocksModifier.gridHidePercent
    document.getElementById("hideBlocksModifier_hideDuration").value = level.hideBlocksModifier.hideDuration
    document.getElementById("hideBlocksModifier_wait").value = level.hideBlocksModifier.wait
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
    level.previewLines = document.getElementById("previewLines").checked ? 3 : -1
    level.noScrolling = document.getElementById("noScrolling").checked
    level.noSpeedUp = document.getElementById("noSpeedUp").checked
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

    level.throwGarbage.enabled = document.getElementById("throwGarbage_enabled").checked
    level.throwGarbage.delay = document.getElementById("throwGarbage_delay").value
    level.throwGarbage.duration = document.getElementById("throwGarbage_duration").value
    level.throwGarbage.minFrequency = document.getElementById("throwGarbage_minFrequency").value
    level.throwGarbage.maxFrequency = document.getElementById("throwGarbage_maxFrequency").value
    level.throwGarbage.garbageSize = document.getElementById("throwGarbage_garbageSize").value

    level.changeColors.enabled = document.getElementById("changeColors_enabled").checked
    level.changeColors.delay = document.getElementById("changeColors_delay").value
    level.changeColors.duration = document.getElementById("changeColors_duration").value
    level.changeColors.cooldown = document.getElementById("changeColors_cooldown").value
    level.changeColors.addNewColors = document.getElementById("changeColors_addNewColors").value

    level.addBlocksModifier.enabled = document.getElementById("addBlocksModifier_enabled").checked
    level.addBlocksModifier.delay = document.getElementById("addBlocksModifier_delay").value
    level.addBlocksModifier.duration = document.getElementById("addBlocksModifier_duration").value
    level.addBlocksModifier.cooldown = document.getElementById("addBlocksModifier_cooldown").value
    level.addBlocksModifier.blockCount = document.getElementById("addBlocksModifier_blockCount").value

    level.hideBlocksModifier.enabled = document.getElementById("hideBlocksModifier_enabled").checked
    level.hideBlocksModifier.delay = document.getElementById("hideBlocksModifier_delay").value
    level.hideBlocksModifier.duration = document.getElementById("hideBlocksModifier_duration").value
    level.hideBlocksModifier.gridHidePercent  = document.getElementById("hideBlocksModifier_gridHidePercent").value
    level.hideBlocksModifier.hideDuration = document.getElementById("hideBlocksModifier_hideDuration").value
    level.hideBlocksModifier.wait = document.getElementById("hideBlocksModifier_wait").value

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

    refreshJSON()
    drawGrid()
}

let GRID_SIZE = 30

function drawGrid() {
    canvas = document.getElementById("editor-grid")

    // Draw grid
    let w = level.width * GRID_SIZE
    let h = level.height * GRID_SIZE
    var ctx = canvas.getContext('2d')
    ctx.canvas.width = w
    ctx.canvas.height = h
    ctx.strokeStyle = 'rgb(255,255,255)'

    for (x = 0; x <= w; x += GRID_SIZE) {
        for (y = 0; y <= h; y += GRID_SIZE) {
            ctx.moveTo(x, 0)
            ctx.lineTo(x, h)
            ctx.stroke()
            ctx.moveTo(0, y)
            ctx.lineTo(w, y)
            ctx.stroke()
        }
    }

    let blank = document.getElementById("blank")
    let blue = document.getElementById("blue")
    let red = document.getElementById("red")
    let pink = document.getElementById("pink")
    let yellow = document.getElementById("yellow")
    let purple = document.getElementById("purple")
    let green = document.getElementById("green")
    let garbage = document.getElementById("garbage")

    for (x = 0; x < level.height; x += 1) {
        for (y = 0; y < level.width; y += 1) {
            let b = level.blocks[x][y]
            let img = getBlockImg(b)
            ctx.drawImage(img, y * GRID_SIZE, x * GRID_SIZE, GRID_SIZE, GRID_SIZE);
        }
    }
}

function getBlockImg(b) {
    let img = blank
    switch(b) {
        case 0: img = blank; break
        case 1: img = blue; break
        case 2: img = yellow; break
        case 4: img = red; break
        case 3: img = pink; break
        case 5: img = green; break
        case 6: img = purple; break
        case 9: img = garbage; break
    }
    return img
}

// Draw on the grid, clicking on cells
function canvasClick(event) {
    const rect = canvas.getBoundingClientRect()
    const x = Math.floor((event.clientX - rect.left) / GRID_SIZE)
    const y = Math.floor((event.clientY - rect.top) / GRID_SIZE)
    
    level.blocks[y][x] = palette
    refreshJSON()
    drawGrid()
}

// Change current selected palette
function selectPalette(id) {
    palette = id

    document.getElementById("blank").classList.remove("palette_selected");
    document.getElementById("blue").classList.remove("palette_selected");
    document.getElementById("red").classList.remove("palette_selected");
    document.getElementById("pink").classList.remove("palette_selected");
    document.getElementById("yellow").classList.remove("palette_selected");
    document.getElementById("purple").classList.remove("palette_selected");
    document.getElementById("green").classList.remove("palette_selected");
    document.getElementById("garbage").classList.remove("palette_selected");

    getBlockImg(palette).classList.add("palette_selected");
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
    document.getElementById("modifiers").style.display = modifiers ? 'inline' : 'none'

    document.getElementById("throwGarbage").style.display = level.throwGarbage.enabled ? 'inline' : 'none'
    document.getElementById("changeColors").style.display = level.changeColors.enabled ? 'inline' : 'none'
    document.getElementById("addBlocksModifier").style.display = level.addBlocksModifier.enabled ? 'inline' : 'none'
    document.getElementById("hideBlocksModifier").style.display = level.hideBlocksModifier.enabled ? 'inline' : 'none'
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

var level
function clearLevel() {
    newLevel()
    refreshAll()
    refreshJSON()
}

function newLevel() {
    level = {
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
            [0, 0, 3, 0, 0, 0],
            [0, 0, 2, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 2, 0, 0, 0],
            [0, 0, 2, 0, 0, 0],
            [0, 0, 1, 1, 0, 0],
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
            hideDuration: 3,
            wait: 5
        },
    }
}