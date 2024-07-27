import { Request, Response } from "express";

import { signUpPlayer, loginPlayer} from '../controllers/player'

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

        const userInformation = reqBody.userInformation;
        const action = reqBody.action;

        if (action === UserActions.LOGIN) {
            loginPlayer();
        } else if (action === UserActions.SIGNUP) {
            signUpPlayer();
        }
        response.status(200).send("Hello World");
      });
      return router;
}

export default getPlayerRoutes;