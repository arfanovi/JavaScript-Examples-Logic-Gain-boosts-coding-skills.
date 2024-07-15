// Examples 1 :

function main(input){
    let [prob, price, pay] = input.split(' ').map(Number);


    let output = (prob * price ) > pay;

    console.log(output ? "true" : "false")
}

main("0.2 50 9");





// Example 2:

function main(input) {
    let [minutes, fps] = input.split(' ').map(Number);
    let allFrames = minutes * 60 * fps;
    console.log(allFrames)
};

main("10 30")