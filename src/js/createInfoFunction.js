import {selectCell} from "@/js/selectCell";
export function createInfoFunction(row, column) {
    const {
        input: valueActualKeyword,
        container
        } = selectCell(row, column);
    const infoFunctionContainer = document.querySelector('.infoFunctionClass');
    valueActualKeyword.dataset.value = valueActualKeyword.value;
    if (valueActualKeyword.value[0] === "=") {
        container.append(infoFunctionContainer)
        infoFunctionContainer.classList.remove("d-none");
    } else {

        infoFunctionContainer.classList.add("d-none")
    }
}

export function disabledInfoFunction(row, column) {
    const infoFunctionContainer = document.querySelector('.infoFunctionClass');
    const {input, container} = selectCell(row, column);
    infoFunctionContainer.classList.add("d-none");
}