import mongoose, { Schema, Document } from 'mongoose';

interface Champion extends Document {
  name: string;
  role: string;
  difficulty: string;
  history?: string;
}

const championSchema = new Schema<Champion>(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    difficulty: { type: String, required: true },
    history: { type: String, required: false },
  }
);

const ChampionModel = mongoose.model<Champion>('Champion', championSchema);

export { ChampionModel, championSchema };
