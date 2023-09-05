import { inArray, verificationFunctionOrValue} from "@/js/Calculator/primaryFunction";
import { calculate as useFunctionExcel} from "@/js/Calculator/calcualte";

function verificationCloseFunction(value) {
    const array = value.split(')');

    return array[1] === "";
}

function changeFunctionOnValue(value) {
    if (inArray(value) && verificationCloseFunction(value)) {
        return useFunctionExcel(value)
    } else if (value[0] == "=") {
        return value;
    } else {
        return value;
    }
}
export function changeOutValue(input, pValue) {
    const inputValue = input.dataset.value;
    if (verificationFunctionOrValue(inputValue) === true) {
        let finalValue = changeFunctionOnValue(inputValue);
        input.value = finalValue;
        pValue.innerText = finalValue;
    } else {
        pValue.innerText = inputValue;
    }
}

export function changeOnValue(input, container) {
    const inputValue = input.dataset.value;


    if (verificationFunctionOrValue(inputValue) === true) {
        if (container.dataset.checkCell !== undefined) {
            input.value = input.dataset.value + container.dataset.checkCell;
            container.removeAttribute("data-check-cell");
        } else {
            input.value = input.dataset.value;
        }

    }
}