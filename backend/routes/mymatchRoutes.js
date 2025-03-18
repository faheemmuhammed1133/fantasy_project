import express from 'express';
import { createMyMatch, getMyMatches, getMyMatchesByUserId } from '../controllers/mymatchController.js';

const router = express.Router();

router.post('/', createMyMatch);
router.get('/', getMyMatches);
router.get('/user/:userId', getMyMatchesByUserId);

export default router;
