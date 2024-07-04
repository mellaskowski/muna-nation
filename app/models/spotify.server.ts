const { Buffer } = require('node:buffer');
// const spotifyURL: URL = new URL(process.env.SPOTIFY_URL || "");
const spotifyAuthURL = "https://accounts.spotify.com/api/token";


export async function getAuthToken() {
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: new URLSearchParams({
          'grant_type': 'client_credentials',
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
        },
      });
    
      return await response.json();

}


export async function getArtistInformation() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "••••••");

const formdata = new FormData();
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        body: formdata,
        redirect: "follow"
      };

    fetch("https://api.spotify.com/v1/artists/6xdRb2GypJ7DqnWAI2mHGn", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}