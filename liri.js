require("dotenv").config();
var keys =require("./keys.js")
var fs = require('fs');
var axios = require("axios");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var searchTyoe = process.argv[2];
var searchInput = process.argv[3];

var eventSearch = function() {
	axios.get("https://rest.bandsintown.com/artists/" + searchInput + "/events?app_id=codingbootcamp")
	.then(function(response) {
		console.log("Venue: " + response.venue.name);
		console.log("Location: " + response.venue.city);
		console.log("Event Date: " + response.datetime);
	})
};

var songSearch = function() {
	spotify.search({type: 'track', query: searchInput}, function(err, data) {
		if (err) {
			return console.log("Error occurred: " + err);
		}
		for (var x = 0; x < data.tracks.items[0].album.artists.length; x++) {
			console.log("Artist(s): " + data.tracks.items[0].album.artists[x].name);
			console.log("Song: " + data.tracks.items[0].name);
			console.log("Song Link: " + data.tracks.items[0].external_urls.spotify);
			console.log("Album: " + data.tracks.items[0].album.name);
		}
	});
};

var movieSearch = function() {
	axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + searchInput)
	.then(function(response) {
		console.log("Title: " + response.data.Title);
		console.log("Year: " + response.data.Year);
		console.log("Rated: " + response.data.Rated);
		console.log("Rotten Tomatoes: " + response.data.Ratings.Value);
		console.log("Country: " + response.data.Country);
		console.log("Language: " + response.data.Language);
		console.log("Plot: " + response.data.Plot);
		console.log("Actors: " + response.data.Actors);
	});
};

var whatItSays = function() {
	fs.readFile("(random.txt", function(err, data) {
	});
};

var execute = function() {
	if (searchTyoe == "concert-this") {
		eventSearch();
	} else if (searchTyoe == "spotify-this-song") {
		songSearch();
	} else if (searchTyoe == "movie-this") {
		movieSearch();
	} else if (searchTyoe == "do-what-it-says") {
		whatItSays();
	} else {
		console.log("There was an error")
	};
};

execute();