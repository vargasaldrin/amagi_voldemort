let counter = 0

function dead() {
    document.body.innerHTML = ""
    const black = document.createElement('div')
    black.className = "dead"
    black.innerHTML = "You are dead"
    document.body.appendChild(black)
}

avada.addEventListener('click', () => {
    voldemort.style.opacity = 0;
    statement.innerHTML = "HOORAY!!! You have defeated Voldemort"
})

riddikulus.addEventListener('click', () => {
    console.log(counter)
    statement.innerHTML = `Nope, choose the other one (${counter})`;
    counter += 1;
    if (counter > 5) dead()
})
