import {checkIsInt} from "@/js/Calculator/primaryFunction";

export function isStandardArithmeticOperations(value) {
    const standardArithmetics = [
        '/',
        '-',
        '+',
        '*',
        '%'
    ]
}

export function firstArithmeticsOperations(value) {

    return value.indexOf("*") || value.indexOf("/");

}
function searchValue(value) {

}
function getIntegerFromEnd(value) {

}

function getIntegerFromStart(value) {

}

export function calculateBasicOperation(operation, values) {

    let test = values.split(operation);


    console.log(getInteger("12/123"))
    /*let result = 0;
    for (let i = 0; i < test.length; i++) {
        if (checkIsInt(test[i])) {

        }
        if (checkIsInt(test[i+1])) {
            console.log(test[i+1])
        }

        let firstValue = 2;
        let firstValue2 = 12;
        switch (operation) {
            case "/":
               /* console.log("------");
                console.log(firstValue / firstValue2)
                console.log("------");
                result += firstValue/firstValue2;
                break;
        }*/
   // }

    console.log("------");
    console.log("result")
    console.log("------");

    return "tes";
}