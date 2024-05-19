function ParseBlockedD(){

var ButtonUID = "button";

var DivUID = "div-gpt";

var blocked = false;
	
window.onscroll = function(){

if(!blocked){

if(isVisibleFromScreen(document.getElementById(ButtonUID))){

blocked = true;

createElementBlockedD(DivUID);

detectC(ButtonUID);

}

}

};

}



function isVisibleFromScreen(Elemento){

var Top = parseInt(Elemento.getBoundingClientRect().top);

if
(
Top > 0 && Top < window.innerHeight - Elemento.offsetHeight
)
{

return true;

}

return false;

}



function createElementBlockedD(DivUID){

var div = document.createElement("div");

div.id = "BlockedD";

div.style.position = "fixed";

div.style.top="0px";
div.style.left="0px";
div.style.right="0px";
div.style.bottom="0px";

div.style.width = 1*window.innerWidth+"px";
div.style.height = 2*window.innerHeight+"px";

div.style.display="flex";
div.style.justifyContent="center";
div.style.alignItems="center";

div.style.opacity="0.5";

div.style.backgroundColor="#AA0000AA";

div.appendChild(document.getElementById(DivUID));

document.getElementsByTagName("body")[0].appendChild(div);

}




function detectC(ButtonUID){

window.onmousedown = function(event){
var X = event.x;
var Y = event.y;

var coordinates = document.getElementById(ButtonUID).getBoundingClientRect();

var Left = parseInt(coordinates.left);
var Top = parseInt(coordinates.top);
var Right = parseInt(coordinates.right);
var Bottom = parseInt(coordinates.bottom);

if(
X>Left && X<Right
&&
Y>Top && Y<Bottom
){

//var url = document.getElementById("button").getElementsByTagName("a")[0];
var url = document.getElementsByTagName("a")[0];


window.open(url,"_blank",null);

}

};

}

window.onbeforeunload = function(){
document.getElementsByTagName("body")[0].removeChild(document.getElementById("BlockedD"));
};
