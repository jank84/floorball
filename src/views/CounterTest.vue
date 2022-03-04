<template>
  <div class="about">
    <!-- <va-button outline @click="btn_function1()">Inc</va-button>
    <br /> -->
    <!-- <va-badge right overlap :text="store.counter >= 0 ? store.counter : ''">
      <va-button @click="btn_function1" icon="add"> Increate Example counter </va-button>
    </va-badge>
    <br /> -->
  <CounterBtn @click="btn_function1"/>
  <CounterBtn2 @click="btn_function1"/>
   <!-- <va-button icon="add" to="counter-test" :rounded="false">Counter test</va-button> -->
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
  const btn_function1 = () => {
    store.increment()
    // alert("foo")
  }

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
