// let named = document.getElementById("named")
// let namee = document.getElementById("namee")
// let mail = document.getElementById("mail")
// let pass = document.getElementById("pass")
// let show = document.getElementById("show")
// let passs = document.getElementById("passs")
// let passw =document.getElementById("passw")
// let conf = document.getElementById("conf")
// let register = document.getElementById("regi")

// named.addEventListener("keyup", function() {
//     if (named.value.length <= 3) {
//         namee.innerHTML = "Name must be more than 3 characters";
//         namee.style.color = "red";
//     } else {
//         namee.innerHTML = "";
//     }
// })

// pass.addEventListener("keyup", function() {
//     if (pass.value.length <= 8) {
//         passs.innerHTML = "Password must be more than 8 characters";
//         passs.style.color = "red";
//     } else {
//         passs.innerHTML = "";
//     }
// })

// show.addEventListener("click", function() {
//     if (pass.type === "password") {
//         pass.type = "text";
//         show.innerHTML = "Hide";
//     } else {
//         pass.type = "password";
//         show.innerHTML = "Show";
//     }
// });

// passw.addEventListener("keyup", function() {
    
//     if (pass.value !== passw.value) {
//         conf.innerHTML = "Passwords didn't match";
//         conf.style.color = "red";
//     } else {
//         conf.innerHTML = "";
//     }
// })

// register.addEventListener("click", function() {
//     if (namee.innerHTML === "" && passs.innerHTML === "" && conf.innerHTML === "") {
//         alert("Login Success");
//     } else {
//         alert("Login failed");
//     }
// })

let count = 10
let countt = document.getElementById("count")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let msg = document.getElementById("msg")
let interv 

start.addEventListener("click" ,function() {
    interv = setInterval(function() {
    countt.innerHTML = count
    
    if (count == 0) {
    clearInterval(interv)
msg.innerHTML = "Timer stopped"
    setTimeout(function() {
        msg.innerHTML = ""
    },2000)
}
count-=1},1000)
msg.innerHTML = "Timer started"
    setTimeout(function() {
        msg.innerHTML = ""
    },2000)
})



stop.addEventListener("click" ,function() {
    clearInterval(interv)
    count = 0
msg.innerHTML = "Timer stopped"
    setTimeout(function() {
        msg.innerHTML = ""
    },2000)
})