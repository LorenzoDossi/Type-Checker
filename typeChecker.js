const sentenceTag = document.querySelector(`input[type="text"]`);

const typeSizeTag = document.querySelector(`input[name="typesize"]`)
const typeSizeOutput = document.querySelector("label .typesize-output")

const leadingTag = document.querySelector(`input[name="leading"]`)
const leadingTagOutput = document.querySelector("label .leading-output")

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightTagOutput = document.querySelector("label .fontweight-output")

const italicTag = document.querySelector(`input[name="italic"]`)

const typeFaceTag = document.querySelector(`select[name="typeface"]`)

const colorTags = document.querySelectorAll("div.colors div");

const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value;

sentenceTag.addEventListener("keyup", function() {
    if (this.value) {
        outputTag.value = this.value;
    } else {
        outputTag.value = originalText;
    }
})

outputTag.addEventListener("keyup", function() {
    sentenceTag.value = this.value;
})

typeSizeTag.addEventListener("input", function() {
    outputTag.style.fontSize = this.value + "px";
    typeSizeOutput.innerHTML = this.value + " pixels";
})

leadingTag.addEventListener("input", function() {
    outputTag.style.lineHeight = this.value;
    leadingTagOutput.innerHTML = this.value;
})

fontweightTag.addEventListener("input", function() {
    fontweightTagOutput.innerHTML = this.value;
    outputTag.style.fontWeight = this.value;
})

italicTag.addEventListener("change", function() {
    this.checked ? outputTag.style.fontStyle = "italic" : outputTag.style.fontStyle = "normal";
})

typeFaceTag.addEventListener("input", function() {
    outputTag.style.fontFamily = this.value;
})


colorTags.forEach(tag => {
    tag.addEventListener("click", function() {
        outputTag.style.backgroundColor = this.style.backgroundColor;
        outputTag.style.color = this.style.color;
        console.log(this.style.backgroundColor)

        colorTags.forEach(tag => {
            tag.classList.remove("selected-white");
            tag.classList.remove("selected-black");
        })

        if (this.style.backgroundColor == "rgb(255, 255, 255)")
            tag.classList.add("selected-black");
        else 
            tag.classList.add("selected-white");
    })
})
