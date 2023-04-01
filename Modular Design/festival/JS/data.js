var dataModule = (function() {

    function createFestival() {
        return new Festival();
    };

    var festival = createFestival();

    function Festival() {
        this.programsList = [];
        this.movieList = [];
    };

    function Movie(title, genre, lengthOfMovie) {
        this.title = title;
        this.genre = genre;
        this.lengthOfMovie = lengthOfMovie;
    };

    Movie.prototype.getGenreData = function() {
        var firstLetter = this.genre[0];
        var lastLetter = this.genre[this.genre.length - 1];
        return (firstLetter + lastLetter).toUpperCase();
    };

    Movie.prototype.getMovieData = function() {
        return this.title + ", " + this.lengthOfMovie + "min, " + this.getGenreData();
    };

    function createMovie(title, genre, lengthOfMovie) {
        return new Movie(title, lengthOfMovie, genre);
    };

    function isValidMovie(title, genre, lengthOfMovie) {
        if (!title || !genre || !lengthOfMovie) {
            return false;
        } 
        return true;
    };

    function Program(d) {
        this.date = d;
        this.movieList = [];
    };

    Program.prototype.getMovieNumbers = function () {
        return this.movieList.length;
    };

    Program.prototype.addMovie = function (movie) {
        return this.movieList.push(movie);
    }

    Program.prototype.addProgram = function (program) {
        return festival.programsList.push(program);
    }

    Program.prototype.getProgramLength = function () {
        var total = 0;
        this.movieList.forEach(function (movie) {
            total += +movie.lengthOfMovie; //string to number
        });
        return total;
    };   

    Program.prototype.getProgramData = function () {
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
        var result =  day + "." + month + "." + year + ", program duration " + this.getProgramLength() + "min";
        this.movieList.forEach(function (movie) {
            result += movie.getMovieData();
        });
        return result;
    }

    function createProgram(d) {
        return new Program(d);
    };

    function isValidProgram(d) {
        if (!d) {
            return false;
        } 
        return true;
    };

    function hasProgramWithSameDate(date) {
        return festival.programsList.some(function(program) {
                return date.getTime() === program.date.getTime();
                });
    }

    function addMovieToFestival(movie) {
        return festival.movieList.push(movie) - 1;
    }

    function addMovieToProgram(movieIndex, programIndex) {
        var movie = festival.movieList[movieIndex];
        var program = festival.programsList[programIndex];
        if (!movie || !program) {
            return false;
        }
        program.addMovie(movie);
        return program;
    };

    function addProgramToFestival(program) {
        return festival.programsList.push(program) - 1;
    }

    function addMovieAndProgramToFestival(movieIndex, programIndex) {
        var movie = festival.movieList[movieIndex];
        var program = festival.programsList[programIndex];
        festival.movieList.push(movie);
        var programLi = document.querySelector("#program-item-" + programIndex);
        programLi.textContent = program.getProgramData();
    }
    return {
        createMovie: createMovie,
        isValidMovie: isValidMovie,
        createProgram: createProgram,
        isValidProgram: isValidProgram,
        addMovieToProgram: addMovieToProgram,
        addMovieToFestival: addMovieToFestival,
        hasProgramWithSameDate : hasProgramWithSameDate,
        addProgramToFestival: addProgramToFestival,
        addMovieAndProgramToFestival: addMovieAndProgramToFestival,
    }
})();