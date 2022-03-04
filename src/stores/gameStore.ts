import { defineStore } from "pinia";
import { doc, getDoc } from "@firebase/firestore"; 
import { db } from "../firebase/config"
import { getCollection, saveToDoc} from "@/composables/gameCollection";


const gamesCollectionId = 'games'


interface PassDataPeriod {
  completedPasses : number,
  incompletedPasses : number,
  totalPasses : number,
  passRate : number
}

interface PassData {
  firstPeriod : PassDataPeriod,
  secondPeriod : PassDataPeriod,
  thirdPeriod : PassDataPeriod,
  overtime : PassDataPeriod,
  total : PassDataPeriod   
}

interface SingleNumberPeriod {
  firstPeriod : number, 
  secondPeriod : number,
  thirdPeriod : number,
  overtime : number,
  total : number
}



/**
 * An interface to describe the data for a single game. Multiple values could be computed from other
 * values (e.g., pass rate is based on number of completed and incompleted passes). However, to 
 * enable other systems to consume the information without further processing the computated values are added as well.
 */
export interface GameData {
  gender : string,
      teamA : {
        name: string,
        passing : PassData,
        bullies : SingleNumberPeriod
      },
      teamB : {
        name : string,
        passing : PassData,
        bullies: SingleNumberPeriod
      },
  changesOfPossesion : SingleNumberPeriod
}

export enum Possession {
  None = 0,
  teamA = 1,
  teamB = 2
}

export enum Period {
  firstPeriod = 1,
  secondPeriod = 2,
  thirdPeriod = 3,
  overtime = 4
}

export type GameDataMap = {
  [id: string]: GameData;
}

