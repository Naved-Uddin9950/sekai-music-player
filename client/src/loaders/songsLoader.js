export default async function getSongsList(songName) {
    // const songName = 'Love Yourself';
    const url = `https://api.jamendo.com/v3.0/tracks/?client_id=e7752160&format=json&limit=10&namesearch=${encodeURIComponent(songName)}&order=popularity_total&include=musicinfo&durationmin=180`;
    const trackList = [];
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const tracks = data.results;
            tracks.forEach(track => {
                const filteredData = {
                    id: track.id,
                    image: track.image,
                    title: track.name,
                    artist: track.artist_name,
                    duration: track.duration,
                    // genre: track.musicinfo.genre,
                    album : track.album_name,
                    audio: track.audio
                }
                trackList.push(filteredData);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
    
    return trackList;
}