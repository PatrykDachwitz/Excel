<script setup>
import {
  stopChangeWidthColumn,
  startChangeWidthColumn
} from "@/js/resizeCell";

defineProps({
  name: String
})
</script>

<template>
<div
    class="d-flex mainColumnCell"
    style="width: 100px; height: 30px;"
    :data-column="name"
    @mousedown="startChangeWidthColumn(name)"


    @pointerleave="stopChangeWidthColumn(name)"
    @mouseup="stopChangeWidthColumn(name)"
>
  <span
      class="text-center"
  >
  <b>
    {{ name }}
  </b>
</span>
  <div class="changeSize" ></div>
</div>
</template>

<style scoped>

  span {
    flex: 1;
    padding-left: 6px;
  }

  div.mainColumnCell {
    background-color: #E6E6E6;
    border: 1px solid #A6A6A6;
  }

  div.changeSize {
    min-width: 6px;
    cursor: e-resize;
  }
</style>