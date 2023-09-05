<script setup>
import { ref } from 'vue';
import HeaderColumn from "@/components/HeaderColumn.vue";
import Cell from "@/components/Cell.vue";
import {getNameColumn} from "@/js/updateSpreadSheet";

const cells = ref([
  1,
  1,
  1,
  1,
  1,
  1,
  1,
]);

const nameColumns = ref(null)
nameColumns.value = getNameColumn();
</script>

<template>
  <div class="d-flex flex-column"
       v-for="nameColumn in nameColumns"
  >
    <HeaderColumn
        :name="nameColumn"
    />
    <Cell
        v-for="(cell, index) in cells"
        :cell="cell"
        :column="nameColumn"
        :row="index"
    />
  </div>
</template>

<style scoped>

</style>