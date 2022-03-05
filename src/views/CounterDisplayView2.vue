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

                            <text class="label" x="230" y="-10">Pässe</text>
                            <rect class="bar_back" x="0" y="0" width="460" height="4" rx="0"></rect>
                            <rect class="bar barP10" 
                                :x="calc_bar_x_left(current_counters_passing_formated.counters_passing_sum_team1, current_counters_passing_formated.counters_passing_team1)"
                                y="-3" 
                                :width="calc_bar_width(current_counters_passing_formated.counters_passing_sum_team1, current_counters_passing_formated.counters_passing_team1)"
                                height="10" style="fill: rgb(102, 194, 165)"></rect>
                            <text class="small-label labelP10"
                                :x="calc_bar_x_left(current_counters_passing_formated.counters_passing_sum_team1, current_counters_passing_formated.counters_passing_team1)"
                                y="-7" style="text-anchor: start">
                                {{current_counters_passing_formated.counters_passing_team1}}
                            </text>
                            <text class="small-label labelP10 sum" 
                                x="0"
                                y="-7" style="text-anchor: start">
                                {{current_counters_passing_formated.counters_passing_sum_team1}}
                            </text>
                            <rect class="bar barP20" 
                                x="230"
                                y="-3"
                                :width="calc_bar_width(current_counters_passing_formated.counters_passing_sum_team2, current_counters_passing_formated.counters_passing_team2)"
                                height="10" style="fill: rgb(102, 194, 165)"></rect>
                            <text class="small-label labelP20"
                                :x="calc_bar_x_right(current_counters_passing_formated.counters_passing_sum_team2, current_counters_passing_formated.counters_passing_team2)"
                                y="-7" style="text-anchor: end">
                                {{current_counters_passing_formated.counters_passing_team2}}
                            </text>
                            <text class="small-label labelP10 sum" 
                                :x="460-10"
                                y="-7" style="text-anchor: start">
                                {{current_counters_passing_formated.counters_passing_sum_team2}}
                            </text>

                            <text class="label" x="230" y="30">Pässe Fehler</text>
                            <rect class="bar_back" x="0" y="50" width="460" height="4" rx="0"></rect>
                            <rect class="bar barP10" 
                                :x="calc_bar_x_left(current_counters_passing_formated.counters_passing_sum_team1, current_counters_passing_formated.counters_passing_miss_team1)"
                                y="47" 
                                :width="calc_bar_width(current_counters_passing_formated.counters_passing_sum_team1, current_counters_passing_formated.counters_passing_miss_team1)"
                                height="10" style="fill: rgb(252, 141, 98)"></rect>
                            <text class="small-label labelP10" 
                                :x="calc_bar_x_left(current_counters_passing_formated.counters_passing_sum_team1, current_counters_passing_formated.counters_passing_miss_team1)"
                                y="43" style="text-anchor: start">
                                {{current_counters_passing_formated.counters_passing_miss_team1}}
                            </text>
                            <text class="small-label labelP10 sum" 
                                x="0"
                                y="43" style="text-anchor: start">
                                {{current_counters_passing_formated.counters_passing_sum_team1}}
                            </text>
                            <rect class="bar barP20" 
                                x="230"
                                y="47"
                                :width="calc_bar_width(current_counters_passing_formated.counters_passing_sum_team2, current_counters_passing_formated.counters_passing_miss_team2)"
                                height="10" style="fill: rgb(252, 141, 98)"></rect>
                            <text class="small-label labelP20"
                                :x="calc_bar_x_right(current_counters_passing_formated.counters_passing_sum_team2, current_counters_passing_formated.counters_passing_miss_team2)"
                                y="43" style="text-anchor: end">
                                {{current_counters_passing_formated.counters_passing_miss_team2}}
                            </text>
                            <text class="small-label labelP10 sum" 
                                :x="460-10"
                                y="43" style="text-anchor: start">
                                {{current_counters_passing_formated.counters_passing_sum_team2}}
                            </text>

                            <text class="label" x="230" y="74">Bullies</text>
                            <rect class="bar_back" x="0" y="94" width="460" height="4" rx="0"></rect>
                            <rect class="bar barP10" 
                                :x="calc_bar_x_left(current_counters_passing_formated.counters_bullies_team1+current_counters_passing_formated.counters_bullies_team2, current_counters_passing_formated.counters_bullies_team1)"
                                y="91" 
                                :width="calc_bar_width(current_counters_passing_formated.counters_bullies_team1+current_counters_passing_formated.counters_bullies_team2, current_counters_passing_formated.counters_bullies_team1)"
                                height="10" style="fill:rgb(141, 160, 203)"></rect>
                            <text class="small-label labelP10" 
                                :x="calc_bar_x_left(current_counters_passing_formated.counters_bullies_team1+current_counters_passing_formated.counters_bullies_team2, current_counters_passing_formated.counters_bullies_team1)"
                                y="87" style="text-anchor: start">
                                {{current_counters_passing_formated.counters_bullies_team1}}
                            </text>
                            <text class="small-label labelP10 sum" 
                                x="0"
                                y="87" style="text-anchor: start">
                                {{current_counters_passing_formated.counters_bullies_team1+current_counters_passing_formated.counters_bullies_team2}}
                            </text>
                            <rect class="bar barP20" 
                                x="230"
                                y="91"
                                :width="calc_bar_width(current_counters_passing_formated.counters_bullies_team1+current_counters_passing_formated.counters_bullies_team2, current_counters_passing_formated.counters_bullies_team2)"
                                height="10" style="fill:rgb(141, 160, 203)"></rect>
                            <text class="small-label labelP20"
                                :x="calc_bar_x_right(current_counters_passing_formated.counters_bullies_team1+current_counters_passing_formated.counters_bullies_team2, current_counters_passing_formated.counters_bullies_team2)"
                                y="87" style="text-anchor: end">
                                {{current_counters_passing_formated.counters_bullies_team2}}
                            </text>
                            <text class="small-label labelP10 sum" 
                                :x="460-10"
                                y="87" style="text-anchor: start">
                                {{current_counters_passing_formated.counters_bullies_team1+current_counters_passing_formated.counters_bullies_team2}}
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

