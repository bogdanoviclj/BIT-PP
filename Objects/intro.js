// 1.	Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!
var coffee = {
    name: "Cappuccino",
    strength: "5",
    flavour: "Caramel",
    milk: "Hot milk",
    sugar: "Without sugar"
}

// 2.	Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.
var movie = {
    title: "The Terminal",
    actors: "Tom Hanks",
    director: "Steven Spielberg",
    genre: "Drama"
}

// 3.	Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.
function createObject(description, language, git, devStatus) {
    var project = {
        projectDescription: description,
        programmingLanguage: language,
        gitRepository: git,
        developmentStatus: devStatus,
        printRepository: function() {
            console.log(project.gitRepository);
        },
        checkIfLanguageIsJS: function() {
            if (project.programmingLanguage === "JavaScript") {
                return "The project is written in JavaScript.";
            }
        },
        checkDevelopment: function() {
            if (project.developmentStatus === true) {
                return "The project is in development.";
            }
            else {
                return "The project is not in development.";
            };
        }
    }
    return project;
}

// 4.	Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
// ○	Add a method that prints out all the ingredients necessary for the meal preparation. 
// ○	Add a method that checks if a meal can be prepared in under 15 minutes. 
// ○	Add a method that changes the type of cuisine to the given value. 
// ○	Add a method that delete a given ingredient from the list of ingredients.  
function createRecipe(name, type, complexity, ingredients, time, instruction) {
    var recipe = {
        recipeName: name,
        typeOfCusine: type,
        complex: complexity,
        listOfIngredients: ingredients,
        preparingTime: time,
        preparingInstruction: instruction,
        printNecessaryIngridient: function() {
            console.log(recipe.listOfIngredients);
        },
        checkTime: function(){
            if (recipe.preparingTime < 15) {
                return "This meal can be prepared in 15 minutes or less.";
            }
        },
        changeType: function(newType) {
            recipe.typeOfCusine = newType;
        },
        deleteIngredient: function(ingredient) {
            var newIngredientList = [];
            for (var i = 0; i < recipe.listOfIngredients.length; i++) {
                if (recipe.listOfIngredients[i] !== ingredient) {
                    newIngredientList[newIngredientList.length] = recipe.listOfIngredients[i];
                }
            }
            recipe.listOfIngredients = newIngredientList;
        }
    }
    return recipe;
}
// console.log(createRecipe("Pasta Carbonara", "Italian", 2, ["Pasta", "Pancetta", "Parmesan", "Egg", "Garlic", "Salt", "Black Pepper"], 12, "This is instruction for preparing pasta."));

var r = createRecipe("Pasta Carbonara", "Italian", 2, ["Pasta", "Pancetta", "Parmesan", "Egg", "Garlic", "Salt", "Black Pepper"], 12, "This is instruction for preparing pasta.");
console.log(r);
r.deleteIngredient("Black Pepper");
console.log(r);