import express from 'express';
import { createPlayer, getPlayers, getPlayerById } from '../controllers/playerController.js';

const router = express.Router();

router.post('/', createPlayer);
router.get('/', getPlayers);
router.get('/:id', getPlayerById);

export default router;
