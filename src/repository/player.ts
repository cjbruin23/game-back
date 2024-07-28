import { db } from "../database"
import { PlayerInformation } from "../types/Player"

const getUserByUsername = async (username: string) => {
    const result = await db.selectFrom('player').where('username', '=', username).selectAll().executeTakeFirst();
    return result;
}

export const loginPlayer = async (userInformation: PlayerInformation): Promise<number> => {
    const player = await db.selectFrom('player').where('username', '=', userInformation.username).selectAll().executeTakeFirst();
    console.log('player', player)
    console.log('login player')
    return 200;
}

export const signUpPlayer = async (userInformation: PlayerInformation): Promise<number> => {
    
    const username = await getUserByUsername(userInformation.username);
    console.log('usernameExists', username)
    
    if (!username) {
        const result = await db.insertInto('player').values({
            username: userInformation.username,
            password: userInformation.password,
            email: userInformation.email
        }).executeTakeFirst();
        return 201;
    } else {
        return 409;
    }
    
  
}
