import { readAll } from '../../repositories/Audio';

export const readAllAudioRoute = async (req, res) => {
  const allAudios = await readAllAudio();

  return res.status(200).json(allAudios);
}

export const readAllAudio = async () => {
  const allAudios = await readAll();

  return allAudios;
}