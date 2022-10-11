// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(em) {
    return function(adj) {
        return `You are ${em}${adj}${em}!`
    }
}
console.log(wrapAdjective('!')('yo'));