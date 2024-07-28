import { Request, Response } from "express";
import { signUpPlayer, loginPlayer} from '../repository/player'
import { PlayerInformation } from "../types/Player";
import express from "express";

enum UserActions {
    LOGIN = 'Login',
    SIGNUP = 'Sign Up'
}

const getPlayerRoutes = () => {
    const router = express.Router();

    router.post('/player', async (request: Request, response: Response) => {
        console.log('request', request.body)

        const reqBody = request.body;

        const userInformation = reqBody.userInformation as PlayerInformation;
        const action = reqBody.action;

        let resultStatus;

            if (action === UserActions.LOGIN) {
                resultStatus = await loginPlayer(userInformation);
            } else if (action === UserActions.SIGNUP) {
                resultStatus = await signUpPlayer(userInformation);
            }
       
            if (resultStatus !== 200 && resultStatus !== 201) {
                response.status(409).send('User already exists');
                return;
            }

        response.status(200).send("Hello World");
      });
      return router;
}

export default getPlayerRoutes;