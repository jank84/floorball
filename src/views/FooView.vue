<template>
    {{raw_json}}
</template>

<script setup lang="ts">
import { ref } from "vue"
import { use_goal_shot_store } from "@/stores/goal_shots";
  const store = use_goal_shot_store()
  const raw_json = ref(JSON.stringify(
    store.$state.last_goal_shot_data,
    null,
    2
  ));
</script>