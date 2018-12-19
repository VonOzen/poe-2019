require('./style.scss');
console.log('Hello World');


const responsiveNav = require('responsive-nav');
require('responsive-nav/client/dist/styles/responsive-nav.css');

const nav = responsiveNav('nav');

const aside = document.querySelector('aside');
if (window.matchMedia("(min-width: 35em)").matches) {
  fetch('partial.html')
  .then(function (response) {
    return response.text()
  })
  .then(function (body) {
    aside.innerHTML = body
  });
} else {
  aside.innerHTML = "<a href='second.html'>Second page</a>"
}
