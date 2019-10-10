// Require .env file
require("dotenv").config();

// require request
let request = require("request");

// requrie moment
const moment = require("moment");

//require  file systems
const fs = require("fs");

//link key page
const keys = require("./keys.js");

// initialize spotify
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

// OMBD and Bands in Town API's
let omdb = (keys.spotify);
let bandsInTown = (keys.bandsInTown);

// take user command and input
let userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");


//APP Logic
function userCommnad(userInput, userQuery) {
    //make a decision based on the command
    switch (userInput) {
        case "concert-this":
            concertThis();
            break;
        case "spotify-this":
            spotifyThisSong();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-this":
            doThis(userQuery);
            break;
        default:
            console.log("Oooopise, nothing to find");
            break;
    }
}
userCommnad(userInput, userQuery);

function concertThis(){
    console.log(`Searching For ${userQuery}'s next show...`);
    // use request as the query URL using our query variable as the parameters
    request("https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=" + bandsInTown + response, body){
        // If there is no error give us a 200 status code 
        if (!error && response)
    }
}

