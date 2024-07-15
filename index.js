// Examples 1 :

function main(input){
    let [prob, price, pay] = input.split(' ').map(Number);


    let output = (prob * price ) > pay;

    console.log(output ? "true" : "false")
}

main("0.2 50 9");