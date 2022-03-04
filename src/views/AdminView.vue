<template>
    <div class="row">
      <div class="flex md12">
        <div class="item">
          <va-card style="padding: 0.75rem;">
            <h1 class="display-1">Admin settings</h1>
          </va-card>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="flex md2">
        <div class="item">
            <h2 >Game period</h2>
            For global set current game period:
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
    <div class="row">
      <div class="flex md2">
        <div class="item">
            <h2 >Current Display game</h2>
            For <b>global</b> set current game:
            Select Game for display. <b>For now it also sets the curent game in nav bar selection in ⚠ ALL clients.</b> 
        </div>
      </div>
      <div class="flex md6">
        <div class="item">
          <va-select
            style="width: 23em;"
            label="Global game"
            :options="games_obj"
            v-model="global_selected_game"
            @input.prevent="test"
          />
          <va-button icon="save" @click="change_game_global_game" flat :rounded="false">Save global gamestate</va-button>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { global_props } from "@/stores/global_props";

const global_props_data = global_props()

const game_period = [0,1,2]
const game_period_obj = game_period.map((e => ({ label: e, value: e })))
const current_game_period = ref(global_props_data.$state.current_game.period)

const games = ref(global_props_data.$state.games_raw)
const games_obj = ref([])
const global_selected_game = ref({})



// on data change from firebase
global_props_data.$subscribe((e)=>{
  current_game_period.value = global_props_data.$state.current_game.period
  games.value = global_props_data.$state.games_raw
  // games_obj.value = games.value.map(((e,i) => ({ label: `${e.team1} - ${e.team2}`, value: i })))
  games_obj.value = games.value.map((e, i) => {
    return { text: `${e.team1} - ${e.team2}`, value: i,  id: i }
  })
  global_selected_game.value = games_obj.value.find(g => g.id == global_props_data.$state.current_game.game_id_display)
})

// on click in ui
function change_game_period(val) {
  global_props_data.set_period(current_game_period.value)
}
// on click in ui
function change_game_global_game(val) {
  console.log("global_selected_game.value", global_selected_game.value)
  global_props_data.set_game_id_display(global_selected_game.value.id)
}

// TODO: cannot get <va-select> event @input to fire :(( 
// workaround is a save btn
function test(val) {
  console.log("test: ", val)
}
</script>

<style scoped>
.flex {
  padding: 1em
}
</style>