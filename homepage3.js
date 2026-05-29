/* Welcome Message */

function showMessage(){

    alert("Welcome to sign up page");

}

/* Counter Animation */

let product = 0;
let user = 0;
let feed = 0;

let interval = setInterval(() => {

    if(product > 120){

        product++;

        document.getElementById("products").textContent = product;

    }

    if(user > 500){

        user += 5;

        document.getElementById("users").textContent = user;

    }

    if(feed > 900){

        feed += 9;

        document.getElementById("feedback").textContent = feed;

    }

},20);