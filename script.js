const question = document.querySelector("h4")
const footer = document.querySelector("h5")
const ansA = document.querySelector("#a")
const ansB = document.querySelector("#b")
const ansC = document.querySelector("#c")
const ansD = document.querySelector("#d")

const correctAnswers = ["Jakarta", "Singapore", "Wellington","Ottowa","Lisbon","Madrid","Tashkent","San Josè","Nairobi","Tripoli"]

let count = 0
const button = document.querySelectorAll(".btn")
let yourCorrect = 0
const yesOrNo = false
Array.from(button).forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        setTimeout(myFunction, 5000)
        count++
        if (correctAnswers.includes(btn.textContent)) {
            yourCorrect++
        }
        if (count == 1) {
            question.textContent = "What is the capital of the Singapore?"
            ansA.textContent = "Singapore"
            ansB.textContent = "Nuku'alofa"
            ansC.textContent = "Bishkek"
            ansD.textContent = "Bern"
            footer.textContent = "Question 2 of 10"
        } else if (count == 2) {
            question.textContent = "What is the capital of the New Zealand?"
            ansA.textContent = "Wellington"
            ansB.textContent = "Port Moresby"
            ansC.textContent = "Saint John's"
            ansD.textContent = "Moroni"
            footer.textContent = "Question 3 of 10"
        } else if (count == 3) {
            question.textContent = "What is the capital of the Canada?"
            ansA.textContent = "Rome"
            ansB.textContent = "Yerevan"
            ansC.textContent = "Ottowa"
            ansD.textContent = "Amman"
            footer.textContent = "Question 4 of 10"
        } else if (count == 4) {
            question.textContent = "What is the capital of the Portugal?"
            ansA.textContent = "Buones Aires"
            ansB.textContent = "Caracas"
            ansC.textContent = "Ottowa"
            ansD.textContent = "Lisbon"
            footer.textContent = "Question 5 of 10"
        } else if (count == 5) {
            question.textContent = "What is the capital of the Spain?"
            ansA.textContent = "Bucharest"
            ansB.textContent = "San Marino"
            ansC.textContent = "Madrid"
            ansD.textContent = "Dushanbe"
            footer.textContent = "Question 6 of 10"
        } else if (count == 6) {
            question.textContent = "What is the capital of the Uzbekistan?"
            ansA.textContent = "Sanaa"
            ansB.textContent = "Tashkent"
            ansC.textContent = "Nay Pyi Taw"
            ansD.textContent = "Porto-Novo"
            footer.textContent = "Question 7 of 10"
        } else if (count == 7) {
            question.textContent = "What is the capital of the Costa Rica?"
            ansA.textContent = "San Josè"
            ansB.textContent = "Funa Futi"
            ansC.textContent = "Thimphu"
            ansD.textContent = "Georgetown"
            footer.textContent = "Question 8 of 10"
        } else if (count == 8) {
            question.textContent = "What is the capital of the Kenya?"
            ansA.textContent = "Vilnius"
            ansB.textContent = "Podgorica"
            ansC.textContent = "Caracas"
            ansD.textContent = "Nairobi"
            footer.textContent = "Question 9 of 10"
        } else if (count == 9) {
            question.textContent = "What is the capital of the Libya?"
            ansA.textContent = "Chisinaù"
            ansB.textContent = "Tripoli"
            ansC.textContent = "Hanoi"
            ansD.textContent = "Bucharest"
            footer.textContent = "Question 10 of 10"
        } else {
            const div = document.querySelector(".card-body")
            div.innerHTML = `<h1>Score</h1><br><h1>${yourCorrect}</h1> `
            footer.textContent = "Finished"
        }
    })
})


function myFunction() {
    
}