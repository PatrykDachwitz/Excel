import { changeOutValue, changeOnValue } from "@/js/changeValueCell";
import { selectCell } from "@/js/selectCell";
import { disabledInfoFunction } from "@/js/createInfoFunction";
import { createInfoFunction } from "@/js/createInfoFunction";

export function focusOutCell(row, column) {
    const selectedCell = selectCell(row, column);
    const selectedInput = selectedCell.input;

    changeOutValue(selectedInput, selectedCell.pValue);
    disabledInfoFunction(selectedInput);
}

export function focusOnCell(row, column) {
    const selectedCell = selectCell(row, column);
    changeOnValue(selectedCell.input, selectedCell.container);
    createInfoFunction(row, column);

}
