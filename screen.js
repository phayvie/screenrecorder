const menuIcon = document.querySelector(".menu-icon");
const menuBar = document.querySelector(".menu-bar");
const menu = document.querySelector("img");
const box = document.querySelectorAll(".box")

function revealMenuBar(){
    menuBar.classList.toggle("revealMenuBar");
    menu.classList.toggle('rotate');
}
 
window.addEventListener('load', ()=>{
    box.forEach(boxes => {
        windowTop=window.innerHeight;
        var boxTop = boxes.getBoundingClientRect().top;
        if(boxTop<windowTop){
            boxes.classList.add('show')}
    })
})

window.addEventListener('scroll',()=>{
 box.forEach(boxes => {
    windowTop=window.innerHeight-40;
    var boxTop = boxes.getBoundingClientRect().top;
    if(boxTop<windowTop){
        boxes.classList.add('show')
    }else{
        boxes.classList.remove('show')
    }

 });

})


