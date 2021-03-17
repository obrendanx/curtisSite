function rotateBtn() {
  var navbtn = document.getElementById('navmenubtn');
  var navbar = document.getElementById('navbar');
  var mainhead = document.getElementById('mainhead');
  var navtag = document.getElementsByClassName('nav-a');

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

    for(var i=0; i < navtag.length; i++){
      navtag[i].classList.add("achange");
    }
  } else{
    navbar.classList.add('hide');
    navbar.classList.remove('show');
    mainhead.style.height = '50px';
    mainhead.style.background = "#fff";
    for(var i=0; i < navtag.length; i++){
      navtag[i].classList.remove("achange");
    }
  }
};
