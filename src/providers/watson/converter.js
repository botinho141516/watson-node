import { textToSpeechAxios } from '.';
import fs from 'fs';
import path from 'path';

/**
 * @typedef Sound
 * @type {Object}
 * @property {string} text
 * @property {string} path
 * 
 * @param {string} name 
 * @param {string} text
 * @returns {Promise<Sound>}
 */

const synthesizeText = async (text) => {
  const sound = await textToSpeechAxios.post('/v1/synthesize', {
    text,
  });

  const outFile = path.join('audios', `${new Date().getTime()}.mp3`)
  fs.writeFileSync(outFile, Buffer.from(sound.data));

  return {
    text,
    path: outFile
  };
}

export {
  synthesizeText
}

