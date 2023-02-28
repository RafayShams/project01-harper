//targe the hamburger icon
const hamburger = document.querySelector('.hamburger');
//add event listener to the hamburger icon
hamburger.addEventListener('click', function(){
  //target the mainNav ul
  const navList = document.querySelector('.mainNav ul');

//toggle the visibility of the mainNav from visible to hidden when hamburger icon is clicked
const style = getComputedStyle(navList);
 if (style.visibility === "hidden") {
  navList.style.visibility = "visible"
 } else {
  navList.style.visibility = "hidden"
 }
});
