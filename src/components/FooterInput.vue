<script setup>
import templateFactory from "bootstrap/js/src/util/template-factory";

defineProps([
  'name',
  'idSheet'
]);


function getAllActiveSheet() {
  return document.querySelector("div.activeSheet");
}
function isActiveGoodSheet(idSheet) {
  const actualActiveSheet = getAllActiveSheet();

  if (actualActiveSheet.dataset.idSheet == idSheet) {
    return true;
  } else {
     return false;
  }
}

function disabledActualActiveSheet() {
  const actualActiveSheet = getAllActiveSheet();

  actualActiveSheet.classList.remove('activeSheet');
  actualActiveSheet.classList.add("d-none");
}

function getSheetById(id) {
  return document.querySelector('div[data-id-sheet="' + id + '"]');
}

function activeSheetById(id) {
  const sheet = getSheetById(id);

  sheet.classList.remove('d-none');
  sheet.classList.add('activeSheet');
}

function activeSpreadsheet(idSheet) {
  if (!isActiveGoodSheet(idSheet)) {
    disabledActualActiveSheet();
    activeSheetById(idSheet);
  }

}
</script>

<template>
  <input
      class="spredsheetInput fs-6 fw-bold"
      :value="name"
      :data-id-sheet="idSheet"
      @dblclick="activeSpreadsheet(idSheet)"
  />
</template>

<style scoped>

input {
  width: 100px;
  margin: 0px 3px;
  border: none;
  border-bottom: 2px solid #A6A6A6;
  background-color: rgb(241 241 241);
}

input:focus {
  outline: none;
}

</style>