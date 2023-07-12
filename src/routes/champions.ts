import express, { Response, Request } from 'express';
import championsController from '../controllers/championsController';

const router = express.Router();

router.get('/champions', championsController.getAllChampions);

router.get('/champions/:id', championsController.getChampionById);

router.post('/champions', championsController.createChampion);

router.put('/champions/:id', championsController.updateChampion);

router.delete('/champions/:id', championsController.deleteChampion);

export default router;