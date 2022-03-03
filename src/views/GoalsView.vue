<template>
 <svg width="100%" height="100%" viewBox="-30 0 800 383" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;">
      <g transform="matrix(1,0,0,-1,20,362.939)">
          <path d="M57.158,342.939L639.842,342.939C671.41,342.939 697,317.349 697,285.781L697,57.158C697,25.59 671.41,0 639.842,0L57.158,0C25.59,0 0,25.59 0,57.158L0,285.781C0,317.349 25.59,342.939 57.158,342.939Z" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:0.75px;"/>
      </g>
      <g transform="matrix(0.999968,0.00801656,0.00801656,-0.999968,668.188,214.628)">
          <g>
              <clipPath id="_clip1">
                  <rect x="-1" y="-2" width="20.721" height="4"/>
              </clipPath>
              <g clip-path="url(#_clip1)">
                  <path d="M0,0L18.721,0" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:2px;"/>
              </g>
          </g>
      </g>
      <g transform="matrix(0.00257448,-0.999997,-0.999997,-0.00257448,686.778,214.778)">
          <g>
              <path d="M0,0L50.495,0" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:2px;"/>
          </g>
      </g>
      <g transform="matrix(-0.999968,-0.00801656,-0.00801656,0.999968,686.908,164.358)">
          <g>
              <clipPath id="_clip2">
                  <rect x="-1" y="-2" width="20.721" height="4"/>
              </clipPath>
              <g clip-path="url(#_clip2)">
                  <path d="M0,0L18.721,0" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:2px;"/>
              </g>
          </g>
      </g>
      <g transform="matrix(-0.999968,0.00801656,0.00801656,0.999968,70.4306,214.778)">
          <g>
              <clipPath id="_clip3">
                  <rect x="-1" y="-2" width="20.721" height="4"/>
              </clipPath>
              <g clip-path="url(#_clip3)">
                  <path d="M0,0L18.721,0" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:2px;"/>
              </g>
          </g>
      </g>
      <g transform="matrix(-0.00257448,-0.999997,-0.999997,0.00257448,51.8401,214.928)">
          <g>
              <path d="M0,0L50.495,0" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:2px;"/>
          </g>
      </g>
      <g transform="matrix(0.999968,-0.00801657,-0.00801657,-0.999968,51.7101,164.508)">
          <g>
              <path d="M0,0L18.721,0" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:2px;"/>
          </g>
      </g>
      <g transform="matrix(0,1,1,0,368.749,20)">
          <path d="M0,0L342.939,0" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:2px;"/>
      </g>
      <g transform="matrix(0,1,1,0,70.4307,20)">
          <path d="M0,0L342.483,0" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:0.5px;"/>
      </g>
      <g transform="matrix(0,1,1,0,223.431,20)">
          <path d="M0,0L342.483,0" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:0.5px;"/>
      </g>
      <g transform="matrix(0,1,1,0,667.369,20)">
          <path d="M0,0L342.483,0" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:0.5px;"/>
      </g>
      <g transform="matrix(0,1,1,0,512.818,20)">
          <path d="M0,0L342.483,0" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:0.5px;"/>
      </g>
      <g transform="matrix(1,0,0,-1,69.4307,112.972)">
          <path d="M0,0L597.939,0" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:0.5px;"/>
      </g>
      <g transform="matrix(1,0,0,-1,69.4307,265.663)">
          <path d="M0,0L597.939,0" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:0.5px;"/>
      </g>

      <!--  -->
      <template v-for="(goal_shot, index) in goal_shot_data_formated">
        <SvgGoalShot :line="goal_shot.line" :goal_shot_marker="goal_shot.goal_shot_marker" :goal_shot_color="goal_shot.goal_shot_color"/>
      </template>
      </svg>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { use_goal_shot_store } from "@/stores/goal_shots";
import { goal_line_colors, Field_side_shot, Line, Direction, Goal_shot_outcome, goal_icons } from "@/utils"
import SvgGoalShot from "@/components/SvgGoalShot.vue";

const store = use_goal_shot_store()
const goal_shot_data = store.$state.goal_shot_data

const gate_pos_right = { x: 680, y: 190,};
const gate_pos_left = { x: 60, y: 190,};

const goal_shot_data_formated = goal_shot_data.map(g => {
  return {
    line: {
      start_x: g.team ? gate_pos_right.x : gate_pos_left.x,
      start_y: g.team ? gate_pos_right.y : gate_pos_left.y,
      end_x: g.x,
      end_y: g.y,
    },
    goal_shot_marker: goal_icons[Goal_shot_outcome[g.kind]],
    goal_shot_color: goal_line_colors[Goal_shot_outcome[g.kind]],

  }
})


</script>