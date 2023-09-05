export function selectCell(row, column) {
    return {
        input: document.querySelector("input[data-row='" + row + "'][data-column='" + column + "']"),
        container: document.querySelector("div[data-row='" + row + "'][data-column='" + column + "']"),
        pValue: document.querySelector("p[data-row='" + row + "'][data-column='" + column + "']"),
    };
}


export function chargeBorderColor(row, column, color) {

    const checkCell = selectCell(row, column);
    checkCell.pValue.style.borderColor = color;
}
export function clearBorderColor(row, column) {
    const checkCell = selectCell(row, column);
    checkCell.pValue.style.borderColor = "";
}