function affiche(id)
{  var elements;
  elements = document.getElementsByClassName("tout");
  if(document.getElementById(id).style.display==="none")
  {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none" ;
    }
    document.getElementById(id).style.display="block";
  }
  else
  {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none" ;
    }
    document.getElementById(id).style.display="none";
  }
  return true;
}