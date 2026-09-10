let layer = document.querySelector(".layer");
let correct = document.getElementById("correct")
let wrong = document.getElementById("wrong")
let answer = document.getElementById("answer")
let score = document.getElementById("score")
let chances = document.getElementById("chances")
let input = document.getElementById("input")
let submit = document.getElementById("submit")
let reset = document.getElementById("reset")
let flowerss = document.getElementById("flowerss")
let correctS = document.getElementById("correctS")
let wrongS = document.getElementById("wrongS")

let MyScore = 0
let MyChances = 5

let flower = GenerateNumFlower()

function GenerateNumFlower(){
    // return Math.floor(Math.random()*21) مثال المحاضرة from 0 to 20

    // let rand = Math.floor(Math.random()*11) from 0 to 10
    let rand = Math.ceil(Math.random()*10) // from 1 to 10

    switch(rand){
        // case 0:
        //     return "hii"

        case 1:
            return "rose"
        case 2:
            return "tulip"
        case 3:
            return "sunflower"
        case 4:
            return "orchid"
        case 5:
            return "daisy"
        case 6:
            return "lavender"
        case 7:
            return "peony"
        case 8:
            return "jasmine"
        case 9:
            return "magnolia"
        case 10:
            return "lily"
    }
}

console.log(flower);

// input.value = 20; shows 20 in input

submit.addEventListener("click" , function(){
    // console.log("hi")
    
    // let guessUser = parseInt(input.value.trim())
    // if(isNaN(guessUser) || guessUser > 20 || guessUser < 0 || guessUser === " " ){
    //     alert("Please enter a number between 0 to 20"); 
    //     input.value = ""  
    //     // مثال المحاضرة
    // }

    let guessUser = input.value.trim();

    if (!/^[a-zA-Z]+$/.test(guessUser)) {
        alert("Please enter a valid word (letters only)"); 
        input.value = ""  
    }

    if(guessUser === flower){
        correct.style.display = "block";
        wrong.style.display = "none";
        layer.style.backgroundColor = "rgba(0, 128, 0, 0.24)";
        MyScore++
        MyChances++
        score.textContent = MyScore
        chances.textContent = MyChances
        input.value = ""  
        flower = GenerateNumFlower()
        console.log(flower)
        correctS.play()
    } 
    else if(guessUser !== flower && /^[a-zA-Z]+$/.test(guessUser)){
        wrong.style.display = "block";
        wrong.textContent = "Try again ૮(˶ㅠ︿ㅠ)ა"
        correct.style.display = "none";
        layer.style.backgroundColor = "rgba(255, 0, 0, 0.24)";
        MyChances--
        chances.textContent = MyChances
        input.value = "" 
    }

    if(MyChances === 0){
        input.disabled = true
        submit.disabled = true
        wrong.style.display = "block";
        wrong.textContent = "Game Over ૮(˶ㅠ︿ㅠ)ა"
        answer.style.display = "block";
        flowerss.textContent = flower
        reset.style.display = "block";
        wrongS.play()
    }
})

reset.addEventListener("click" , function(){
    location.reload()
})
