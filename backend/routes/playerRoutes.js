import express from 'express';
import { createPlayer,createPlayers, getPlayers, getPlayerById } from '../controllers/playerController.js';

const router = express.Router();

router.post('/one', createPlayer);
router.post('/many', createPlayers);
router.get('/', getPlayers);
router.get('/:id', getPlayerById);

export default router;
