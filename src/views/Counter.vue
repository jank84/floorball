<template>
  <div class="about">
  <CounterBtn @click="store.increment()"/>
  <CounterBtn2 @click="store.decrement()"/>
  <CounterDisplay :counter="store.counter" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useCounterStore } from "@/stores/counter";
import CounterBtn from "@/components/CounterBtn.vue";
import CounterBtn2 from "@/components/CounterBtn2.vue";
import CounterDisplay from "@/components/CounterDisplay.vue";
import { getCurrentInstance } from 'vue'

const store = useCounterStore()
// const counterVal = computed(() => store.$state.counter)
</script>