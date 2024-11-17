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


const allKeepLanguage = document.getElementsByClassName("keepLanguage");
const allKeepLevel = document.getElementsByClassName("keepLevel");
const levelNameBox =  document.getElementById("currentLevelName")
const listaNiveis = document.getElementsByClassName("lista-niveis")[0];
const levelNames = {"english": {
    "a1": ["Iniciante A1", "imgs/icons/avatar_placeholder.png"],
    "a2": ["Básico A2", "imgs/icons/avatar_placeholder.png"],
    "b1": ["Intermediário B1", "imgs/icons/avatar_placeholder.png"],
    "b2": ["Intermediário/Avançado B2‎ ‎ ‎ ‎ ‎ ‎ ‎ ", "imgs/icons/avatar_placeholder.png"],
    "c1": ["Avançado C1", "imgs/icons/avatar_placeholder.png"],
    "c2": ["Fluente C2", "imgs/icons/avatar_placeholder.png"],
}}

const flagSources = {"english" : "imgs/flags/english.png"}

const language = dict["language"];
const level = dict["level"].toLowerCase();






for(i=0; i< allKeepLanguage.length; i++){
    allKeepLanguage[i].href+="?language="+language+"&";
}
for(i=0; i< allKeepLevel.length; i++){
    allKeepLevel[i].href+="level="+level;
}



const module = document.getElementById(level.toUpperCase());
if(module!= null){
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