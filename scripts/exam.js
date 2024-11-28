const question = document.getElementById("question");
const answerButtons = document.getElementsByClassName("answer");
const audioOutput = document.getElementById("audio-container");
const preTestContainer = document.getElementById("pre-test-container")
const testContainer = document.getElementById("test-container")
const resultsContainer = document.getElementById("results-container")
const resultOutput = document.getElementById("result")
const gotoCourseButton = document.getElementById("start")
const barValueDiv = document.getElementsByClassName("barValue")[0];
/*
use: answers[language][difficultLevel][question]
     [0][0] is the question statement
     [0][1] is the right answer
     [1] is the answer options
*/
const answers = {
    "english": [
        [ // a1
            [["Choose the correct word: 'This is my ___. (pai)'", "father"], ["mother", "sister", "father", "friend", "Não sei"]],
            [["Choose the correct article: '___ apple is red.'", "An"], ["An", "A", "The", "Any", "Não sei"]],
            [["What color is the book?", "Red"], ["Blue", "Red", "Green", "Yellow", "Não sei"], "audios/Script A1.mp3"],
            [["Choose the correct form: 'She ___ coffee every morning.'", "drinks"], ["drink", "drinks", "drinking", "drinked", "Não sei"]],
            [["Choose the correct answer: 'Who is your mother’s brother?'", "Uncle"], ["Cousin", "Father", "Uncle", "Sister", "Não sei"]]
        ],
        [ // a2
            [["Choose the correct form: 'Yesterday, I ___ at home.'", "was"], ["am", "is", "was", "were", "Não sei"]],
            [["Choose the correct verb: 'He always ___ breakfast in the morning.'", "eats"], ["eat", "eats", "ate", "eating", "Não sei"]],
            [["What time does he come back home?", "2 p.m."], ["8 a.m.", "2 p.m.", "6 p.m.", "10 a.m.", "Não sei"], "audios/Script A2.mp3"],
            [["Choose the correct preposition: 'She lives ____ a big city.'", "in"], ["on", "at", "in", "of", "Não sei"]],
            [["Choose the correct answer: 'Turn left, then go ___.’", "straight"], ["back", "front", "right", "straight", "Não sei"]]
        ],
        [ // b1
            [["Choose the correct preposition: 'I am interested ____ learning English.'", "in"], ["in", "on", "at", "by", "Não sei"]],
            [["Sarah went to the park on Saturday and took her dog with her. She stayed there until the evening.\n Where did Sarah go on Saturday?", "To the park"], ["To the mall", "To her friend’s house", "To the park", "To the beach", "Não sei"]],
            [["What time does he finish work?", "5 p.m."], ["9 a.m.", "1 p.m.", "3 p.m.", "5 p.m.", "Não sei"], "audios/Script B1.mp3"],
            [["Choose the correct option: 'She is ____ at math, so she helps her friends.'", "good"], ["terrible", "good", "bored", "tired", "Não sei"]],
            [["Choose the correct verb form: 'Last year, we ___ a beautiful beach in Brazil.'", "visited"], ["visited", "visit", "visits", "are visiting", "Não sei"]]
        ],
        [ // b2
            [["Complete the sentence: 'If I had known, I ____ have told you.'", "would"], ["would", "will", "could", "should", "Não sei"]],
            [["What is the goal of the new project?", "Reduce pollution"], ["Increase pollution", "Clean the entire city", "Reduce pollution", "Expand the city", "Não sei"]],
            [["What does she prefer to do in the summer?", "Stay in cooler places"], ["Stay in cooler places", "Go to the beach", "Swim in the pool", "Travel abroad", "Não sei"], "audios/Script B2.mp3"],
            [["Choose the correct option: 'You ____ leave now if you want to catch the train.'", "should"], ["can’t", "should", "wouldn’t", "might not", "Não sei"]],
            [["Choose the correct answer: 'After the argument, they finally decided to ____ and forgive each other.'", "make up"], ["hold on", "look up", "make up", "take over", "Não sei"]]
        ],
        [ // c1
            [["Choose the correct option: 'Despite ____ the exam, he was accepted to the program.'", "failing"], ["failing", "fail", "fails", "failed", "Não sei"]],
            [["What is the primary goal of the company’s initiative?", "Reduce waste"], ["Increase waste production", "Clean the entire city", "Reduce waste", "Expand its business", "Não sei"]],
            [["What is one disadvantage of working from home mentioned in the audio?", "It can lead to isolation"], ["It increases productivity", "It can lead to isolation", "It saves time", "It improves focus", "Não sei"], "audios/Script C1.mp3"],
            [["Choose the correct form: 'The project ____ completed by the end of the year.'", "will be"], ["will be", "was being", "is", "are", "Não sei"]],
            [["Choose the best option: 'Although the decision was unpopular, it was deemed ____ for the success of the company.'", "necessary"], ["enjoyable", "necessary", "optional", "trivial", "Não sei"]]
        ],
        [ // c2
            [["Choose the most suitable phrase: 'The project is ___ delayed, as the team is still gathering data.'", "provisionally"], ["provisionally", "circumstantially", "relatively", "definitively", "Não sei"]],
            [["What is one purpose of artistic expression?", "To reflect societal values"], ["To reflect societal values", "To entertain without purpose", "To avoid controversial topics", "To follow traditional norms", "Não sei"]],
            [["What challenge is mentioned regarding technology?", "It makes personal connections harder to maintain"], ["It improves personal connections", "It is too costly", "It makes personal connections harder to maintain", "It has no effect on relationships", "Não sei"], "audios/Script C2.mp3"],
            [["Choose the correct answer: 'The author ___ light on an issue that is often overlooked in society.'", "sheds"], ["sheds", "shows", "brings", "reveals", "Não sei"]],
            [["Complete the sentence with the most suitable option: 'After years of research, the scientist finally ___ the theory that had puzzled her peers for decades.'", "validated"], ["validated", "approximated", "ignored", "questioned", "Não sei"]]
        ]
    ]
};


