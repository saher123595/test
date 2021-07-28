let btn = document.querySelector("header nav button");
let ul = document.querySelector("header nav ul");
btn.onclick = function() {
    this.classList.toggle("active");
    ul.classList.toggle("active");
};