// get elements for toggle
burger =document.querySelector('.burger')
navlist =document.querySelector('.nav-list')
navbar =document.querySelector('.navbar')
rightnav =document.querySelector('.rightnav')




burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp');
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');

})