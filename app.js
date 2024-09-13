// function add(num1, num2){return num1+Math.random()};

// console.log(add(9));

function createTaxCalculator(tax){
    return function calculateTax(amount){
        return amount*tax;

    }

}
const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);
// console.log(calculateVatAmount(2000));
// console.log(calculateIncomeTaxAmount(2000));

let userName = 'Max';
function greetUser(){
    //let name = manu;
    console.log('Hi '+name);
}

let name = "kaizz";

// greetUser();

function powerOf(x,n){

    return n ===1 ? x: x * powerOf(x,n-1);
    // if(n===1){
    //     return x;
    // }
    // return x * powerOf(x,n-1);
    

}
console.log(powerOf(2,3));
