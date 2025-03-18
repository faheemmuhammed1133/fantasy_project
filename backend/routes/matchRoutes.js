import express from 'express';
import { createMatch, createMatches, getMatches,getMatch } from '../controllers/matchController.js';

const router = express.Router();

router.post('/', createMatch);
router.post('/many', createMatches);
router.get('/', getMatches);
router.get('/:id', getMatch);

export default router;
