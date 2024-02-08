var score = 0;
var hitRn = 0;
var clutter = '';
var timer = 10;


function makeBubble(){

for(var i =1;i<=102;i++ ){
    var rn = Math.floor(Math.random()*10);
    clutter += ` <div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerrun").textContent=timer;
        }else{
            clearInterval(timerint);
            document.querySelector('#pbtm').innerHTML = "";

        }
    },1000)
    
}
function hitValue(){
    hitRn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitRn;
}
function increaseScore(){
    score +=10;
    document.querySelector('#scoreint').textContent = score;
}

document.querySelector('#pbtm').addEventListener('click',function(details){
    var clicked = Number(details.target.textContent);
    if(clicked==hitRn){
        increaseScore();
        makeBubble();
        hitValue();

    }
});








hitValue();
runTimer();
makeBubble();
