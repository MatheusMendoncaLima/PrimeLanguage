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

const flag = document.getElementById("bandeira");
const dropDownFlag = document.getElementById("dropDownFlag");
const courseName = document.getElementById("courseName");
const allKeepLanguage = document.getElementsByClassName("keepLanguage");
const allKeepLevel = document.getElementsByClassName("keepLevel");
const levelNameBox =  document.getElementById("currentLevelName")
const listaNiveis = document.getElementsByClassName("lista-niveis")[0];
const levelNames = {"english": {
    "a1": ["Iniciante A1", "imgs/icons/beginner.png"],
    "a2": ["Básico A2", "imgs/icons/beginner.png"],
    "b1": ["Intermediário B1", "imgs/icons/intermediate.png"],
    "b2": ["Intermediário/Avançado B2‎ ‎ ‎ ‎ ‎ ‎ ‎ ", "imgs/icons/intermediate.png"],
    "c1": ["Avançado C1", "imgs/icons/advanced.png"],
    "c2": ["Fluente C2", "imgs/icons/advanced.png"],
}}

const LANGUAGES = {
    "english" : ["HELLO!", "Inglês"],
    "spanish" : ["¡HOLA!", "Espanhol"],
    "japanese" : ["こんにちは!", "Japonês"],
    "german" : ["HALLO!", "Alemão"],
    "french" : ["BONJOUR!", "Francês"],
    "chinese" : ["你好!", "Chinês"],
    "korean" : ["안녕하세요!", "Coreano"],
    "italian" : ["CIAO!", "Italiano"],
    "russian" : ["ПРИВЕТ!", "Russo"],
    "portuguese" : ["Olá!", "Português"]
}
const language = dict["language"];
const level = dict["level"].toLowerCase();






for(i=0; i< allKeepLanguage.length; i++){
    allKeepLanguage[i].href+="?language="+language+"&";
}
for(i=0; i< allKeepLevel.length; i++){
    allKeepLevel[i].href+="level="+level;
}


if(flag != null){
    flag.src= "imgs/flags/"+language+".png"
    
}

const module = document.getElementById(level.toUpperCase());
if(module!= null){
    dropDownFlag.src = "imgs/flags/"+language+".png";
    courseName.innerHTML = LANGUAGES[language][1] + " completo"
    levelNameBox.innerHTML = levelNames[language][level][0]
    module.style.display = "block";
    for(i=0; i< Object.keys(levelNames[language]).length; i++){
        const placeholderLevelLi = document.createElement("li");
        const placeholderLevelA = document.createElement("a");
        const placeholderLevelH1 = document.createElement("h1");
        const placeholderLevelImg = document.createElement("img");

        placeholderLevelLi.appendChild(placeholderLevelA)
        placeholderLevelA.appendChild(placeholderLevelImg)

        placeholderLevelA.appendChild(placeholderLevelH1)

        placeholderLevelLi.classList.add("niveis")

        placeholderLevelA.href = "trilhas.html?language="+language+"&level="+Object.keys(levelNames[language])[i];
        placeholderLevelImg.src = Object.values(levelNames[language])[i][1]
        placeholderLevelH1.innerHTML = Object.values(levelNames[language])[i][0];
        
        if(Object.keys(levelNames[language])[i] == level){
            placeholderLevelLi.style.backgroundColor = "#5CDC8F"
        }
        listaNiveis.appendChild(placeholderLevelLi)

    }
}