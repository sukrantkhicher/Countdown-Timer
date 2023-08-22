let enddate = "22 August 2024 6:24 PM"
document.querySelector("#end-date").innerHTML = enddate
let inp = document.querySelectorAll("input")
console.log(inp)

let clock = () => {
    let end = new Date(enddate)
    let now = new Date()
    let diff = (end - now) / 1000

    if (diff > 0) {
        inp[0].value = Math.floor(diff / 3600 / 24)
        inp[1].value = Math.floor(diff / 3600) % 24
        inp[2].value = Math.floor(diff / 60) % 60
        inp[3].value = Math.floor(diff) % 60
    }
}
clock();

setInterval(() => {
    clock()
}, 1000)