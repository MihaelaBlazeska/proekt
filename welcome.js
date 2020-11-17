function Welcome()
{
    var ime=window.prompt("What's your name?");
    var wel="<p>Let's become friends "+ime+"!</p>";
    output=document.getElementById("ime");
    output.innerHTML=wel;

}
window.addEventListener("load",Welcome,false);