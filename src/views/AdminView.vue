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
            <h2 >Current record period</h2>
            For global set current game period:
            Select Game period for counter and goal shots
        </div>
      </div>
      <div class="flex md6">
        <div class="item">
          <va-button-toggle
            outline
            color="danger"
            v-model=" global_selected_period"
            :options="game_period_select_obj"
            @click="set_record_period"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="flex md2">
        <div class="item">
            <h2 >Current record game</h2>
            For <b>global</b> set current game:
            Select Game for <b>⚠ RECORDING</b>. <b>For now it also sets the curent game in nav bar selection in ⚠ ALL clients.</b> 
        </div>
      </div>
      <div class="flex md4">
        <div class="item">
          <va-select
            style="width: 23em;"
            label="Global record game"
            color="danger"
            :options="games_select_obj"
            v-model="global_selected_game"
            @input="not_working_input_event()" 
            @change="not_working_input_event()"
          />
        </div>
      </div>
      <div class="flex md4">
        <div class="item">
          <va-button color="danger" icon="save" @click="set_record_game" outline :rounded="false">Save game global</va-button>
        </div>
      </div>
    </div>






    <div class="row">
      <div class="flex md2">
        <div class="item">
            <h2 >Current display period</h2>
            For global set current <b>display</b> game period:
            Select Game period for counter and goal shots
        </div>
      </div>
      <div class="flex md6">
        <div class="item">
          <va-button-toggle
            outline
            color="warning"
            v-model=" display_selected_period"
            :options="game_period_select_obj"
            @click="set_display_period"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="flex md2">
        <div class="item">
            <h2 >Current display game</h2>
            For <b>global</b> set current game:
            Select Game for display. <b>For now it also sets the curent game in nav bar selection in ⚠ ALL clients.</b> 
        </div>
      </div>
      <div class="flex md4">
        <div class="item">
          <va-select
            style="width: 23em;"
            label="Global display game"
            color="warning"
            :options="games_select_obj"
            v-model="display_selected_game"
            @input="not_working_input_event()" 
            @change="not_working_input_event()"
          />
        </div>
      </div>
      <div class="flex md4">
        <div class="item">
          <va-button color="warning" icon="save" @click="set_display_game" outline :rounded="false">Save game global</va-button>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { Ref, ref, watch, computed } from "vue"
import { global_props } from "@/stores/global_props";

interface Select_values {
  text: string
  value: number
  id: string
}

const global_props_data = global_props()

// Data period list 
const game_period = [0,1,2]
const game_period_select_obj = game_period.map((e => ({ label: e, value: e })))

// Data games list 
const games = ref(global_props_data.$state.games_raw)
const games_select_obj = ref([])

// Data global record selection
const global_selected_period = ref()
const global_selected_game: Ref<Select_values> = ref()

// Data global display selection
const display_selected_period = ref()
const display_selected_game: Ref<Select_values> = ref()

set_games_select_obj()



// on data change from firebase
global_props_data.$subscribe((e)=>{
  games.value = global_props_data.$state.games_raw
  set_games_select_obj()
})

// on click in ui 
function set_record_period(val) {
  global_props_data.set_period( global_selected_period.value)
}
// on click in ui
function set_record_game(val) {
  global_props_data.set_game_id( global_selected_game.value.id)
}
// on click in ui 
function set_display_period(val) {
  global_props_data.set_display_period( display_selected_period.value)
}
// on click in ui
function set_display_game(val) {
  global_props_data.set_display_game_id( display_selected_game.value.id)
}

// TODO: cannot get <va-select> event @input to fire :(( 
  // seems to be a bug in the vuestic-ui framework: https://github.com/epicmaxco/vuestic-ui/issues/1355
// workaround is a save btn to call set_record_game() on click
function not_working_input_event(val) {
  console.log("test: ", val)
}
// alternative workaround is watch value
// watch(global_selected_game, (currentValue, oldValue) => {
//   console.log(currentValue);
//   global_props_data.set_game_id(global_selected_game.value.id)
// });

function set_games_select_obj() {
  games_select_obj.value = games.value.map((e, i) => {
    return { text: `${e.team1} - ${e.team2}`, value: i,  id: e.id }
  }) as Select_values[]

  global_selected_period.value = global_props_data.$state.current_game.period
  const find_selected_game = games_select_obj.value.find(g => g.id == global_props_data.$state.current_game.game_id)
  global_selected_game.value = find_selected_game ? find_selected_game : global_selected_game.value

  display_selected_period.value = global_props_data.$state.current_display_game.period
  const find_display_selected_game = games_select_obj.value.find(g => g.id == global_props_data.$state.current_display_game.game_id)
  display_selected_game.value = find_display_selected_game ? find_display_selected_game : display_selected_game.value
}
</script>


<style scoped>
.flex {
  padding: 1em
}
</style>