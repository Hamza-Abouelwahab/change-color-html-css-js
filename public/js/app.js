let colorBox = document.querySelector("#colorBox")
let changeColorBtn = document.querySelector("#changeColorBtn")
let clickCounter = document.querySelector("#clickCounter")

let colors =   ["red", "blue", "green", "yellow", "purple",
    "cornflowerblue",
    "deeppink","chocolate" ,"chartreuse"]
    
    let lastcolor = 0
    let counter = 0
    changeColorBtn.addEventListener("click" , () =>{
    let rendomIndex = Math.floor(Math.random() * colors.length) 
    console.log(rendomIndex);
    
    
    
    while(rendomIndex == lastcolor){
        rendomIndex = Math.floor(Math.random() * colors.length) 
    }
    lastcolor = rendomIndex

    colorBox.style.backgroundColor = colors[rendomIndex]
    
})