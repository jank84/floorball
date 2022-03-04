import { ref, watchEffect } from 'vue'

import { db } from '../firebase/config'
import { setDoc, doc, collection, onSnapshot } from 'firebase/firestore'
import { async } from '@firebase/util'
import { gameStore } from '../stores/gameStore'
import type { GameData } from '../stores/gameStore'

export function getCollection(c : string){
    const store = gameStore();

    let colRef = collection(db, c)

    //TODO separate static and dynamic data to reduce read overhead
    const unsub = onSnapshot(colRef, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added" || change.type === "modified") {
                store.$state.allGames.set(change.doc.id, change.doc.data() as GameData);
            }
            if (change.type === "removed") {
                store.$state.allGames.delete(change.doc.id);
            }
        })
    }
    )
    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub());
    })
}

export function saveToDoc(c: string, docId : string, state : GameData){
    const games = collection(db, c)
    //TODO: use less destructive update
    setDoc(doc(games, docId ), state)
}