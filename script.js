document.getElementById("count-character").innerText = 0
document.getElementById("count-spaces").innerText = 0
document.getElementById("count-words").innerText = 0
document.getElementById("count-zdania").innerText = 0
document.getElementById("count-longest-word").innerText = 0
document.getElementById("count-srednia").innerText = 0
document.getElementById("count-procent").innerText = 0
document.getElementById("count-text-time").innerText = 0



function analyze() {
    console.log("analizuję...")

    const text = document.getElementById("user-input").value
    const textTrimmed = text.trim()
    const words = textTrimmed.split(" ")

    document.getElementById("count-words").innerText = words.length

    // liczba slow
    let spaceCounter = 0;
    for (let i = 0; i < text.length; i++) {
        const character = text.charAt(i);
        if (character === ' ') {
            spaceCounter += 1
        }
    }
    document.getElementById("count-space").innerText = spaceCounter

    // liczy spacju
    let letterCounter = 0;
    for(let i = 0; i < text.length; i++) {
        const letter = text.charAt(i);
        if(letter !== ' ') {
            letterCounter += 1 
        }
    }
    document.getElementById("count-spaces").innerText = letterCounter

    let zdaniaCounter = 0;

    for(let i = 0; i + textTrimmed.length; i++) {
        const letter = textTrimmed.charAt(i);

        if(letter !== ' ') {
            zdaniaCounter += 1
        }
    }

    const CharacterReadPerMinute = 200

    const minutes = letterCounter / CharacterReadPerMinute
    console.log(minutes)

    const seconds = minutes * 60
    console.log(seconds)

    document.getElementById("count-text-time").innerText = seconds

    
}

function countletters(text) {
    let letterCounter = 0;

    for(let i = 0; i < text.length; i++) {
        const letter = text.charAt(i);

        if(letter !== ' ') {
            letterCounter += 1
        }
    }
}