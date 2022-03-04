<template>

  <header>
    <va-navbar color="primary" shape class="mb-2">
      <template #left>
        <va-navbar-item><va-button icon="info" @click="showModal = !showModal" color="#fff" flat :rounded="false" /></va-navbar-item>
        <va-button icon="exposure_plus_1" to="counter" color="#fff" flat :rounded="false">Counter</va-button>
        <va-button icon="swipe" to="goal-shots" color="#fff" flat :rounded="false">Goal shots</va-button>
        <va-button icon="open_in_new" to="goalsview" color="#fff" flat :rounded="false">Open goalsview</va-button>
        <!-- global_props: {{global_props_data}} -->
        <va-button icon="admin_panel_settings" to="admin-view" color="#fff" flat :rounded="false">Admin</va-button>
      </template>
      <template #right>
        <va-select
          style="width: 23em;"
          label="Current game"
          :options="games"
          v-model="selected_game"
        />
      </template>
    </va-navbar>
  </header>
  <RouterView />

  <va-modal v-model="showModal" title="Info" hide-default-actions>
    <InfoPage />
    <template #footer>
      <va-button color="danger" class="mr-4" @click="showModal = !showModal">
        Schließen
      </va-button>
    </template>
  </va-modal>

</template>

<script setup lang="ts">
import { computed } from "vue"
import { global_props } from "@/stores/global_props";
import { RouterLink, RouterView } from "vue-router";
import ReloadPWA from "@/components/ReloadPWA.vue";
import InfoPage from "@/components/InfoPage.vue";

import { ref } from "vue";

const showModal = ref(false);
const global_props_data = global_props()




// const games = global_props_data.games_raw.map(g => `${g.team1} - ${g.team2}`)
// const games = computed(() => global_props_data.games_raw.map(g => `${g.team1} - ${g.team2}`))
// const games = computed(() => global_props_data.games_raw.map(((e,i) => ({ label: `${e.team1} - ${e.team2}`, value: i }))))
const games = computed(() => global_props_data.games_raw.map((e, i) => {
  return { text: `${e.team1} - ${e.team2}`, value: i,  id: i }
  }))


// {
//         text: 'First',
//         value: '1',
//         id: '1',
//       },

const selected_game = ref({})


// on data change from firebase
global_props_data.$subscribe((e)=>{
  // WARNING: this selected_game is currently changed by admin ctrls
  selected_game.value = games.value.find(g => g.id == global_props_data.$state.current_game.game_id_display)
})

// // on click in ui
// function change_game_period(val) {
//   global_props_data.set_period(current_game_period.value)
// }




// console.log("global_props_data", global_props_data.$state.)

</script>

<style>
@import "@/assets/base.css";
</style>


