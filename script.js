let countdown;
let countdown2;
let minutes = 0;
let seconds = 0;
let work_time = 25;
let rest_time = 5;
let play_switch = 'on';
let pause_switch = 'on';
let stop_switch = 'on';
function decreaseSeconds(work_time){
    stop_switch = 'off'
   countdown = setInterval(function(){
        seconds = work_time%60;
        minutes = parseInt(work_time/60);
        if(work_time <=0){
            clearInterval(countdown);
            restingSeconds(rest_time);
            return;
        }
        work_time -= 1;
        console.log('work time: ' + work_time);
        document.getElementById("status").textContent = 'WORK TIME'
        document.getElementById("bottomDisplay").innerHTML = minutes + ':' + seconds
        
        console.log(minutes + ':'+seconds);
    }, 1000);
}

function restingSeconds(rest_time){
    stop_switch = 'off'
    countdown2 = setInterval(function(){
        seconds = rest_time%60;
        minutes = parseInt(rest_time/60);
        if(rest_time <=0){
            clearInterval(countdown2);
            decreaseSeconds(work_time);
            
            return;

        }
        rest_time -= 1;
        document.getElementById("status").textContent = 'REST TIME'
        document.getElementById("bottomDisplay").innerHTML = minutes + ':' + seconds
        console.log('rest time: ' + rest_time);
        // HERE
        console.log(minutes + ':'+seconds);
    }, 1000);
}

function playTimer(work_time){

}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
 

button.addEventListener('click', () => { 
    if(button.id=='workPlus'){
        if(play_switch=='off'){return}
        work_time += 1
        document.getElementById("displayWork").innerHTML = work_time + ':00'
        console.log(work_time)
    }
    else if(button.id=='workMinus'){
        if(play_switch=='off'){return}
        if(work_time<=0){return}
        else{
        work_time -= 1;
        document.getElementById("displayWork").innerHTML = work_time + ':00'
        console.log(work_time)
        }
    }
    else if(button.id=='restPlus'){
        if(play_switch=='off'){ return }
        rest_time += 1
        document.getElementById("displayRest").innerHTML = rest_time + ':00'
        console.log(rest_time)
    }
    else if(button.id=='restMinus'){
        if(play_switch=='off'){
            return
        }
        if(rest_time<=0) { return }
        
        else{
        rest_time -= 1;
        document.getElementById("displayRest").innerHTML = rest_time + ':00'
        console.log(rest_time)
        }
    }
    else if(button.id=='play'){
        if(play_switch=='off'){
            if (pause_switch == 'off') {
                if(document.getElementById("status").textContent == 'REST TIME'){
                    restingSeconds(minutes*60 + seconds);
                }
                else{
                decreaseSeconds(minutes*60 + seconds)
                pause_switch = 'on';
                }
            }
            else {
            return
            }
        }
        else{
        work_time*=60;
        rest_time*=60;
        if(document.getElementById("status").textContent == 'REST TIME'){
            restingSeconds(rest_time)
            play_switch = 'off'
        }
        else if (document.getElementById("status").textContent == 'WORK TIME'){
            decreaseSeconds(work_time)
            play_switch = 'off'
        }
        }
        

    }
    else if (button.id == 'restart') {
        work_time = 25;
        document.getElementById("displayWork").textContent = '25:00'
        rest_time = 5;
        document.getElementById("displayRest").textContent = '5:00'
        clearInterval(countdown);
        clearInterval(countdown2);
        document.getElementById("bottomDisplay").textContent = '25:00'

        play_switch = 'on';
    }

    else if (button.id == 'pause'){
        if(play_switch=='on'){ return }
        pause_switch = 'off';
        clearInterval(countdown);
        clearInterval(countdown2);
        
        if(minutes <=0){return}
        
        else{
        document.getElementById("bottomDisplay").textContent = minutes + ':' + seconds
        }
    }

    else if(button.id = 'stop'){
        if(stop_switch=='on'){ return }
        else{
        
        work_time = work_time/60;
        document.getElementById("displayWork").textContent = work_time + ':00'
        rest_time = rest_time/60;
        document.getElementById("displayRest").textContent = rest_time + ':00'
        clearInterval(countdown);
        clearInterval(countdown2);

            if(document.getElementById("status").textContent == 'REST TIME'){
            document.getElementById("bottomDisplay").textContent = rest_time + ':00'
            }
            else{
            document.getElementById("bottomDisplay").textContent = work_time + ':00'
            
            }
        play_switch = 'on';
        stop_switch = 'on';

        }
        
        
    }

}
)
})


