// function convertToUppercase() {
//   const textArea = document.getElementById("textArea");
//   textArea.value = textArea.value.toUpperCase();
// }

// function convertToLowercase() {
//   const textArea = document.getElementById("textArea");
//   textArea.value = textArea.value.toLowerCase();
// }

// function capitalizeWords() {
//   const textArea = document.getElementById("textArea");
//   textArea.value = textArea.value.replace(/(?:^|\s)\w/g, function (match) {
//     return match.toUpperCase();
//   });
// }

// function handleClear() {
//   const textArea = document.getElementById("textArea");
//   textArea.value = "";
// }

// function handleCopy() {
//   const textArea = document.getElementById("textArea");
//   navigator.clipboard.writeText(textArea.value);
// }

// function handleSelect() {
//   const textArea = document.getElementById("textArea");
//   document.getElementById("textArea").select();
// }

// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function updateCounts() {
//   const textArea = document.getElementById("textArea");
//   const text = textArea.value.trim();

//   // Calculate word count
//   const words = text === "" ? 0 : text.split(/\s+/).length;

//   // Calculate character count
//   const characters = text.length;

//   // Update counts in the DOM
//   document.getElementById("wordCount").innerText = `Words: ${words}`;
//   document.getElementById("charCount").innerText = `Characters: ${characters}`;
// }

// function handleClear() {
//   const textArea = document.getElementById("textArea");
//   textArea.value = "";
//   updateCounts(); // Reset counts
// }

// // Update counts on page load
// updateCounts();


function convertToUppercase() {
    const textArea = document.getElementById("textArea");
    textArea.value = textArea.value.toUpperCase();
    updateCounts();
}

function convertToLowercase() {
    const textArea = document.getElementById("textArea");
    textArea.value = textArea.value.toLowerCase();
    updateCounts();
}

function capitalizeWords() {
    const textArea = document.getElementById("textArea");
    textArea.value = textArea.value.replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    });
    updateCounts();
}

function handleClear() {
    const textArea = document.getElementById("textArea");
    textArea.value = "";
    updateCounts(); // Reset counts when text is cleared
}

function handleCopy() {
    const textArea = document.getElementById("textArea");
    navigator.clipboard.writeText(textArea.value);
    alert("Text copied to clipboard!");
}

function handleSelect() {
    const textArea = document.getElementById("textArea");
    textArea.select();
}

function updateCounts() {
    const textArea = document.getElementById("textArea");
    const text = textArea.value.trim();

    // Calculate word count
    const words = text === "" ? 0 : text.split(/\s+/).length;

    // Calculate character count
    const characters = text.length;

    // Update counts in the DOM
    document.getElementById("wordCount").innerText = `Words: ${words}`;
    document.getElementById("charCount").innerText = `Characters: ${characters}`;
}

// Initialize counts on page load
updateCounts();