const effectBoxes = [document.getElementById("effect-a"),document.getElementById("effect-b"),document.getElementById("effect-c"), document.getElementById("effect-d"), document.getElementById("effect-e")]
const proficiencyLevels = {"english" : ["a1","a2","b1","b2","c1","c2"]}

const root = document.querySelector(":root");

const alphabet = ["a","b","c","d","e"]


let proficiency="";
let difficultLevel=0;
let currentQuestion = 0;
let answeredQuestions = 0;
let totalQuestions = 0;

let rightAnswered = 0;
let wrongAnswered = 0;
let barValue = 70;
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

if (level != null){
    growBarValue(100,100);
    gotoCourseButton.href += "?language="+language+"&level="+level
    resultsContainer.style.display = "block"
    resultOutput.innerHTML = level.toUpperCase()

}else {
    growBarValue(70, 70);
    preTestContainer.style.display = "block"
    
}

function startTest(){

    testContainer.style.display = "block"
    preTestContainer.style.display = "none"

    

    for (let i = 0; i < answers[language].length; i++) {
    //i = diffucult levels index
    //shuffle questions
    shuffleArray(answers[language][i])
    for(let j = 0 ; j < answers[language][i].length ;  j++){
        //j = questions
        totalQuestions++;
        shuffleArray(getAnswers(language, i, j))
        
    }
}
updateQuestion()
}
let clicked = false;
async function answer(answer, letterIndex){
    if(!clicked){
        clicked=true
    let givenClass;
    if (answer == getCurrentRightAnswer()){
        givenClass="effectRight";
        answerButtons[letterIndex].style.color= "green"
        rightAnswered++;

    }else{
        answerButtons[letterIndex].style.color= "red"
        givenClass="effectWrong";
        wrongAnswered++;
    }
    effectBoxes[letterIndex].classList.add(givenClass)
    
    effectBoxes[letterIndex].checked=true;
    growBarValue(barValue, barValue+1);

    await new Promise(r => setTimeout(r, 1000));
    currentQuestion++;
    answeredQuestions++;
    effectBoxes[letterIndex].checked=false;
    effectBoxes[letterIndex].classList.remove(givenClass)
   updateQuestion();
   answerButtons[letterIndex].style.color= "black"
   clicked=false
   
}
}

function updateQuestion(){
    if(answeredQuestions >= totalQuestions){
        proficiency =  proficiencyLevels[language][Math.floor(rightAnswered/5)];
        window.location.replace("test.html?language="+language + "&level="+proficiency)
    }else if(currentQuestion >= answers[language][difficultLevel].length){
        difficultLevel++;
        currentQuestion=0;
    }

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerHTML = alphabet[i]+") "+ getCurrentAnswers()[i];
        answerButtons[i].onclick = function() { answer(getCurrentAnswers()[i], i)}
    }
    if(answers[language][difficultLevel][currentQuestion].length==3){
        audioOutput.src = answers[language][difficultLevel][currentQuestion][2]
        audioOutput.style.display = "block"
    }else{
        audioOutput.style.display = "none"

    }


    question.innerHTML = (answeredQuestions+1) + ". " + getCurrentQustionStatement()
}

//veio da internet
function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
}
}


function getCurrentQustionStatement(){
    
    return answers[language][difficultLevel][currentQuestion][0][0];
}
function getCurrentRightAnswer(){
    return answers[language][difficultLevel][currentQuestion][0][1];
}
function getCurrentAnswers(){
    return answers[language][difficultLevel][currentQuestion][1];
}

function getCurrentQustionStatement(){
    return answers[language][difficultLevel][currentQuestion][0][0];
}

function getStatement(lang, level, question){
    return answers[lang][level][question][0][0];
}


function getRightAnswer(lang, level, question){
    return answers[lang][level][question][0][1];
}


function getAnswers(lang, level, question){
    return answers[lang][level][question][1];
}
function growBarValue(prev, post){
    barValue = post;

    //r.style.setProperty('--barValue', "40%");
    barValueDiv.style.animation = "none"
    setTimeout(()=> {

        barValueDiv.style.animation = null

    })

    root.style.setProperty('--prevBarValue', prev+"%" );
    root.style.setProperty('--barValue', post+"%");

}