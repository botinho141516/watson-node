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

const createNewAudio = async (event) => {
  console.log(event)
  event.preventDefault();
  const text = document.querySelector('#audio-text-area').value;

  const newAudioResponse = await fetch('http://localhost:8000/audio', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text }),
    signal: abortController.signal
  });
  console.log(newAudioResponse)

  const { path } = await newAudioResponse.json();

  addAudioToList({ text, path })

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
window.onload = () => {
  fetchAllAudios()
};

window.onbeforeunload = () => {
  abortController.abort();
};
