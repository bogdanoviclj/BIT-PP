'use strict';

(function () {
    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    };

    function Person(name, surname, birthDate) {
        this.name = name;
        this.surname = surname;
        this.birthDate = new Date(birthDate);
        this.getData = function() {
            var day = this.birthDate.getDate();
            var month = this.birthDate.getMonth() + 1;
            var year = this.birthDate.getFullYear();
            return this.name + " " + this.surname + " " + day + "." + month + "." + year + ".";
        };
    };

    function Player(person, betAmount, country) {
        if (!(person instanceof Person) || !(country instanceof Country)) {
            throw new Error("Invalid input.");
        };
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
        this.getData = function() {
            var country = (this.country[0] + this.country[1]).toUpperCase();
            var expectedAmount = this.country.odds * this.betAmount;
            return country + ", " + expectedAmount.toFixed(2) + ", " + this.person;
        };
    };

    function Address(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
        this.getData = function() {
            var country = this.country[0] + this.country[1];
            return this.street + " " + this.number + ", " + this.postalCode + " " + this.city + ", " + country.toUpperCase();
        };
    };

    function BettingPlace(address, playersList) {
        if (!(address instanceof Address)) {
            throw new Error("Invalid address input.");
        };
        this.address = address;
        this.playersList = [];
    };

    function BettingHouse(competition) {
        this.competition = competition;
        this.bettingPlacesList = [];
    };

    var continents = {
        EUROPE: "EU",
        ASIA: "AS",
        AFRICA: "AF",
        SOUTHAMERICA: "SA",
        NORTHAMERICA: "NA",
        AUSTRALIA: "AU"
    };


// Testing
try {

console.log(continents.EUROPE);
var pera = new Person("Pera", "Peric", "03/24/1991");
console.log(pera.getData());
var adresa = new Address("Srbija", "Beograd", 11000, "Nemanjina", 4);
console.log(adresa.getData());
var laza = new Player({"Zika" "Zikic" "05/17/1986"}, 1000, "Srbija");
console.log(laza);
    
} catch (error) {
    console.log(error.message);
};
})();