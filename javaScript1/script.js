														/* Fonctionnalité sur le FOOTER 
														=============================== */
let clickCount = 0;

let ybo_foot = document.getElementById("foot");
ybo_foot.addEventListener('click', ActionFoot);

function ActionFoot(){
	clickCount++;
	console.log("Click numéro : " + clickCount );}

														/* Fonctionnalité sur le Menu Hamburger 
														====================================== */

let menuBtn = document.querySelector(".navbar-toggler");
let ybo_tst = document.getElementById("navbarHeader");
let menuStatus = false;
function menuToggle(){
	if (menuStatus == false){
		ybo_tst.classList.toggle("collapse");
		menuStatus = true;
	}
	else if (menuStatus == true){
		ybo_tst.classList.toggle("collapse");
		menuStatus = false;
	}
}
menuBtn.addEventListener('click', menuToggle);


														/* Fonctionnalité sur le Edit de la Fist Card 
														============================================ */


let redText = document.getElementById("firstCardText");
let redBtn  = document.getElementById("firstCardBtn");
function TextRed(){
redText.style.color = 'red' ; 
}
redBtn.addEventListener('click', TextRed);


														/* Fonctionnalité sur le Edit de la second Card 
														============================================ */

let greenText = document.getElementById("secondCardText");
let greenBtn  = document.getElementById("secondCardBtn");
function TextGreen(){
	if (greenText.style.color == 'green'){ 
		greenText.style.color = '#0d0d0d';}
	else { 
		greenText.style.color = 'green';}}
greenBtn.addEventListener('click', TextGreen);

													/* Fonctionnalité sur le link CSS
														=============================== */
let linkCSS = document.getElementById("ybo");
let navClick  = document.getElementById("ybo-nav");
let statusCss = false
console.log(navClick)

function myFunction() {
	if (!(statusCss)) {
	  linkCSS.disabled = true;
		statusCss = true; }
  else {
  	linkCSS.disabled = false;
		statusCss = false;  } }
navClick.ondblclick = myFunction;


/*
function TEST() {
	linkCSS.disabled = true;}

navClick.ondblclick = TEST; */
