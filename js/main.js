let menToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

menToggle.addEventListener('click', function(event){
    event.preventDefault();
    menu.classList.toggle('visible');
})