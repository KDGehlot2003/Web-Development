let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")

let home_num = 0

let guest_num = 0


function home_inc1() {
    home_num +=1
    homeEl.innerText = home_num
}


function home_inc2() {
    home_num += 2
    homeEl.innerText = home_num
}


function home_inc3() {
    home_num += 3
    homeEl.innerText = home_num
}


function guest_inc1() {
    guest_num += 1
    guestEl.innerText = guest_num
}


function guest_inc2() {
    guest_num += 2
    guestEl.innerText = guest_num
}


function guest_inc3() {
    guest_num += 3
    guestEl.innerText = guest_num
}

