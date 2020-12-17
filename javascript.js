function updateClock ( )
{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );
  var Day=currentTime.getDate();
  var Month=currentTime.getMonth();
  var Year=currentTime.getFullYear();

  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
  currentHours= (currentHours < 10 ? "0" : "")+currentHours;
  switch(Month)
  {
    case (0): Month="Jan"; break;
    case (1): Month="Feb"; break;
    case (2): Month="Mar"; break;
    case (3): Month="Apr"; break;
    case (4): Month="May"; break;
    case (5): Month="Jun"; break;
    case (6): Month="Jul"; break;
    case (7): Month="Aug"; break;
    case (8): Month="Sep"; break;
    case (9): Month="Oct"; break;
    case (10): Month="Nov"; break;
    case (11): Month="Dec"; break;
    
  }

  var currentTimeString ="<p>"+Day+"-"+Month+"-"+Year+" "+ currentHours + ":" + currentMinutes + ":" + currentSeconds+"</p>" ;
  output=document.getElementById("clock");
  output.innerHTML = currentTimeString;
  setTimeout(updateClock,1000);
}
window.addEventListener("load",updateClock,false);

function generatePopup() {
 
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup'); 
  const titleContainer = document.createElement('div');
  titleContainer.classList.add('title');
  const title = document.createElement('h2');
  title.textContent = "Thank you for leaving your feedback!";
  titleContainer.appendChild(title);
  popupContainer.appendChild(title);
  const buttonContainer=document.createElement('a');
  button=document.createTextNode("Continue");
  buttonContainer.appendChild(button);
  buttonContainer.setAttribute("style","float:right");
  buttonContainer.setAttribute("href","insta.html");
  buttonContainer.setAttribute("style","padding-left:80%;padding-bottom:5%");
  popupContainer.appendChild(buttonContainer);
  popupContainer.setAttribute("style","align-content:center;font-size: 1.125em;font-weight: bold;")
  document.body.appendChild(popupContainer);
}
clicked=0
function dark()
{ 
 
  if(clicked==0)               
   {document.body.setAttribute( "style", "background-color:  rgb(88, 85, 85)" );
      clicked=1;  
    }
  else
  {document.body.setAttribute( "style", 
  "background-color: white" );
  clicked=0;  }

}

var count = [];
var n;
function funk(kade, n){
  if(count[n] == null){
    count[n] = 0;
  }
  count[n]++;
  document.getElementById(kade).innerHTML = count[n]; 
}


function myFunction(kade,naslov,text) {
  var currentTime = new Date ( );
  var x = document.getElementById(text).value;
  var y=document.getElementById(naslov).value;
  if(text=="textareat" || text=="textareat2")
  var content="<p style='color:teal; font-size: larger;font-weight: bolder; padding-left: 5%;'>"+y+"</p><p style='color: white;font-size: larger;padding-left: 5%;'>"+x+"</p>";
  else
  var content="<p style='color:teal; font-size: larger;font-weight: bolder; padding-left: 5%;'>"+y+"</p><p style='color: black;font-size: larger;padding-left: 5%;'>"+x+"</p>";
  document.getElementById(kade).innerHTML = content+"<p style='color:teal; padding-left: 5%;'>"+currentTime.getDate ( )+"-"+(currentTime.getMonth ()+1) +"-"+currentTime.getFullYear ( )+"<\p>";
}

var myWindow;
  function openwin(koj) {
  myWindow = window.open(koj,"My window", "width=400, height=200");
  myWindow.focus();
   }

   const deklaracija = () => {// da obezbedi mesto za 100 kom pod sekoja slika
    matrix = [];
    for (let i = 0; i < 100; i++) {
        matrix.push("<li></li>");
    }
    localStorage.setItem("matrica",matrix);
  }
  function loadKom(kade,komentar,broj) {
    var kom=document.getElementById(komentar).value;
    document.getElementById(komentar).value="";
    var markup = "<li "+username+":"+ kom  +"</li>";
    matrix=localStorage.getItem("matrica");
    matrix[broj]=matrix[broj]+markup;
    localStorage.setItem("matrica",matrix);
    document.getElementById(kade).innerHTML=matrix[br];
  }
  
   
 
  /* function loadKom(kade,komentar,broj) {
       var kom=document.getElementById(komentar)
       var pom=0;
       var lenght = localStorage.length;
       com = [];
       for (var i = 0; i < lenght; ++i) {
           com[i] = localStorage.key(i);
       }
       var markup = "<ul>";
       for (var c in com) {
           var query = localStorage.getItem(com[c]);
           markup += "<li id='"+pom+"'>"+ query  +"</li>";
              // "<br><input id = '" + com[c] +
               // "'type = 'button' class='del'" +
              // "value = 'Delete' style='border:none; background-color:black; color: white' onclick='izbrisi('"+pom+"')'>
              
               pom++;
       } //end for
       markup += "</ul>";
       document.getElementById(kade).innerHTML = markup;
   } // end function
   function post(kade,sto,broj) {
       var c = document.getElementById(sto);
       localStorage.setItem(c.value, username+":"+c.value);
       c.value = "";
       loadKom(kade,broj);
   }*/
   function deleteKom(pom,kade) {
     console.log("vlagam da brisam");
     var element=document.getElementById(pom);
    localStorage.removeItem(element);
    loadKom(kade);

   }
   window.addEventListener("load",deklaracija,false);
   function loadinsta()
   {
    matrix=localStorage.getItem("matrica");
    for(var i=0;i<1;i++)
        if(matrix[i]!=null)
        {
          document.getElementById("kade"+i).innerHTML=matrix[i];
        }
   }
window.addEventListener("load",loadinsta,false);
function voting(kade, odkade)
            {
                var x = document.getElementById(odkade).value;
                var nova = (document.getElementById(kade).value + x)/2;
                document.getElementById(kade).value=  nova;
            }