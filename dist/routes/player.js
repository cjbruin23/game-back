"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("../controllers/player");
const express = require("express");
var UserActions;
(function (UserActions) {
    UserActions["LOGIN"] = "Login";
    UserActions["SIGNUP"] = "Sign Up";
})(UserActions || (UserActions = {}));
const getPlayerRoutes = () => {
    const router = express.Router();
    router.post('/player', (request, response) => {
        console.log('request', request.body);
        const reqBody = request.body;
        const userInformation = reqBody.userInformation;
        const action = reqBody.action;
        if (action === UserActions.LOGIN) {
            (0, player_1.loginPlayer)();
        }
        else if (action === UserActions.SIGNUP) {
            (0, player_1.signUpPlayer)();
        }
        response.status(200).send("Hello World");
    });
    return router;
};
exports.default = getPlayerRoutes;
