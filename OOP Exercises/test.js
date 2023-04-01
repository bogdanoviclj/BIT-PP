"use strict";

var getCountry = function (arr) {
  console.log(arr);
  var maxCount = 0;
  var term;
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
        if (count > maxCount) {
          maxCount = count;

          term = arr[i];
        }
      }
    }
  }
  return term;
};

(function () {
  console.log("HI");
  var CONTINENT = {
    ASIA: "AS",
    EUROPE: "EU",
    AFRICA: "AF",
    SOUTH_AMERICA: "SA",
    NORTH_AMERICA: "NA",
    AUSTRALIA: "AU",
  };

  var Country = function (name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
  };
  var Person = function (name, surname, birth) {
    this.name = name;
    this.surname = surname;
    this.birthYear = new Date(birth);
    this.formatInfo = function () {
      var day = this.birthYear.getDate();
      var month = this.birthYear.getMonth() + 1;
      var year = this.birthYear.getFullYear();
      var years = Math.floor(
        (new Date().getTime() - this.birthYear.getTime()) / 31536000000
      );

      return (
        this.name + " " + this.surname + ", " + years + " years"
        // this.name + " " + this.surname + ", " + day + "." + month + "." + year
      );
    };
  };
  var Player = function (person, betAmount, country) {
    if (!(person instanceof Person) || !(country instanceof Country))
      throw new Error("Invalid Input");
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
    this.formatPayout = function () {
      var expectedWin = this.betAmount * this.country.odds;
      return (
        this.country.name +
        ", " +
        this.betAmount +
        " eur, " +
        this.person.formatInfo()
      );
    };
  };

  var Adress = function (country, city, postalCode, street) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.formatAdress = function () {
      return (
        this.street +
        ", " +
        this.postalCode +
        " " +
        this.city +
        ", " +
        this.country
      );
    };
  };
  var BettingPlace = function (adress) {
    if (!(adress instanceof Adress)) throw new Error("Not a valid Adress");
    this.adress = adress;
    this.listOfPlayers = [];
    this.betsSum = function () {
      return this.listOfPlayers.reduce((acc, el) => {
        acc += el.betAmount;
        return acc;
      }, 0);
    };
    this.formatIndividualData = function () {
      return (
        this.adress.street.split(" ").slice(0, -1).join(" ") +
        ", " +
        this.adress.postalCode +
        " " +
        this.adress.city +
        ", sum of all bets: " +
        this.betsSum()
      );
    };
    this.addPlayer = function (player) {
      if (!(player instanceof Player)) throw new Error("Invalid Player Input");
      this.listOfPlayers.push(player);
    };
    this.formatData = function () {
      // var result = "\n";

      var result = this.formatIndividualData();
      this.listOfPlayers.forEach((el) => {
        result += "\n\t\t\t\t" + el.formatPayout();
      });
      return result;
      // return this.listOfPlayers.map((el) => el.formatPayout());
    };
  };
  var BettingHouse = function (competition) {
    this.competition = competition;
    this.bettingPlaces = [];

    this.addBettingPlace = function (bettingPlace) {
      if (!(bettingPlace instanceof BettingPlace))
        throw new Error("Invalid Betting Place Input");
      this.bettingPlaces.push(bettingPlace);
    };
    this.bets = function () {
      this.bettingPlaces.forEach((el) => {
        // console.log(el.listOfPlayers.betAmount, "OVDE");
      });
    };

    this.getCountryCount = function () {
      var mostCommonCountry;
      var countryCount = 0;
      this.bettingPlaces.forEach((el) => {
        var temp = el.listOfPlayers[0].country.name;
        var countElements = 0;
        el.listOfPlayers.forEach((el1) => {
          if (el1.country.name === temp) {
            countryCount++;

            if (countElements > countryCount) {
              countryCount = countElements;
            }

            mostCommonCountry = el1.country.name;
          }
        });
      });
      return "There are " + countryCount + " bets on " + mostCommonCountry;
    };

    this.getData = function () {
      var count = 0;
      var countryCount = 0;
      this.bettingPlaces.forEach((el) => {
        el.listOfPlayers.forEach((el1) => {
          count++;
        });
      });
      var result =
        this.competition +
        ", " +
        this.bettingPlaces.length +
        " betting places, " +
        count +
        " Bets";

      this.bettingPlaces.forEach((el) => {
        result += "\n\t\t" + el.formatData();
      });
      result += "\n" + this.getCountryCount();
      return result;
    };
  };

  var createPlayer = function (person, betAmount, country) {
    return new Player(person, betAmount, country);
  };
  var createBettingPlace = function (adress) {
    return new BettingPlace(adress);
  };

  try {
    var personsArr = [
      {
        name: "Stefan",
        surname: "Kostic",
        date: "12/11/1988",
        info: {
          country: "SR",
          odd: 1.85,
          continent: CONTINENT.EUROPE,
        },
      },
      {
        name: "Marko",
        surname: "Markovic",
        date: "12/2/1975",
        info: {
          country: "SR",
          odd: 2.75,
          continent: CONTINENT.EUROPE,
        },
      },
      {
        name: "Pera",
        surname: "Peric",
        date: "5/25/1990",
        info: {
          country: "SR",
          odd: 1.1,
          continent: CONTINENT.EUROPE,
        },
      },
      {
        name: "Jovan",
        surname: "Jovanovic",
        date: "5/12/1965",
        info: {
          country: "GR",
          odd: 35,
          continent: CONTINENT.EUROPE,
        },
      },
    ];

    var fwc = new BettingHouse("FIFA World Cup");

    var [stefan, marko, pera, jovan] = personsArr.map(
      (el) => new Person(el.name, el.surname, el.date)
    );
    var [countr1, countr2, countr3, countr4] = personsArr.map(
      (el) => new Country(el.info.country, el.info.odd, el.info.continent)
    );

    var adressTest1 = new Adress(
      "SR",
      "Belgrade",
      11000,
      "Jurija Gagarina 500"
    );
    var adressTest2 = new Adress("SR", "Belgrade", 11000, "Gandijeva 80");

    var playerStefan = createPlayer(stefan, 1000, countr1);
    var playerMarko = createPlayer(marko, 2000, countr2);
    var playerPera = createPlayer(pera, 5000, countr3);
    var playerJovan = createPlayer(jovan, 20, countr4);
    var bettingPlace1 = createBettingPlace(adressTest1);
    var bettingPlace2 = createBettingPlace(adressTest2);

    bettingPlace1.addPlayer(playerStefan);
    bettingPlace1.addPlayer(playerMarko);
    bettingPlace2.addPlayer(playerPera);
    bettingPlace2.addPlayer(playerJovan);
    fwc.addBettingPlace(bettingPlace1);
    fwc.addBettingPlace(bettingPlace2);
    var data = fwc.getData();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
})()