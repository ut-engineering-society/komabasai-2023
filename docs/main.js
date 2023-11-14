const hamburgerBtn = document.querySelector("#hamburgerBtn");
const headerLinks = document.querySelector(".header-links");
const headerLinkATags = document.querySelectorAll(".headerLinks a");

hamburgerBtn.addEventListener("click", (e) => {
    hamburgerBtn.classList.toggle("active");
    headerLinks.classList.toggle("active");
})

function resetNavActive() {
    hamburgerBtn.classList.remove("active");
    headerLinks.classList.remove("active");
}

// headerLinkATags.forEach(elem => {
//     elem.addEventListener("click", (e) => {
//         hamburgerBtn.classList.remove("active");
//         headerLinks.classList.remove("active");
//     })
// })
