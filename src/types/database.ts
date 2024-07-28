import { Generated, Selectable } from "kysely"

export interface Database {
    player: PlayerTable
}

export interface PlayerTable {
    id: Generated<number>
    usernmae: string
    password: string
}

export type Player = Selectable<PlayerTable>