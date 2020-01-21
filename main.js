//DOM Variables

//Big parts of page identificators
let header = document.getElementById("header");
let schedule = document.getElementById("schedule");
let buyTickets = document.getElementById("buy-tickets");
let intercity = document.getElementById("intercity");
let intercityPlus = document.getElementById("intercity-plus");
let international = document.getElementById("international");
let cabinet = document.getElementById("cabinet");
//UI identificators
let toTopBtn = document.getElementById("toTopBtn");
let menuBtn = document.getElementById("menuBtn");
let menu = document.querySelector(".desktop-menu");
//Buy Ticket form identificators
let buyFrom = document.getElementById("buyTicketFrom");
let changeBtn = document.getElementById("changeBtn");
let buyTo = document.getElementById("buyTicketTo");
let buyWhen = document.getElementById("buyTicketWhen");
let passType = document.getElementById("passenger-type");
let passengers = document.getElementById("passengerNum");
let buyBtn = document.getElementById("buyTicket");
let ticketSummary = document.getElementById("ticketSummary");
//Log in & register form identificators
let loginSummary = document.getElementById("loginSummary");
let toBooking = document.getElementById("toTickets");
//Login form
let logText = document.getElementById("loginText");
let logPass = document.getElementById("loginPassw");
let logBtn = document.getElementById("logBtn");
//Register form
let regText = document.getElementById("regisText");
let regisEmail = document.getElementById("regisEmail");
let regPassOne = document.getElementById("regPassOne");
let regPassTwo = document.getElementById("regPassTwo");
let registBtn = document.getElementById("registerBtn");

//Smooth Scroll

schedule.scrollIntoView({
    behavior: 'smooth'
});
buyTickets.scrollIntoView({
    behavior: 'smooth'
});
intercity.scrollIntoView({
    behavior: 'smooth'
});
intercityPlus.scrollIntoView({
    behavior: 'smooth'
});
international.scrollIntoView({
    behavior: 'smooth'
});
cabinet.scrollIntoView({
    behavior: 'smooth'
});

// To Top Button
function goToTop() {
    header.scrollIntoView({
        behavior: 'smooth'
    });
}
toTopBtn.addEventListener("click", goToTop, false);

//Mobile menu button 
function mobileMenu() {
    if (menu.style.display === "none") {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.alignItems = "center";
        menuBtn.innerText = "close menu";
    } else {
        menu.style.display = "none";
        menuBtn.innerText = "menu";
    }
}
menuBtn.addEventListener("click", mobileMenu, false);
//VALIDATION OF FORMS
let nameRegex = /[A-Za-z_0-9]/;
let emailRegex = /^\S+@\S+\.\S+$/;

// Display error
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
//when log\sign in completed, go to tickets booking part
function goToBooking() {
    buyTickets.scrollIntoView({
        behavior: 'smooth'
    });
}
//create button when login/register completed
function toTicketsBtn() {
    let tcktBtn = document.createElement("button");
    tcktBtn.classList.add("ticket-button");
    tcktBtn.innerText = "Buy tickets";
    tcktBtn.addEventListener("click", goToBooking, false);
    loginSummary.appendChild(tcktBtn);
}
// Ticket booking form validation 
function validTicket() {
    //values
    let fromVal = buyFrom.value;
    let toVal = buyTo.value;
    let buyVal = buyWhen.value;
    let passTypVal = passType.value;
    let passNumVal = Number(passengers.value);
    //errors
    let ticketFromErr = document.getElementById("ticketFromErr");
    let ticketToErr = document.getElementById("ticketToErr");
    let passErr = document.getElementById("passErr");

    ticketFromErr = ticketToErr = passErr = true;
    //check validity of "from"
    if (fromVal === "" || nameRegex.test(fromVal) === false) {
        printError("ticketFromErr", "Print where are you going from");
    } else {
        printError("ticketFromErr", "");
        ticketFromErr = false;
    }
    //check validity of "to"
    if (toVal === "" || nameRegex.test(toVal) === false) {
        printError("ticketToErr", "Print where are you going to");
    } else {
        printError("ticketToErr", "");
        ticketToErr = false;
    }
    //check validity of passengers
    if (passNumVal === "" || passNumVal < 1) {
        printError("passErr", "Please, select 1 or more passengers");
    } else {
        printError("passErr", "");
        passErr = false;
    }
    // if validity above is checked and ok, then print summary of order
    if (fromVal !== "" && toVal !== "" && buyVal !== "" && passTypVal !== "" && passNumVal !== "" && passNumVal >= 1 && nameRegex.test(toVal) !== false && nameRegex.test(fromVal) !== false) {
        ticketSummary.innerHTML = `<h1 class="heading">You have ordered a ticket from ${fromVal} to ${toVal} on ${buyVal} for ${passNumVal} passengers of ${passTypVal} type.</h1>`
    }

}
buyBtn.addEventListener("click", validTicket, false);

