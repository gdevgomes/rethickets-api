import { Request, Response, Router } from "express";
import bcrypt from 'bcrypt';
import knexConfig from "../config/knexConfig";
import jwt from "jsonwebtoken";
const knex = require("knex")(knexConfig);
import userController from "../controllers/usersController";

const router: Router = Router();

router.get('/status', (req: Request, res: Response) => {
    res.status(200).send('User Router');
});

// GET = All users
router.get('/', async (req: Request, res: Response) => {
    // const user = await knex.select('*').from('users')
    const user = await userController.findAllUser()

    res.status(200).json(user);
});

// GET = Find User By ID
router.get('/:id', async (req: Request, res: Response) => {
    const user = await userController.findUserById(req.params.id)
    res.status(200).json(user);
});

// POST = Create User
router.post('/', async (req: Request, res: Response) => {
    const user = await userController.createUser(req.body)
    res.status(200).json({ id: user[0] });
});

// PATCH = Edit a user data
router.patch('/:id', async (req: Request, res: Response) => {
    const user = await userController.editUser(req.body, req.params.id)
    res.status(200).json({ id: user[0] });
});


// DELETE = Delete a user
router.delete('/:id', async (req: Request, res: Response) => {
    const user = await knex.delete().from('users').where({ id: req.params.id }).first()
    res.status(200).json(user);
});

export default router