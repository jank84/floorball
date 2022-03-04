import { defineStore } from "pinia";
import { counter_store } from "@/stores/counter";
import { game_store } from "@/stores/game";
import { updateDoc, query, getDoc, setDoc, getDocs, collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config"

interface Game {
  id: string
  team1: string
  team2: string
}

interface Game_meta {
  game_id?: string
  period?: number
}


/// distinguesh between display game game_id & periode display

export const global_props = defineStore({
  id: "global_props",
  state: () => ({
    current_game: {
      game_id: undefined,
      period: undefined
    } as Game_meta,
    current_display_game: {
      game_id: undefined,
      period: undefined
    } as Game_meta,
    games_raw: [] as Game[],
    counter_types: [] as string[]
  }),
  getters: {},
  actions: {
    async set_period(val: number) {
      this.current_game.period = val
      // console.log("set_current_game_period", this.current_game.period)
      await setDoc(doc(db, "global_props", firstDoc.id), {
        current_game: { period: this.current_game.period},
      }, { merge: true });      
    },
    async set_game_id(val: string) {
      this.current_game.game_id = val
      // console.log("set_current_game_for_display", this.current_game.game_id)
      await setDoc(doc(db, "global_props", firstDoc.id), {
        current_game: { game_id: this.current_game.game_id}
      }, { merge: true });      
    },
    async set_display_period(val: number) {
      this.current_display_game.period = val
      // console.log("set_current_game_period", this.current_display_game.period)
      await setDoc(doc(db, "global_props", firstDoc.id), {
        current_display_game: { period: this.current_display_game.period},
      }, { merge: true });      
    },
    async set_display_game_id(val: string) {
      this.current_display_game.game_id = val
      // console.log("set_current_game_for_display", this.current_display_game.game_id)
      await setDoc(doc(db, "global_props", firstDoc.id), {
        current_display_game: { game_id: this.current_display_game.game_id}
      }, { merge: true });
      
    //   await updateDoc(doc(db, "global_props", firstDoc.id), {
    //     "age": 13,
    //     "favorites.color": "Red"
    // });
    },
  },
})

let firstDoc: any = null;

async function init() {
  const global_props_snapshot = await getDocs(query(collection(db, "global_props")));

  // we only want the first doc of global_props, since there is only one global config
  firstDoc = global_props_snapshot.docs[0]

  // get updates on the first doc of global_props
  const unsub = onSnapshot(doc(db, "global_props", firstDoc.id), (doc) => {
    const new_data = doc.data()
    // TODO: catch new_data not well formatted
    console.log("Newly received global_props: ", new_data);
    global_props().$state.counter_types = new_data.current_game.counter_types
    global_props().$state.current_game = { game_id: new_data.current_game.game_id,  period: new_data.current_game.period }
    global_props().$state.current_display_game = { game_id: new_data.current_display_game.game_id,  period: new_data.current_display_game.period }
    

    // inform other stores
    counter_store().$state.current_counter.game_id = new_data.current_game.game_id
    counter_store().$state.current_counter.periode = new_data.current_game.period

    game_store().bootstrap_recording(new_data.current_game.game_id)
    game_store().bootstrap_display(new_data.current_display_game.game_id)
  });

  const unsubscribe = onSnapshot(query(collection(db, "games_raw")), (querySnapshot) => {
    const games_formatted =  querySnapshot.docs.map(e=>({
      id: e.id,
      ...e.data()
    }))
    // console.log("Newly received games: ", games_formatted);
    global_props().$state.games_raw = games_formatted as Game[]
  });

}


init();