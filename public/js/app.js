let colorBox = document.querySelector("#colorBox")
let changeColorBtn = document.querySelector("#changeColorBtn")
let clickCounter = document.querySelector("#clickCounter")


let colors =   ["red", "blue", "green", "yellow", "purple",
    "cornflowerblue",
    "deeppink","chocolate" ,"chartreuse"]
    
    let lastcolor = 0
    let counter = 0
    function handleclick() {
    let rendomIndex = Math.floor(Math.random() * colors.length) 
    console.log(rendomIndex);
    
    while(rendomIndex == lastcolor){
        rendomIndex = Math.floor(Math.random() * colors.length) 
    }
    lastcolor = rendomIndex

    colorBox.style.backgroundColor = colors[rendomIndex]
    counter++
    clickCounter.textContent = "Clicks : " +  counter
    
    if (counter > 9) {
        let alertMEssage = document.createElement("p")
        alertMEssage.textContent = "You have reached the maximum of 10 clicks ."
        alertMEssage.classList.add("alertMessage")
        document.body.appendChild(alertMEssage)
        changeColorBtn.removeEventListener("click" , handleclick)
    }
    }
    changeColorBtn.addEventListener("click" , handleclick)
