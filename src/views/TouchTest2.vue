<template>
  <div class="about">
    foo!
    <!-- https://codepen.io/sirlancelot/pen/NNGYEP -->
    <svg class="graph" v-bind="graphPos"
        @mousedown="startMove"
        @touchstart.prevent="startMove"
    >
    <path
      style="fill:none;stroke:#42b983;stroke-width:.2em;stroke-linecap:butt;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:5,2;"
      d="M 10, 15 138.12371,155.13402"
      id="path857" />
      <circle
        class="pointer"
        v-bind="circlePos"
      ></circle>
    </svg>
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      count: 0,
      circlePos: {
        cx: 0,
        cy: 0,
        r: 8,
      },
      graphSize: 100,
    };
  },
  mounted() {
    // console.log(`The initial count is ${this.count}.`);
  },
  computed: {
    graphPos() {
      var size = this.graphSize;
      var half = size / 2;
      return {
        viewBox: [-half, -half, size, size].join(" "),
        width: size,
      };
    },
  },
  methods: {
    startMove(evt) {
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
      const point = elem.createSVGPoint();
      const transform = elem.getScreenCTM().inverse();
      const circlePos = this.circlePos;
      const getPos = touch ? getTouchPos : getMousePos;

      var moving = true;
      var newPt;

      const updateFn = () => {
        if (moving) requestAnimationFrame(updateFn);

        // Map the screen pixels back to svg coords
        newPt = point.matrixTransform(transform);
        circlePos.cx = newPt.x;
        circlePos.cy = newPt.y;
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
    },
  },
};

function getMousePos(mouseEvent, point) {
  point.x = mouseEvent.clientX;
  point.y = mouseEvent.clientY;
}

function getTouchPos(touchEvent, point) {
  point.x = touchEvent.touches[0].clientX;
  point.y = touchEvent.touches[0].clientY;
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
/* #app {
  width: 600px;
  margin: 0 auto;
} */
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
