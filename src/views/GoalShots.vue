<template>
    <!-- <div>
      DEBUG TEXT: {{debug_text}}
    </div> -->
    <svg width="80%" height="100%" viewBox="0 -20 737 403" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;"
      @mousedown="startMove"
      @touchstart.prevent="startMove"
      @mouseup="stopMove"
      @touchend.prevent="stopMove"
    >
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

      <SvgGoalShot :line="line" :goal_shot_marker="goal_shot_marker" :goal_shot_color="goal_shot_color"/>

      <!-- menue arrow tip -->
      <marker
          style="overflow:visible"
          id="TriangleOutM"
          refX="0.0"
          refY="0.0"
          orient="auto">
        <path
            transform="scale(0.5)"
            style="fill-rule:evenodd;fill:context-stroke;stroke:context-stroke;stroke-width:1.0pt"
            d="M 6,0.0 L -3,5.0 L -3,-5.0 L 6,0.0 z "
            id="path1307" />
      </marker>
      <!-- menue arrow line -->
      <path
          style="stroke-width:15;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:20.66,5.165;stroke-dashoffset:0;stroke-opacity:1;marker-end:url(#TriangleOutM)"
          :d="`M ${menu_line.start_x}, ${menu_line.start_y} ${menu_line.end_x}, ${menu_line.end_y}`"
          id="menu_line"
          sodipodi:nodetypes="cc" />

      <!-- Big corner action symbol -->
      <text
        style="font-size:22px;font-family:sans-serif;fill:#000000;fill-opacity:1;"
        x=".2em"
        y=".2em"
        >{{goal_shot_marker}} {{big_corner_text}}</text>

      <!-- menue arrow tip action symbol-->
      <!-- <text
        style="font-style:normal;font-weight:normal;font-size:42px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
        :x="menu_line.end_x-20"
        :y="menu_line.end_y-40"
        >{{goal_shot_marker}}</text> -->

      <!-- menue arrow tip text-->
      <!-- <text
        style="font-size:12px;fill:#000000;fill-opacity:1;"
        :x="menu_line.end_x-20"
        :y="menu_line.end_y-40"
        >{{menu_text}}</text> -->

      </svg>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import { goal_line_colors, Field_side_shot, Line, Direction, Goal_shot_outcome, goal_icons } from "@/utils"
import type { Goal_shot } from "@/utils"
import { use_goal_shot_store } from "@/stores/goal_shots";
import SvgGoalShot from "@/components/SvgGoalShot.vue";
const goal_shot_store = use_goal_shot_store()


// ###### init start ######

// inferred type: Ref<Field_side_shot>
let field_side_shot = ref(null);
const circle_pos = ref({
  cx: 0,
  cy: 0,
  r: 8,
});
// inferred type: Ref<Line>
const line = ref({
  start_x: 0,
  start_y: 0,
  end_x: 0,
  end_y: 0,
});
// inferred type: Ref<Line>
const menu_line = ref({
  start_x: 0,
  start_y: 0,
  end_x: 0,
  end_y: 0,
});

let menu_text = ref("")
let debug_text = ref("")
let goal_shot_marker = ref("")
let goal_shot_color = ref("grey")
let big_corner_text = ref("")

const graphSize = ref(100);


const gate_pos_right = { x: 680, y: 190,};
const gate_pos_left = { x: 60, y: 190,};

set_menue_offscreen()
// ###### init end ######

const graphPos = computed(() => {
  const size = graphSize.value;
  const half = size / 2;
  return {
    viewBox: [-half, -half, size, size].join(" "),
    width: size,
  };
})



