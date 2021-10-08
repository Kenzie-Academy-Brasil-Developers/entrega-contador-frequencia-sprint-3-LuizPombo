const button = document.getElementById("countButton");
button.addEventListener("click", function() {
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase(); 
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    let typedWord = document.getElementById("textInput").value;
    typedWord = typedWord.toLowerCase();
    typedWord = typedWord.split(/\s/);
    // CODIGO COMEÇA DAQUI
    const letterCounts = {};
    for (let i = 0; i < typedText.length; i++) {
        let currentLetter = typedText[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
         } else { 
            letterCounts[currentLetter]++; 
         }
         
    }
    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
     }
    const wordCounts = {};
    for (let i = 0; i < typedWord.length; i++) {
        let currentWord = typedWord[i];
        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1; 
         } else { 
            wordCounts[currentWord]++; 
         }
    }
    for (let word in wordCounts) { 
        const span = document.createElement("span"); 
        const wordContent = `"${word}": ${wordCounts[word]}, `;
        span.innerText = wordContent; 
        const words = document.getElementById("wordsDiv");
        words.appendChild(span); 
     }
});

