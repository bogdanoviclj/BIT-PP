var festival = new Festival();

var titleInputElement = document.querySelector("#title");
var lengthInputElement = document.querySelector("#length");
var genreSelectElement = document.querySelector("#genre");
var createMovieButton = document.querySelector("#create-movie");
var movieErrorElement = document.querySelector("#movie-error");
var movieListElement = document.querySelector("#movie-list");
var dateInputElement = document.querySelector("#date");
var createProgramButton = document.querySelector("#create-program");
var programErrorElement = document.querySelector("#program-error");
var programListElement = document.querySelector("#program-list");
var movieSelectElement = document.querySelector("#movie-select");
var programSelectElement = document.querySelector("#program-select");
var addMovieButton = document.querySelector("#add-movie");
var addMovieErrorElement = document.querySelector("#add-movie-error");

function createMovie() {
    var titleValue = titleInputElement.value;
    var lengthValue = lengthInputElement.value;
    var genreValue = genreSelectElement.value;

    if (!titleValue) {
        movieErrorElement.textContent = "Title is required!";
        return;
    }
    if (!lengthValue) {
        movieErrorElement.textContent = "Length is required!";
        return;
    }
    if (!genreSelectElement) {
        movieErrorElement.textContent = "Genre is required!";
        return;
    }
    movieErrorElement.textContent = "";

    var genre = new Genre(genreValue)
    var movie = new Movie(titleValue, genre, lengthValue);
    festival.movieList.push(movie);

    var movieDataLi = document.createElement("li");
    movieDataLi.textContent = movie.getData();
    movieListElement.appendChild(movieDataLi);

    var movieOption = document.createElement("option");
    movieOption.textContent = movie.title;
    var index = festival.movieList.length - 1;
    movieOption.setAttribute("value", index);
    movieSelectElement.appendChild(movieOption);
}

function createProgram() {
    var dateValue = dateInputElement.value;

    if (!dateValue) {
        programErrorElement.textContent = "Date required!";
        return;
    }
    var date = new Date(dateValue);
    if (date.getTime() < Date.now()) {
        programErrorElement.textContent = "Invalid date!";
        return;
    }
    hasProgramWithSameDate = festival.programsList.some(function(program) {
        return date.getTime() === program.date.getTime();
    });
    if (hasProgramWithSameDate) {
        programErrorElement.textContent = "Program for that date already exists!";
        return;
    }
    programErrorElement.textContent = "";

    var program = new Program(date);
    festival.programsList.push(program);

    var index = festival.programsList.length - 1;
    var programDataLi = document.createElement("li");
    programDataLi.setAttribute("id", "program-item-" + index);
    programDataLi.textContent = program.getData();
    programListElement.appendChild(programDataLi);

    var programOption = document.createElement("option");
    programOption.textContent = program.getData();
    programOption.setAttribute("value", index);
    programSelectElement.appendChild(programOption);
}

function addMovieToProgram() {
    var movieIndex = movieSelectElement.value;
    var programIndex = programSelectElement.value;

    if (!movieIndex || !programIndex) {
        addMovieErrorElement.textContent = "Invalid input!";
        return;
    }

    var movie = festival.movieList[movieIndex];
    var program = festival.programsList[programIndex];
    program.addMovie(movie);

    var liToUpdateNode = document.querySelector("#program-item-" + programIndex);
    liToUpdateNode.textContent = program.getData();
}

createMovieButton.addEventListener("click", createMovie);
createProgramButton.addEventListener("click", createProgram);
addMovieButton.addEventListener("click", addMovieToProgram);