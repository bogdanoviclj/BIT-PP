'use strict';

(function () {
    console.log("Hi");

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function() {
            return this.name + " " + this.surname;
        };
    };

    function Seat(number, category) {
        if (!(number)) {
            number = Math.round(90 * Math.random() + 10);
        }
        if (!(category)) {
            category = "e";
        };
        this.number = number;
        this.category = category;
        this.getData = function() {
            return this.number + " " + this.category;
        };
    };
// Proveri!
    function Passenger(person, seat) {
        if (!(person instanceof Person)) {
            throw new Error("Invalid person input!");
        };
        if (!(seat instanceof Seat)) {
            throw new Error("Invalid seat input!");
        };
        this.person = person;
        this.seat = seat;
        this.getData = function() {
            return this.seat.getData() + " " + this.person.getData();
        };
    };

    function Flight(relation, d) {
        this.relation = relation;
        this.date = new Date(d);
        this.passengerList = [];
        this.addPassenger = function(passenger) {
            if (!(passenger) instanceof Passenger) {
                throw new Error ("Invalid passenger input.");
            };
            this.passengerList.push(passenger);
        };
        this.getData = function() {
            return this.Date + ", " + this.relation + "\n" + this.passengerList;
        }
    };

    function Airport(name = "Nikola Tesla") {
        this.name = name;
        this.flightList = [];
        this.addFlight = function(flight) {
            this.flightList.push(flight);
        };
    };

// Testing

try {
    var aca = new Person("Aca", "Matic");
    console.log(aca.getData());
    var sediste = new Seat();
    console.log(sediste.getData());
    // var putnik = new Passenger("Aca", "Matic", 7, "b");
    // console.log(putnik);
    // var let = new Flight("Athens", "02/14/2023");
    // console.log(let);

} catch (error) {
    console.log(error.message);
};



})();