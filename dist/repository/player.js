"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpPlayer = exports.loginPlayer = void 0;
const database_1 = require("../database");
const loginPlayer = (userInformation) => __awaiter(void 0, void 0, void 0, function* () {
    const player = yield database_1.db.selectFrom('player').where('id', '=', 1).selectAll().executeTakeFirst();
    console.log('player', player);
    console.log('login player');
});
exports.loginPlayer = loginPlayer;
const signUpPlayer = (userInformation) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield database_1.db.insertInto('player').values({
        username: userInformation.username,
        password: userInformation.password
    }).executeTakeFirst();
    console.log('result', result);
    console.log('signUpPlayer');
});
exports.signUpPlayer = signUpPlayer;
