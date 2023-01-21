const header = document.querySelector("header"); //JavaScript HTML DOM

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0); //JavaScript HTML DOM addEventListener
}); //

let menu = document.querySelector('#menu-icon'); //JavaScript HTML DOM
let navbar = document.querySelector('.navbar'); //JavaScript HTML DOM Navigator

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
}; // I made a mistake on my previous comment on this part, this is the JavaScript Toogle class

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
}) // JavaScript HTML DOM Element classList

function goBack() {
  window.history.back()
} //JavaScript Window History

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})
