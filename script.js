let button = document.getElementById("hamburger");
let navUL = document.getElementById("nav-ul");
let icon = document.querySelector(".fas fa-bars");

button.addEventListener("click", run);

function run(){
    navUL.classList.toggle("show");
}


function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ezeigboemmanuel2@gmail.com",
        Password : "javfaytjvzpmkewm",
        To : 'ezeigboemmanuel2@gmail.com',
        From : document.getElementById("contact-email").value,
        Subject : "Contact from my portfolio",
        Body : document.getElementById("textarea").value
    }).then(
      message => alert("Your message has been received! thanks")
    );
}
