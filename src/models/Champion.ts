import mongoose, { Schema, Document } from 'mongoose';

interface Champion extends Document {
  name: string;
  championFunction: string;
  difficulty: string;
  history?: string;
}

const championSchema = new Schema<Champion>(
  {
    name: { type: String, required: true },
    championFunction: { type: String, required: true },
    difficulty: { type: String, required: true },
    history: { type: String, required: false },
  }
);

const ChampionModel = mongoose.model<Champion>('Champion', championSchema);

export { ChampionModel, championSchema };
