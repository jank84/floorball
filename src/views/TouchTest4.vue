<template>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg width="100%" height="100%" viewBox="0 0 737 383" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;"
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

        <!-- dotted red line to gate -->
        <path
          style="fill:none;stroke:#FF0000;stroke-width:.2em;stroke-linecap:butt;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:5,2;"
          :d="`M ${line.start_x}, ${line.start_y} ${line.end_x}, ${line.end_y}`"
          id="path857" />
          <!-- Touch start point -->
        <circle
        class="pointer"
        v-bind="circle_pos"
      ></circle>



              <path
          style="fill:none;stroke:#FF0000;stroke-width:.2em;stroke-linecap:butt;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:5,2;"
          :d="`M ${menu_line.start_x}, ${menu_line.start_y} ${menu_line.end_x}, ${menu_line.end_y}`"
          id="path857" />

  <!-- <defs
     id="defs2">
    <marker
       style="overflow:visible"
       id="TriangleInL"
       refX="0.0"
       refY="0.0"
       orient="auto"
       inkscape:stockid="TriangleInL"
       inkscape:isstock="true">
      <path
         transform="scale(-0.8)"
         style="fill-rule:evenodd;fill:context-stroke;stroke:context-stroke;stroke-width:1.0pt"
         d="M 5.77,0.0 L -2.88,5.0 L -2.88,-5.0 L 5.77,0.0 z "
         id="path6384" />
    </marker>
  </defs>
  <g
     inkscape:label="Ebene 1"
     inkscape:groupmode="layer"
     id="layer1">
    <path
       style="fill:#00ff00;stroke:#00ff00;stroke-width:0.965;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.4825, 0.4825;stroke-dashoffset:0;stroke-opacity:1;marker-start:url(#TriangleInL)"
       d="M 76.716492,87.943299 59.876288,88.963917"
       id="path857"
       sodipodi:nodetypes="cc" />
  </g> -->

    </svg>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue"

const count = ref(0);
const circle_pos = ref({
  cx: 270,
  cy: 150,
  r: 8,
});
const line = ref({
  start_x: 60,
  start_y: 190,
  end_x: 270,
  end_y: 150,
});
const menu_line = ref({
  start_x: 60,
  start_y: 190,
  end_x: 270,
  end_y: 150,
});
const graphSize = ref(100);
const gate_pos_right = { x: 680, y: 190,};
const gate_pos_left = { x: 60, y: 190,};

// const current_gate_pos = ref({x: 10, y: 40})

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})

const graphPos = computed(() => {
  const size = graphSize.value;
  const half = size / 2;
  return {
    viewBox: [-half, -half, size, size].join(" "),
    width: size,
  };
})

function startMove(evt) {
  // console.log("startMove")
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
  // const getPosRet = touch ? getTouchPosRet : getMousePosRet;
  const circle_pos_line = circle_pos.value
  const line_value = line.value
  const menu_line_value = menu_line.value

  let moving : boolean = true;
  let newPt;

  const point = elem.createSVGPoint();
  getPos(evt, point)
  newPt = point.matrixTransform(transform);
  circle_pos_line.cx = newPt.x;
  circle_pos_line.cy = newPt.y;
  line_value.end_x = newPt.x;
  line_value.end_y = newPt.y;
    if (newPt.x > 370) {
    // console.log("right")
    line_value.start_x = gate_pos_right.x 
    } else {
    // console.log("left")
    line_value.start_x = gate_pos_left.x 
  }
  menu_line_value.start_x = newPt.x;
  menu_line_value.start_y = newPt.y;

    // const {x: start_x, y: start_y} = getPosRet(evt)
  
  const updateFn = () => {
    if (moving) requestAnimationFrame(updateFn);
    // console.log("updateFn::point.matrixTransform", point.matrixTransform(transform))

    // Map the screen pixels back to svg coords
    newPt = point.matrixTransform(transform);

    // set only on start
    // circlePosValue.cx = newPt.x;
    // circlePosValue.cy = newPt.y;

    menu_line_value.end_x = newPt.x;
    menu_line_value.end_y = newPt.y;






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
  // console.log("stopMove::evt", evt)

}

function getMousePos(mouseEvent, point) {
  point.x = mouseEvent.clientX;
  point.y = mouseEvent.clientY;
}

function getMousePosRet(mouseEvent) {
  return { x: mouseEvent.clientX, y: mouseEvent.clientY }
}

function getTouchPos(touchEvent, point) {
  point.x = touchEvent.touches[0].clientX;
  point.y = touchEvent.touches[0].clientY;
}
function getTouchPosRet(touchEvent) {
 return { x: touchEvent.clientX, y: touchEvent.clientY }
}

</script>

<style>
.graph {
  background-color: #222;
  /* width: 600px;
  height: 600px; */
  width: 100%;
  height: 100%;
}
.pointer {
  fill: #4356c0;
  cursor: pointer;
}
</style>
