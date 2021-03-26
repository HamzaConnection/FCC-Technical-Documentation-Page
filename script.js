const toggle = document.querySelector(".toggleNav");
const nav = document.querySelector("#navbar")

toggle.addEventListener('click', () => {
    nav.classList.toggle('toggle-nav');
})

