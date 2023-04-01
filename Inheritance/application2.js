class App {
    constructor(name, licence, stars) {
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    };
    isCCLicence() {
        if (this.licence === "CC") {
            console.log("The licence of the application is CC.");
        } else {
            console.log("The licence of the application is not CC.");
        };
    };
    like() {
        this.stars += 1;
        return this.stars;
    };
    showStars() {
        console.log(this.stars);
    };
}

class WebApp extends App {
    constructor(name, url, technologies, licence, stars) {
        super(name, licence, stars);
        this.url = url;
        this.technologies = technologies;
    };
    getData() {
        console.log(this.name + " " + this.url + " " + this.technologies + " " + this.licence + " " + this.stars);
    };
    reactBased() {
        if (this.technologies === "React") {
            console.log("One of the used technologies is React.")
        } else {
            console.log("None of the used technologies is React.")
        };
    };
} 

class MobileApp extends App {
    constructor(name, platforms, licence, stars) {
        super(name, licence, stars);
        this.platforms = platforms;
    };
    getData() {
        console.log(this.name + " " + this.platforms + " " + this.licence + " " + this.stars);
    };
    forAndroid() {
        if (this.platforms === "Android") {
            console.log("One of the platforms is Android.");
        } else {
            console.log("None of the platforms is Android.");
        };
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