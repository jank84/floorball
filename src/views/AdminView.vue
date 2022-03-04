<template>

  <!-- <va-card style="padding: 0.75rem;"> -->
    <div class="row">
      <div class="flex md12">
        <div class="item">
          <va-card style="padding: 0.75rem;">
            <h1 class="display-1">Admin settings</h1>
          </va-card>
        </div>
      </div>
      <div class="flex md2">
        <div class="item">
            <h2 >Game period</h2>
            For global set current game:
            Select Game period for counter and goal shots
        </div>
      </div>
      <div class="flex md6">
        <div class="item">
          <va-button-toggle
            outline
            v-model="current_game_period"
            :options="game_period_obj"
            @click="change_game_period"
          />
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="flex md12">
        <div class="item">md12</div>
      </div>
      <div class="flex md9">
        <div class="item">md9</div>
      </div>
      <div class="flex md3">
        <div class="item">md3</div>
      </div>
    </div>
  <!-- </va-card> -->
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { global_props } from "@/stores/global_props";

const global_props_data = global_props()

const game_period = [0,1,2]
const game_period_obj = game_period.map((e => ({ label: e, value: e })))

// const current_game_period = computed(() => global_props_data.$state.current_game_period)
const current_game_period = ref(global_props_data.$state.current_game_period)
// const current_game_period = ref(game_period[0])
// const current_game_period = ref(game_period[0])

global_props_data.$subscribe((e)=>{
  // console.log("$subscribe", e)
  // console.log("$subscribe::global_props_data.$state.current_game_period", global_props_data.$state.current_game_period)
  current_game_period.value = global_props_data.$state.current_game_period
})

function change_game_period(val) {
  // console.log("change_game_period:", val)
  // console.log("current_game_period.value:", current_game_period.value)
  // global_props_data.$state.current_game_period = current_game_period.value
  global_props_data.set_current_game_period(current_game_period.value)
}

</script>

<style scoped>
.flex {
  padding: 1em
}
</style>