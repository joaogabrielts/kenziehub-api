import { Router } from 'express';
import UsersControllers from '../controllers/UsersController';

const userRouter = Router();
const userController = new UsersControllers();

userRouter.post('/', userController.create);

userRouter.get('/', userController.index);

export default userRouter;