export const gameStore = defineStore({
 id: "gameStore",
 state: () =>  ({
     allGames : new Map<string, GameData>(),
     period : Period.firstPeriod,
     possession : Possession.None,
     currentGame : {
      gender : "Herren",
      teamA : {
        name : "Home",
        passing : {
          firstPeriod : {
            completedPasses : 0,
            incompletedPasses : 0,
            totalPasses : 0,
            passRate : 0.0,
          },
          secondPeriod : {
            completedPasses : 0,
            incompletedPasses : 0,
            totalPasses : 0,
            passRate : 0.0,
          },
          thirdPeriod : {
            completedPasses : 0,
            incompletedPasses : 0,
            totalPasses : 0,
            passRate : 0.0,
          },
          overtime : {
            completedPasses : 0,
            incompletedPasses : 0,
            totalPasses : 0,
            passRate : 0.0,
          },
          total : {
            completedPasses : 0,
            incompletedPasses : 0,
            totalPasses : 0,
            passRate : 0.0,
          },
        },
        bullies : {
          firstPeriod: 0,
          secondPeriod: 0,
          thirdPeriod: 0,
          overtime: 0,
          total: 0
        }
      },
      teamB : {
        name : "Away",
        passing : {
          firstPeriod : {
            completedPasses : 0,
            incompletedPasses : 0,
            totalPasses : 0,
            passRate : 0.0,
          },
          secondPeriod : {
            completedPasses : 0,
            incompletedPasses : 0,
            totalPasses : 0,
            passRate : 0.0,
          },
          thirdPeriod : {
            completedPasses : 0,
            incompletedPasses : 0,
            totalPasses : 0,
            passRate : 0.0,
          },
          overtime : {
            completedPasses : 0,
            incompletedPasses : 0,
            totalPasses : 0,
            passRate : 0.0,
          },
          total : {
            completedPasses : 0,
            incompletedPasses : 0,
            totalPasses : 0,
            passRate : 0.0,
          },
        },
        bullies : {
          firstPeriod: 0,
          secondPeriod: 0,
          thirdPeriod: 0,
          overtime: 0,
          total: 0
        }
      },
      changesOfPossesion : {
        firstPeriod: 0,
        secondPeriod: 0,
        thirdPeriod: 0,
        overtime: 0,
        total: 0
      }        
     } as GameData,
     //TODO set currentGameId to value that actually exists in the firestore database
     currentGameId : "1",
     isFirestoreCollectionInitilized : false
 }),
 actions: {
  async updateCurrentGame() {
    const docRef = doc(db, gamesCollectionId, this.currentGameId)
    const docSnap = await getDoc(docRef)
    this.currentGame = docSnap.data() as unknown as GameData
  },
  getTeamAName() {
    const name = this.currentGame.teamA.name
    return name
  },
  getTeamACompletedPasses() {
    return this.currentGame.teamA.passing.total.completedPasses
  },
  getTeamAIncompletedPasses() {
    return this.currentGame.teamA.passing.total.incompletedPasses
  },
  getTeamACompletedPassesPeriod() {
    switch (this.period) {
      case Period.firstPeriod:
        return this.currentGame.teamA.passing.firstPeriod.completedPasses
      case Period.secondPeriod:
        return this.currentGame.teamA.passing.secondPeriod.completedPasses
      case Period.thirdPeriod:
        return this.currentGame.teamA.passing.thirdPeriod.completedPasses
      case Period.overtime:
        return this.currentGame.teamA.passing.overtime.completedPasses
      default: 
        return 0
    }
  },
  getTeamAIncompletedPassesPeriod() {
    switch (this.period) {
      case Period.firstPeriod:
        return this.currentGame.teamA.passing.firstPeriod.incompletedPasses
      case Period.secondPeriod:
        return this.currentGame.teamA.passing.secondPeriod.incompletedPasses
      case Period.thirdPeriod:
        return this.currentGame.teamA.passing.thirdPeriod.incompletedPasses
      case Period.overtime:
        return this.currentGame.teamA.passing.overtime.incompletedPasses
      default: 
        return 0
    }
  },
  getTeamBName() {
    return this.currentGame.teamB.name
  },
  getTeamBCompletedPasses() {
    return this.currentGame.teamB.passing.total.completedPasses
  },
  getTeamBIncompletedPasses() {
    return this.currentGame.teamB.passing.total.incompletedPasses
  },
  getTeamBCompletedPassesPeriod() {
    switch (this.period) {
      case Period.firstPeriod:
        return this.currentGame.teamB.passing.firstPeriod.completedPasses
      case Period.secondPeriod:
        return this.currentGame.teamB.passing.secondPeriod.completedPasses
      case Period.thirdPeriod:
        return this.currentGame.teamB.passing.thirdPeriod.completedPasses
      case Period.overtime:
        return this.currentGame.teamB.passing.overtime.completedPasses
      default: 
        return 0
    }
  },
  getTeamBIncompletedPassesPeriod() {
    switch (this.period) {
      case Period.firstPeriod:
        return this.currentGame.teamB.passing.firstPeriod.incompletedPasses
      case Period.secondPeriod:
        return this.currentGame.teamB.passing.secondPeriod.incompletedPasses
      case Period.thirdPeriod:
        return this.currentGame.teamB.passing.thirdPeriod.incompletedPasses
      case Period.overtime:
        return this.currentGame.teamB.passing.overtime.incompletedPasses
      default: 
        return 0
    }
  },
  getTeamATotalPasses() {
    return this.currentGame.teamA.passing.total.totalPasses
  },
  getTeamBTotalPasses() {
    return this.currentGame.teamB.passing.total.totalPasses
  },
  getTeamATotalPassesPeriod() {
    switch(this.period) {
      case Period.firstPeriod:
        return this.currentGame.teamA.passing.firstPeriod.totalPasses
      case Period.secondPeriod:
        return this.currentGame.teamA.passing.secondPeriod.totalPasses
      case Period.thirdPeriod:
        return this.currentGame.teamA.passing.thirdPeriod.totalPasses
      case Period.overtime:
        return this.currentGame.teamA.passing.overtime.totalPasses
    }
  },
  getTeamBTotalPassesPeriod() {
    switch(this.period) {
      case Period.firstPeriod:
        return this.currentGame.teamB.passing.firstPeriod.totalPasses
      case Period.secondPeriod:
        return this.currentGame.teamB.passing.secondPeriod.totalPasses
      case Period.thirdPeriod:
        return this.currentGame.teamB.passing.thirdPeriod.totalPasses
      case Period.overtime:
        return this.currentGame.teamB.passing.overtime.totalPasses
    }
  },
  getTeamAPassRate() {
    return this.currentGame.teamA.passing.total.passRate
  },
  getTeamBPassRate() {
    return this.currentGame.teamB.passing.total.passRate
  },
  getTeamAPassRatePeriod() {
    switch(this.period) {
      case Period.firstPeriod:
        return this.currentGame.teamA.passing.firstPeriod.passRate
      case Period.secondPeriod:
        return this.currentGame.teamA.passing.secondPeriod.passRate
      case Period.thirdPeriod:
        return this.currentGame.teamA.passing.thirdPeriod.passRate
      case Period.overtime:
        return this.currentGame.teamA.passing.overtime.passRate
    }
  },
  getTeamBPassRatePeriod() {
    switch(this.period) {
      case Period.firstPeriod:
        return this.currentGame.teamB.passing.firstPeriod.passRate
      case Period.secondPeriod:
        return this.currentGame.teamB.passing.secondPeriod.passRate
      case Period.thirdPeriod:
        return this.currentGame.teamB.passing.thirdPeriod.passRate
      case Period.overtime:
        return this.currentGame.teamB.passing.overtime.passRate
    }
  },
  getTeamABullies() {
    return this.currentGame.teamA.bullies.total
  },
  getTeamBBullies() {
    return this.currentGame.teamB.bullies.total
  },
  getTeamABulliesPeriod() {
    switch (this.period) {
      case Period.firstPeriod:
        return this.currentGame.teamA.bullies.firstPeriod
      case Period.secondPeriod:
        return this.currentGame.teamA.bullies.secondPeriod
      case Period.thirdPeriod:
        return this.currentGame.teamA.bullies.thirdPeriod
      case Period.overtime:
        return this.currentGame.teamA.bullies.overtime
      default: 
        return 0
    }  
  },
  getTeamBBulliesPeriod() {
    switch (this.period) {
      case Period.firstPeriod:
        return this.currentGame.teamB.bullies.firstPeriod
      case Period.secondPeriod:
        return this.currentGame.teamB.bullies.secondPeriod
      case Period.thirdPeriod:
        return this.currentGame.teamB.bullies.thirdPeriod
      case Period.overtime:
        return this.currentGame.teamB.bullies.overtime
      default: 
        return 0
    }  
  },
  getGender() {
    return this.currentGame.gender
  },
  getChangesOfPossesion() {
    return this.currentGame.changesOfPossesion.total
  },
  getChangesOfPossesionPeriod() {
    switch (this.period) {
      case Period.firstPeriod:
        return this.currentGame.changesOfPossesion.firstPeriod
      case Period.secondPeriod:
        return this.currentGame.changesOfPossesion.secondPeriod
      case Period.thirdPeriod:
        return this.currentGame.changesOfPossesion.thirdPeriod
      case Period.overtime:
        return this.currentGame.changesOfPossesion.overtime
      default: 
        return 0
    }
  },
  init() {
    if (!this.isFirestoreCollectionInitilized) {
      getCollection(gamesCollectionId)
      this.updateCurrentGame()
      this.isFirestoreCollectionInitilized = true
    }   
  },
 
  passA() {
    //Update whole game
    this.currentGame.teamA.passing.total.completedPasses++
    this.currentGame.teamA.passing.total.totalPasses++
    this.currentGame.teamA.passing.total.passRate = ((this.currentGame.teamA.passing.total.completedPasses / this.currentGame.teamA.passing.total.totalPasses))

    //Update period
    let periodPassing = {} as PassDataPeriod

    //TODO create dedicated function for detection of possession change to fascilitate reuse
    let hasPossessionChanged = false
    if (this.possession === Possession.teamB) {
      this.currentGame.changesOfPossesion.total++
      hasPossessionChanged = true
    }

    switch(this.period) {
      case Period.firstPeriod:
        periodPassing = this.currentGame.teamA.passing.firstPeriod
        if (hasPossessionChanged) {
          this.currentGame.changesOfPossesion.firstPeriod++
        }
        break;
      case Period.secondPeriod:
        periodPassing = this.currentGame.teamA.passing.secondPeriod
        if (hasPossessionChanged) {
          this.currentGame.changesOfPossesion.secondPeriod++
        }
        break;
      case Period.thirdPeriod:
        periodPassing = this.currentGame.teamA.passing.thirdPeriod
        if (hasPossessionChanged) {
          this.currentGame.changesOfPossesion.thirdPeriod++
        }
        break;
      case Period.overtime:
        periodPassing = this.currentGame.teamA.passing.overtime
        if (hasPossessionChanged) {
          this.currentGame.changesOfPossesion.overtime++
        }
        break;
    }

    periodPassing.completedPasses++
    periodPassing.totalPasses++
    periodPassing.passRate = periodPassing.completedPasses / periodPassing.totalPasses 

    this.possession = Possession.teamA
    saveToDoc(gamesCollectionId, this.currentGameId, this.currentGame)
  },
  /*TODO decide whether incompleted Pass is indicator for possession change too
  * inital assumption is that this is not the case and that a completed or won bully indicates a
  * a possession change. 
  */
  incompletedPassA() {
    //Update whole game
    this.currentGame.teamA.passing.total.incompletedPasses++
    this.currentGame.teamA.passing.total.totalPasses++
    this.currentGame.teamA.passing.total.passRate = (this.currentGame.teamA.passing.total.completedPasses / this.currentGame.teamA.passing.total.totalPasses)

    //Update period
    let periodPassing = {} as PassDataPeriod


    switch(this.period) {
      case Period.firstPeriod:
        periodPassing = this.currentGame.teamA.passing.firstPeriod
        break;
      case Period.secondPeriod:
        periodPassing = this.currentGame.teamA.passing.secondPeriod
        break;
      case Period.thirdPeriod:
        periodPassing = this.currentGame.teamA.passing.thirdPeriod
        break;
      case Period.overtime:
        periodPassing = this.currentGame.teamA.passing.overtime
        break;
    }

    periodPassing.incompletedPasses++
    periodPassing.totalPasses++
    periodPassing.passRate = periodPassing.completedPasses / periodPassing.totalPasses 
    saveToDoc(gamesCollectionId, this.currentGameId, this.currentGame)
  },
  passB() {
    //Update whole game
    this.currentGame.teamB.passing.total.completedPasses++
    this.currentGame.teamB.passing.total.totalPasses++
    this.currentGame.teamB.passing.total.passRate = (this.currentGame.teamB.passing.total.completedPasses / this.currentGame.teamB.passing.total.totalPasses)

    //Update period
    let periodPassing = {} as PassDataPeriod

    let hasPossessionChanged = false
    if (this.possession === Possession.teamA) {
      this.currentGame.changesOfPossesion.total++
      hasPossessionChanged = true
    }

    switch(this.period) {
      case Period.firstPeriod:
        periodPassing = this.currentGame.teamB.passing.firstPeriod
        if (hasPossessionChanged) {
          this.currentGame.changesOfPossesion.firstPeriod++
        }
        break;
      case Period.secondPeriod:
        periodPassing = this.currentGame.teamB.passing.secondPeriod
        if (hasPossessionChanged) {
          this.currentGame.changesOfPossesion.secondPeriod++
        }
        break;
      case Period.thirdPeriod:
        periodPassing = this.currentGame.teamB.passing.thirdPeriod
        if (hasPossessionChanged) {
          this.currentGame.changesOfPossesion.thirdPeriod++
        }
        break;
      case Period.overtime:
        periodPassing = this.currentGame.teamB.passing.overtime
        if (hasPossessionChanged) {
          this.currentGame.changesOfPossesion.overtime++
        }
        break;
    }

    periodPassing.completedPasses++
    periodPassing.totalPasses++
    periodPassing.passRate = periodPassing.completedPasses / periodPassing.totalPasses 

    this.possession = Possession.teamB
    saveToDoc(gamesCollectionId, this.currentGameId, this.currentGame)
  },
  /*TODO decide whether incompleted Pass is indicator for possession change too
  * inital assumption is that this is not the case and that a completed or won bully indicates a
  * a possession change. 
  */
  incompletedPassB() {
    //Update whole game
    this.currentGame.teamB.passing.total.incompletedPasses++
    this.currentGame.teamB.passing.total.totalPasses++
    this.currentGame.teamB.passing.total.passRate = (this.currentGame.teamB.passing.total.completedPasses / this.currentGame.teamB.passing.total.totalPasses)

    //Update period
    let periodPassing = {} as PassDataPeriod


    switch(this.period) {
      case Period.firstPeriod:
        periodPassing = this.currentGame.teamB.passing.firstPeriod
        break;
      case Period.secondPeriod:
        periodPassing = this.currentGame.teamB.passing.secondPeriod
        break;
      case Period.thirdPeriod:
        periodPassing = this.currentGame.teamB.passing.thirdPeriod
        break;
      case Period.overtime:
        periodPassing = this.currentGame.teamB.passing.overtime
        break;
    }

    periodPassing.incompletedPasses++
    periodPassing.totalPasses++
    periodPassing.passRate = periodPassing.completedPasses / periodPassing.totalPasses 
    saveToDoc(gamesCollectionId, this.currentGameId, this.currentGame)
  },
  bullyA() {
    this.currentGame.teamA.bullies.total++
    
    let hasPossessionChanged = false
    if (this.possession === Possession.teamB) {
      this.currentGame.changesOfPossesion.total++
      hasPossessionChanged = true
    }

    switch (this.period) {
      case Period.firstPeriod:
        this.currentGame.teamA.bullies.firstPeriod++
        if (hasPossessionChanged) {
          this.currentGame.changesOfPossesion.firstPeriod++
        }
        break
      case Period.secondPeriod:
        this.currentGame.teamA.bullies.secondPeriod++
        if (hasPossessionChanged) {
          this.currentGame.changesOfPossesion.secondPeriod++
        }
        break
      case Period.thirdPeriod:
        this.currentGame.teamA.bullies.thirdPeriod++
        if (hasPossessionChanged) {
          this.currentGame.changesOfPossesion.thirdPeriod++
        }
        break
      case Period.overtime:
        this.currentGame.teamA.bullies.overtime++
        if (hasPossessionChanged) {
          this.currentGame.changesOfPossesion.overtime++
        }
        break
    }
    this.possession = Possession.teamA
  },
  bullyB() {
    this.currentGame.teamB.bullies.total++
    
    let hasPossessionChanged = false
    if (this.possession == Possession.teamA) {
      this.currentGame.changesOfPossesion.total++
      hasPossessionChanged = true
    }

    switch (this.period) {
      case Period.firstPeriod:
        this.currentGame.teamB.bullies.firstPeriod++
        if (hasPossessionChanged) {
          this.currentGame.changesOfPossesion.firstPeriod++
        }
        break
      case Period.secondPeriod:
        this.currentGame.teamB.bullies.secondPeriod++
        if (hasPossessionChanged) {
          this.currentGame.changesOfPossesion.secondPeriod++
        }
        break
      case Period.thirdPeriod:
        this.currentGame.teamB.bullies.thirdPeriod++
        if (hasPossessionChanged) {
          this.currentGame.changesOfPossesion.thirdPeriod++
        }
        break
      case Period.overtime:
        this.currentGame.teamB.bullies.overtime++
        if (hasPossessionChanged) {
          this.currentGame.changesOfPossesion.overtime++
        }
        break
    }
    this.possession = Possession.teamB
  }   
 }
});
