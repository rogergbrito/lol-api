import { Request, Response } from 'express';
import { ChampionModel, championSchema } from '../models/Champion';
import { ChampionInterface } from '../interface/champion-interface';

class championsController {

  async getAllChampions(req: Request, res: Response) {
    try {
      const { championFunction } = req.query;

      let filter = {};
      if (championFunction) {
        const championFunctionString = Array.isArray(championFunction)
        ? championFunction[0].toString()
        : championFunction.toString();

        const firstLetter = championFunctionString.charAt(0).toUpperCase(); // deixa o primerio caractere maiúsculo
        const remainingLetters = championFunctionString.slice(1);
        const completeFilter = firstLetter + remainingLetters;
        filter = { championFunction: completeFilter };
      }


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
        championFunction: req.body.championFunction,
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
        championFunction: req.body.championFunction,
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