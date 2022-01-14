let open = document.querySelector(".openMenuu")
let ull = document.querySelector(".ull")
let close = document.querySelector(".closeMenu")

open.addEventListener("click",function(){
	ull.style.display = "flex";
	ull.style.top = "0";
})
close.addEventListener("click",function(){
	ull.style.top = "-110%";
})