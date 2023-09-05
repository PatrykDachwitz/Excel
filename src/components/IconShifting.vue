<script setup>
import { ref } from 'vue';

const testValue = ref(null)

/*
document.querySelector(".testPAsek").clientWidth

 */

function getSizeContainer() {
  return document.querySelector(".spreadsheet-name-container--secondary")
      .clientWidth;
}
function getSizeContainerMain() {
  return document.querySelector(".spreadsheet-name-container")
      .clientWidth;
}

function getContainerSpreadsheet() {
  return document.querySelector(".spreadsheet-name-container--secondary");
}

function verificationMaxSize(difference) {
  const maxSizeContainerMain = getSizeContainerMain();
  const maxSizeContainerSecondary = getSizeContainer();

  const differenceContainer = maxSizeContainerSecondary + difference;


  if (differenceContainer <= maxSizeContainerMain) {
    const maxShifting = maxSizeContainerSecondary - maxSizeContainerMain;

    return ("-" + maxShifting);
  } else {
    return difference;
  }
}
function calculateShifting(difference) {
  const container = getContainerSpreadsheet();
  const actualShifting = parseInt(container.style.left);
  let newShiftingValue = actualShifting + parseInt(difference);

  newShiftingValue = verificationMaxSize(newShiftingValue);

  if (newShiftingValue < 0) {
    return newShiftingValue;
  } else {
    return 0;
  }
}

function isSetShifting() {
  return getContainerSpreadsheet().style.left !== ""
}
function shiftingContainer(difference) {
  const container = getContainerSpreadsheet();

  container.style.left = difference + "px";
}
function changePosition(difference) {

  if (isSetShifting()) {
    let differenceNew = calculateShifting(difference);

    shiftingContainer(differenceNew);
  } else {
    if (difference < 0) {
      shiftingContainer(difference);
    }
  }
}

function startChangeSize(difference) {
  testValue.value = setInterval(() => {
    changePosition(difference);
  }, 30);


}

function stopChangeSize() {
  clearInterval(testValue.value);
}

</script>

<template>
  <div>
    <img
        class="left-rotate"
        src="@/icon/right-arrow.png"
        width="15"
        height="15"
        @mousedown="startChangeSize(-2)"
        @mouseup="stopChangeSize"
        @pointerleave="stopChangeSize"
    />
    <img
        src="@/icon/right-arrow.png"
        width="15"
        height="15"
        @mousedown="startChangeSize(2)"
        @mouseup="stopChangeSize"
        @pointerleave="stopChangeSize"
    />
  </div>
</template>

<style scoped>

div {
  justify-content: center;
  width: 44px;
  height: 40px;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 50;
  right: 0px;
}
img {
  cursor: pointer;
}
img.left-rotate {
  margin-right: 4px;
  transform: rotateY(180deg);
}

</style>