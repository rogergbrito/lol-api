import { Request, Response } from 'express';
import { ChampionModel, championSchema } from '../models/Champion';
import { ChampionInterface } from '../interfaces/champion-interface';
import { verifyFilter } from '../functions/verifyFilter';

class championsController {

  async getAllChampions(req: Request, res: Response) {
    try {
      const { role, name, difficulty } = req.query;

      const filter = verifyFilter(role, name, difficulty);

      const data = await ChampionModel.find(filter).sort({ name: 1 }); // ordena por ordem crescente
      return res.status(200).json(data);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
  };

  async getChampionById (req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = await ChampionModel.findById(id);

      if (!data) {
        return res.status(404).json({ error: "Champion not found" });
      }

      return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
  };

  async createChampion(req: Request, res: Response) {
    try {
      const champion: ChampionInterface = {
        name: req.body.name,
        role: req.body.role,
        difficulty: req.body.difficulty,
        history: req.body.history
      }

      const data = await ChampionModel.create(champion);

      return res.status(201).json({ data, msg: "Champion created" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
  };

  async updateChampion(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const champion: ChampionInterface = {
        name: req.body.name,
        role: req.body.role,
        difficulty: req.body.difficulty,
        history: req.body.history
      }

      const data = await ChampionModel.findByIdAndUpdate(id, champion);
      if (!data) {
        return res.status(404).json({ error: "Champion not found" });
      }

      return res.status(200).json({ data, msg: "Champion updated" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
  };

  async deleteChampion(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = await ChampionModel.findById(id);

      if (!data) {
        return res.status(404).json({ error: "Champion not found" });
      }

      const deletedData = await ChampionModel.findByIdAndDelete(id);

      return res.status(200).json({ deleted: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
  };
}

export default new championsController();