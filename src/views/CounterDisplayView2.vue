<template>
    <div class="container">
        <div class="wrapper">
            <div class="team1">
                <div class="team-name">{{ team1_name }}</div>
            </div>
            <div id="chart_neu" ref="chart_neu">
                <div id="chart_neu">
                    <div class="title">
                        <span>Spiel statistik</span>
                        <span v-if="current_display_period < 4">Spielabschnitt {{current_display_period < 3 ? (current_display_period+1) : "OT"}}</span>
                    </div>
                    <svg class="chart" width="500" height="250">
                        <g transform="translate(20,30)">
                            <rect class="bar_back" x="0" y="0" width="460" height="4" rx="0"></rect>
                            <rect class="bar_back" x="0" y="40" width="460" height="4" rx="0"></rect>
                            <text class="label" x="230" y="-10">Pässe</text>
                            <text class="label" x="230" y="30">Pässe fehler</text>
                            <rect class="bar barP10" x="120" y="-3" width="110.39999999999999" height="10" style="fill: rgb(102, 194, 165)"></rect>
                            <rect class="bar barP20" x="230" y="-3" width="124.2" height="10" style="fill: rgb(102, 194, 165)"></rect>
                            <text class="small-label labelP10" x="119.60000000000001" y="-7" style="text-anchor: start">
                                {{current_display_period}}
                            </text>
                            <text class="small-label labelP20" x="354.2" y="-7" style="text-anchor: end">
                                27
                            </text>
                            <rect class="bar barP11" x="92" y="37" width="138" height="10" style="fill: rgb(252, 141, 98)"></rect>
                            <rect class="bar barP21" x="230" y="37" width="87.4" height="10" style="fill: rgb(252, 141, 98)"></rect>
                            <text class="small-label labelP11" x="92" y="33" style="text-anchor: start">
                                30
                            </text>
                            <text class="small-label labelP21" x="317.4" y="33" style="text-anchor: end">
                                19
                            </text>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="team2">
                <div class="team-name">{{ team2_name }}</div>
            </div>
        </div>
    </div>

    <!-- <div class="container">
    <div class="wrapper">
        <div class="team1">
            <div class="team-name">{{team1_name}}</div>
        </div>
        <div id="chart" ref="chart">
            <div class="title">
                <span>Spiel statistik</span>
            </div>
        </div>
        <div class="team2">
            <div class="team-name">{{team2_name}}</div>
        </div>          
    </div>
