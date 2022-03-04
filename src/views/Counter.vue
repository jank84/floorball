<template>
  <div class="about">
  <va-select
    label="Counter select"
    :options="counters"
    v-model="selected_counter"
    />

  {{counterVal}}
  <CounterBtn @click="store.increment()"/>
  <CounterBtn2 @click="store.decrement()"/>
  <CounterDisplay :counter="store.current_counter.counter" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { counter_store } from "@/stores/counter";
import { global_props } from "@/stores/global_props";
import CounterBtn from "@/components/CounterBtn.vue";
import CounterBtn2 from "@/components/CounterBtn2.vue";
import CounterDisplay from "@/components/CounterDisplay.vue";
import { getCurrentInstance } from 'vue'

const store = counter_store()
const counterVal = computed(() => store.$state.current_counter.counter)

// const counter_types = computed(() => global_props().$state.counter_types)

// TODO use proper team names & ids
// const counters =  computed(() => counter_types.value.map(c => ([`${c} - Team A`, `${c} - Team B`]).))

// const counters = computed(() => counter_types.value.map((c, i) => {
//   return [
//     { text: `${c} - Team A`, value: i*2,   id: i*2 },
//     { text: `${c} - Team B`, value: i*2+1, id: i*2+1 }]
//   }).flat())


// const selected_counter = ref(counters[0])
</script>