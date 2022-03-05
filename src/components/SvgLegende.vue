<template>
  <text
    style="font-style:normal;font-weight:normal;font-size:12px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
    :x="x"
    :y="y"
    >
    <tspan :x="x" dy="1.5em">Hallo SVG</tspan>
    <tspan :x="x" dy="1.5em">Alles absolut</tspan>
    </text>
</template>

<script setup lang="ts">

interface Props {
  x: number
  y: number
}
const props = defineProps<Props>()

</script>