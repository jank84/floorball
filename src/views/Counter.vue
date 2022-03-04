<template>
  <div class="about">
  <va-select
    label="Counter select"
    :options="counters"
    v-model="selected_counter"
    />
  <CounterBtn @click="store.increment()"/>
  <CounterBtn2 @click="store.decrement()"/>
  <CounterDisplay :counter="store.counter" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { counter_store } from "@/stores/counter";
import CounterBtn from "@/components/CounterBtn.vue";
import CounterBtn2 from "@/components/CounterBtn2.vue";
import CounterDisplay from "@/components/CounterDisplay.vue";
import { getCurrentInstance } from 'vue'

const store = counter_store()
// const counterVal = computed(() => store.$state.counter)

const counters = [
  "mock: Ballbesitz Team A",
  "mock: Fauls Team A",
]

const selected_counter = ref(counters[0])
</script>