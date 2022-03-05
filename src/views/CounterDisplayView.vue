<template>
    <table class="va-table">
      <thead>
      <tr>
        <th>period</th>
        <th>team: {{team1_name}} passing</th>
        <th>team: {{team1_name}} passing misses</th>
        <th>team: {{team1_name}} ratio</th>
        <th>team: {{team2_name}} passing</th>
        <th>team: {{team2_name}} passing misses</th>
        <th>team: {{team2_name}} ratio</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(counter_in_periode, index) in counters_passing_formated" :key="index">
          <td>{{counter_in_periode.period}}</td>
          <td>{{counter_in_periode.counters_passing_team1}}</td>
          <td>{{counter_in_periode.counters_passing_team2}}</td>
          <td>{{counter_in_periode.counters_passing_miss_team1}}</td>
          <td>{{counter_in_periode.counters_passing_miss_team2}}</td>
          <td>{{counter_in_periode.ratio_team1}}</td>
          <td>{{counter_in_periode.ratio_team2}}</td>
        </tr>
      </tbody>
    </table>
    <table class="va-table">
      <thead>
      <tr>
        <th>period</th>
        <th>team</th>
        <th>passing</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(counter_in_periode, index) in counters_passing[0].counters" :key="index">
          <td>{{index}}</td>
          <td>{{counters_passing[0].team}}</td>
          <td>{{counter_in_periode}}</td>
        </tr>
        <tr v-for="(counter_in_periode, index) in counters_passing[1].counters" :key="index">
          <td>{{index}}</td>
          <td>{{counters_passing[1].team}}</td>
          <td>{{counter_in_periode}}</td>
        </tr>
      </tbody>
    </table>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { game_store } from "@/stores/game";
  const store = game_store()

  const team1_name = computed(() => store.$state.current_display_game.team1)
  const team2_name = computed(() => store.$state.current_display_game.team2)

  const counters = computed(() => store.$state.current_display_game.counters )

const counters_passing = computed(() => store.$state.current_display_game.counters.filter(counter => counter.name == "passing"))
  const counters_passing_miss = computed(() => store.$state.current_display_game.counters.filter(counter => counter.name == "passing misses"))

  const counters_passing_formated =  computed(() => [0,1,2,3].map((i) => {
    const counters_passing_team1 = counters_passing.value.find(c => c.team == team1_name.value).counters[i]
    const counters_passing_team2 = counters_passing.value.find(c => c.team == team2_name.value).counters[i]
    const counters_passing_miss_team1 = counters_passing_miss.value.find(c => c.team == team1_name.value).counters[i]
    const counters_passing_miss_team2 = counters_passing_miss.value.find(c => c.team == team2_name.value).counters[i]
    return {
      period: i,
      counters_passing_team1,
      counters_passing_team2,
      counters_passing_miss_team1,
      counters_passing_miss_team2,
      ratio_team1: counters_passing_team1/counters_passing_miss_team1,
      ratio_team2: counters_passing_team2/counters_passing_miss_team2
    }
  }))

</script>