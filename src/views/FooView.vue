<template>
    {{raw_json}}
</template>

<script setup lang="ts">
import { ref } from "vue"
import { game_store } from "@/stores/game";
  const store = game_store()
  const raw_json = ref(JSON.stringify(
    store.$state.current_display_game,
    null,
    2
  ));
</script>