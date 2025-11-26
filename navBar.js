const button_show = document.getElementById('show');
const nav_bar = document.getElementById('nav-bar');

const home_link = document.getElementById('home');
const eventi_link = document.getElementById('eventi');
const grest_link = document.getElementById('grest');
const iscrizioni_link = document.getElementById('iscrizioni');
const areaPersonale_link = document.getElementById('area-personale');

let lastScroll = 0;

button_show.addEventListener('click', () => {
    nav_bar.classList.toggle('open');
});

window.addEventListener('resize', function() {
    const width = window.innerWidth;

    if (width >= 971) {
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

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    nav_bar.classList.add('fix');
    nav_bar.classList.remove('floating');
  } else {
    nav_bar.classList.add('floating');
    nav_bar.classList.remove('fix');
  }
});