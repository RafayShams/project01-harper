//targe the hamburger icon
const hamburger = document.querySelector('.hamburger');
//add even listener to the hamburger icon
hamburger.addEventListener('click', function(){
  //target the mainNav ul
  const navList = document.querySelector('.mainNav ul');
 if (navList.style.visibility === "hidden" || navList.style.visibility === "") {
  navList.style.visibility = "visible"
 } else {
  navList.style.visibility = "hidden"
 }
});
//toggle the display of the mainNav from block to none when hamburger icon is clicked