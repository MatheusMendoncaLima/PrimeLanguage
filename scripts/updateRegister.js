const LANGUAGES = {
    "english" : ["HELLO!", "inglês"],
    "spanish" : ["¡HOLA!", "espanhol"],
    "japanese" : ["こんにちは!", "japonês"],
    "german" : ["HALLO!", "alemão"],
    "french" : ["BONJOUR!", "francês"],
    "chinese" : ["你好!", "chinês"],
    "korean" : ["안녕하세요!", "coreano"],
    "italian" : ["CIAO!", "italiano"],
    "russian" : ["ПРИВЕТ!", "russo"]
}




const LANG_HELLO_ELEMENT = document.getElementById("languageHello");

const LANG_IMG_ELEMENT = document.getElementById("idioma");

const LANG_VALUE_ELEMENT = document.getElementById("languageFormValue");

const STEP3_TITLE = document.getElementById("step3msg");

const STEP3_TABLE_ELEMENTS = document.getElementsByClassName("a3");

const STEP4_TABLE_ELEMENTS = document.getElementsByClassName("a4");


const STEP4_TITLE = document.getElementById("step4msg");



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


if(Object.keys(dict).includes("email") && Object.keys(dict).includes("senha")){
    delete dict["email"];
    delete dict["senha"];
}

var language = dict["language"];
var user = dict["name"];
var motivation = dict["motivation"];
var level = dict["level"];

var r = document.querySelector(":root");

if(Object.keys(dict).length == 0){
    

    r.style.setProperty('--displayStep1', "block");
}else if(LANGUAGES[language] != null && Object.keys(dict).length == 1){

    r.style.setProperty('--displayStep2', "block");
    r.style.setProperty('--backgroundVisible', "1");


    growBarValue(5,40)

    moveBg(50,0, -20, 0)

    LANG_HELLO_ELEMENT.innerHTML = LANGUAGES[language][0];
    LANG_IMG_ELEMENT.src = "imgs/flags/"+language+".png";

    LANG_VALUE_ELEMENT.value = language;
}else if(LANGUAGES[language] != null && user != null && motivation==null && level == null){
    user = user.split(" ")[0]

    r.style.setProperty('--displayStep3', "block");
    r.style.setProperty('--backgroundVisible', "1");

    moveBg(-26,0,50, 0)

    STEP3_TITLE.innerHTML = "Olá " + user + ", por que você deseja aprender " + LANGUAGES[language][1] + " conosco?";
    
    for (var i =0; i< STEP3_TABLE_ELEMENTS.length; i++) {
        var key = STEP3_TABLE_ELEMENTS[i];
        STEP3_TABLE_ELEMENTS[i].href = url+"&"+key.href.split("/")[key.href.split("/").length-1]; 


    }

    growBarValue(40,80);

}else if (LANGUAGES[language] != null && user != null && motivation != null && level == null){
    r.style.setProperty('--displayStep4', "block");
    r.style.setProperty('--backgroundVisible', "1");

    moveBg(50,0, -26, 0)

    growBarValue(80, 95)

    for (var i =0; i< STEP4_TABLE_ELEMENTS.length; i++) {
        var key = STEP4_TABLE_ELEMENTS[i];
        STEP4_TABLE_ELEMENTS[i].href = url+"&"+key.href.split("/")[key.href.split("/").length-1]; 


    }

    STEP4_TITLE.innerHTML = "Qual seu nivel de " + LANGUAGES[language][1] + "?"

} else if(LANGUAGES[language] != null && user != null && motivation != null && level != null){
    r.style.setProperty('--displayStep5', "block");
    r.style.setProperty('--backgroundVisible', "1");

    moveBg(-26, 0, -26, 0)

    growBarValue(95,100)

} else {
    //window.location.href = "register.html";
}

function moveBg(x1 , y1, x2, y2){
    var r = document.querySelector(":root");
    var rs = getComputedStyle(r);

    r.style.setProperty('--prevBackgroundPosX', x1+"dvw" );
    r.style.setProperty('--prevBackgroundPosY', y1+"%" );

    r.style.setProperty('--backgroundPosX', x2+"dvw");
    r.style.setProperty('--backgroundPosY', y2+"%");
}

function growBarValue(prev, post){
    //r.style.setProperty('--barValue', "40%");

    r.style.setProperty('--prevBarValue', prev+"%" );
    r.style.setProperty('--barValue', post+"%");
}