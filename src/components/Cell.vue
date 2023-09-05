<script setup>
import { focusOutCell, focusOnCell } from '@/js/focusCell';
import { validationsCellKeyUp, validationsCellKeyDown } from "@/js/validationsCell";
import {checkParagraph, checkRowColumnCurrentCell} from "@/js/paragraphFunctions";

defineProps([
  'cell',
  'column',
  'row'
]);

</script>

<template>
<div
class="position-relative"
:data-row="row + 1"
:data-column="column"
style="width: 100px;height: 30px"
>
  <p
  class="cell m-0 fs-6 d-none"
  :data-row="row + 1"
  :data-column="column"
  @click="checkParagraph((row + 1), column)"
  @mousemove="checkRowColumnCurrentCell(row+1, column)"
  >
    {{ cell }}

  </p>
  <input
      class="cell fs-6"
      :data-row="row + 1"
      :data-column="column"
      :data-value="cell"
      :value="cell"
      @keyup="validationsCellKeyUp(row + 1, column)"
      @keydown="validationsCellKeyDown(row + 1, column)"
      @focusout="focusOutCell(row + 1, column)"
      @focus="focusOnCell(row + 1, column)"

  />
</div>
  <!--
  Trzeba porpawicc cobie

  @click="changeBackgroundColor(row + 1, column);"

        @focusout="focusOutCell(row + 1, column)"
        @focus="focusOnCell(row + 1, column)"-->
</template>

<style scoped>

input {
  color: red;
}
.cell {
  color: black;
  padding-left: 3px;
  width: 100%;
  height: 100%;
  background-color: #FFF;
  border: 1px solid #A6A6A6;
  border-radius: 0px;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.cell:focus {
  outline: none;
  border: 2px solid #A6A6A6;
  border-radius: 0px;
}
</style>