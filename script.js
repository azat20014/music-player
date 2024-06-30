const fileInput = document.getElementById('fileInput');
const songList = document.getElementById('songList');
const audioPlayer = document.getElementById('audioPlayer');
const playlist = document.getElementById('playlist');

let songs = [];
let currentSongIndex = 0;

function loadFiles() {
    const files = fileInput.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const song = {
            name: file.name,
            url: URL.createObjectURL(file)
        };
        songs.push(song);
        const li = document.createElement('li');
        li.textContent = song.name;
        li.addEventListener('click', () => {
            playSong(i);
        });
        songList.appendChild(li);
    }
}

function playSong(index) {
    currentSongIndex = index;
    audioPlayer.src = songs[index].url;
    audioPlayer.play();
    updatePlaylist();
}

function updatePlaylist() {
    playlist.innerHTML = '';
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.name;
        if (index === currentSongIndex) {
            li.style.fontWeight = 'bold';
        }
        playlist.appendChild(li);
    });
}
