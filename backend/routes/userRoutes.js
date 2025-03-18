import express from 'express';
import { createUser, updateUser, getUsers, login } from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.post('/login', login);
router.post('/:id', updateUser);

export default router;
