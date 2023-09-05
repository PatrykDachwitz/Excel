import {getNameColumn} from "@/js/updateSpreadSheet";

function getDetailCell(cell) {

    let rowName = parseInt(cell);
    let columnName = cell.split(rowName)[1]

    return {
        row: rowName,
        column: columnName
    };
}
function getColumnsNameOnCompartment(firstColumn, secondColumn) {
    const nameColumn = getNameColumn();
    const firstName = nameColumn.indexOf(firstColumn);
    const secondName = nameColumn.indexOf(secondColumn);

    const namesAvailableColumn = [
        firstColumn
    ];

    if (firstName > secondName) {
        for (let i = (secondName + 1); firstName > i; i++) {
            namesAvailableColumn.push(nameColumn[i]);
        }
    } else if (firstName < secondName) {
        for (let i = (firstName + 1); i < secondName; i++) {
            namesAvailableColumn.push(nameColumn[i]);
        }
    }

    namesAvailableColumn.push(secondColumn);

    return namesAvailableColumn;
}
function calculateCellInRow(column, rowFirst, rowSecond) {
    const finalCells = [];

    if (rowFirst > rowSecond) {
        for (let i = rowSecond; rowFirst >= i; i++) {
            finalCells.push({
                row: i,
                column: column
            })
        }
    } else if(rowFirst < rowSecond) {
        for (let i = rowFirst; i <= rowSecond; i++) {
            console.log('test')
            finalCells.push({
                row: i,
                column: column
            })
        }
    }

    return finalCells;
}

function calculateCellInColumn(row, columnFirst, columnSecond) {
    const finalCells = [];
    const nameColumn = getNameColumn();

    let firstValueColumn = nameColumn.indexOf(columnFirst);
    let secondValueColumn = nameColumn.indexOf(columnSecond);
    if (firstValueColumn > secondValueColumn) {
        let helpVar = secondValueColumn;
        firstValueColumn = secondValueColumn;
        secondValueColumn = helpVar;
    }


    for (let i = firstValueColumn; i <= secondValueColumn; i++) {
        finalCells.push({
            row: row,
            column: nameColumn[i]
        })
    }
    return finalCells;
}
export function cellCompartment(cells) {
    const compartment = cells.split(":");
    const firstCell = getDetailCell(compartment[0]);
    const secondCell = getDetailCell(compartment[1]);
    let finalCells = [];

    if (firstCell.row === secondCell.row) {
        const columnOnCompartment = calculateCellInColumn(firstCell.row, firstCell.column, secondCell.column);
        finalCells = finalCells.concat(columnOnCompartment);
    } else if (firstCell.column === secondCell.column) {
        const columnOnCompartment = calculateCellInRow(firstCell.column, firstCell.row, secondCell.row);
        finalCells = finalCells.concat(columnOnCompartment);
    } else {
        const availableColumnName = getColumnsNameOnCompartment(firstCell.column, secondCell.column);

        console.log(availableColumnName)
        availableColumnName.forEach((nameColumn) => {
            let columnOnCompartment = calculateCellInRow(nameColumn, firstCell.row, secondCell.row);
            console.log(columnOnCompartment)
            finalCells = finalCells.concat(columnOnCompartment);
        });
    }

    return finalCells;
}
