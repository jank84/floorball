<template>
  <div class="row">
    <div class="flex md3 xs6">
      <div class="item">
          <div style="background-color: rgb(145 206 255);">  
          <h1>passing - Team: {{game_data.$state.current_game.team1}}</h1>
          <CounterBtn @click="game_data.increment_counter('passing', game_data.$state.current_game.team1)"/>
          <CounterBtn2 @click="game_data.decrement_counter('passing', game_data.$state.current_game.team1)"/>
          <CounterDisplay :counter="game_data.get_recording_counter('passing', game_data.$state.current_game.team1)" /> 
          </div>
      </div>
    </div>
    <div class="flex md3 xs6">
      <div class="item">
        <div style="background-color: rgb(145 206 255);">  
          <h1>passing - Team: {{game_data.$state.current_game.team2}}</h1>
          <CounterBtn @click="game_data.increment_counter('passing', game_data.$state.current_game.team2)"/>
          <CounterBtn2 @click="game_data.decrement_counter('passing', game_data.$state.current_game.team2)"/>
          <CounterDisplay :counter="game_data.get_recording_counter('passing', game_data.$state.current_game.team2)" /> 
        </div>
      </div>
    </div>
    <div class="flex md3 xs6">
      <div class="item">
        <div style="background-color: rgb(145 255 166);">  
          <h1>bullies - Team: {{game_data.$state.current_game.team1}}</h1>
          <CounterBtn @click="game_data.increment_counter('bullies', game_data.$state.current_game.team1)"/>
          <CounterBtn2 @click="game_data.decrement_counter('bullies', game_data.$state.current_game.team1)"/>
          <!-- <CounterDisplay :counter="store.current_counter.counter" />  -->
          <CounterDisplay :counter="game_data.get_recording_counter('bullies', game_data.$state.current_game.team1)" /> 
        </div>
      </div>
    </div>
    <div class="flex md3 xs6">
      <div class="item">
        <div style="background-color: rgb(145 255 166);"> 
          <h1>bullies - Team: {{game_data.$state.current_game.team2}}</h1> 
          <CounterBtn @click="game_data.increment_counter('bullies', game_data.$state.current_game.team2)"/>
          <CounterBtn2 @click="game_data.decrement_counter('bullies', game_data.$state.current_game.team2)"/>
          <CounterDisplay :counter="game_data.get_recording_counter('bullies', game_data.$state.current_game.team2)" /> 
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="flex md3 xs6">
      <div class="item">
        <div style="background-color: rgb(230 255 145);"> 
          <h1>changes of possesion</h1> 
          <CounterBtn @click="game_data.increment_counter('changesOfPossesion')"/>
          <CounterBtn2 @click="game_data.decrement_counter('changesOfPossesion')"/>
          <!-- <CounterDisplay :counter="store.current_counter.counter" />  -->
          <CounterDisplay :counter="game_data.get_recording_counter('changesOfPossesion')" /> 
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { global_props } from "@/stores/global_props";
import { game_store } from "@/stores/game";
import CounterBtn from "@/components/CounterBtn.vue";
import CounterBtn2 from "@/components/CounterBtn2.vue";
import CounterDisplay from "@/components/CounterDisplay.vue";
import { getCurrentInstance } from 'vue'

const game_data = game_store()



</script>

<style scoped>
.item h1 {
  margin: 0em 1.2em;
  font-family: 'Source Sans Pro';
}
</style>