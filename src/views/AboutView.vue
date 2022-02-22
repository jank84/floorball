<template>
  <div class="about">
    <!-- <h1>This is an about page</h1>
    <br /> -->
    <va-button outline @click="$vaToast.init({ message: 'Test notification', color: 'primary' })" >Test notification</va-button>
    <va-button outline @click="btn_function1()">Inc</va-button>
    <br />
    <br />
    <va-badge right overlap :text="store.counter >= 0 ? store.counter : ''">
      <va-button @click="btn_function1" icon="add"> Increate Example counter </va-button>
    </va-badge>
    <br />
    <br />
    <!-- todo: check why line breaks br doe not work. HMR issue -->
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates delectus, a laudantium quam necessitatibus cupiditate omnis animi maiores aperiam magni aspernatur sapiente earum sint eaque sunt dolor laboriosam? Amet, accusantium.</p>
    <br />
    <va-card>
      <va-image src="https://picsum.photos/400/200" style="height: 200px" />
      <va-card-title>Title</va-card-title>
      <va-card-content
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </va-card-content>
    </va-card>
  </div>
</template>

<script lang="ts">
import { useCounterStore } from "@/stores/counter.ts";
import { getCurrentInstance } from 'vue'

export default {
  setup() {
    const store = useCounterStore()
    const btn_function1 = () => {
      store.increment()
      // alert("foo")
    }


    

    return { store, btn_function1 }
  },
}
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
