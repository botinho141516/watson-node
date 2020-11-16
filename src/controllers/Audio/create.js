import { synthesizeText } from '../../providers/watson/converter';
import { create } from '../../repositories/Audio';
import fs from 'fs';
import path from 'path';

export const createAudioRoute = async (req, res) => {
  const { text } = req.body;

  console.log(text)

  const { audio } = await synthesizeText(text);

  const outPath = path.join('audios');
  const outFile = path.join('audios', `${new Date().getTime()}.mp3`);

  fs.mkdirSync(outPath, {
    recursive: true
  })

  fs.writeFileSync(outFile, audio);

  await createAudio({
    text,
    path: outFile,
  })

  return res.status(201).json({
    path: outFile,
    text,
  });
};


export const createAudio = async ({ text, path }) => {
  const createdAudio = await create({ path, text });

  return createdAudio;
};