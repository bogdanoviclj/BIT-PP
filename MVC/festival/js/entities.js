function Genre(n) {
    this.name = n;
    this.getData = function () {
        var firstLetter = this.name[0];
        var lastLetter = this.name[this.name.length - 1];
        return (firstLetter + lastLetter).toUpperCase();
    };
};

function Movie(t, g, l) {
    this.title = t;
    this.genre = g;
    this.lengthOfMovie = l;
    this.getData = function () {
        return this.title + ", " + this.lengthOfMovie + "min, " + this.genre.getData();
    };
};

function Program(d) {
    this.date = new Date(d);
    this.movieList = [];
    this.getMovieNumbers = function () {
        return this.movieList.length;
    };
    this.addMovie = function (m) {
        if (!(m instanceof Movie)) {
            throw new Error("Invalid movie input!");
        };
        this.movieList.push(m);
    };
    this.getProgramLength = function () {
        var total = 0;
        this.movieList.forEach(function (movie) {
            total += +movie.lengthOfMovie; //string to number
        });
        return total;
    };   
    this.getData = function () {
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
        var result =  day + "." + month + "." + year + ", program duration " + this.getProgramLength() + "min";
        this.movieList.forEach(function (movie) {
            result += "\n\t\t" + movie.getData();
        });
        return result;
    };
};

function Festival(n) {
    this.name = n;
    this.programsList = [];
    this.movieList = [];
    this.getAllProgramsMovieNumbers = function () {
        var total = 0;
        this.programsList.forEach(function (program) {
            total += program.getMovieNumbers();
        });
        return total;
    };
    this.addProgram = function (p) {
        if (!(p instanceof Program)) {
            throw new Error("Invalid program input!");
        };
        this.programsList.push(p);
    };
    this.getData = function () {
        var result = this.name + " festival has " + this.getAllProgramsMovieNumbers() + " movie titles";
        this.programsList.forEach(function (program) {
            result += "\n\t" + program.getData();
        });
        return result;
    };
};

function createMovie(t, g, l) {
    var genre = new Genre(g);
    var movie = new Movie(t, genre, l);
    return movie;
};

function createProgram(d) {
    return new Program(d);
};