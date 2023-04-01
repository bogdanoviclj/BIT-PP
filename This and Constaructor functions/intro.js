// 3.	Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.
function Project(description, language, git, devStatus) {
    this.description = description;
    this.programmingLanguage = language;
    this.gitRepository = git;
    this.developmentStatus = devStatus;
    this.print = function () {
        console.log(this.gitRepository);
    };
    this.checkIsJavaScript = function () {
        if (this.programmingLanguage === "JavaScript") {
            return "The project is written in JavaScript.";
        }
        else return "The project is not written in JavaScript.";
    };
    this.checkDevStatus = function () {
        if (this.developmentStatus === true) {
            return "The project is in development.";
        }
        else {
            return "The project is not in development.";
        };
    }
}

var p = new Project ("Opis", "Java", "Repozitorijum", false);
console.log(p);
p.print();
console.log(p.checkIsJavaScript());
console.log(p.checkDevStatus());


// 4.	Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
// ○	Add a method that prints out all the ingredients necessary for the meal preparation. 
// ○	Add a method that checks if a meal can be prepared in under 15 minutes. 
// ○	Add a method that changes the type of cuisine to the given value. 
// ○	Add a method that delete a given ingredient from the list of ingredients.
function Recipe(name, type, complexity, ingredients, time, instruction) {
    this.name = name;
    this.type = type;
    this.complexity = complexity; 
    this.ingredients = ingredients;
    this.time = time;
    this.instruction = instruction;
    this.printNecessaryIngridient = function () {
        console.log(this.listOfIngredients);
    };
    this.checkTime = function (){
        if (this.preparingTime < 15) {
            return "This meal can be prepared in 15 minutes or less.";
        }
    };
    this.changeType = function (newType){
        this.typeOfCusine = newType;
    };
    this.deleteIngredient = function (ingredient) {
        var newIngredientList = [];
        for (var i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i] !== ingredient) {
                newIngredientList[newIngredientList.length] = this.ingredients[i];
            }
        }
        this.ingredients = newIngredientList;
    }
}

var r = new Recipe("Pasta Carbonara", "Italian", 2, ["Pasta", "Pancetta", "Parmesan", "Egg", "Garlic", "Salt", "Black Pepper"], 12, "This is instruction for preparing pasta.");
console.log(r);
r.deleteIngredient("Black Pepper");
console.log(r);