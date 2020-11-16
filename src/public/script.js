const abortController = new AbortController();

const addAudioToList = ({ path, text }) => {
  const audioList = document.querySelector('#audio-list');

  audioList.innerHTML +=
    `<ul>
      <span>${text} </span>
      <audio controls>
        <source src="../../${path}" type="audio/mp3">
        Your browser does not support the audio element.
      </audio>
    </ul>`;
}

const createNewAudio = async () => {
  const text = document.querySelector('#audio-text-area').value;

  const request = new XMLHttpRequest();

  request.open('POST', '/audio', true)
  request.setRequestHeader('content-type', 'application/json');
  request.responseType = 'json';


  request.onloadend = (loadedRequest) => {
    const { response } = loadedRequest.target;
    const { path } = response;

    addAudioToList({ text, path })
  };

  request.send(JSON.stringify({ text }));
}

const fetchAllAudios = async () => {
  const allAudiosResponse = await fetch('http://localhost:8000/audio', {
    method: 'GET',
  });

  const allAudios = await allAudiosResponse.json();

  allAudios.forEach(({ audio_path, text }) => {
    addAudioToList({ path: audio_path, text });
  })
}

document.querySelector('#send-audio-button').onclick = createNewAudio;

window.onload = () => {
  fetchAllAudios()
};