function startMove(evt) {
  const touch = evt.type === "touchstart";
  if (!touch && evt.button !== 0) return;
  const events = touch
    ? {
        move: "touchmove",
        stop: "touchend",
      }
    : {
        move: "mousemove",
        stop: "mouseup",
      };
  const elem = evt.currentTarget.closest("svg");

  const transform = elem.getScreenCTM().inverse();
  const getPos = touch ? getTouchPos : getMousePos;

  let moving : boolean = true;
  let newPt;

  // set goal shot point
  const point = elem.createSVGPoint();
  // new value is assigned to point due to svg method restriction
  getPos(evt, point)
  newPt = point.matrixTransform(transform);
  circle_pos.value.cx = newPt.x;
  circle_pos.value.cy = newPt.y;
  line.value.start_y = 190
  line.value.end_x = newPt.x;
  line.value.end_y = newPt.y;

  // right or left field
  if (newPt.x > 370) {
    // console.log("right")
    line.value.start_x = gate_pos_right.x
    field_side_shot.value = Field_side_shot.Right
    } else {
    // console.log("left")
    line.value.start_x = gate_pos_left.x
    field_side_shot.value = Field_side_shot.Left
  }
  menu_line.value.start_x = newPt.x;
  menu_line.value.start_y = newPt.y;

  const updateFn = () => {
    if (moving) requestAnimationFrame(updateFn);
    if (!moving) return
    // Map the screen pixels back to svg coords
    newPt = point.matrixTransform(transform);
    // menu arrow position
    menu_line.value.end_x = newPt.x;
    menu_line.value.end_y = newPt.y;

    // calc action
    const menue_direction = calc_menue_action(menu_line.value)
    const menue_action = get_menue_action(menue_direction);
    goal_shot_marker.value = goal_icons[Goal_shot_outcome[menue_action]]
    goal_shot_color.value = goal_line_colors[Goal_shot_outcome[menue_action]]

    switch (Goal_shot_outcome[menue_action]) {
      case Goal_shot_outcome[Goal_shot_outcome.Scored]:
        // big_corner_text.value = "Torschuss Erfolg"
        big_corner_text.value = "goal successfull"
        break;
      case Goal_shot_outcome[Goal_shot_outcome.Block_goalkeeper]:
        // big_corner_text.value = "Block Torhüter"
        big_corner_text.value = "Block goal keeper"
        break;
      case Goal_shot_outcome[Goal_shot_outcome.Block_player]:
        // big_corner_text.value = "Block Spieler"
        big_corner_text.value = "Block player"
        break;
      case Goal_shot_outcome[Goal_shot_outcome.Miss]:
        // big_corner_text.value = "Tor verfehlt"
        big_corner_text.value = "goal missed"
        break;
      default:
        console.error("Unbekanntes Goal_shot_outcome")
        break;
    }

  };
  const moveFn = (evt) => getPos(evt, point);
  const stopFn = () => {
    moving = false;
    elem.removeEventListener(events.move, moveFn);
    elem.removeEventListener(events.stop, stopFn);
  };

  requestAnimationFrame(updateFn);
  moveFn(evt);

  elem.addEventListener(events.move, moveFn);
  elem.addEventListener(events.stop, stopFn);
}

function stopMove(evt) {
  // console.log(`Menue line: (${menu_line.value.start_x},${menu_line.value.start_y}) --> (${menu_line.value.end_x},${menu_line.value.end_y})`)
  const menue_direction = calc_menue_action(menu_line.value)
  const menue_action = get_menue_action(menue_direction);

  const goal_shot: Goal_shot = {
    team: field_side_shot.value,
    kind: menue_action,
    x: Math.round(line.value.end_x),
    y:  Math.round(line.value.end_y),
    timestamp: new Date()
  }

  goal_shot_store.$state.last_goal_shot_data = goal_shot
  goal_shot_store.$state.goal_shot_data.push(goal_shot)
  
  // menu_text.value = "🧡"+JSON.stringify(goal_shot_store.$state.last_goal_shot_data, null, 2)
  // debug_text.value = `${goal_shot_store.$state.last_goal_shot_data.x},${goal_shot_store.$state.last_goal_shot_data.y}`

  goal_shot_marker.value = goal_icons[Goal_shot_outcome[menue_action]]
  goal_shot_color.value = goal_line_colors[Goal_shot_outcome[menue_action]]

  set_menue_offscreen()
}

function getMousePos(mouseEvent, point) {
  point.x = mouseEvent.clientX;
  point.y = mouseEvent.clientY;
}

function getTouchPos(touchEvent, point) {
  point.x = touchEvent.touches[0].clientX;
  point.y = touchEvent.touches[0].clientY;
}



function calc_menue_action(line: Line) : Direction {
  const x_dist = line.end_x - line.start_x
  const y_dist = line.end_y - line.start_y

  // console.log("x_dist: ", x_dist)
  // console.log("y_dist: ", y_dist)

    // more x movement than y movement
    if ( Math.abs(x_dist) > Math.abs(y_dist)) {
      return x_dist > 0 ?  Direction.Right : Direction.Left
    } else {
      return y_dist > 0 ?  Direction.Down : Direction.Up
    }
}

function set_menue_offscreen() {
  menu_line.value.start_x = -200;
  menu_line.value.start_y = -200;
  menu_line.value.end_x = -200;
  menu_line.value.end_y = -200;
  field_side_shot.value = null
}


function get_menue_action(menue_direction: Direction): Goal_shot_outcome {
  switch (menue_direction) {
    case Direction.Up:
      return Goal_shot_outcome.Scored
      break;
    case Direction.Down:
      return Goal_shot_outcome.Block_player
      break;
    case Direction.Left: // depending on play side
      if (field_side_shot.value == Field_side_shot.Left) {
        return Goal_shot_outcome.Block_goalkeeper
      } else {
        return Goal_shot_outcome.Miss
      }
      break;
    case Direction.Right:
      if (field_side_shot.value == Field_side_shot.Right) {
        return Goal_shot_outcome.Block_goalkeeper
      } else {
        return Goal_shot_outcome.Miss
      }
      break;
    default:
      console.error("goal menue direction error:", menue_direction);
      return
      break;
  }
}

</script>

<style>
/* .graph {
  background-color: #222;
  width: 100%;
  height: 100%;
} */
#gate_line {
  fill:none;
  stroke: grey;
}
#TriangleOutM {
  fill:#5527e1;
  stroke:#5527e1;
}
#menu_line {
  fill:none;
  stroke:#5527e1;
}
.pointer {
  fill: #5527e1;
  cursor: pointer;
}
</style>
