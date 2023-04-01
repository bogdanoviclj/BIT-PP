var uiModule = (function() {

    var titleInputElement = document.querySelector("#title");
    var lengthInputElement = document.querySelector("#length");
    var genreSelectElement = document.querySelector("#genre");
    var movieErrorElement = document.querySelector("#movie-error");
    var movieListElement = document.querySelector("#movie-list");
    var dateInputElement = document.querySelector("#date");
    var programErrorElement = document.querySelector("#program-error");
    var programListElement = document.querySelector("#program-list");
    var movieSelectElement = document.querySelector("#movie-select");
    var programSelectElement = document.querySelector("#program-select");
    var addMovieErrorElement = document.querySelector("#add-movie-error");

    function collectMovieData() {
        var titleValue = titleInputElement.value;
        var lengthValue = lengthInputElement.value;
        var genreValue = genreSelectElement.value;
        
        return {
            title: titleValue,
            length: lengthValue,
            genre: genreValue,
        };
    };

    function setMovieError(error) {
        movieErrorElement.textContent = error;
    };

    function updateMovieList(movie, index) {
        var movieDataLi = document.createElement("li");
        movieDataLi.setAttribute("id", "movie-item-" + index);
        movieDataLi.textContent = movie.getMovieData();
        movieListElement.appendChild(movieDataLi);

        var movieOption = document.createElement("option");
        movieOption.textContent = movie.title;
        movieOption.setAttribute("value", index);
        movieSelectElement.appendChild(movieOption);
    };

    
    function clearMovieInput() {
        titleInputElement.value = "";
        lengthInputElement.value = "";
        genreSelectElement.value = "";
        movieErrorElement.textContent = "";
    };

    function collectProgramData() {
        var dateValue = dateInputElement.value;
        return {
            date: dateValue,
        };
    }

    function setProgramError(error) {
        programErrorElement.textContent = error;
    }

    function updateProgramList(program, index) {
        var programDataLi = document.createElement("li");
        programDataLi.setAttribute("id", "program-item-" + index);
        programDataLi.textContent = program.getProgramData();
        programListElement.appendChild(programDataLi);

        var programOption = document.createElement("option");
        programOption.textContent = program.getProgramData();
        programOption.setAttribute("value", index);
        programSelectElement.appendChild(programOption);
    };

    function clearProgramInput() {
        dateInputElement.value = "";
        programErrorElement.textContent = "";
    };

    function collectAddMovieToProgramData() {
        var movieIndex = movieSelectElement.value;
        var programIndex = programSelectElement.value;
        return {
            movieIndex: movieIndex,
            programIndex: programIndex,
        };
    }

    function setaddMovieError(error) {
        addMovieErrorElement.textContent = error;
    }

    function updateProgramItem(program, index) {
        var programLiElement = document.querySelector("#program-item-" + index);
        programLiElement.textContent = program.getProgramData();
        
    };

    function clearAddMovieInput() {
        movieSelectElement.value = "";
        programSelectElement.value = "";
        addMovieErrorElement.textContent = "";
    }

    return {
        collectMovieData: collectMovieData,
        setMovieError: setMovieError,
        updateMovieList: updateMovieList,
        clearMovieInput: clearMovieInput,
        collectProgramData: collectProgramData,
        setProgramError: setProgramError,
        updateProgramList: updateProgramList,
        clearProgramInput: clearProgramInput,
        collectAddMovieToProgramData: collectAddMovieToProgramData,
        setaddMovieError: setaddMovieError,
        clearAddMovieInput: clearAddMovieInput,
        updateProgramItem: updateProgramItem,
    }
})();