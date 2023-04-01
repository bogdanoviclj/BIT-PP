(function(data, ui) {
    var createMovieButton = document.querySelector("#create-movie");
    var createProgramButton = document.querySelector("#create-program");
    var createMovieToProgramButton = document.querySelector("#add-movie");

    function addMovie() {
        var formData = ui.collectMovieData();
        var isValid = data.isValidMovie(formData.title, formData.length, formData.genre);
        if (!isValid) {
            ui.setMovieError("Invalid input!");
            return;
        };
        // ui.clearMovieError();
        var createdMovie = data.createMovie(formData.title, formData.length, formData.genre);
        var index = data.addMovieToFestival(createdMovie);
        ui.updateMovieList(createdMovie, index);
        ui.clearMovieInput();
    }
     
    function addProgram() {
        var formData = ui.collectProgramData();
        var isValid = data.isValidProgram(formData.date);
        if (!isValid) {
            ui.setProgramError("Date required!");
            return;
        };
        // ui.clearProgramError();
        var date = new Date(formData.date);
        var sameDate = data.hasProgramWithSameDate(date);
        if (date.getTime() < Date.now()) {
            ui.setProgramError("Invalid date!");
            return;
        };
        if (sameDate) {
            ui.setProgramError("Program for that date already exists!")
            return;
        };

        var createdProgram = data.createProgram(date);
        var index = data.addProgramToFestival(createdProgram);
        ui.updateProgramList(createdProgram, index);
        ui.clearProgramInput();
    }

    function addMovieToProgram() {
        var formData = ui.collectAddMovieToProgramData();
        var updatedProgram = data.addMovieToProgram(formData.movieIndex, formData.programIndex);
        if (!updatedProgram) {
            ui.setaddMovieError = "Movie and program are required!";
            return;
        }
        ui.updateProgramItem(updatedProgram, formData.programIndex);
        ui.clearAddMovieInput();
     }

    createMovieButton.addEventListener("click", addMovie);
    createProgramButton.addEventListener("click", addProgram);
    createMovieToProgramButton.addEventListener("click", addMovieToProgram);
})(dataModule, uiModule)