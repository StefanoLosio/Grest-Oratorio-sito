const button_show = document.getElementById('show');
const nav_bar = document.getElementById('nav-bar');

const home_link = document.getElementById('home');
const eventi_link = document.getElementById('eventi');
const grest_link = document.getElementById('grest');
const iscrizioni_link = document.getElementById('iscrizioni');
const areaPersonale_link = document.getElementById('area-personale');

button_show.addEventListener('click', () => {
    nav_bar.classList.toggle('open');
});

window.addEventListener('resize', function() {
    const width = window.innerWidth;

    if (width > 880) {
        nav_bar.classList.remove('open');
    }
});

home_link.addEventListener('click', function(){
    window.location.href = "index.html"
});
eventi_link.addEventListener('click', function(){
    window.location.href = "eventi.html"
});
grest_link.addEventListener('click', function(){
    window.location.href = "grest.html"
});
iscrizioni_link.addEventListener('click', function(){
    window.location.href = "iscrizioni.html"
});
areaPersonale_link.addEventListener('click', function(){
    window.location.href = "login.html"
});