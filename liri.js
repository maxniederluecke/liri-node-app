require("dotenv").config();

var fs = require('fs');

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var searchTyoe = process.argv[2];
var searchInput = process.argv[3];

var eventSearch = function() {
	axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
	.then(function(response) {
		console.log(response)
	})
};

var songSearch = function() {
	spotify.search({type: 'track', query: searchInput}, function(err, data) {
		if (err) {
			return console.log("Error occurred: " + err);
		}
		console.log(data)
	});
};

var movieSearch = function() {
	axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + searchInput)
	.then(function(response) {
		console.log(response);
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