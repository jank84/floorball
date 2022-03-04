<template>
  <div class="about">
  <CounterBtn @click="store.increment()"/>
  <CounterBtn2 @click="store.decrement()"/>
  
  <CounterDisplay :counter="store.counter" />

  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue"
import { useCounterStore } from "@/stores/counter";
import CounterBtn from "@/components/CounterBtn.vue";
import CounterBtn2 from "@/components/CounterBtn2.vue";
import CounterDisplay from "@/components/CounterDisplay.vue";
import { getCurrentInstance } from 'vue'

  const store = useCounterStore()
  // const btn_function1 = () => {
  //   store.increment()
  //   // alert("foo")
  // }

  // let counterVal = store.doubleCount


    

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.about {
  display: block;
  position: relative;
  top: 10%;
}
</style>
