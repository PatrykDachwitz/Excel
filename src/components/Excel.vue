<script setup>

import Footer from "@/components/Footer.vue";
import Spreadsheet from "@/components/Spreadsheet.vue";


</script>

<template>
  <div class="applicationExcel">
    <Spreadsheet
        id-sheet="1"
    />
  </div>
  <div class="d-flex p-1 justify-content-start align-items-center spreadSheetBelt">
    <Footer />
  </div>
</template>

<style scoped>

.spreadSheetBelt {
  height: 40px;
  overflow: hidden;
  position: relative;
}
</style>