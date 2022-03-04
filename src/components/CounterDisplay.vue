<template>
  <div class="block">
    {{counter}}
  </div>
</template>

<script setup lang="ts">
interface Props {
  counter: number
}
const props = defineProps<Props>()
</script>

<style scoped>
.block {
  /* width:60%; */
  border-radius: 20px;
  /* background: teal; */
  color: black;
  text-align: center;
  padding: .1em 0;
  margin: .1em auto;
  font-size: 5em;
  font-family: sans-serif;
}
</style>