const counters_bullies = computed(() =>
    store.$state.current_display_game.counters.filter(
        (counter) => counter.name == "bullies"
    )
);

const counters_passing_formated = computed(() =>
    [0, 1, 2, 3].map((i) => {
        const counters_passing_team1 = counters_passing.value.find((c) => c.team == team1_name.value).counters[i];
        const counters_passing_team2 = counters_passing.value.find((c) => c.team == team2_name.value).counters[i];
        const counters_passing_miss_team1 = counters_passing_miss.value.find((c) => c.team == team1_name.value).counters[i];
        const counters_passing_miss_team2 = counters_passing_miss.value.find((c) => c.team == team2_name.value).counters[i];
        const counters_bullies_team1 = counters_bullies.value.find((c) => c.team == team1_name.value).counters[i];
        const counters_bullies_team2 = counters_bullies.value.find((c) => c.team == team2_name.value).counters[i];
        const counters_passing_sum_team1 = counters_passing_team1 + counters_passing_miss_team1;
        const counters_passing_sum_team2 = counters_passing_team2 + counters_passing_miss_team2;
        const ratio_team1 = counters_passing_team1 / counters_passing_miss_team1;
        const ratio_team2 = counters_passing_team2 / counters_passing_miss_team2;
        return {
            period: i,
            counters_passing_team1,
            counters_passing_team2,
            counters_passing_miss_team1,
            counters_passing_miss_team2,
            counters_passing_sum_team1,
            counters_passing_sum_team2,
            counters_bullies_team1,
            counters_bullies_team2,
            ratio_team1,
            ratio_team2,
        };
    })
);

const sum_counters_passing_formated = computed(() => counters_passing_formated.value.reduce((a, b) => 
    Object.entries(a) // create array from object a
    .map( ([key, val]) => ({ [key]: val + b[key]})) // sum contents of array with object b by key
        .reduce((x,y) => Object.assign(x, y)) )) // convert sum array object to object

// const current_counters_passing_formated = computed(() => counters_passing_formated.value[current_display_period.value])
const current_counters_passing_formated = computed(() => {
    // debugger
    if (current_display_period.value > 3) {
        return sum_counters_passing_formated.value
    } else {
        return counters_passing_formated.value[current_display_period.value]
    }
})







const bar_half = 230;

function calc_bar_x_left(sum: number, counter: number) {
    return bar_half - ((bar_half/sum) * counter)
}

function calc_bar_x_right(sum: number, counter: number) {
    return bar_half + ((bar_half/sum) * counter)
}

function calc_bar_width(sum: number, counter: number) {
    return (bar_half/sum) * counter
}


const y_pos_chart = [
    {"bar": -3, text: -7}, 
    {"bar": 37, text: 33}, // +34, +30
    {"bar": 71, text: 67},
]

</script>

<style scoped>
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

.small-label.sum {
    fill: #ccc;
}
</style>
