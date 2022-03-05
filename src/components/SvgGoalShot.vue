<template>
    <!-- dotted red line to gate -->
    <path
      :style="`stroke:${goal_shot_color};stroke-width:.2em;stroke-linecap:butt;stroke-opacity:0.1;stroke-miterlimit:4;stroke-dasharray:5,2;`"
      :d="`M ${line.start_x}, ${line.start_y} ${line.end_x}, ${line.end_y}`"
      id="gate_line" />

    <!-- Goal shot icon -->
    <text
    style="font-style:normal;font-weight:normal;font-size:12px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
    :x="line.end_x-8"
    :y="line.end_y+4"
    >{{goal_shot_marker}}</text>
</template>

<script setup lang="ts">
import { Line } from "@/utils"

interface Props {
  line: Line
  goal_shot_marker: string
  goal_shot_color: string
}
const props = defineProps<Props>()

</script>