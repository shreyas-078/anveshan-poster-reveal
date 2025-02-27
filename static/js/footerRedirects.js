const instagramButton = document.querySelector(".card1");
const phoneButton = document.querySelector(".card2");
const whatsappButton = document.querySelector(".card3");
const mailButton = document.querySelector(".card4");

instagramButton.addEventListener("click", () => {
  window.open("https://www.instagram.com/jss_anveshan/");
});

phoneButton.addEventListener("click", () => {
  window.open("tel:+916360029877");
});

whatsappButton.addEventListener("click", () => {
  window.open("https://wa.me/918971260120");
});

mailButton.addEventListener("click", () => {
  window.open("mailto:");
});