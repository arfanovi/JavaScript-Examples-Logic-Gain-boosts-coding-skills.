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





// Example 3: 

function main(input){

    let [mass, velocity] = input.split(' ').map(Number);
    let kineticEnergy = 0.5 * mass * velocity * velocity;
    let roundedKE = Math.round(kineticEnergy);

    console.log(roundedKE)
};

main("70.5 12.3")


