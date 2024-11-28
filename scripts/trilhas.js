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
var levelNames;

fetch("../jsons/trilhas.json").then(response => {
    if (!response.ok){
        throw new Error("carrou nao");
    }
    return response.json();
}).then(data=> {
    levelNames=data["proeficiencyLevels"]
    code()
}).catch(error => console.error("Error", error))



for(i=0; i< allKeepLanguage.length; i++){
    allKeepLanguage[i].href+="?language="+language+"&";
}
for(i=0; i< allKeepLevel.length; i++){
    allKeepLevel[i].href+="level="+level;
}
function code() {


if(flag != null){
    flag.src= "imgs/flags/"+language+".png"
    
}
//pagina trilhas
const module = document.getElementById(level.toUpperCase());
if(module!= null){
    //dropdown
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

    //modulos
    
}

}