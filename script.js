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
let count = 5
let counttt = 1
let bu = document.getElementById("bu")
let but = document.getElementById("but")
let butto = document.getElementById("butto")
let button = document.getElementById("button")
let buttonn = document.getElementById("buttonn")
let countt = document.getElementById("countt")
let interv 


bu.addEventListener("click" , function() {
    setTimeout(function() {
        alert("Subscribe to my channel to get tech tips & tricks")
    },3000)
})

but.addEventListener("click" ,function() {
    interv = setInterval(function() {
    countt.innerHTML = count
    
    if (count == 0) {
    clearInterval(interv)
    alert("message")
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

butto.addEventListener("click" ,function() {
    clearInterval(interv)
    count = 0
alert("refused message") 
    
})

button.addEventListener("click" , function() {
    interv = setInterval(function() {
    countt.innerHTML = counttt
    
counttt+=1},1000)
})

buttonn.addEventListener("click" , function() {
    clearInterval(interv)
    count = 0
    alert("Timer stopped") 
})