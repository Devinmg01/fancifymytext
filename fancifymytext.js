function biggerText() {
    //Increase font size 
    const textArea = document.getElementById("textInput");
    textArea.style.fontSize = "24pt";
    alert("Hello, world!");
}


//Apply style based on  button selection
function applyStyle() {
    const textArea = document.getElementById("textInput");
    const isFancy = document.getElementById("fancyShmancy").checked;

    if (isFancy) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

//text to uppercase and append "-Moo" to the last word of each sentence
function mooText() {
    const textArea = document.getElementById("textInput");
    let text = textArea.value.toUpperCase();
    const sentences = text.split(".");
    text = sentences
        .map(sentence => sentence.trim() ? sentence + "-Moo" : sentence)
        .join(". ");
    textArea.value = text;
}

//listeners
document.getElementById("biggerButton").onclick = biggerText;
document.getElementById("fancyShmancy").onchange = applyStyle;
document.getElementById("boringBetty").onchange = applyStyle;
document.getElementById("mooButton").onclick = mooText;
