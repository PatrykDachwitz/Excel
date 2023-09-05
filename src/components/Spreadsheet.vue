<script setup>
import HeaderRow from "@/components/HeaderRow.vue";
import Column from "@/components/Column.vue";

defineProps(['idSheet'])

</script>

<template>
  <div class="d-flex " :data-id-sheet="idSheet">

    <div class="d-flex flex-column text-center">
      <HeaderRow
          name="<"
      />
      <HeaderRow
          v-for="n in 7"
          :name="n"
      />
    </div>
    <Column
    />
  </div>
</template>

<style scoped>

</style>