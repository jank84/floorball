import { defineStore } from "pinia";
import { db } from "@/firebase/config"
// import { global_props } from "@/stores/global_props";

// const global_props_data = global_props()
interface Counter {
  counterName?: string
  game_id?: string
  periode?: number
  counter: number
}

export const counter_store = defineStore({
  id: "counter",
  state: () => ({
    counterName: undefined,
    game_id: undefined,
    periode: undefined,
    counter: 0,
  } as Counter),
  getters: {},
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
});

// global_props_data.$subscribe((e)=>{
//   console.log("from counter store", e)


  
// })

function init() {

}

init()