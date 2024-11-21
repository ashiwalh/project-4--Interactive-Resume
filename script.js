async function fetchMovieInfo() {
    const movieTitle = document.getElementById("movieTitle").value;
    if (!movieTitle) {
        alert("Please enter a movie title");
        return;
    }

    const apiKey = "YOUR_API_KEY"; // Replace with your OMDB API Key
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const movieData = await response.json();

        if (movieData.Response === "False") {
            alert("Movie not found!");
            return;
        }

        displayMovieInfo(movieData);
    } catch (error) {
        console.error("Error fetching movie information:", error);
    }
}

function displayMovieInfo(movie) {
    const movieInfoDiv = document.getElementById("movieInfo");

    movieInfoDiv.innerHTML = `
        <img src="${movie.Poster}" alt="Movie Poster">
        <h2>${movie.Title} (${movie.Year})</h2>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <p><strong>Genre:</strong> ${movie.Genre}</p>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Actors:</strong> ${movie.Actors}</p>
        <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
    `;
    movieInfoDiv.style.display = "block";
}