//Log in form validation
function loginValid() {
    //values
    let loginVal = logText.value;
    let logPassVal = logPass.value;
    //errors
    let logTextErr = document.getElementById("logTextErr");
    let logPassErr = document.getElementById("logPassErr");

    logTextErr = logPassErr = true;
    //check validity of Login
    if (loginVal == "" || nameRegex.test(loginVal) === false) {
        printError("logTextErr", "Please, print your login name or email");
    } else {
        printError("logTextErr", "");
        logTextErr = false;
    }
    //check validity of password
    if (logPassVal == "" || nameRegex.test(logPassVal) === false) {
        printError("logPassErr", "Please, print your password");
    } else {
        printError("logPassErr", "");
        logPassErr = false;
    }
    // if validation passed, then make summary of login
    if (loginVal !== "" && logPassVal !== "" && nameRegex.test(logPassVal) !== false && nameRegex.test(loginVal) !== false) {
        loginSummary.innerHTML = `<h1 class="heading">You have logged as ${loginVal}</h1>`;
        loginSummary.scrollIntoView({
            behavior: "smooth"
        });
        toTicketsBtn();
    }
}
logBtn.addEventListener("click", loginValid, false);

//Register form validation
function registValid() {
    //values
    let regTextVal = regText.value;
    let regMailVal = regisEmail.value;
    let regPassOneVal = regPassOne.value;
    let regPassTwoVal = regPassTwo.value;
    //errors
    let regTextErr = document.getElementById("regTextErr");
    let regMailErr = document.getElementById("regMailErr");
    let regPassOneErr = document.getElementById("regPassOneErr");
    let regPassTwoErr = document.getElementById("regPassTwoErr");

    regTextErr = regMailErr = regMailErr = regPassTwoErr = true;
    //check validity of Name
    if (regTextVal === "" || nameRegex.test(regTextVal) === false) {
        printError("regTextErr", "Please, write your name");
    } else {
        printError("regTextErr", "");
        regTextErr = false;
    }
    //check validity of Email
    if (regMailVal === "" || emailRegex.test(regMailVal) === false) {
        printError("regMailErr", "Please, print your email");
    } else {
        printError("regMailErr", "");
        regMailErr = false;
    }
    //check validity of First Password
    if (regPassOneVal === "" || nameRegex.test(regPassOneVal) === false) {
        printError("regPassOneErr", "Please, print your password");
    } else {
        printError("regPassOneErr", "");
        regPassOneErr = false;
    }
    //check validity of Second Password
    if (regPassTwoVal == "" || regPassOneVal !== regPassTwoVal || nameRegex.test(regPassTwoVal) === false) {
        printError("regPassTwoErr", "Please, print your password again");
    } else {
        printError("regPassTwoErr", "");
        regPassTwoErr = false;
    }
    // if validation passed, then make summary of registration
    if (regTextVal !== "" && regMailVal !== "" && regPassOneVal !== "" && regPassTwoVal !== "" && regPassOneVal === regPassTwoVal && nameRegex.test(regPassOneVal) !== false && emailRegex.test(regMailVal) !== false && nameRegex.test(regTextVal) !== false) {
        loginSummary.innerHTML = `<h1 class="heading">You have registered as ${regTextVal} using ${regMailVal} email.</h1>`;
        loginSummary.scrollIntoView({
            behavior: "smooth"
        });
        toTicketsBtn();
    }
}
registBtn.addEventListener("click", registValid, false);