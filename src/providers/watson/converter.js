import { textToSpeechAxios } from '.';

/**
 * @typedef Sound
 * @type {Object}
 * @property {string} text
 * @property {Buffer} sound 
 * 
 * @param {string} text
 * 
 * @returns {Promise<Sound>}
 */

const synthesizeText = async (text) => {
  const audio = await textToSpeechAxios.post('/v1/synthesize', {
    text,
  });

  return {
    text,
    audio: Buffer.from(audio.data)
  };
}

export {
  synthesizeText
}

