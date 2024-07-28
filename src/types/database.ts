import { Generated, Insertable, Selectable } from "kysely"

export interface Database {
    player: PlayerTable
}

export interface PlayerTable {
    id: Generated<number>
    email: string
    username: string
    password: string
}

export type Player = Selectable<PlayerTable>
export type CreatePlayer = Insertable<PlayerTable>