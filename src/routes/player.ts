import { Request, Response } from "express";
import { signUpPlayer, loginPlayer} from '../controllers/player'
import { UserInformation } from "../types/types";

const express = require("express");

enum UserActions {
    LOGIN = 'Login',
    SIGNUP = 'Sign Up'
}

const getPlayerRoutes = () => {
    const router = express.Router();

    router.post('/player', (request: Request, response: Response) => {
        console.log('request', request.body)

        const reqBody = request.body;

        const userInformation = reqBody.userInformation as UserInformation;
        const action = reqBody.action;

        if (action === UserActions.LOGIN) {
            loginPlayer(userInformation);
        } else if (action === UserActions.SIGNUP) {
            signUpPlayer(userInformation);
        }

        response.status(200).send("Hello World");
      });
      return router;
}

export default getPlayerRoutes;