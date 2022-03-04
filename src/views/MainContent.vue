<template>

  <header>
    <va-navbar color="primary" shape class="mb-2">
      <template #left>
        <va-navbar-item><va-button icon="info" @click="showModal = !showModal" color="#fff" flat :rounded="false" /></va-navbar-item>
        <va-button icon="exposure_plus_1" to="counter" color="#fff" flat :rounded="false">Counter</va-button>
        <va-button icon="swipe" to="goal-shots" color="#fff" flat :rounded="false">Goal shots</va-button>
        <va-button icon="open_in_new" to="goalsview" color="#fff" flat :rounded="false">Open goalsview</va-button>

      </template>
      <template #right>
        <!-- <router-link to="goalsview">Open goalsview</router-link> -->
        <va-select
          style="width: 23em;"
          label="Current game"
          :options="games_mock"
          v-model="selected_game"
        />
      </template>
    </va-navbar>
  </header>
  <RouterView />

  <va-modal v-model="showModal" title="Info" hide-default-actions>
    <InfoPage />
    <template #footer>
      <va-button color="danger" class="mr-4" @click="showModal = !showModal">
        Schließen
      </va-button>
    </template>
  </va-modal>

</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import ReloadPWA from "@/components/ReloadPWA.vue";
import InfoPage from "@/components/InfoPage.vue";

import { ref } from "vue";

const showModal = ref(false);

const games_mock = [
  "Mock: Game 1 - Team1/Team2",
  "Mock: Game 2 - Team1/Team2",
  "Mock: Game 3 - Team1/Team2",
]

const selected_game = ref( "Mock: Game 1 - Team1/Team2")

</script>

<style>
@import "@/assets/base.css";
</style>


