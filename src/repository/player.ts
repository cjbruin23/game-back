import { db } from "../database"
import { PlayerInformation } from "../types/Player"

export const loginPlayer = async (userInformation: PlayerInformation) => {
    const player = await db.selectFrom('player').where('id', '=', 1).selectAll().executeTakeFirst();
    console.log('player', player)
    console.log('login player')
}

export const signUpPlayer = (userInformation: PlayerInformation) => {
    console.log('signUpPlayer')
}
