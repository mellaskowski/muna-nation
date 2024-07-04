const { Buffer } = require('node:buffer');
import { request } from "~/../request";
// const spotifyURL: URL = new URL(process.env.SPOTIFY_URL || "");
const spotifyAuthURL = "https://accounts.spotify.com/api/token";


export async function getAuthToken() {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    
    debugger;
    // const request = new Request(spotifyAuthURL);

    const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer.from(clientId + ':' + clientSecret).toString('base64'))
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
    };

    // request.post(authOptions, function(error, response, body) {
        
    // TypeError: Cannot read properties of undefined (reading 'post')

    request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode ===200) {
            var token = body.access_token;
        }
    });

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