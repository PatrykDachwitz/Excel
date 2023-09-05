
function newSizeCalculated(actualSize, changeValue, minAvailableSize) {
    let newSize = parseInt(actualSize) + parseInt(changeValue);

    if (newSize >= minAvailableSize) {
        return(newSize + "px")
    } else {
        return(actualSize + "px");
    }
}
function changeHeight(cell, difference) {

    const height = newSizeCalculated(
        cell[0].style.height,
        difference,
        "30"
    );

    cell.forEach(item => {
        item.style.height = height;
    })
}

function changeWidth(cell, difference) {

    const width = newSizeCalculated(
        cell[0].style.width,
        difference,
        "100"
    );

    cell.forEach(item => {
        item.style.width = width;
    })
}
function getCellsRow(row) {
    return document.querySelectorAll("div[data-row='" + row + "']");
}
function addInformationAboutChangeSizeRow(row) {
    const cellsRow = getCellsRow(row);

    cellsRow.forEach(cell => {
        cell.dataset.activeChangeRow = "true";
    });
}
function getActiveRow() {
    return document.querySelectorAll("div[data-active-change-row='true']");
}

function getActiveColumn() {
    return document.querySelectorAll("div[data-active-change-column='true']");
}
function changeHeightInRow(e) {
    const cellRowsDiv = getActiveRow();

    if ( cellRowsDiv[0].dataset.height === undefined ) {
        cellRowsDiv[0].dataset.height = e.pageY;
    }

    changeHeight(cellRowsDiv, e.pageY - cellRowsDiv[0].dataset.height)

    cellRowsDiv[0].dataset.height = e.pageY;
}
function changeWidthInColumn(e) {
    const cellColumnDiv = getActiveColumn();

    if ( cellColumnDiv[0].dataset.width === undefined ) {
        cellColumnDiv[0].dataset.width = e.pageX;
    }

    changeWidth(cellColumnDiv, e.pageX - cellColumnDiv[0].dataset.width)

    cellColumnDiv[0].dataset.width = e.pageX;
}

function clearInformationAboutChangeSizeRow(row) {
    const cellsRow = getCellsRow(row);

    cellsRow[0].removeAttribute('data-height');

    cellsRow.forEach(cell => {
        cell.removeAttribute('data-active-change-row');
    });
}
function clearInformationAboutChangeSizeColumn(column) {
    const cellsColumn = getCellsColumn(column);

    cellsColumn[0].removeAttribute('data-width');

    cellsColumn.forEach(cell => {
        cell.removeAttribute('data-active-change-column');
    });
}

export function stopChangeHeightRow(row) {
    clearInformationAboutChangeSizeRow(row);

    window.removeEventListener('mousemove', changeHeightInRow);
}

export function startChangeHeightRow(row) {
    addInformationAboutChangeSizeRow(row);

    window.addEventListener('mousemove', changeHeightInRow);
}

export function stopChangeWidthColumn(column) {
    clearInformationAboutChangeSizeColumn(column);

    window.removeEventListener('mousemove', changeWidthInColumn);
}

function getCellsColumn(column) {
    return document.querySelectorAll("div[data-column='" + column + "']");
}
function addInformationAboutChangeSizeColumn(column) {
    const cellsColumn = getCellsColumn(column);

    cellsColumn.forEach(cell => {
        cell.dataset.activeChangeColumn = "true";
    });
}

export function startChangeWidthColumn(column) {
    addInformationAboutChangeSizeColumn(column);

    window.addEventListener('mousemove', changeWidthInColumn);
}