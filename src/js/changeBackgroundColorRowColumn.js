const rgb = "rgb(165 165 165)";

function clearBackgroundColorRow() {
    const headersRow = document.querySelectorAll('div.activeCell[data-row]');

    headersRow.forEach(header => {
        header.classList.remove('activeCell');
        header.style.backgroundColor = null;
    })
}
function clearBackgroundColorColumn() {
    const headersColumn = document.querySelectorAll('div.activeCell[data-column]');

    headersColumn.forEach(header => {
        header.classList.remove('activeCell');
        header.style.backgroundColor = null;
    })
}

function changeBackgroundColorRow(row) {
    const rowSelect = document.querySelector('div[data-row="' + row + '"]');

    rowSelect.classList.add('activeCell');
    rowSelect.style.backgroundColor = rgb;
}
function changeBackgroundColorColumn(column) {
    const columnSelect = document.querySelector('div[data-column="' + column + '"]');

    columnSelect.classList.add('activeCell');
    columnSelect.style.backgroundColor = rgb;
}

function clearBackgroundColorOther() {
    clearBackgroundColorRow();
    clearBackgroundColorColumn();
}
export function changeBackgroundColor(row, column) {
    clearBackgroundColorOther();
    changeBackgroundColorRow(row);
    changeBackgroundColorColumn(column);
}