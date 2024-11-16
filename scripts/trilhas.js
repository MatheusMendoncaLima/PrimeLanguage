var url = window.location.href;


var params = url.split("?");
if(params.length>1){
   params= decodeURIComponent(params[1].replace("+", " ")).split("&");
}

var dict = {};

params.forEach(param => {
    if(param.includes("=")){
    dict[param.split("=")[0]] =  param.split("=")[1]; 
    }
});

const language = dict["language"];
const level = dict["level"];

const module = document.getElementById(level.toUpperCase());
module.style.display = "block";