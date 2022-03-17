import { Request, Response, Router } from "express";
import knexConfig from "../config/knexConfig";
const knex = require("knex")(knexConfig);
import { findAllUser, findUserById, createUser, editUser, joinEvent, deleteUserById } from "../controllers/usersController";
import { errorMiddleware, responseMiddleware } from "../middleware/responseMiddleware";
import { editUserValidateBody, joinEventValidate, newUserValidateBody } from "../middleware/yupMiddleware";

const router: Router = Router();

router.get('/status', (req: Request, res: Response) => {
    res.status(200).send('User Router');
});

// GET = All users
<<<<<<< Updated upstream
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
=======
router.get("/",
    findAllUser,
    responseMiddleware,
    errorMiddleware
);

// GET = Find User By ID
router.get("/:id",
    findUserById,
    responseMiddleware,
    errorMiddleware
);

// POST = Create User
router.post("/",
    newUserValidateBody,
    createUser,
    responseMiddleware,
    errorMiddleware
);

// PATCH = Edit a user data
router.patch("/:id",
    editUserValidateBody,
    editUser,
    responseMiddleware,
    errorMiddleware
);

// DELETE = Delete a user
router.delete("/:id",
    deleteUserById,
    responseMiddleware,
    errorMiddleware
);

// POST = Create User
router.post('/join/:id',
    joinEventValidate,
    joinEvent,
    responseMiddleware,
    errorMiddleware
);
>>>>>>> Stashed changes

export default router
