<script setup>
import { startChangeHeightRow, stopChangeHeightRow } from "@/js/resizeCell";

defineProps({
  name: Number
})
</script>

<template>
<div
    style="width: 40px; height: 30px;"
    class="text-center d-flex flex-column"
    :data-row="name"
    @pointerleave="stopChangeHeightRow(name)"
    @mousedown="startChangeHeightRow(name)"
    @mouseup="stopChangeHeightRow(name)"
>
  <span class="text d-flex align-items-center">
    <b class="w-100">
    {{ name }}
  </b>
  </span>
  <span class="w-100 changeSize"

  >

  </span>
</div>
</template>

<style scoped>
span {

  min-height: 4px;
}

span.changeSize {
  cursor: n-resize;
}
span.text {
  flex: 1;
  padding-top: 4px;
}
div {
  background-color: #E6E6E6;
  border: 1px solid #A6A6A6;
}
</style>