<template>

  <header>
    <va-navbar color="primary" shape class="mb-2">
      <template #left>
        <!-- <va-button icon="home" to="home" color="#fff" flat :rounded="false">touch-test</va-button> -->
        <va-navbar-item><va-button icon="info" @click="showModal = !showModal" color="#fff" flat :rounded="false" /></va-navbar-item>
        
        <va-button icon="add" to="counter-test" color="#fff" flat :rounded="false">Counter test</va-button>
      </template>
      <!-- <template #center>
        <va-navbar-item>
          Fancy logo
        </va-navbar-item>
      </template> -->
      <template #right>
        <va-navbar-item>
          
          <va-button icon="fingerprint" to="touch-test2" color="#fff" flat :rounded="false">touch-test2</va-button>
          <va-button icon="fingerprint" to="touch-test" color="#fff" flat :rounded="false">touch-test</va-button>
          </va-navbar-item>
      </template>
    </va-navbar>
  </header>
  <RouterView />

  <va-modal v-model="showModal" title="Info" fullscreen hide-default-actions>
    Information zur app hier.
    <TheWelcome />
    <template #footer>
      <va-button color="danger" class="mr-4" @click="showModal = !showModal">
        Schließen
      </va-button>
    </template>
  </va-modal>

</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import ReloadPWA from "@/components/ReloadPWA.vue";
import TheWelcome from "@/components/TheWelcome.vue";

import { ref } from "vue";

const showModal = ref(false);

</script>

<style>
@import "@/assets/base.css";
</style>


