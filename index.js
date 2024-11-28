let c = document.getElementById("num");

function dec() {
    let a = c.textContent;
    let b = parseInt(a) - 1;
    if (b < 0) {
        c.style.color = "red"
    } else if (a > 0) {
        c.style.color = "green"
    } else {
        c.style.color = "black"
    }
    c.textContent = b
}

function inc() {
    let a = document.getElementById("num").textContent;
    let b = parseInt(a) + 1;
    if (b < 0) {
        c.style.color = "red"
    } else if (b > 0) {
        c.style.color = "green"
    } else {
        c.style.color = "black"
    }
    c.textContent = b

}

function res() {
    document.getElementById("num").textContent = "0";
    c.style.color = "black"

}