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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("../repository/player");
const express_1 = __importDefault(require("express"));
var UserActions;
(function (UserActions) {
    UserActions["LOGIN"] = "Login";
    UserActions["SIGNUP"] = "Sign Up";
})(UserActions || (UserActions = {}));
const getPlayerRoutes = () => {
    const router = express_1.default.Router();
    router.post('/player', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('request', request.body);
        const reqBody = request.body;
        const userInformation = reqBody.userInformation;
        const action = reqBody.action;
        let resultStatus;
        if (action === UserActions.LOGIN) {
            resultStatus = yield (0, player_1.loginPlayer)(userInformation);
        }
        else if (action === UserActions.SIGNUP) {
            resultStatus = yield (0, player_1.signUpPlayer)(userInformation);
        }
        if (resultStatus !== 200 && resultStatus !== 201) {
            response.status(409).send('User already exists');
            return;
        }
        response.status(200).send("Hello World");
    }));
    return router;
};
exports.default = getPlayerRoutes;
