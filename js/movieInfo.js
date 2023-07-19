"use strict";
// Getting DOM elements by their id names to add information dynamically
(function () {
  
  const title = document.getElementById("title");
  const pageTitle = document.getElementById("page-title");
  // Getting movie name which was clicked on the previous page using local storage
  title.innerHTML = localStorage.getItem("movieName");
  pageTitle.innerHTML = localStorage.getItem("movieName");
  
  const runtime = document.getElementById("runtime");
  const year = document.getElementById("year");

  const castName = document.getElementById("cast-names");
  const genre = document.getElementById("genre");

  const rating = document.getElementById("rating");
  const plot = document.getElementById("plot");

  const directorsName = document.getElementById("director-names");
  const poster = document.getElementById("poster");
  
  

  fetchMovies(title.innerHTML);

// Fetching movie details using api and adding them to their respective HTML tags

  async function fetchMovies(search) {
    const url = `https://www.omdbapi.com/?t=${search}&type=movie&apikey=d19cd846`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      year.innerHTML = data.Year;

      runtime.innerHTML = data.Runtime;

      rating.innerHTML = `${data.imdbRating}/10`;

      poster.setAttribute("src", `${data.Poster}`);

      plot.innerHTML = data.Plot;

      directorsName.innerHTML = data.Director;

      castName.innerHTML = data.Actors;

      genre.innerHTML = data.Genre;

    } catch (err) {
      console.log(err);
    }
  }
})();
