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


