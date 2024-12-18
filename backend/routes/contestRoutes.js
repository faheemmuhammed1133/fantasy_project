import express from 'express';
import { createContest, getContests, getContestById } from '../controllers/contestController.js';

const router = express.Router();

router.post('/', createContest);
router.get('/', getContests);
router.get('/:id', getContestById);

export default router;
