import express, { Response, Request } from 'express';
import championsController from '../controllers/championsController';
import { verifyToken } from '../middlewares/auth';

const router = express.Router();

router.get('/champions', championsController.getAllChampions);

router.get('/champions/:id', championsController.getChampionById);

router.post('/champions', verifyToken, championsController.createChampion);

router.put('/champions/:id', verifyToken, championsController.updateChampion);

router.delete('/champions/:id', verifyToken, championsController.deleteChampion);

export default router;