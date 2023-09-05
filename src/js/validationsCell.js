import {createInfoFunction, disabledInfoFunction} from "@/js/createInfoFunction";
import {selectCell} from "@/js/selectCell";
import {inArray} from "@/js/changeValueCell";
import {changeBackgroundColor} from "@/js/changeBackgroundColorRowColumn";
export function validationsCellKeyUp(row, column) {
    const selectedCell = selectCell(row, column);
    if (selectedCell.input.value[0] == "=") {
        createInfoFunction(row, column);
        activeParagraph(selectedCell);

    } else {
        disabledInfoFunction(row, column);
       // deactivateParagraph();
    }


}
export function validationsCellKeyDown(row, column) {
    const selectedCell = selectCell(row, column);
    if (selectedCell.input.value == "=") {
        disabledInfoFunction(row, column);
     //   deactivateParagraph();
    }
}


function activeParagraph(cell) {
    const inputs = getAllInput();
    const paragraphs = getAllParagraph();

    inputs.forEach(input => {
        if(input !== cell.input) {
            input.classList.add('d-none');
        } else if(input == cell.input) {
            cell.container.classList.add('activeCell');
        }
    })

    paragraphs.forEach(paragraph => {
        if(paragraph !== cell.pValue) {
            paragraph.classList.remove('d-none');
        }
    })
}
export function deactivateParagraph(cell) {
    const inputs = getAllInput();
    const paragraphs = getAllParagraph();

    inputs.forEach(input => {
        if(input !== cell.input) {
            input.classList.remove('d-none');
        } else if(input !== cell.input) {
            cell.container.classList.remove('activeCell');
        }
    })

    paragraphs.forEach(paragraph => {
        if(paragraph !== cell.pValue) {
            paragraph.classList.add('d-none');
        }
    })
}
function getAllInput() {
    return document.querySelectorAll("input[data-row][data-column]");
}
function getAllParagraph() {
    return document.querySelectorAll("p[data-row][data-column]");
}