// code your solution here
function saturdayFun(){
    return "This Saturday, I want to"
}
function saturdayFun(activity= "roller-skate"){
return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office"){

   return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrapper="*"){
    const innerFunction = function(adjective = "a hard worker"){ 
        return `You are ${wrapper}${adjective}${wrapper}!`;
    }
    return innerFunction
}
wrapAdjective("||")("a dedicated programmer");