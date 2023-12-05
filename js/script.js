const hamBurger =document.querySelector(".hamBurger");
const navMenu= document.querySelector(".nav-menu");
const closeMenu = document.querySelector(".close-menu");
const menuItem =document.querySelectorAll("nav .nav-menu li a");





hamBurger.addEventListener('click',()=>{
    navMenu.style.display='flex';
    navMenu.style.top = '0';   
  

})

closeMenu.addEventListener('click',()=>{
navMenu.style.top ="-100%"
});

menuItem.forEach(item =>{
    item.addEventListener("click", function(){
        navMenu.style.top = '-100%';
    })
})

