const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu=document.querySelector('.header .nav-bar .nav-list ul');
const menu_item=document.querySelector('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
console.log("hello");

hamburger.addEventListener('click',() =>{
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

// document.addEventListener('scroll',() =>{
// 	var scroll_position = window.scrollY;
// 	if(scroll_position >250){
// 		header.style.background = '#29323c'
// 	}else{
// 		header.style.background = 'transparent';
// 	}
// });

// menu_item.forEach((item)=>{
// 	item.addEventListener('click',() => {
// 		hamburger.classList.toggle('active');
// 		mobile_menu.classList.toggle('active');
// 	});

// });