<script setup lang="ts">
defineProps<{
  msg: string;
}>();

import { useCounterStore } from "@/stores/counter.ts";

const store = useCounterStore()
</script>

<template>
  <div class="greetings">
    <h1 class="green">
      {{ msg }}
      <br />
      <span v-if="store.counter > 0">
        Here is a counter: {{store.counter}}
        <div class="flex lg6 xs12">
          <va-progress-circle :thickness="0.1" :modelValue="(store.counter%10*10)" />
        </div>
        </span>
      </h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
