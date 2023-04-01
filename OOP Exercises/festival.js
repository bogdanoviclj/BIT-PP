'use strict';

(function () {
    function Genre(n) {
        if (!n) {
            throw new Error("Property name is required!");
        };
        this.name = n;
        this.getData = function () {
            var firstLetter = this.name[0];
            var lastLetter = this.name[this.name.length - 1];
            return (firstLetter + lastLetter).toUpperCase();
        };
    };

    function Movie(t, g, l) {
        if (!t || !g || !l) {
            throw new Error("Missing properties!");
        };
        if (!(g instanceof Genre)) {
            throw new Error("Invalid genre input!");
        };
        this.title = t;
        this.genre = g;
        this.lengthOfMovie = l;
        // Handle error when you enter text instead of a number for movie length. Try to stop program execution when this type of error happens
        // if (typeof(this.lengthOfMovie) !== Number) {
        //     return;
        // }
        this.getData = function () {
            return this.title + ", " + this.lengthOfMovie + "min, " + this.genre.getData();
        };
    };

    function Program(d) {
        if (!d) {
            throw new Error("Property date is required!");
        };
        this.date = new Date(d);
        this.movieList = [];
        this.getMovieNumbers = function () {
            return this.movieList.length;
        };
        this.addMovie = function (m) {
            if (!(m instanceof Movie)) {
                throw new Error("Invalid movie input!");
            };
            // there are no more than 4 movies of the same genre???????
            this.movieList.push(m);
        };
        this.getProgramLength = function () {
            var total = 0;
            this.movieList.forEach(function (movie) {
                total += movie.lengthOfMovie;
            });
            // length of all movies in a list can not be longer than 8 hours
            if (total > 8*60) {
                throw new Error("Duration is longer than 8 hours!");
            };
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
        if (!n) {
            throw new Error("Property name is required!");
        };
        this.name = n;
        this.programsList = [];
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


    //Testing
    try {
        var dunav = new Festival("Dunav Film Fest");

        var saturdayProgram = createProgram("08/20/2022");
        var sundayProgram = createProgram("08/21/2022");

        var ghahreman = createMovie("Ghahreman / Hero", "drama", 127);
        var letItBeMorning = createMovie("Let It Be Morning", "drama", 101);
        var occhialiNeri = createMovie("Occhiali neri / Dark Glasses", "horror", 86);
        var lesOlympiades = createMovie("Les Olympiades, Paris 13e / Paris, 13th District", "comedy", 105);

        saturdayProgram.addMovie(ghahreman);
        saturdayProgram.addMovie(occhialiNeri);
        sundayProgram.addMovie(letItBeMorning);       sundayProgram.addMovie(lesOlympiades);

        dunav.addProgram(saturdayProgram);
        dunav.addProgram(sundayProgram);

        console.log(dunav.getData());
    } catch (error) {
        console.log(error.message);
    };
})();
