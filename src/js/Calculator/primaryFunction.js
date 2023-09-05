import {selectCell} from "@/js/selectCell";

export function valueOnCell(row, column) {
    const valueInput = selectCell(row, column).input.value;

    return parseInt(valueInput);
}
export function checkIsInt(value) {
    const testValue = parseInt(value);

    return testValue == value;
}

export function getNamesFunction() {
    return [
        "=sum"
    ];
}



export function prepareNameFunction(value) {

    const array = value.split('(');
    return array[0];
}

export function valueBetweenBracket(value) {
    let separate = value.split("(");
    separate.splice(0,1);
    separate = separate.join("(");
    separate = separate.split(")");
    separate.splice(separate.length - 1,1);
    separate = separate.join(")");

    return separate;
}
export function isFunctionExcel(value) {
    return false;
}
export function isSetBracket(value) {
    return value.indexOf("(") || value.indexOf(")");
}

export function inArray(value) {
    const valuePrepare = prepareNameFunction(value);
    let resultVerification = false;
    let namesFunction = getNamesFunction();

    namesFunction.forEach(nameFunction => {
        if (nameFunction == valuePrepare) {
            resultVerification = true;
        }
    })

    return resultVerification;
}



export function verificationFunctionOrValue(value) {
    if (inArray(value) || value[0] == "=") {
        return true;
    } else {
        return false;
    }
}