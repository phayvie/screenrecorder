const menuIcon = document.querySelector(".menu-icon");
const menuBar = document.querySelector(".menu-bar");
const menu = document.querySelector("img");


function revealMenuBar(){
    menuBar.classList.toggle("revealMenuBar")
    menu.classList.toggle('rotate')
}