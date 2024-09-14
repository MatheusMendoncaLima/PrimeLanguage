var r = document.querySelector(":root");

function right(){
    var rs = getComputedStyle(r);
    var flagShowing = parseInt(rs.getPropertyValue("--CarrouselFlagAmount"));
    var flagAmount = document.getElementsByClassName("language").length;
    var slidePerClick =  parseInt(rs.getPropertyValue("--CarrouselFlagSlide"));
    if (flagShowing +slidePerClick >= flagAmount){
        flagShowing-=slidePerClick;
    }

    r.style.setProperty('--CarrouselFlagAmount', flagShowing+slidePerClick);
    

}

function left(){
    var rs = getComputedStyle(r);
    var flagAmount = parseInt(rs.getPropertyValue("--CarrouselFlagAmount"));
    var slidePerClick =  parseInt(rs.getPropertyValue("--CarrouselFlagSlide"));

    if (flagAmount - slidePerClick < 0){
        flagAmount = slidePerClick;
    }
    
    r.style.setProperty('--CarrouselFlagAmount', flagAmount-slidePerClick);

}