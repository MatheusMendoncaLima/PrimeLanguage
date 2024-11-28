var r = document.querySelector(":root");
const carrousel = document.getElementsByClassName("languages")[0];
const languages = document.getElementsByClassName("language");
const languageArray = []
for (let i = 0; i < languages.length; i++) {

    languageArray.push(languages[i].cloneNode(true))
}

carrousel.prepend(languageArray[languageArray.length-1].cloneNode(true))
carrousel.prepend(languageArray[languageArray.length-2].cloneNode(true))
carrousel.prepend(languageArray[languageArray.length-3].cloneNode(true))
carrousel.prepend(languageArray[languageArray.length-4].cloneNode(true))
carrousel.prepend(languageArray[languageArray.length-5].cloneNode(true))
carrousel.prepend(languageArray[languageArray.length-6].cloneNode(true))
carrousel.prepend(languageArray[languageArray.length-7].cloneNode(true))
carrousel.prepend(languageArray[languageArray.length-8].cloneNode(true))
carrousel.prepend(languageArray[languageArray.length-9].cloneNode(true))


carrousel.appendChild(languageArray[0].cloneNode(true))
carrousel.appendChild(languageArray[1].cloneNode(true))
carrousel.appendChild(languageArray[2].cloneNode(true))
carrousel.appendChild(languageArray[3].cloneNode(true))
carrousel.appendChild(languageArray[4].cloneNode(true))
carrousel.appendChild(languageArray[5].cloneNode(true))
carrousel.appendChild(languageArray[6].cloneNode(true))
carrousel.appendChild(languageArray[7].cloneNode(true))
carrousel.appendChild(languageArray[8].cloneNode(true))

async function right(){
    var rs = getComputedStyle(r);
    var flagShowing = parseInt(rs.getPropertyValue("--CarrouselFlagAmount"));
    var flagAmount = document.getElementsByClassName("language").length-18;
    var slidePerClick =  parseInt(rs.getPropertyValue("--CarrouselFlagSlide"));
    var langLength = languages.length;
    if (flagShowing-6 +slidePerClick >= flagAmount){
        flagShowing-=flagAmount
        languages[0].style.transition = "0s"
        r.style.setProperty('--CarrouselFlagAmount', flagShowing);
        
        await new Promise(r => setTimeout(r, 1));
        languages[0].style.transition = "1s"
        
    }


    r.style.setProperty('--CarrouselFlagAmount', flagShowing+slidePerClick);
    

}

async function left(){
    var rs = getComputedStyle(r);
    var flagShowing = parseInt(rs.getPropertyValue("--CarrouselFlagAmount"));
    var flagAmount = document.getElementsByClassName("language").length-18;
    var slidePerClick =  parseInt(rs.getPropertyValue("--CarrouselFlagSlide"));
    if(flagShowing-slidePerClick <= 9){
        
    flagShowing+=flagAmount
    languages[0].style.transition = "0s"
    r.style.setProperty('--CarrouselFlagAmount', flagShowing);
    
    await new Promise(r => setTimeout(r, 1));
    languages[0].style.transition = "1s"
    
    }
    r.style.setProperty('--CarrouselFlagAmount', flagShowing-slidePerClick);


}