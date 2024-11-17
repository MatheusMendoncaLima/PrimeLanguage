var url = window.location.href;


var params = url.split("?");
if(params.length>1){
   params= decodeURIComponent(params[1].replace("+", " ")).split("&");
}

var dict = {};

const allTagA = document.getElementsByTagName("a");

params.forEach(param => {
    if(param.includes("=")){
    dict[param.split("=")[0]] =  param.split("=")[1]; 
    }
});

const language = dict["language"];
const level = dict["level"];



for(i=0; i< allTagA.length; i++){
    allTagA[i].href+="?language="+language+"&level="+level;
}

const module = document.getElementById(level.toUpperCase());
if(module!= null){
module.style.display = "block";
}