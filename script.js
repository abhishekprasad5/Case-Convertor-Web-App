function convertToUppercase() {
    const textArea = document.getElementById("textArea");
    textArea.value = textArea.value.toUpperCase();
}

function convertToLowercase() {
    const textArea = document.getElementById("textArea");
    textArea.value = textArea.value.toLowerCase();
}

function handleClear() {
    const textArea = document.getElementById("textArea");
    textArea.value = "";
}

function handleCopy() {
    const textArea = document.getElementById("textArea");
    navigator.clipboard.writeText(textArea.value);
}

function handleSelect() {
    const textArea = document.getElementById("textArea");
    document.getElementById("textArea").select();
}

function capitalizeWords() {
    const textArea = document.getElementById("textArea");
    textArea.value = textArea.value.replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    });
}