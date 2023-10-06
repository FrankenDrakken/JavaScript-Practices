let counter = document.getElementById(counter1)
let NCR = document.getElementById(NCR-counter)
let count = 0
document.getElementById("NCR-counter").textContent = count

function countNCR() {
    count += 1
    NCR.textContent = count
}

