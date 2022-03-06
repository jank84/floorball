<template>
    <svg width="100%" height="100%" viewBox="-30 -30 800 403" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;">
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

        <template v-for="(goal_shot, index) in goal_shots_formated" :key="index">
            <SvgGoalShot :line="goal_shot.line" :goal_shot_marker="goal_shot.goal_shot_marker" :goal_shot_color="goal_shot.goal_shot_color"/>
        </template>
        <svgText x="-1em" y="0em" :text="`Period: ${(global_props_data.$state.current_display_game.period+1)}`"/>
        
        <svgText x="4em" y="0em" :text="game_data.$state.current_display_game.team1"/>
        <svgText x="19em" y="0em" :text="game_data.$state.current_display_game.team2"/>

        </svg>
    <!-- <GoalShotLegend style="font-size: x-large;margin: 0em 5em;"/> -->

    <div>
        <va-option-list
            :options="goal_kind_options"
            v-model="goal_kind_option_selected"
            valueBy="altValue"
            :textBy="option => option.altText"
        />
        <!-- Selected: <pre> {{ listValue }} </pre> -->
    </div>

    <!-- <va-slider v-model="Time" /> -->
</template>

<script setup lang="ts">
import { Ref, ref, computed } from "vue"
import { game_store } from "@/stores/game";
import { global_props } from "@/stores/global_props";

import { goal_line_colors, Field_side_shot, Line, Direction, Goal_shot_outcome, goal_icons, Goal_shot } from "@/utils"
import SvgGoalShot from "@/components/SvgGoalShot.vue";
import SvgText from "@/components/SvgText.vue";
import GoalShotLegend from "@/components/GoalShotLegend.vue";

const game_data = game_store()
const global_props_data = global_props()

const goal_kind_options = [
        {
            altText: `${goal_icons.Scored} Tore`,
            altValue: ""+Goal_shot_outcome.Scored,
        },
        {
            altText: `${goal_icons.Miss} Verfehlt`,
            altValue: ""+Goal_shot_outcome.Miss,
        },
        {
            altText: `${goal_icons.Block_goalkeeper} Block Hüter`,
            altValue: ""+Goal_shot_outcome.Block_goalkeeper,
        },
        {
            altText: `${goal_icons.Block_player} Block Spieler`,
            altValue: ""+Goal_shot_outcome.Block_player,
        },
    ]
// hack: enums cannot be selected as value by options. altValue is converted into string
const goal_kind_option_selected = ref([
    ""+Goal_shot_outcome.Scored,
    ""+Goal_shot_outcome.Miss,
    ""+Goal_shot_outcome.Block_goalkeeper,
    ""+Goal_shot_outcome.Block_player,
    ])
const goal_kind_option_selected_converted = computed(() => goal_kind_option_selected.value.map(g => parseInt(g)))

const gate_pos_right = { x: 680, y: 190,};
const gate_pos_left = { x: 60, y: 190,};





const goal_shots = computed(() => game_data.$state.current_display_game.goal_shots as Goal_shot[])



// Ref<Goal_shot[]>


const goal_shots_filter_by_kind = computed(() => goal_shots.value.filter(g => goal_kind_option_selected_converted.value.includes(g.kind)))


const goal_shots_formated = computed(() =>{
    let goal_shots_filtered = goal_shots_filter_by_kind.value;
    // if period is not 3 == "all", filter after period
    const current_display_period = global_props_data.$state.current_display_game.period
    if ( current_display_period != 4) {
        goal_shots_filtered = goal_shots_filter_by_kind.value.filter(g => g.period == current_display_period)
    } 

    return goal_shots_filtered.map(g => {
        return {
            line: {
            start_x: g.team ? gate_pos_right.x : gate_pos_left.x,
            start_y: g.team ? gate_pos_right.y : gate_pos_left.y,
            end_x: g.x,
            end_y: g.y,
            },
            goal_shot_marker: goal_icons[Goal_shot_outcome[g.kind]],
            goal_shot_color: goal_line_colors[Goal_shot_outcome[g.kind]],
    }})
})



// // goal_shots_formated.value = goal_shots.value

// const goal_shots_formated = ref([])

// goal_shots_formated.value = format_goal_shots(game_data.$state.current_display_game.goal_shots || [])

// // on data change from firebase
// game_data.$subscribe((e)=>{
//     goal_shots_formated.value = format_goal_shots(game_data.$state.current_display_game.goal_shots || [])
// })


function format_goal_shots(goal_shots: Goal_shot[]) {

    let goal_shots_filtered = goal_shots;
    // if period is not 3 == "all", filter after period
    const current_display_period = global_props_data.$state.current_display_game.period
    if ( current_display_period != 4) {
        goal_shots_filtered = goal_shots.filter(g => g.period == current_display_period)
    } 

    return goal_shots_filtered.map(g => {
        return {
            line: {
            start_x: g.team ? gate_pos_right.x : gate_pos_left.x,
            start_y: g.team ? gate_pos_right.y : gate_pos_left.y,
            end_x: g.x,
            end_y: g.y,
            },
            goal_shot_marker: goal_icons[Goal_shot_outcome[g.kind]],
            goal_shot_color: goal_line_colors[Goal_shot_outcome[g.kind]],
    }})
}
</script>