let start = document.getElementById("start");
let seconds=0;
let func;

function formatTime(sec){
    let min = Math.floor(sec/60);
    seconds = sec% 60;
    let minTime = min<10 ? '0' + min : min;
    let secTime = sec<10 ? '0' + sec : sec;
    return minTime +":"+ secTime;
}
start.addEventListener(("click"),function(){
    func = setInterval(function(){
        seconds++;
        console.log(timer);
        document.getElementById('timer').textContent = formatTime(seconds);

    },1000);
})
document.getElementById("stop").addEventListener("click",function(){
    clearInterval(func);
})
document.getElementById("reset").addEventListener("click",function(){
    clearInterval(func);
    document.getElementById('timer').textContent = formatTime(0);
},1000)
