const containerEl = document.querySelector(".container");

function createcolorcontainers () {
    for (let i = 0 ; i < 32 ; i++) {
        const newcolor = document.createElement("div");
        newcolor.classList.add("color-container");
        containerEl.appendChild(newcolor);
        
    }
}
createcolorcontainers();

const colorcontainerEls = document.querySelectorAll(".color-container")

colorcontainerEls.forEach((colorcontainer)=>{
    colorcontainer.style.backgroundColor = generatecolors();
    colorcontainer.innerText = generatecolors();
    
})


function generatecolors () {
    let chars = "0123456789abcdef";
    let length = 6;
    let colorcode = "";
    for (let index = 0; index < length; index++) {
        const randomnum = Math.floor(Math.random()*chars.length);
        colorcode += chars.substring(randomnum, randomnum + 1);
        
    }
    return "#" + colorcode;
}