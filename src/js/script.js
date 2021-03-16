function rotateBtn() {
  var navbtn = document.getElementById('navmenubtn');
  var navbar = document.getElementById('navbar');
  var mainhead = document.getElementById('mainhead');
  var navtag = document.getElementById('nav-a');

  if ( navbtn.classList.contains('navmenubtn') == true ){
    navbtn.classList.add("rotatecss");
    navbtn.classList.remove("navmenubtn");
  } else{
    navbtn.classList.add("navmenubtn");
    navbtn.classList.remove("rotatecss");
  }

  if ( navbar.classList.contains('hide') == true ){
    navbar.classList.add('show');
    navbar.classList.remove('hide');
    mainhead.style.height = '100vh';
    mainhead.style.background = '#100e17';
    navtag.classList.add("achange");
  } else{
    navbar.classList.add('hide');
    navbar.classList.remove('show');
    mainhead.style.height = '50px';
    mainhead.style.background = "#fff";
    navtag.classList.remove("achange");
  }
};
