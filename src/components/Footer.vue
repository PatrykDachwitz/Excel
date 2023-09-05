<script setup>
import FooterInput from "@/components/FooterInput.vue";
import FooterInputAdd from "@/components/FooterInputAdd.vue";
import { ref, provide } from "vue";
import IconShifting from "@/components/IconShifting.vue";

const namesFooter = ref([
   'test 1',
   'test 2',
   'test 3',
   'test 3',
   'test 3',
   'test 3',
   'test 3',
   'test 3',
   'test 3',
   'test 3'
]);

provide('namesFooter', namesFooter);
</script>

<template>
  <footer-input-add />
  <div class="spreadsheet-name-container">
    <div class="spreadsheet-name-container--secondary">
      <FooterInput
          v-for="(nameFooter, index) in namesFooter"
          :name="nameFooter"
          :id-sheet="index"
      />
    </div>
  </div>

  <icon-shifting />

</template>

<style scoped>
.spreadsheet-name-container--secondary {
  position: relative;
  display: flex;
}
.spreadsheet-name-container{
  margin-left: 40px;
  margin-right: 44px;
  position: relative;
  display: flex;
  overflow: hidden;
}
</style>