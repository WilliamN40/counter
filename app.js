document.addEventListener("DOMContentLoaded", () => {
    const plusButton = document.querySelector("#plus")
    const minusButton = document.querySelector("#minus")
    const number = document.querySelector("h1")
    plusButton.addEventListener("click",countUp)
    minusButton.addEventListener("click",countDown)
})

function countUp() {
    number.innerText -= -1
}

function countDown() {
    number.innerText -= 1
}