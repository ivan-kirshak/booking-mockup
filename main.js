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
// Credit card form
let cardForm = document.getElementById("creditCard");
let cardOwner = document.getElementById("cardOwner");
let cvvNum = document.getElementById("cvvNum");
let cardNum = document.getElementById("cardNum");
let validMonth = document.getElementById("validMonth");
let validYear = document.getElementById("validYear");
let payBtn = document.getElementById("payment");
let paymentSummary = document.getElementById("paymentSummary");

// //Smooth Scroll
// function scheduleScroll() {
//     schedule.scrollIntoView({
//         behavior: 'smooth'
//     })
// }
// schedule.addEventListener("click", scheduleScroll, false);

// function buyTicketScroll() {
//     buyTickets.scrollIntoView({
//         behavior: 'smooth'
//     });
// }
// buyTickets.addEventListener("click", buyTicketScroll, false);

// function intercityScroll() {
//     intercity.scrollIntoView({
//         behavior: 'smooth'
//     })
// }
// intercity.addEventListener("click", intercityScroll, false);

// function intercityPlusScroll() {
//     intercityPlus.scrollIntoView({
//         behavior: 'smooth'
//     });
// }
// intercityPlus.addEventListener("click", intercityPlusScroll, false);

// function internationalScroll() {
//     international.scrollIntoView({
//         behavior: 'smooth'
//     });
// }
// international.addEventListener("click", internationalScroll, false);

// function cabinetScroll() {
//     cabinet.scrollIntoView({
//         behavior: 'smooth'
//     });
// }
// cabinet.addEventListener("click", cabinetScroll, false);
// // To Top Button
// function goToTop() {
//     header.scrollIntoView({
//         behavior: 'smooth'
//     });
// }
// toTopBtn.addEventListener("click", goToTop, false);

let scrollItems = [schedule, buyTickets, intercity, intercityPlus, international, cabinet];
for (let i = 0; i < scrollItems.length; i++) {
    scrollItems[i].onclick = () => {scrollItems[i].scrollIntoView({
        behavior: 'smooth'
    })}
}

//Mobile menu button 
function mobileMenu() {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.alignItems = "center";
        menu.style.borderBottom = "1px solid #808080";
    }
}
menuBtn.addEventListener("click", mobileMenu, false);
//VALIDATION OF FORMS
let nameRegex = /[A-Za-z_0-9]/;
let emailRegex = /^\S+@\S+\.\S+$/;
let numRegex = /[0-9]/;
let cardOwnRegex = /[A-Za-z]/;
let uCaseRegex = /[A-Z]/;

// Display error
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
// check the payment data
function checkPayment() {
    //values
    let cardOwnVal = cardOwner.value;
    let cardNumVal = cardNum.value;
    let cvvNumVal = cvvNum.value;
    let valMonVal = validMonth.value;
    let valYrVal = validYear.value;
    //errors
    let cardOwnErr = document.getElementById("cardOwnErr");
    let cardNumErr = document.getElementById("cardNumErr");
    let cvvNumErr = document.getElementById("cvvNumErr");
    let validDateErr = document.getElementById("validDateErr");

    cardOwnErr = cardNumErr = cvvNumErr = validDateErr = true;
    // check the validity of card owner
    if (cardOwnVal === "" || cardOwnRegex.test(cardOwnVal) === false) {
        printError("cardOwnErr", "Please write down card owner's name");
    } else {
        printError("cardOwnErr", "");
        cardOwnErr = false;
    }
    // check the validity of card number
    if (cardNumVal === "" || numRegex.test(cardNumVal) === false || cardNumVal.length !== 16) {
        printError("cardNumErr", "Please write down correct card number");
    } else {
        printError("cardNumErr", "");
        cardNumErr = false;
    }
    // check the validity of cvv number
    if (cvvNumVal === "" || numRegex.test(cvvNumVal) === false || cvvNumVal.length !== 3) {
        printError("cvvNumErr", "Please write down correct CVV number");
    } else {
        printError("cvvNumErr", "");
        cvvNumErr = false;
    }
    // check the validity of validity term
    if (valMonVal === "" || valYrVal === "" || valMonVal.length !== 2 || valYrVal.length !== 2
        || numRegex.test(valMonVal) === false || numRegex.test(valYrVal) === false) {
        printError("validDateErr", "Please write down correct validity term. If your month less than 10, print 0 firstly.");
    } else {
        printError("validDateErr", "");
        validDateErr = false;
    }
    // if everything is correct, complete the summary of payment
    if ((cardOwnErr || cardNumErr || cvvNumErr || validDateErr) === true) {
        return false;
    } else {
        paymentSummary.innerHTML = `<h1 class="heading">${cardOwnVal}, 
        your payment completed via card number ${cardNumVal}</h1>`;
    }
}
payBtn.addEventListener("click", checkPayment, false)

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
    let buyVal = new Date(buyWhen.value).toDateString();
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
    if ((ticketFromErr || ticketToErr || passErr) === true) {
        return false;
    } else {
        ticketSummary.innerHTML = `<h1 class="heading">You have ordered a 
        ticket from ${fromVal} to ${toVal} on ${buyVal} for ${passNumVal}
        passengers of ${passTypVal} type. You can purchase your ticket below.</h1>`
    }
}
buyBtn.addEventListener("click", validTicket, false);

// swap values 
function swapValues() {
    // first scenario (ES6)
    // let a = buyFrom.value;
    // let b = buyTo.value;
    // [a, b] = [b, a];

    // second scenario (temporary variable)
    let tmp = buyFrom.value;
    buyFrom.value = buyTo.value;
    buyTo.value = tmp;
}

changeBtn.addEventListener("click", swapValues, false);

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
    if ((logTextErr || logPassErr) === true) {
        return false;
    } else {
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
    if (regPassOneVal === "") {
        printError("regPassOneErr", "Please, print your password");
    } else if (nameRegex.test(regPassOneVal) === false) {
        printError("regPassOneErr", "Please, print proper password");
    } else if (regPassOneVal.length < 8) {
        printError("regPassOneErr", "Your password has to be at least 8 characters long");
    } else if (numRegex.test(regPassOneVal) === false) {
        printError("regPassOneErr", "Your password has to contain numbers");
    } else if (uCaseRegex.test(regPassOneVal) === false) {
        printError("regPassOneErr", "Your password has to contain uppercase letter");
    } else {
        printError("regPassOneErr", "");
        regPassOneErr = false;
    }
    //check validity of Second Password
    if (regPassTwoVal === "") {
        printError("regPassTwoErr", "Please, print your password again");
    } else if (regPassOneVal !== regPassTwoVal) {
        printError("regPassTwoErr", "Your passwords don't match.");
    } else {
        printError("regPassTwoErr", "");
        regPassTwoErr = false;
    }
    // if validation passed, then make summary of registration
    if ((regTextErr || regMailErr || regMailErr || regPassOneErr || regPassTwoErr) === true) {
        return false;
    } else {
        loginSummary.innerHTML = `<h1 class="heading">You have registered as ${regTextVal} using ${regMailVal} email.</h1>`;
        loginSummary.scrollIntoView({
            behavior: "smooth"
        });
        toTicketsBtn();
    }
}
registBtn.addEventListener("click", registValid, false);