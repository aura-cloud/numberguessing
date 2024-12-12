const minA=1;
const maxA=100;
constanswer=(Math.floor(Math.random() * (maxA-minA+1))+minA);
let attempt=0;
let guess;
let running=true;
while(running){
    guess=window.prompt(` guess a number between ${minA}-${maxA}`);
    guess= Number(guess);
    if(isNaN(guess)){
        window.alert("please enter a valid number ");
    }
    else if(guess<minA ||  guess >maxA){
        window.alert("please enter a valid number ");
    }
    else{
        attempt++;
        if (guess<constanswer){
            window.alert("Too low! try again");
        }
        else if(guess> constanswer){
           window.alert("too high"); 
        }
        else{
            window.alert (`correct answer was ${ answer} .It took you${attempt} attempt`)
            running=false;
        }

        
    }
    
    
}

