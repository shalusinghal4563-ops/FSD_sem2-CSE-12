// let newheading =document.getElementById("heading")
// newheading.textContent="DOM Manipulation in JavaScript";
// newheading.style.color="red";
// newheading.style.fontSize="50px";
// let paragraphs = document.getElementsByClassName("paragraph");
// paragraphs[0].innerHTML ="<strong>This paragraph has been updated using JavaScript."
// paragraphs[0].style.color="green";
// paragraphs[0].style.fontSize="20px";
// let newDiv = document.createElement("div");
// newDiv.textContent = "This is a new div element created using JavaScript";
// document.body.appendChild(newDiv);
let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userInput");

let fontSize = 16;

// Change heading text (onclick using addEventListener)
document.getElementById("changeTextBtn").addEventListener("click", function () {
    if (input.value !== "") {
        heading.innerHTML = input.value;
    }
});

// Change background color
document.getElementById("bgColorBtn").onclick = function () {
    document.body.style.backgroundColor ="red";
       
};

// Increase font size
document.getElementById("fontSizeBtn").addEventListener("click", function () {
    fontSize += 2;
    paragraph.style.fontSize = fontSize + "px";
});

// Show/Hide paragraph
document.getElementById("toggleBtn").addEventListener("click", function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

// Reset page
document.getElementById("resetBtn").addEventListener("click", function () {
    heading.innerHTML = "Welcome to JavaScript Lab";
    paragraph.style.display = "block";
    paragraph.style.fontSize = "16px";
    document.body.style.backgroundColor = "#f4f4f4";
    input.value = "";
    fontSize = 16;
});