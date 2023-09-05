<script setup>
import { inject } from "vue";

const namesFooter = inject('namesFooter');

function addNewFooterInput() {
  namesFooter.value.push('Test 1');
}

</script>

<template>
  <div>
    <img
        class="me-2 ms-1"
        src="../icon/add.png"
        width="20"
        height="20"
        @click="addNewFooterInput"
    />
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  position: absolute;
}
</style>