import {chargeBorderColor, selectCell} from "@/js/selectCell";
import {getNameColumn} from "@/js/updateSpreadSheet";


export function checkParagraph(row, column) {
    let activeCell = getActiveCell();
    let selectedCell = selectCell(row, column);
    chargeBorderColor(row, column, "red");
    changeSelectedParagraphClass(selectedCell.pValue);

    if (activeCell.dataset.checkCell === undefined) {
        activeCell.dataset.checkCell = '' + row + column;
    } else {
        activeCell.dataset.checkCell += '' + row + column;
    }

}
function changeSelectedParagraphClass(paragraph) {
    const activeParagraph = lastCheckParagraph();
    if (activeParagraph !== paragraph && activeParagraph === null) {
        paragraph.classList.add('checkParagraph');
    } else if(activeParagraph !== null) {
        activeParagraph.classList.remove('checkParagraph');
        paragraph.classList.add('checkParagraph');
    }

}
export function checkRowColumnCurrentCell(row, column) {
    const checkParagraph = lastCheckParagraph();

    if (checkParagraph !== null) {
        if (parseInt(checkParagraph.dataset.row) === parseInt(row)) {
            changeBorderColorRow(row, column, checkParagraph.dataset.column)
        } else if(checkParagraph.dataset.column === column) {
            changeBorderColorColumn(column, row, checkParagraph.dataset.row)
        }
    }

}

function changeBorderColorRow(row, columnNewCell, columnCurrentCell) {
    const colorCell = selectCell(row, columnCurrentCell).pValue.style.borderColor;
    getColumnWanted(row, columnNewCell, columnCurrentCell, colorCell);

}
function changeBorderColorColumn(column, rowNewCell, rowCurrentCell) {
    const colorCell = selectCell(rowCurrentCell, column).pValue.style.borderColor;
    getRowWanted(column, rowNewCell, rowCurrentCell, colorCell);

}
function getColumnWanted(row, columnLast, columnFirst, color) {
    const nameColumn = getNameColumn();

    let firstColumn = nameColumn.indexOf(columnFirst);
    let lastColumn = nameColumn.indexOf(columnLast);

    if (lastColumn > firstColumn) {
        for (let i = firstColumn; i < nameColumn.length; i++) {
            if (nameColumn[i] !== columnLast) {
                chargeBorderColor(row, nameColumn[i], color)
            } else if(nameColumn[i] === columnLast) {
                chargeBorderColor(row, nameColumn[i], color)
                break;
            }
        }
    } else if (lastColumn < firstColumn) {
        for (let i = lastColumn; i >= 0; i--) {
            if (nameColumn[i] !== columnLast) {
                chargeBorderColor(row, nameColumn[i], color)
            } else if(nameColumn[i] === columnLast) {
                chargeBorderColor(row, nameColumn[i], color)
                break;
            }
        }
    }

}

function getRowWanted(column, rowNewCell, rowCurrentCell, color) {

    if (rowCurrentCell > rowNewCell) {
        for (let i = rowNewCell; rowCurrentCell > i; i++) {
            console.log("i:" + i)
            chargeBorderColor(i, column, color)
        }
    } else if (rowCurrentCell < rowNewCell) {
        for (let i = rowCurrentCell; i <= rowNewCell; i++) {
            chargeBorderColor(i, column, color)
        }
    }

}
function lastCheckParagraph() {
    return document.querySelector('p.checkParagraph');
}

function getActiveCell() {
    return document.querySelector('.activeCell');
}