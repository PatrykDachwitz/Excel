import {cellCompartment, getDetailCell, isCell, summaryBetweenCell} from "@/js/Calculator/cellCompartment";
import {selectCell} from "@/js/selectCell";
import {checkIsInt} from "@/js/Calculator/primaryFunction";



export function isCompartment(value) {
    return value.indexOf(":") >= 0
}

export function sum(value) {
    const values = value.split(";");
    let result = 0;
    let resultError = false;
    values.forEach(element => {
        if (checkIsInt(element)) {
            result += parseInt(element);
        } else {
            if (isCompartment(element)) {
                const cells = cellCompartment(element);
                result += summaryBetweenCell(cells);
            } else if (isCell(element)) {
                const cellDetail = getDetailCell(element);
                result += parseInt(selectCell(cellDetail.row, cellDetail.column).input.value);
            } else {
                resultError = true
            }
        }

    })

    if (!resultError) return result;
    else return NaN;
}
