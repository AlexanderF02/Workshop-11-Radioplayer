const apiURL = 'http://api.sr.se/api/v2/channels?format=json&size=100';

fetch(apiURL)
  .then(response => response.json()) 
  .then(data => {
    console.log('API Data:', data); 
    displayRadioChannels(data.channels);  
  })
  .catch(error => console.error('Error fetching the data:', error));

function displayRadioChannels(channels) {
  const container = document.getElementById('radio-channels');  
  container.innerHTML = '';  

  channels.forEach(channel => {
    console.log('Channel Data:', channel); 

    const channelElement = document.createElement('div');
    channelElement.classList.add('channel');
    channelElement.style.backgroundColor = `#${channel.color}`; 

    channelElement.innerHTML = `
      <div class="logo-container">
        <img src="${channel.image}" alt="${channel.name}" class="channel-logo" />
        <div class="cross hidden">X</div>
      </div>
      <div class="channel-content">
        <h3 class="channel-name">${channel.name}</h3>
        <div class="audio-player">
          <audio controls>
            <source src="${channel.liveaudio.url}" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div class="color" style="background-color: #${channel.color}"></div>
      </div>
    `;

    container.appendChild(channelElement);

    const audioElement = channelElement.querySelector('audio');
    const titleElement = channelElement.querySelector('.channel-name');
    const colorElement = channelElement.querySelector('.color');
    const crossElement = channelElement.querySelector('.cross');
    const logoElement = channelElement.querySelector('.channel-logo');

    audioElement.addEventListener('play', () => {
      titleElement.style.display = 'block';
      colorElement.style.display = 'block';
      logoElement.style.display = 'block';
      channelElement.style.backgroundColor = `#${channel.color}`;
      crossElement.classList.add('hidden');
    });

    audioElement.addEventListener('pause', () => {
      titleElement.style.display = 'none';
      colorElement.style.display = 'none';
      logoElement.style.display = 'none';
      channelElement.style.backgroundColor = 'transparent';
      crossElement.classList.remove('hidden');
    });
  });
}
