<script setup>
import { ref, provide } from "vue";
import Spreadsheet from "@/components/Spreadsheet.vue";
import Footer from "@/components/Footer.vue";
import FunctionCell from "@/components/FunctionCell.vue";
import { useFetch } from "@/js/useFetch";
import Excel from "@/components/Excel.vue";
import {selectCell} from "@/js/selectCell";
import {getNameColumn} from "@/js/updateSpreadSheet";
import {calculate} from "@/js/Calculator/calcualte";
const result = ref(null)
const url = ref('http://localhost:5173/spreadsheetTEamplate.json');


const test = "321;23;1A;7H:1A";












</script>

<template>
  <FunctionCell
   class="d-none"
  />
  <excel />
</template>

<style scoped>
</style>
