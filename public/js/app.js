var hour = 0
var min = 0
var sec = 0
var milisec = 0

var displayhour = document.getElementById('hour')
var displaymin = document.getElementById('min')
var displaysec = document.getElementById('sec')
var displaymilisec = document.getElementById('milisec')
var timerplay;



 function timer(){
    
    milisec++
    displaymilisec.innerHTML = milisec
    
    if(milisec == 100){
    sec++
    displaysec.innerHTML = sec
    milisec = 0
}else if (sec == 60){
    min++
    displaymin.innerHTML = min
    sec = 0

}else if(min == 60){
    hour++
    displayhour.innerHTML = hour
    min = 0

}


}


function start(){
    var btn = document.getElementById("start").style.display="none"
    timerplay = setInterval(timer,10);
}

function pause(){
    var btn = document.getElementById("start").style.display="inline-block"

    clearInterval(timerplay)

}

function reset(){
    var btn = document.getElementById("start").style.display="inline-block"

    milisec = 0
    sec = 0
    min = 0
    hour = 0
    displaymilisec.innerHTML = milisec
    displaysec.innerHTML = sec
    displaymin.innerHTML = min
    displayhour.innerHTML = hour
}