</div> -->

    <table class="va-table">
        <thead>
            <tr>
                <th>period</th>
                <th>team: {{ team1_name }} passing</th>
                <th>team: {{ team1_name }} passing misses</th>
                <th>team: {{ team1_name }} ratio</th>
                <th>team: {{ team2_name }} passing</th>
                <th>team: {{ team2_name }} passing misses</th>
                <th>team: {{ team2_name }} ratio</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(counter_in_periode, index) in counters_passing_formated"
                :key="index"
            >
                <td>{{ counter_in_periode.period + 1 }}</td>
                <td>{{ counter_in_periode.counters_passing_team1 }}</td>
                <td>{{ counter_in_periode.counters_passing_team2 }}</td>
                <td>{{ counter_in_periode.counters_passing_miss_team1 }}</td>
                <td>{{ counter_in_periode.counters_passing_miss_team2 }}</td>
                <td>{{ counter_in_periode.ratio_team1 }}</td>
                <td>{{ counter_in_periode.ratio_team2 }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { game_store } from "@/stores/game";
import { global_props } from "@/stores/global_props";

const global_props_data = global_props()

// import * as d3 from "d3";

const store = game_store();

const team1_name = computed(() => store.$state.current_display_game.team1);
const team2_name = computed(() => store.$state.current_display_game.team2);

const current_display_period = computed(() => global_props_data.$state.current_display_game.period);
const counters = computed(() => store.$state.current_display_game.counters);

const counters_passing = computed(() =>
    store.$state.current_display_game.counters.filter(
        (counter) => counter.name == "passing"
    )
);
const counters_passing_miss = computed(() =>
    store.$state.current_display_game.counters.filter(
        (counter) => counter.name == "passing misses"
    )
);

const counters_passing_formated = computed(() =>
    [0, 1, 2, 3].map((i) => {
        const counters_passing_team1 = counters_passing.value.find(
            (c) => c.team == team1_name.value
        ).counters[i];
        const counters_passing_team2 = counters_passing.value.find(
            (c) => c.team == team2_name.value
        ).counters[i];
        const counters_passing_miss_team1 = counters_passing_miss.value.find(
            (c) => c.team == team1_name.value
        ).counters[i];
        const counters_passing_miss_team2 = counters_passing_miss.value.find(
            (c) => c.team == team2_name.value
        ).counters[i];
        const counters_passing_sum_team1 =
            counters_passing_team1 + counters_passing_miss_team1;
        const counters_passing_sum_team2 =
            counters_passing_team2 + counters_passing_miss_team2;
        const ratio_team1 =
            counters_passing_team1 / counters_passing_miss_team1;
        const ratio_team2 =
            counters_passing_team2 / counters_passing_miss_team2;
        return {
            period: i,
            counters_passing_team1,
            counters_passing_team2,
            counters_passing_miss_team1,
            counters_passing_miss_team2,
            counters_passing_sum_team1,
            counters_passing_sum_team2,
            ratio_team1,
            ratio_team2,
        };
    })
);

const current_counters_passing_formated = computed(() => counters_passing_formated.value[current_display_period.value])
const sum_counters_passing_formated = computed(() => counters_passing_formated.value.reduce((a, b) => 
    Object.entries(a) // create array from object a
    .map( ([key, val]) => ({ [key]: val + b[key]})) // sum contents of array with object b by key
        .reduce((x,y) => Object.assign(x, y)) )) // convert sum array object to object





const chart = ref(null);
const chart_P10 = ref(null);

// // on data change from firebase
// game_data.$subscribe((e)=>{
//     goal_shots_formated.value = format_goal_shots(game_data.$state.current_display_game.goal_shots || [])
// })

// onMounted(() => {

//     console.log("chart.value.textContent", chart.value.textContent)

//     const chart_elem = chart.value

//     // debugger

//   // SYNC FUNCTIONS
//     const outerWidth = 500;
//     const outerHeight = 250;
//     const margin = {
//         top: 30,
//         left: 20,
//         bottom: 20,
//         right: 20
//     };
//     const innerWidth = outerWidth - margin.left - margin.right;
//     const innerHeight = outerHeight - margin.top - margin.bottom;
//     const duration = 500;

//     // SCALES (main)
//     const xScale = d3.scaleLinear()
//         .domain([0, 1])
//         .range([0, innerWidth]);

//     const yScale = d3.scaleBand()
//         .domain(yData)
//         .range([0, innerHeight]);

//     // SHAPES
//     const svg = d3.select('#chart')
//     // const svg = chart_elem
//     .selectAll('.chart')
//     .data([null])
//     .join('svg')
//         .classed('chart', true)
//         .attr('width', outerWidth)
//         .attr('height', outerHeight)
//     .selectAll('g')
//         .data([null])
//         .join('g')
//             .attr('transform', `translate(${margin.left},${margin.top})`);

//     svg.selectAll('.bar_back')
//         .data(yData)
//         .join('rect')
//             .classed('bar_back', true)
//             .attr('x', 0)
//             .attr('y', d => yScale(d))
//             .attr('width', d => xScale(1))
//             .attr('height', 4)
//             .attr('rx', 0);

//     svg.selectAll('.label')
//         .data(yData)
//         .join('text')
//             .classed('label', true)
//             .text(d => d)
//             .attr('x', innerWidth / 2)
//             .attr('y', d => yScale(d) - 10);

//     maxData.forEach((max, ind) => {
//         const xScaleInd = d3.scaleLinear()
//             .domain([0, maxData[ind]])
//             .range([0, innerWidth / 2]);

//         svg.selectAll(`.barP1${ind}`)
//             .data([null])
//             .join('rect')
//                 .classed(`bar barP1${ind}`, true)
//                 .attr('x', (innerWidth / 2) - xScaleInd(p1Data[ind]))
//                 .attr('y', yScale(yData[ind]) - 3)
//                 .attr('width', xScaleInd(p1Data[ind]))
//                 .attr('height', 10)
//                 .style('fill', colors[ind]);

//         svg.selectAll(`.barP2${ind}`)
//             .data([null])
//             .join('rect')
//                 .classed(`bar barP2${ind}`, true)
//                 .attr('x', innerWidth / 2)
//                 .attr('y', yScale(yData[ind]) - 3)
//                 .attr('width', xScaleInd(p2Data[ind]))
//                 .attr('height', 10)
//                 .style('fill', colors[ind]);

//         svg.selectAll(`.labelP1${ind}`)
//         .data([null])
//         .join('text')
//             .classed(`small-label labelP1${ind}`, true)
//             .text(p1Data[ind])
//             .attr('x', (innerWidth / 2) - xScaleInd(p1Data[ind]))
//             .attr('y', d => yScale(yData[ind]) - 7)
//             .style('text-anchor', 'start');

//         svg.selectAll(`.labelP2${ind}`)
//         .data([null])
//         .join('text')
//             .classed(`small-label labelP2${ind}`, true)
//             .text(p2Data[ind])
//             .attr('x', innerWidth / 2 + xScaleInd(p2Data[ind]))
//             .attr('y', d => yScale(yData[ind]) - 7)
//             .style('text-anchor', 'end');
//         });

//         // chart_P10.value =
// });

// DATA
const yData = ["Pässe", "Pässe fehler", "Pässe gesamt", "bullies", "xpm"];
const p1Data = [24, 30, 73, 897, 521];
const p2Data = [27, 19, 55, 1013, 754];
const maxData = [50, 50, 100, 1500, 1000];
// const colors = ['#08f7fe','#f5d300','#fe53bb','#09fbd3', '#fe6b35'];
const colors = [
    "#66c2a5",
    "#fc8d62",
    "#8da0cb",
    "#e78ac3",
    "#a6d854",
    "#ffd92f",
    "#e5c494",
    "#b3b3b3",
];
// const colors = ["#e5dff6","#e5f6df","#dfe5f6","#ebd4f3", "#f6f0df"];

// render();
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Rubik:400,500,700,900&display=swap");

* {
    font-family: "Rubik", sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

img {
    max-width: 100%;
    min-width: 250px;
    height: auto;
}

.container {
    width: 100vw;
    height: 100vh;
}

.wrapper {
    align-items: flex-start;
    display: flex;
    justify-content: space-evenly;
    box-shadow: 0 -5px 5px -5px #333;
    border: 1px solid #ccc;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 50px;
    padding: 50px;
}

.title {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 120px;
    text-align: center;
    justify-content: flex-end;
}

.title span {
    text-transform: uppercase;
}

.title span:first-child {
    font-size: 20px;
}

.title span:last-child {
    font-size: 16px;
    font-weight: 500;
    margin: 5px 0;
}

.team-name {
    font-size: 20px;
    line-height: 20px;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    padding: 10px 0;
}

.bar_back {
    fill: #ccc;
    /*     fill: #333; */
}

.label {
    font-size: 14px;
    fill: #333;
    font-weight: 500;
    text-anchor: middle;
    text-transform: uppercase;
}

.bar {
    stroke: #333;
    stroke-width: 1px;
}

.small-label {
    color: #333;
    font-size: 12px;
    font-weight: bold;
}
</style>
