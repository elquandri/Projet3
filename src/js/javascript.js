function maFonction(){
  var elements;
  elements = document.getElementsByClassName("tout");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none" ;
  }
}
function affiche(id)
{  var elements;
  elements = document.getElementsByClassName("tout");
  if(document.getElementById(id).style.display==="none")
  {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none" ;
    }
     setTimeout(function(){ var maDiv=  document.getElementById(id);
                         maDiv.style.display="block";
                          },500);
    /*  var source=document.getElementById(id);
      var dl=source.getElementsByTagName("DL");
      var j;
      for( j=0;j< dl.length ; j++){
        setTimeout(dl[j].style.display="block",1000); } */

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
