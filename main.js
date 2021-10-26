var menu = document.getElementById("menu");
var close = document.getElementById("close");
var navmenu = document.getElementById("navmenu");
navmenu.style.width = '0px';
close.style.display = 'none';
menu.onclick = function() {
  if (navmenu.style.width == '0px') {
    navmenu.style.width = '250px';
    navmenu.style.transition = '0.5s';
    menu.style.display ='none';
    close.style.display ='flex';
    
  }
  else {
    menu.style.display = 'flex';
  }
};
close.onclick = function () {
  if (navmenu.style.width ='250px')
{
  navmenu.style.width ='0px';
  close.style.display ='none';
  menu.style.display ='flex';
  menu.style.transition ='5s';
  close.style.transition ='5s';
}
 else{
   
 }
 
}