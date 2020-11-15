import { synthesizeText } from '../../providers/watson/converter';
import { create } from '../../repositories/Audio';

export const createAudioRoute = async (req, res) => {
  const { text } = req.body;

  const audio = await synthesizeText(text);

  const { path } = audio;

  const createdAudio = createAudio({
    path,
    text
  })

  return res.status(201).json(createdAudio);
};


export const createAudio = async ({ text, path }) => {
  const createdAudio = create({ path, text });

  return createdAudio;
};