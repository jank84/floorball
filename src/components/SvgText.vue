<template>
    <text
    style="font-style:normal;font-size:1.4em;line-height:1.25;font-family:sans-serif;fill:#000000;"
    :x="x"
    :y="y"
    >{{text}}</text>
</template>

<script setup lang="ts">

interface Props {
  x: number
  y: number
  text: string
}
const props = defineProps<Props>()

</script>