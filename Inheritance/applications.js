function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

App.prototype.isCCLicence = function () {
    if (this.licence === "CC") {
        console.log("The licence of the application is CC.");
    } else {
        console.log("The licence of the application is not CC.");
    };
}

App.prototype.like = function () {
    this.stars += 1;
    return this.stars;
}

App.prototype.showStars = function () {
    console.log(this.stars);
}

function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}

WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function () {
    console.log(this.name + " " + this.url + " " + this.technologies + " " + this.licence + " " + this.stars);
}

WebApp.prototype.reactBased = function () {
    if (this.technologies === "React") {
        console.log("One of the used technologies is React.")
    } else {
        console.log("None of the used technologies is React.")
    }
}

function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}

MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function () {
    console.log(this.name + " " + this.platforms + " " + this.licence + " " + this.stars);
}

MobileApp.prototype.forAndroid = function () {
    if (this.platforms === "Android") {
        console.log("One of the platforms is Android.");
    } else {
        console.log("None of the platforms is Android.");
    };
}


var webApp = new WebApp("App", "url address", "React", 643265, 4.6);
var mobApp = new MobileApp("MobApp", "Android", 53125, 4.1);
webApp.getData();
webApp.reactBased();
mobApp.getData();
mobApp.forAndroid();
mobApp.isCCLicence();
mobApp.like();
mobApp.showStars();
mobApp.getData();
webApp.isCCLicence();
webApp.like();
webApp.showStars();
webApp.getData();