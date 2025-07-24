// Added scrool botun
const btn = document.querySelector('.btn');
const copy = document.querySelector('.copy');

// get Years for footer with new Date
let fullYears = new Date().getFullYear();
copy.innerHTML = `&copy; ${fullYears} | All rights reserved`;

// function scrool to top
window.onscroll = function () {
  window.scrollY >= 500 ?btn.style.display = 'block':btn.style.display = 'none';
};
btn.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};