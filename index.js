const mainBox = document.querySelector(".main_box");
const thankyouBox = document.querySelector(".thankyou_box");
const sbmtBtn = document.getElementById("sbmt-btn");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".rtng-btn")

sbmtBtn.addEventListener("click", () => {
    thankyouBox.classList.remove("hide");
    mainBox.classList.add("hide");    
});

rates.forEach((rate) => {
    rate.addEventListener("click", () =>
    rating.innerHTML = rate.innerHTML);
});