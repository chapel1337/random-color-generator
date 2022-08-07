// written by chapel1337 (besides line 13)

function random() {
    return Math.floor(Math.random() * 255);
}

function color() {
    let a = random();
    let b = random();
    let c = random();

    // https://stackoverflow.com/questions/14323082/why-doesnt-backgroundcolor-rgba-b-c-work
    document.body.style.backgroundColor = "rgb(" + [a, b, c].join() + ")";

    document.getElementById("text").innerHTML = `${a}, ${b}, ${c}`
}