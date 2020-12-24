// A switch statement test a value and can have many case statements which define various possible values 
function caseInSwitch(val){
    var answer = "";
    switch(val) {
        case 1: 
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "another greek alphabet";
            break;
        // the default option is used when none of the conditions are met. 

    }
    return answer
}
console.log(caseInSwitch(2))

/* function isLess(a,b){
    return a < b;
}
console.log(isLess(10, 15)); */